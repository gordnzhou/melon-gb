/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../pkg/gbemulib.js":
/*!**************************!*\
  !*** ../pkg/gbemulib.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Emulator: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.Emulator),\n/* harmony export */   __wbg_getTime_2bc4375165f02d15: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getTime_2bc4375165f02d15),\n/* harmony export */   __wbg_loadfromdb_768f56715f758797: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_loadfromdb_768f56715f758797),\n/* harmony export */   __wbg_log_70ee89e5e1eef2a1: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_70ee89e5e1eef2a1),\n/* harmony export */   __wbg_new0_7d84e5b2cd9fdc73: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new0_7d84e5b2cd9fdc73),\n/* harmony export */   __wbg_new_16b304a2cfa7ff4a: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_16b304a2cfa7ff4a),\n/* harmony export */   __wbg_push_a5b05aedc7234f9f: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_push_a5b05aedc7234f9f),\n/* harmony export */   __wbg_savetodb_88c0a34a5f2fdfc6: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_savetodb_88c0a34a5f2fdfc6),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   __wbindgen_debug_string: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_debug_string),\n/* harmony export */   __wbindgen_number_new: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_number_new),\n/* harmony export */   __wbindgen_object_drop_ref: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_drop_ref),\n/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _gbemulib_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gbemulib_bg.wasm */ \"../pkg/gbemulib_bg.wasm\");\n/* harmony import */ var _gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gbemulib_bg.js */ \"../pkg/gbemulib_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_gbemulib_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_gbemulib_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,_gbemulib_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_gbemulib_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../pkg/gbemulib.js?");

/***/ }),

/***/ "../pkg/gbemulib_bg.js":
/*!*****************************!*\
  !*** ../pkg/gbemulib_bg.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Emulator: () => (/* binding */ Emulator),\n/* harmony export */   __wbg_getTime_2bc4375165f02d15: () => (/* binding */ __wbg_getTime_2bc4375165f02d15),\n/* harmony export */   __wbg_loadfromdb_768f56715f758797: () => (/* binding */ __wbg_loadfromdb_768f56715f758797),\n/* harmony export */   __wbg_log_70ee89e5e1eef2a1: () => (/* binding */ __wbg_log_70ee89e5e1eef2a1),\n/* harmony export */   __wbg_new0_7d84e5b2cd9fdc73: () => (/* binding */ __wbg_new0_7d84e5b2cd9fdc73),\n/* harmony export */   __wbg_new_16b304a2cfa7ff4a: () => (/* binding */ __wbg_new_16b304a2cfa7ff4a),\n/* harmony export */   __wbg_push_a5b05aedc7234f9f: () => (/* binding */ __wbg_push_a5b05aedc7234f9f),\n/* harmony export */   __wbg_savetodb_88c0a34a5f2fdfc6: () => (/* binding */ __wbg_savetodb_88c0a34a5f2fdfc6),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbindgen_debug_string: () => (/* binding */ __wbindgen_debug_string),\n/* harmony export */   __wbindgen_number_new: () => (/* binding */ __wbindgen_number_new),\n/* harmony export */   __wbindgen_object_drop_ref: () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction passArray8ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 1, 1) >>> 0;\n    getUint8Memory0().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nconst EmulatorFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_emulator_free(ptr >>> 0));\n/**\n*/\nclass Emulator {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(Emulator.prototype);\n        obj.__wbg_ptr = ptr;\n        EmulatorFinalization.register(obj, obj.__wbg_ptr, obj);\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        EmulatorFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_emulator_free(ptr);\n    }\n    /**\n    * @param {Uint8Array} cartridge_bytes\n    * @returns {Emulator}\n    */\n    static new(cartridge_bytes) {\n        const ptr0 = passArray8ToWasm0(cartridge_bytes, wasm.__wbindgen_malloc);\n        const len0 = WASM_VECTOR_LEN;\n        const ret = wasm.emulator_new(ptr0, len0);\n        return Emulator.__wrap(ret);\n    }\n    /**\n    */\n    step() {\n        wasm.emulator_step(this.__wbg_ptr);\n    }\n    /**\n    * @returns {string}\n    */\n    game_title() {\n        let deferred1_0;\n        let deferred1_1;\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.emulator_game_title(retptr, this.__wbg_ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            deferred1_0 = r0;\n            deferred1_1 = r1;\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);\n        }\n    }\n    /**\n    * @returns {number | undefined}\n    */\n    get_audio_output() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.emulator_get_audio_output(retptr, this.__wbg_ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return r0 === 0 ? undefined : r1 >>> 0;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    static audio_output_length() {\n        const ret = wasm.emulator_audio_output_length();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    static audio_rate() {\n        const ret = wasm.emulator_audio_rate();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number | undefined}\n    */\n    get_display_output() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.emulator_get_display_output(retptr, this.__wbg_ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return r0 === 0 ? undefined : r1 >>> 0;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    static display_height() {\n        const ret = wasm.emulator_display_height();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    static display_width() {\n        const ret = wasm.emulator_display_width();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    static display_byte_length() {\n        const ret = wasm.emulator_display_byte_length();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {boolean}\n    */\n    entered_hblank() {\n        const ret = wasm.emulator_entered_hblank(this.__wbg_ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {number} status\n    */\n    update_joypad(status) {\n        wasm.emulator_update_joypad(this.__wbg_ptr, status);\n    }\n    /**\n    */\n    save_game() {\n        wasm.emulator_save_game(this.__wbg_ptr);\n    }\n    /**\n    * @param {Uint8Array} data\n    * @param {string} save_type\n    */\n    load_save(data, save_type) {\n        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);\n        const len0 = WASM_VECTOR_LEN;\n        const ptr1 = passStringToWasm0(save_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len1 = WASM_VECTOR_LEN;\n        wasm.emulator_load_save(this.__wbg_ptr, ptr0, len0, ptr1, len1);\n    }\n}\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_loadfromdb_768f56715f758797(arg0, arg1, arg2, arg3) {\n    Persistence.load_from_db(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));\n};\n\nfunction __wbg_savetodb_88c0a34a5f2fdfc6(arg0, arg1, arg2, arg3, arg4) {\n    Persistence.save_to_db(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), takeObject(arg4));\n};\n\nfunction __wbg_log_70ee89e5e1eef2a1(arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_number_new(arg0) {\n    const ret = arg0;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_16b304a2cfa7ff4a() {\n    const ret = new Array();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_push_a5b05aedc7234f9f(arg0, arg1) {\n    const ret = getObject(arg0).push(getObject(arg1));\n    return ret;\n};\n\nfunction __wbg_getTime_2bc4375165f02d15(arg0) {\n    const ret = getObject(arg0).getTime();\n    return ret;\n};\n\nfunction __wbg_new0_7d84e5b2cd9fdc73() {\n    const ret = new Date();\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_debug_string(arg0, arg1) {\n    const ret = debugString(getObject(arg1));\n    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len1 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len1;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr1;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/gbemulib_bg.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gbemulib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gbemulib */ \"../pkg/gbemulib.js\");\n/* harmony import */ var gbemulib_gbemulib_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gbemulib/gbemulib_bg.wasm */ \"../pkg/gbemulib_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([gbemulib__WEBPACK_IMPORTED_MODULE_0__, gbemulib_gbemulib_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n([gbemulib__WEBPACK_IMPORTED_MODULE_0__, gbemulib_gbemulib_bg_wasm__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst CANVAS_SCALE = 3;\n\n// in order of: START, SELECT, B, A, DOWN, UP, LEFT, RIGHT.\nconst KEYMAPPINGS = [\n    'Enter',\n    'ShiftRight',\n    'z',\n    'x',\n    'ArrowDown',\n    'ArrowUp',\n    'ArrowLeft',\n    'ArrowRight',\n];\n\nconst HEIGHT = gbemulib__WEBPACK_IMPORTED_MODULE_0__.Emulator.display_height();\nconst WIDTH = gbemulib__WEBPACK_IMPORTED_MODULE_0__.Emulator.display_width();\nconst DISPLAY_BYTE_LEN = gbemulib__WEBPACK_IMPORTED_MODULE_0__.Emulator.display_byte_length();\nconst AUDIO_OUTPUT_LEN = gbemulib__WEBPACK_IMPORTED_MODULE_0__.Emulator.audio_output_length();\n\n// INPUT------\nlet key_status = 0xFF;\n\nwindow.addEventListener('keydown', function(event) {\n    for (let i = 0; i < 8; i++) {\n        if (event.key == KEYMAPPINGS[i]) {\n            key_status &= ~(1 << (7 - i));\n        }\n    }\n});\n\nwindow.addEventListener('keyup', function(event) {\n    for (let i = 0; i < 8; i++) {\n        if (event.key == KEYMAPPINGS[i]) {\n            key_status |= 1 << (7 - i)\n        }\n    }\n});\n// INPUT------\n\n\n// DISPLAY------\nconst canvas = document.getElementById(\"gb-display\");\ncanvas.height = HEIGHT * CANVAS_SCALE;\ncanvas.width = WIDTH * CANVAS_SCALE;\nconst ctx = canvas.getContext('2d');\nconst CLEAR_COLOUR = \"#FFFFE8\";\n\nconst updateCanvas = (displayOutputPtr) => {\n    const display_output = new Uint8Array(\n        gbemulib_gbemulib_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, \n        displayOutputPtr, \n        WIDTH * HEIGHT * DISPLAY_BYTE_LEN\n    );\n        \n    for (let y = 0; y < HEIGHT; y++) {\n        for (let x = 0; x < WIDTH; x++) {\n            let index = (y * WIDTH + x) * DISPLAY_BYTE_LEN\n            let b = display_output[index];\n            let g = display_output[index + 1];\n            let r = display_output[index + 2];\n            let a = display_output[index + 3] / 255;\n\n            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;\n            ctx.fillRect(\n                x * CANVAS_SCALE, \n                y * CANVAS_SCALE, \n                CANVAS_SCALE, \n                CANVAS_SCALE\n            );\n        }\n    }\n}\n\nconst clearCanvas = () => {   \n    for (let y = 0; y < HEIGHT; y++) {\n        for (let x = 0; x < WIDTH; x++) {\n            ctx.fillStyle = CLEAR_COLOUR;\n            ctx.fillRect(\n                x * CANVAS_SCALE, \n                y * CANVAS_SCALE, \n                CANVAS_SCALE, \n                CANVAS_SCALE\n            );\n        }\n    }\n}\n// DISPLAY------\n\n\n// AUDIO------\nlet audioContext;\nlet audioNode;\nlet audioVolume = 0.2;\n\nconst volumeSlider = document.getElementById('volume-slider');\nvolumeSlider.value = audioVolume * 100;\n\nvolumeSlider.addEventListener('input', function() {\n    audioVolume = this.value / 100;\n});\n\nconst initializeAudio = () => {\n    if (audioNode != null) {\n        audioNode.disconnect();\n        audioNode = null;\n    }\n    \n    if (audioContext != null) {\n        audioContext.close().then(() => {\n            audioContext = null;\n            setupAudioContextAndNode();\n        });\n    } else {\n        setupAudioContextAndNode();\n    }\n    \n    function setupAudioContextAndNode() {\n        audioContext = new AudioContext();\n        audioContext.audioWorklet.addModule('audio.js').then(() => {\n            audioNode = new AudioWorkletNode(audioContext, 'gb-audio-processor', {\n                processorOptions: { sampleRate: audioContext.sampleRate }\n            });\n    \n            audioNode.port.onmessage = (e) => console.log(e.data);\n            audioNode.connect(audioContext.destination);\n    \n            audioContext.resume();\n        });\n    }\n}\n\nconst pushAudioSamples = (audioOutputPtr) => {\n    console.log(\"??\")\n    const audio_output = new Float32Array(\n        gbemulib_gbemulib_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer,\n        audioOutputPtr,\n        AUDIO_OUTPUT_LEN\n    )\n\n    audioNode.port.postMessage(audio_output.map(sample => sample * audioVolume));\n}\n// AUDIO------\n\ndocument.getElementById('file-input').addEventListener('change', function(e) {\n    paused = true;\n    load_rom(e.target.files[0]);\n});\n\nconst load_rom = (rom_file) => {\n    if (!rom_file) {\n        alert(\"No file selected\");\n        return;\n    }\n\n    stopMainLoop = true;\n    initializeAudio();\n    clearCanvas()\n\n    var reader = new FileReader();\n    reader.readAsArrayBuffer(rom_file);\n    reader.onload = function(e) {\n        startEmulator(e)\n    };\n}\n\nconst startEmulator = (e) => {\n    var arrayBuffer = e.target.result;\n    var byteArray = new Uint8Array(arrayBuffer);\n    if (window.emulator != null) {\n       window.emulator.save_game();\n    }\n\n    window.emulator = gbemulib__WEBPACK_IMPORTED_MODULE_0__.Emulator.new(byteArray);\n    stopMainLoop = false;\n    main_loop();\n    console.log(canvas.height, canvas.width, window.emulator.game_title());\n} \n\nlet stopMainLoop = true;\nlet paused = false;\n\nlet main_loop = () => {\n    if (stopMainLoop) {\n        return;\n    }\n\n    if (!paused) {\n        let audioOutputPtr = null;\n        let displayOutputPtr = null;\n\n        let dur = 0;\n        while (audioOutputPtr == null && displayOutputPtr == null) {\n            if (dur % 2 == 0) {\n                window.emulator.update_joypad(key_status);\n            }\n            window.emulator.step();\n            audioOutputPtr = window.emulator.get_audio_output();\n            displayOutputPtr = window.emulator.get_display_output();\n            dur++;\n        }\n\n        if (audioOutputPtr != null) {\n            pushAudioSamples(audioOutputPtr)\n        }\n\n        if (displayOutputPtr != null) {\n            updateCanvas(displayOutputPtr);\n        }\n    }\n\n    setTimeout(main_loop, 0)\n} \n\n(() => {\n    clearCanvas();\n})()\n\ndocument.getElementById(\"pause-button\").addEventListener(\"click\", () => {\n    paused = true;\n});\n\ndocument.getElementById(\"play-button\").addEventListener(\"click\", () => {\n    paused = false;\n});\n\ndocument.getElementById(\"restart-button\").addEventListener(\"click\", () => {\n    load_rom(document.getElementById('file-input').files[0]);\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "../pkg/gbemulib_bg.wasm":
/*!*******************************!*\
  !*** ../pkg/gbemulib_bg.wasm ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./gbemulib_bg.js */ \"../pkg/gbemulib_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"9ba7dd57a9def5070bf2\", {\n\t\"./gbemulib_bg.js\": {\n\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\"__wbg_loadfromdb_768f56715f758797\": WEBPACK_IMPORTED_MODULE_0.__wbg_loadfromdb_768f56715f758797,\n\t\t\"__wbg_savetodb_88c0a34a5f2fdfc6\": WEBPACK_IMPORTED_MODULE_0.__wbg_savetodb_88c0a34a5f2fdfc6,\n\t\t\"__wbg_log_70ee89e5e1eef2a1\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_70ee89e5e1eef2a1,\n\t\t\"__wbindgen_number_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_number_new,\n\t\t\"__wbg_new_16b304a2cfa7ff4a\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_16b304a2cfa7ff4a,\n\t\t\"__wbg_push_a5b05aedc7234f9f\": WEBPACK_IMPORTED_MODULE_0.__wbg_push_a5b05aedc7234f9f,\n\t\t\"__wbg_getTime_2bc4375165f02d15\": WEBPACK_IMPORTED_MODULE_0.__wbg_getTime_2bc4375165f02d15,\n\t\t\"__wbg_new0_7d84e5b2cd9fdc73\": WEBPACK_IMPORTED_MODULE_0.__wbg_new0_7d84e5b2cd9fdc73,\n\t\t\"__wbindgen_debug_string\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_debug_string,\n\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t}\n});\n\n//# sourceURL=webpack:///../pkg/gbemulib_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			var fallback = () => (req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports))));
/******/ 			return req.then((res) => {
/******/ 				if (typeof WebAssembly.instantiateStreaming === "function") {
/******/ 					return WebAssembly.instantiateStreaming(res, importsObj)
/******/ 						.then(
/******/ 							(res) => (Object.assign(exports, res.instance.exports)),
/******/ 							(e) => {
/******/ 								if(res.headers.get("Content-Type") !== "application/wasm") {
/******/ 									console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
/******/ 									return fallback();
/******/ 								}
/******/ 								throw e;
/******/ 							}
/******/ 						);
/******/ 				}
/******/ 				return fallback();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;