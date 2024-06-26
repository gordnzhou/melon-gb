mod no_mbc;
mod mbc1;
mod mbc3;
mod mbc2;
mod mbc5;

use core::panic;

use self::mbc1::Mbc1;
use self::mbc2::Mbc2;
use self::mbc3::Mbc3;
use self::mbc5::Mbc5;
use self::no_mbc::NoMbc;

use super::battery::Battery;
use super::header::Header;

pub const ROM_MEMORY_SPACE: usize = 0x8000; 
pub const RAM_MEMORY_SPACE: usize = 0x2000; 

pub const ROM_BANK_SIZE: usize = 0x4000;
pub const RAM_BANK_SIZE: usize = 0x2000;

pub trait Mbc {
    /// Handles bus reads from 0x0000 to 0x7FFF
    fn read_rom(&self, addr: usize) -> u8;

    /// Handles bus writes from 0x0000 to 0x7FFF
    fn write_rom(&mut self, addr: usize, byte: u8);
    
    /// Handles bus reads from 0xA000 to 0xBFFF
    fn read_ram(&self, addr: usize) -> u8;

    /// Handles bus reads from 0xA000 to 0xBFFF
    fn write_ram(&mut self, addr: usize, byte: u8);

    /// Displays Mbc specifications.
    fn display(&self) -> String;

    /// Handles saving of MBC state (if it includes battery).
    fn save_state(&self);

    #[cfg(target_arch = "wasm32")]
    fn load_save(&mut self, data: Vec<u8>, save_type: &str);

    #[cfg(target_arch = "wasm32")]
    fn save_id(&self) -> Option<String>;
}

pub fn make_mbc(rom_bytes: &[u8], header: &Header) -> Box<dyn Mbc> {
    let rom_banks = header.num_rom_banks();
    let ram_banks = header.num_ram_banks();

    let mut banked_rom = vec![[0; ROM_BANK_SIZE]; rom_banks];
    for i in 0..rom_bytes.len() {
        banked_rom[i / ROM_BANK_SIZE][i % ROM_BANK_SIZE] = rom_bytes[i];
    }

    let mut id_name = header.title();
    id_name.push_str(&header.get_hash_string());
    
    let battery = Battery::new(id_name);

    match header.cartridge_type() {
        0x00 => Box::new(NoMbc::new(rom_bytes)),
        0x01 => Box::new(Mbc1::new(banked_rom, rom_banks)),
        0x02 => Box::new(Mbc1::new(banked_rom, rom_banks).with_ram(ram_banks)),
        0x03 => Box::new(Mbc1::new(banked_rom, rom_banks).with_ram(ram_banks).with_battery(battery)),
        0x05 => Box::new(Mbc2::new_with_ram(banked_rom, rom_banks)),
        0x06 => Box::new(Mbc2::new_with_ram(banked_rom, rom_banks).with_battery(battery)),
        0x08 => unimplemented!(),
        0x09 => unimplemented!(),
        0x0B => unimplemented!(),
        0x0C => unimplemented!(),
        0x0D => unimplemented!(),
        0x0F => Box::new(Mbc3::new(banked_rom, rom_banks).with_rtctimer().with_battery(battery)),
        0x10 => Box::new(Mbc3::new(banked_rom, rom_banks).with_rtctimer().with_ram(ram_banks).with_battery(battery)),
        0x11 => Box::new(Mbc3::new(banked_rom, rom_banks)),
        0x12 => Box::new(Mbc3::new(banked_rom, rom_banks).with_ram(ram_banks)),
        0x13 => Box::new(Mbc3::new(banked_rom, rom_banks).with_ram(ram_banks).with_battery(battery)),
        0x19 => Box::new(Mbc5::new(banked_rom, rom_banks)),
        0x1A => Box::new(Mbc5::new(banked_rom, rom_banks).with_ram(ram_banks)),
        0x1B => Box::new(Mbc5::new(banked_rom, rom_banks).with_ram(ram_banks).with_battery(battery)),
        0x1C => Box::new(Mbc5::new(banked_rom, rom_banks).with_rumble()),
        0x1D => Box::new(Mbc5::new(banked_rom, rom_banks).with_rumble().with_ram(ram_banks)),
        0x1E => Box::new(Mbc5::new(banked_rom, rom_banks).with_rumble().with_ram(ram_banks).with_battery(battery)),
        0x20 => unimplemented!(),
        0x22 => unimplemented!(),
        0xFC => unimplemented!(),
        0xFD => unimplemented!(),
        0xFE => unimplemented!(),
        0xFF => unimplemented!(),
        _ => panic!("Unknown cartridge type!")
    }
}
