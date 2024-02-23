

pub struct Joypad {
    joypad: u8
}

impl Joypad {
    pub fn new() -> Self {
        Joypad {
            joypad: 0
        }
    }

    pub fn read_joypad(&self) -> u8 {
        self.joypad
    }

    /// Bottom four bits are read-only.
    pub fn write_joypad(&mut self, byte: u8) {
        let joypad = self.joypad & 0x0F;
        self.joypad = (byte & 0xF0) | joypad;
    }

    pub fn step(&mut self) {

    }
}