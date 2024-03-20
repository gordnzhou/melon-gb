mod instr;
mod register;

use sdl2::Sdl;

use self::register::Register;
use self::Interrupt::*;

use crate::bus::Bus;
use crate::cartridge::Cartridge;

pub struct Cpu {
    pub bus: Bus,

    pub(self) scheduled_ei: bool,
    pub(self) ime: bool,
    pub(self) halted: bool,
    pub(self) halt_bug: bool,
    pub(self) halt_triggered: bool,
    pub(self) cycles_so_far: u8,

    pub(self) af: Register,
    pub(self) bc: Register,
    pub(self) de: Register,
    pub(self) hl: Register,
    pub(self) pc: Register,
    pub(self) sp: Register,
}

pub enum Interrupt {
    VBlank,
    Stat,
    Timer,
    Serial,
    Joypad,
}

impl Cpu {
    pub fn new(cartridge: Cartridge) -> Self {
        if cartridge.has_bootrom() {
            Cpu { 
                bus: Bus::new(cartridge),
                scheduled_ei: false,
                ime: false,
                halted: false,
                halt_bug: false,
                halt_triggered: false,
                cycles_so_far: 0,
                af: Register(0),
                bc: Register(0),
                de: Register(0),
                hl: Register(0),
                pc: Register(0),
                sp: Register(0),
            }
        } else {
            let mut bus = Bus::new(cartridge);
            bus.ppu.write_io(0xFF40, 0x91);
            bus.ppu.write_io(0xFF41, 0x81);

            Cpu { 
                bus,
                scheduled_ei: false,
                ime: false,
                halted: false,
                halt_bug: false,
                halt_triggered: false,
                cycles_so_far: 0,
                af: Register(0x01B0),
                bc: Register(0x0013),
                de: Register(0x00D8),
                hl: Register(0x014D),
                pc: Register(0x0100),
                sp: Register(0xFFFE),
            }
        }
    }

    pub fn with_audio(mut self, sdl: Sdl) -> Self {
        self.bus = self.bus.with_audio(sdl);
        self
    }

    /// Steps through all parts of the emulator over the period
    /// that the next CPU instruction will take; returns that period's length in M-cycles.
    pub fn step(&mut self) -> u8 {
        let cycles = self.cycle();

        if cycles > 0 {
            self.bus.step(cycles, cycles - self.cycles_so_far);
        }
        self.cycles_so_far = 0;
       
        cycles
    }

    /// Do a CPU fetch-execute cycle and return the number of clock M-cycles taken.
    fn cycle(&mut self) -> u8 {
        self.halt_triggered = false;

        if self.scheduled_ei {
            self.ime = true;
            self.scheduled_ei = false;
        }
        
        let mut cycles = if !self.halted {
            self.execute_next_instruction()
        } else {
            1
        };

        match self.get_pending_interrupt() {
            Some(interrupt) => {
                if self.ime {
                    cycles += self.handle_interrupt(interrupt);
                } else if self.halt_triggered {
                    self.halt_bug = true;
                }

                self.ime = false;
                self.halted = false;
            },
            None => {}
        }

        cycles
    }
    
    /// Returns the next pending interrupt by priority
    fn get_pending_interrupt(&mut self) -> Option<Interrupt>{
        let interrupt_enable: u8 =  self.bus.read_byte(0xFFFF);
        let interrupt_flag: u8 = self.bus.read_byte(0xFF0F);

        for bit in 0..=4 {   
            if interrupt_enable & (1 << bit) != 0 && interrupt_flag & (1 << bit) != 0 {
                let interrupt: Interrupt = match bit {
                    0 => VBlank,
                    1 => Stat,
                    2 => Timer,
                    3 => Serial,
                    4 => Joypad,
                    _ => unreachable!()
                };

                return Some(interrupt)
            }
        }   
        
        None
    }
}

#[cfg(test)]
mod tests {
    use crate::test_blargg_rom;

    const CPU_INSTR: &str = "roms/tests/cpu_instrs.gb";
    const MEM_TIMING: &str = "roms/tests/mem_timing.gb";
    const INSTR_TIMING: &str = "roms/tests/instr_timing.gb";

    #[test]
    fn cpu_instr_test() {
        test_blargg_rom(CPU_INSTR)
    }

    #[test]
    fn cpu_mem_timing_test() {
        test_blargg_rom(MEM_TIMING);
    }

    #[test]
    fn cpu_instr_timing_test() {
        test_blargg_rom(INSTR_TIMING);
    }
}