use crate::sdl2::Sdl2Wrapper;
use crate::timer::Timer;
use crate::rom::Rom;

const WRAM_SIZE: usize = 0x2000;
const HRAM_SIZE: usize = 0x0080;

pub struct Mmu {
    rom: Rom,
    sdl2_wrapper: Sdl2Wrapper, 
    wram: [u8; WRAM_SIZE],
    timer: Timer, 
    hram: [u8; HRAM_SIZE],
    interrupt_enable: u8,
}

impl Mmu {
    pub fn new() -> Self {
        Mmu {
            rom: Rom::new(),
            sdl2_wrapper: Sdl2Wrapper::new(),
            timer: Timer::new(),
            wram: [0; WRAM_SIZE],
            hram: [0; HRAM_SIZE],
            interrupt_enable: 0,
        }
    }

    pub fn read_byte(&self, addr: usize) -> u8 {
        // FOR TESTING
        if addr == 0xFF44 {
            return 0x90
        }

        0
    }

    pub fn read_word(&self, addr: usize) -> u16{
        let lo = self.read_byte(addr) as u16;
        let hi = self.read_byte(addr.wrapping_add(1)) as u16;
        (hi << 8) | lo
    }

    pub fn write_byte(&mut self, addr: usize, byte: u8) {

    }

    pub fn write_word(&mut self, addr: usize, word: u16) {
        self.write_byte(addr, word as u8);
        self.write_byte(addr.wrapping_add(1), (word >> 8) as u8);
    }
}