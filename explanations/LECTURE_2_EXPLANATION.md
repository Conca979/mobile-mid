# Lecture 2: Android Introduction & History
## Comprehensive Line-by-Line Slide Explanation

---

### Slide 1: Title Slide
- **Slide Text:**
  - `Android Introduction`
  - `Tran Giang Son, tran-giang.son@usth.edu.vn`
  - `ICT Department, USTH`
- **Line-by-Line Explanation:**
  - Introductory lecture exploring the technical definition of the Android platform, supported hardware, development prerequisites, historical version evolution, and ecosystem constraints.

---

### Slides 3–6: Market Share Context
- **Slide Text:**
  - `Source: IDG, Aug 2016`
  - `Source: Gartner & Wikipedia`
  - `Source: IDG, Mar 2016`
- **Line-by-Line Explanation:**
  - Historical industry data showing Android's dominant global smartphone operating system market share (>80% worldwide compared to iOS's ~15% and Windows Phone's decline).
  - Highlights the vast reach of the Android platform across devices and price ranges.

---

### Slide 7: What is Android? (High-Yield Exam Slide)
- **Slide Text:**
  - `• Mobile Operating System`
  - `• Linux Distribution`
  - `• A set of user-space applications and frameworks`
  - `• Java`
  - `• NOT a device`
- **Line-by-Line Explanation:**
  - **`Mobile Operating System`:** An OS tailored for mobile constraints (touch input, battery power management, wireless connectivity, variable sensors).
  - **`Linux Distribution`:** Android uses the Linux Kernel (process scheduling, memory management, driver model, and security). However, unlike standard desktop Linux distros (Ubuntu, Debian), it does NOT use standard GNU C libraries (glibc) or X11/Wayland windowing; it uses Bionic libc and its own SurfaceFlinger.
  - **`A set of user-space applications and frameworks`:** Above the kernel, Android provides user-space daemons, native C/C++ libraries, and the Java Application Framework.
  - **`Java`:** The application programming interface (API) and runtime environment through which developers build apps.
  - **`NOT a device`:** **CRITICAL EXAM TRAP.** Students often mistakenly equate "Android" to a specific phone or Google hardware. Android is solely the software stack and OS.

---

### Slide 8: Supported Form Factors
- **Slide Text:**
  - `• Phones, Tablets, Watches, TVs, Set-top boxes, Cars, Glasses, Notebooks, Game consoles, Digital cameras`
- **Line-by-Line Explanation:**
  - Demonstrates Android's versatility beyond smartphones:
    - Watches (Wear OS)
    - TVs & Set-top boxes (Android TV)
    - Automotive (Android Auto / Android Automotive OS)
    - Wearables (Google Glass)
    - Digital Cameras (e.g., Samsung Galaxy Camera) and smart appliances.

---

### Slide 9: Supported Hardware Architectures & Specifications
- **Slide Text:**
  - `• Platform: ARM 32/64 bits, Intel x86/x64, MIPS`
  - `• Memory: Internal, 128MB - 4GB; Storage, flash-based`
  - `• CPU: Single- to Octa- core, 384MHz - 2.7GHz`
  - `• GPU: None, 1 - 550 GFLOPS`
- **Line-by-Line Explanation:**
  - **`Platform: ARM 32/64 bits, Intel x86/x64, MIPS`:**
    - **ARM (armeabi-v7a, arm64-v8a):** Primary architecture in smartphones due to low power consumption.
    - **Intel x86/x64:** Used in Android emulators on PC and a few tablets (e.g. Intel Atom).
    - **MIPS:** Supported in earlier NDK versions for embedded devices.
  - **`Memory: Internal, 128MB - 4GB`:** Reflects the memory span of devices in the slides' era (low-end devices starting as low as 128MB–512MB RAM, demanding strict optimization).
  - **`Storage, flash-based`:** NAND flash storage (eMMC / UFS) with no moving mechanical parts.
  - **`CPU: Single- to Octa- core, 384MHz - 2.7GHz`:** Highlights the vast performance disparity Android apps must handle.
  - **`GPU: None, 1 - 550 GFLOPS`:** Very old/cheap chipsets had no dedicated GPU, while modern SOCs provide hundreds of GigaFLOPS.

---

### Slide 10: Peripherals & Sensors
- **Slide Text:**
  - `• Screen: Touchscreen, 2” - 100”`
  - `• Sensors: GPS, compass, gyro; Accelero, baro, magneto; Proximity, thermo`
  - `• GSM/CDMA, Camera, WiFi, Bluetooth, Keyboard/Mouse`
- **Line-by-Line Explanation:**
  - **`Screen: Touchscreen, 2” - 100”`:** From tiny watch screens to giant conference TV displays, requiring adaptive and responsive layouts.
  - **`Sensors`:**
    - Position/Motion: Accelerometer, Gyroscope, Magnetometer (Compass), GPS.
    - Environment: Barometer (air pressure), Thermometer (ambient/battery temperature), Proximity sensor (disables screen when phone is held to ear).
  - **`Connectivity`:** Cellular (GSM/CDMA), local wireless (WiFi, Bluetooth), and external HID peripherals (keyboard/mouse via USB OTG or Bluetooth).

---

### Slides 11–14: Why Android? Technical Advantages
- **Slide Text:**
  - `• Why not? Awesome! Popular, Cheap, Daily friend, Fast, Easy to use, Camera, Network, Jobs!`
  - `• Freshmen will NOT have these salaries; Good read: toidicodedao.com/2016/09/29/coder-sieu-nhan/`
  - `• Reinforce the basics: OOP, decomposition, etc.`
  - `• Separation of UI design and functionality`
  - `• Asynchronous Programming`
  - `• Callback Methods`
- **Line-by-Line Explanation:**
  - **`Reinforce the basics: OOP, decomposition...`:** Android is fundamentally object-oriented. Subclassing `Activity` or `Fragment` enforces inheritance and modular design.
  - **`Separation of UI design and functionality`:** The hallmark of Android front-end: layouts and static content are defined declaratively in **XML (`res/layout/`)**, while business logic is written imperatively in **Java**.
  - **`Asynchronous Programming`:** Mobile apps cannot block the UI; background tasks must run off-thread via `Thread`, `Handler`, or `AsyncTask`.
  - **`Callback Methods`:** Android's event-driven architecture relies heavily on lifecycle hooks (`onCreate`, `onPause`) and listener interfaces (`View.OnClickListener`).

---

### Slides 15–17: Why NOT iOS in Bachelor Curriculum?
- **Slide Text:**
  - `• Required development environment configuration: macOS (Macbook / iMac / MacMini / Hackintosh / Hackintosh Virtual Machine), iDevice (iPhone / iPad / Simulator), Preferences`
  - `• Worst (and typical) case: Laptop, 4GB RAM, no iPhone/iPad. Unable to install Hackintosh -> Hackintosh VM: 2GB for host (Windows/Linux, browser, VMware/VirtualBox), 2GB for guest (macOS, Xcode, iPhone Simulator) -> Slooooooooow`
  - `• You can learn iOS in USTH ICT Master :-)`
- **Line-by-Line Explanation:**
  - **Hardware barrier:** Apple enforces proprietary hardware for iOS development (macOS required for Xcode).
  - **Performance bottleneck on student laptops:** In a 4GB RAM laptop, allocating 2GB to a Windows host and 2GB to a macOS virtual machine causes severe swapping, making compilation and iOS simulation agonizingly slow.
  - USTH reserves iOS development for the Master program where labs provide Mac workstations.

---

### Slide 18: What is Needed? (Knowledge Prerequisites)
- **Slide Text:**
  - `• OOP: package, inheritance, method overriding, aggregation, interface,...`
  - `• Java: casting, exceptions`
  - `• Networking: client-server model, HTTP, API`
  - `• Data representation: XML, JSON`
- **Line-by-Line Explanation:**
  - **`OOP`:**
    - `package`: Defines namespace (e.g. `vn.edu.usth.weather`).
    - `inheritance`: Subclassing Android base components (`extends AppCompatActivity`).
    - `method overriding`: Lifecycle hooks (`@Override protected void onCreate(...)`).
    - `interface`: Event handling (`implements View.OnClickListener`).
  - **`Java casting & exceptions`:** Downcasting views (`(TextView) findViewById(...)`), handling `JSONException`, `IOException`, and runtime exceptions like `NullPointerException`.
  - **`Networking`:** Understanding HTTP GET/POST, REST endpoints, asynchronous request lifecycles.
  - **`Data representation`:** XML for UI layouts and resource declarations; JSON for web service payloads.

---

### Slides 19–20: Development Environment & Tools
- **Slide Text:**
  - `• Hardware: at least Dual core CPU, 4GB memory. [Optional, but recommended] An Android phone, with USB cable`
  - `• Desktop OS: Windows, Linux, Mac OS X`
  - `• IDE: Android Studio [preferred], Eclipse with Android Development Tools, IntelliJ IDEA`
  - `• Versioning Control System: git`
  - `• A good brain.`
- **Line-by-Line Explanation:**
  - **`Android Studio [preferred]`:** Official IDE built on IntelliJ IDEA with built-in Gradle build system and layout preview.
  - **`Eclipse with ADT`:** The legacy Android development tool prior to 2014.
  - **`USB Debugging`:** Running apps directly on a physical phone avoids emulator overhead on 4GB RAM machines.

---

### Slide 21–22: Android Version History & Timeline (High-Yield Alphabetical Progression)
- **Slide Text:**
  - `Alpha 1.0 (9/2008)`
  - `Petit Four 1.1 (2/2009)`
  - `Cupcake 1.5 (4/2009)`
  - `Donut 1.6 (9/2009)`
  - `Eclair 2.0-2.1 (10/2009)`
  - `Froyo 2.2 (5/2010)`
  - `Gingerbread 2.3 (12/2010)`
  - `Honeycomb 3.0 (2/2011)`
  - `Ice Cream Sandwich 4.0 (10/2011)`
  - `Jellybean 4.1-4.3 (2012)`
  - `Kitkat 4.4 (10/2013)`
  - `Lollipop 5.0 (11/2014)`
  - `Marshmallow 6.0 (10/2015)`
  - `Nougat 7.0 (8/2016)`
  - `Oreo 8.0 (8/2017)`
- **Line-by-Line Explanation:**
  - Google named versions in strict **alphabetical order after desserts/sweets**:
    - **A:** Alpha (1.0)
    - **B:** Beta / Petit Four (1.1)
    - **C:** Cupcake (1.5) - on-screen keyboard, widgets
    - **D:** Donut (1.6) - WVGA screen support, Support Library baseline (API 4)
    - **E:** Eclair (2.0–2.1) - Multi-touch, Google Maps navigation
    - **F:** Froyo (2.2) - JIT compiler introduced to Dalvik, USB tethering
    - **G:** Gingerbread (2.3) - Sensor APIs, native game support
    - **H:** Honeycomb (3.0) - **Tablet-only UI, introduced FRAGMENTS and Action Bar natively (API 11)**
    - **I:** Ice Cream Sandwich (4.0) - Unified phone and tablet UI
    - **J:** Jelly Bean (4.1–4.3) - "Project Butter" for 60fps UI smoothness
    - **K:** KitKat (4.4) - Low-RAM optimization, experimental ART runtime introduced
    - **L:** Lollipop (5.0) - **Material Design, ART permanently replaces Dalvik**
    - **M:** Marshmallow (6.0) - Runtime permissions model (API 23)
    - **N:** Nougat (7.0) - Multi-window split screen
    - **O:** Oreo (8.0) - Background execution and location limits
- **Exam Traps:**
  - Identifying which dessert comes next or matches a specific version (e.g. 2.2 = Froyo, 3.0 = Honeycomb, 4.4 = KitKat, 5.0 = Lollipop, 6.0 = Marshmallow).

---

### Slides 23–24: Ecosystem Facts & Fragmentation
- **Slide Text:**
  - `Platform Versions, Oct 2017`
  - `Device Sizes, Oct 2017`
- **Line-by-Line Explanation:**
  - **Android Fragmentation:** Hundreds of millions of devices running diverse Android versions simultaneously (from Gingerbread 2.3 up to Oreo 8.0).
  - **Implication for developers:** Applications must use **minSdkVersion**, **targetSdkVersion**, and the **Android Support Library** (e.g. support fragments, Toolbar) to maintain compatibility across varied screen sizes and OS releases.
