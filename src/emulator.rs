use sdl2::{Sdl, VideoSubsystem};
use sdl2::video::Window;
use sdl2::pixels::Color;
use sdl2::render::Canvas;
use sdl2::rect::Rect;
use sdl2::event::Event;
use sdl2::keyboard::Keycode;
use sdl2::EventPump;

use crate::cpu::Cpu;

// in order of: START, SELECT, B, A, DOWN, UP, LEFT, RIGHT.
pub const KEYMAPPINGS: [Keycode; 8] = [
    Keycode::I,
    Keycode::J,
    Keycode::K,
    Keycode::L,
    Keycode::S,
    Keycode::W,
    Keycode::A,
    Keycode::D,
];

pub const COLOURS: [Color; 4] = [
    Color::RGB(155, 188, 15), // 00 -> White
    Color::RGB(139, 172, 15), // 01 -> Light Gray
    Color::RGB(48, 98, 48),   // 10 -> Dark Gray
    Color::RGB(15, 56, 15),   // 11 -> Black
];

pub const LCD_WIDTH: usize= 160;
pub const LCD_HEIGHT: usize = 144;

// 1 dot = 2^22 Hz = 1/4 M-cycle = 238.4 ns
pub const DOT_DURATION_NS: f32 = 1e9 / (1 << 22) as f32;

use std::time::{Duration, Instant};

pub struct Emulator {
    event_pump: EventPump,
    screen_scale: i32,
    canvas: Canvas<Window>,
    key_status: u8,
    cpu: Cpu,
}

impl Emulator {
    pub fn new(screen_scale: i32, rom_path: &str, skip_bootrom: bool) -> Result<Self, String> {
        let sdl_context: Sdl = sdl2::init()?;
        let video_subsystem = sdl_context.video()?;
        // let audio_subsystem = sdl_context.audio()?;
        let event_pump = sdl_context.event_pump()?;
        let window = Emulator::build_window(video_subsystem, screen_scale as u32)?;
        let canvas: Canvas<Window> = window.into_canvas().build().map_err(|e| e.to_string())?;

        let mut cpu = if !skip_bootrom {
            let mut cpu = Cpu::new(0, 0, 0, 0, 0, 0);
            cpu.bus.memory.load_bootrom();
            cpu
        } else {
            Cpu::new(0x01B0, 0x0013, 0x00D8, 0x014D, 0x0100, 0xFFFE)
        };

        cpu.bus.memory.load_from_file(rom_path);

        Ok(Emulator {
            event_pump,
            canvas,
            screen_scale,
            key_status: 0xFF,
            cpu,
        })
    }

    fn build_window(video_subsystem: VideoSubsystem, scale: u32) -> Result<Window, String> {
        let window_width = LCD_WIDTH as u32 * scale;
        let window_height = LCD_HEIGHT as u32 * scale;

        let window = video_subsystem
            .window("Gameboy Emulator", window_width, window_height)
            .position_centered()
            .opengl()
            .build()
            .map_err(|e| e.to_string())?;

        println!("Created window of width {} and height {}", window_width, window_height);
        Ok(window)
    }

    /// Runs the emulator.
    #[allow(dead_code)]
    pub fn run(&mut self) {
        let mut last_instr = Instant::now();
        let mut cpu_duration_ns: f32 = 0.0;

        loop {
            if last_instr.elapsed() >= Duration::from_nanos(cpu_duration_ns as u64) {
                last_instr = Instant::now();
                let cycles = self.cpu.step();

                cpu_duration_ns = 4.0 * cycles as f32 * DOT_DURATION_NS;

                if self.cpu.bus.ppu.entered_vblank {
                    self.draw_window(self.cpu.bus.ppu.frame_buffer);
                }
            }

            match self.get_events() {
                Ok(_) => self.cpu.bus.joypad.step(self.key_status),
                Err(e) => panic!("{}", e)
            }
        }
    }

    /// Runs the emulator for the specified number of nanoseconds.
    pub fn debug_run(&mut self, total_dur_ns: u64) {
        let mut dur_ns = 0;

        let mut last_instr = Instant::now();
        let mut cpu_duration_ns: u64 = 0;

        while dur_ns < total_dur_ns {
            if last_instr.elapsed() >= Duration::from_nanos(cpu_duration_ns) {
                last_instr = Instant::now();

                let cycles = self.cpu.step();
                cpu_duration_ns = (4.0 * cycles as f32 * DOT_DURATION_NS) as u64;
                dur_ns += cpu_duration_ns;

                if self.cpu.bus.ppu.entered_vblank {
                    self.draw_window(self.cpu.bus.ppu.frame_buffer);
                }
            }

            match self.get_events() {
                Ok(_) => self.cpu.bus.joypad.step(self.key_status),
                Err(e) => panic!("{}", e)
            }
        } 
    }

    fn get_events(&mut self) -> Result<(), &str> {
        for event in self.event_pump.poll_iter() {
            match event {
                Event::Quit {..} |
                Event::KeyDown { keycode: Some(Keycode::Escape), .. } => {
                    return Err("User Exited");
                },
                Event::KeyDown { keycode: Some(key), ..} => {        
                    for i in 0..8 {
                        if KEYMAPPINGS[i] == key {
                            self.key_status &= !(1 << (7 - i));
                        }
                    }
                }
                Event::KeyUp { keycode: Some(key), .. } => {
                    for i in 0..8 {
                        if KEYMAPPINGS[i] == key {
                            self.key_status |= 1 << (7 - i);
                        }
                    }
                }
                _ => {}
            }
        }

        Ok(())
    }

    /// Renders frame buffer to SDL2 canvas (60 times per second).
    fn draw_window(&mut self, frame_buffer: [[u8; LCD_WIDTH]; LCD_HEIGHT]) {
        let pixel_size = self.screen_scale as u32;

        for i in 0..LCD_HEIGHT {
            for j in 0..LCD_WIDTH {
                let x = j as i32 * self.screen_scale;
                let y = i as i32 * self.screen_scale;
                let colour = COLOURS[frame_buffer[i][j] as usize];

                self.canvas.set_draw_color(colour);
                let _ = self.canvas.fill_rect(Rect::new(x, y, pixel_size, pixel_size));
            }
        }

        self.canvas.present();
    }
}