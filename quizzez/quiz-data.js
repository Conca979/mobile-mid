// Complete Question Bank & Flashcards from USTH Mobile Dev Lectures 1-5
const QUIZ_DATA = {
  questions: [
    // Lecture 2
    {
      id: 5,
      lecture: 2,
      lectureTitle: "Android Intro & History",
      question: "Which of the following statements about Android is FALSE according to the lecture?",
      options: [
        "Android is a mobile operating system",
        "Android is a Linux distribution",
        "Android is a hardware device manufactured by Google",
        "Android is a set of user-space applications and frameworks"
      ],
      answer: 2,
      explanation: "Lecture 2 emphatically notes: Android is a Mobile OS, a Linux Distribution, a set of user-space applications and frameworks, and Java. It is NOT a device.",
      slideRef: "Lecture 2, Slide 7"
    },
    {
      id: 6,
      lecture: 2,
      lectureTitle: "Android Intro & History",
      question: "Which CPU architectures are supported by the Android platform according to the lecture hardware specs?",
      options: [
        "ARM (32/64 bits), Intel x86/x64, and MIPS",
        "ARM and SPARC only",
        "Intel x86 and PowerPC only",
        "RISC-V only"
      ],
      answer: 0,
      explanation: "Hardware platforms listed in Lecture 2: ARM 32/64 bits, Intel x86/x64, and MIPS.",
      slideRef: "Lecture 2, Slide 9"
    },
    {
      id: 7,
      lecture: 2,
      lectureTitle: "Android Intro & History",
      question: "Why was iOS development NOT chosen for the USTH Bachelor curriculum?",
      options: [
        "iOS has no support for object-oriented programming",
        "Students with typical 4GB RAM laptops running Hackintosh VMs face severe performance lag ('Slooooooooow')",
        "Apple prohibits students from writing mobile apps",
        "Objective-C and Swift cannot connect to HTTP servers"
      ],
      answer: 1,
      explanation: "Running macOS inside a Hackintosh VM on a typical 4GB RAM laptop leaves only 2GB for the guest OS, making Xcode and iOS simulator extremely slow.",
      slideRef: "Lecture 2, Slides 15-16"
    },
    {
      id: 8,
      lecture: 2,
      lectureTitle: "Android Intro & History",
      question: "Android version codenames follow an alphabetical dessert progression. What is the codename for Android 3.0?",
      options: [
        "Gingerbread",
        "Honeycomb",
        "Ice Cream Sandwich",
        "Jellybean"
      ],
      answer: 1,
      explanation: "Android 3.0 (released 2/2011 for tablets) is Honeycomb. 2.3 is Gingerbread, 4.0 is Ice Cream Sandwich, 4.1 is Jellybean.",
      slideRef: "Lecture 2, Slide 22"
    },
    {
      id: 9,
      lecture: 2,
      lectureTitle: "Android Intro & History",
      question: "What is the dessert codename for Android version 2.2?",
      options: [
        "Donut",
        "Eclair",
        "Froyo",
        "Gingerbread"
      ],
      answer: 2,
      explanation: "Android 2.2 is Froyo (Frozen Yogurt), released in May 2010.",
      slideRef: "Lecture 2, Slide 22"
    },
    {
      id: 10,
      lecture: 2,
      lectureTitle: "Android Intro & History",
      question: "What dessert codename corresponds to Android 4.4, which first introduced the experimental ART runtime?",
      options: [
        "Jellybean",
        "Kitkat",
        "Lollipop",
        "Marshmallow"
      ],
      answer: 1,
      explanation: "Android 4.4 is Kitkat (released October 2013).",
      slideRef: "Lecture 2, Slide 22"
    },
    {
      id: 11,
      lecture: 2,
      lectureTitle: "Android Intro & History",
      question: "What dessert codename corresponds to Android 6.0?",
      options: [
        "Lollipop",
        "Marshmallow",
        "Nougat",
        "Oreo"
      ],
      answer: 1,
      explanation: "Android 6.0 is Marshmallow (released October 2015).",
      slideRef: "Lecture 2, Slide 22"
    },
    {
      id: 12,
      lecture: 2,
      lectureTitle: "Android Intro & History",
      question: "Which of the following is listed as the preferred IDE in the course slides?",
      options: [
        "Eclipse with Android Development Tools (ADT)",
        "Android Studio",
        "IntelliJ IDEA",
        "VS Code"
      ],
      answer: 1,
      explanation: "Lecture 2 Slide 20 lists Android Studio with the explicit tag '[preferred]'.",
      slideRef: "Lecture 2, Slide 20"
    },

    // Lecture 3
    {
      id: 13,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "In the 4-layer Android architecture stack, which layer sits directly above the Linux Kernel?",
      options: [
        "Applications",
        "Application Framework",
        "Libraries & Android Runtime",
        "Hardware Drivers"
      ],
      answer: 2,
      explanation: "From bottom to top: (1) Linux Kernel -> (2) Libraries & Android Runtime -> (3) Application Framework -> (4) Applications.",
      slideRef: "Lecture 3, Slide 4"
    },
    {
      id: 14,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "In what programming language are low-level Android core libraries such as WebKit, SQLite, and FreeType written?",
      options: [
        "Java",
        "C / C++",
        "Python",
        "Kotlin"
      ],
      answer: 1,
      explanation: "Lecture 3 Slide 6 notes: Libraries are 'Mostly in C/C++', providing low-level rendering, databases, and media playback.",
      slideRef: "Lecture 3, Slide 6"
    },
    {
      id: 15,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "Which tool in the Android build chain converts Java bytecode (.class files) into Dalvik Executable (.dex) format?",
      options: [
        "javac",
        "dx compiler",
        "aapt",
        "adb"
      ],
      answer: 1,
      explanation: "The compilation pipeline: Java source (.java) -> javac -> Java bytecode (.class) -> dx -> Dalvik Executable (.dex).",
      slideRef: "Lecture 3, Slide 10"
    },
    {
      id: 16,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "How does execution compilation differ between Dalvik and ART (Android RunTime)?",
      options: [
        "Dalvik uses Ahead-Of-Time (AOT); ART uses Just-In-Time (JIT)",
        "Dalvik uses Just-In-Time (JIT); ART uses Ahead-Of-Time (AOT)",
        "Dalvik executes C++ directly; ART executes Python scripts",
        "Dalvik interprets line-by-line; ART runs purely in the cloud"
      ],
      answer: 1,
      explanation: "Dalvik uses JIT (compiling methods during execution). ART compiles the app ahead-of-time (AOT) upon installation for faster runtime performance.",
      slideRef: "Lecture 3, Slide 11"
    },
    {
      id: 17,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "How does Android achieve application sandboxing and process isolation?",
      options: [
        "All applications share the same Linux User ID and thread pool",
        "Each application runs in a separate process, with its own VM instance, and unique Linux User ID",
        "Apps run in a single master JVM with different namespaces",
        "Applications are executed inside browser web workers"
      ],
      answer: 1,
      explanation: "Lecture 3 Slide 10 explicitly lists: Separated Process, Separated User, and Isolation for each app.",
      slideRef: "Lecture 3, Slide 10"
    },
    {
      id: 18,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "In the Android MVC pattern described in the course, which of the following is classified as a 'Controller'?",
      options: [
        "XML Layout files",
        "TextView and ImageView widgets",
        "Context, Application, Activity, and Fragment",
        "SQLite database tables"
      ],
      answer: 2,
      explanation: "Lecture 3 Slide 18 groups Controllers as: Context, Application, Activity, Fragment. Views are layouts/widgets; Models are data.",
      slideRef: "Lecture 3, Slide 18"
    },
    {
      id: 19,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "What is the primary role of the Context object in Android?",
      options: [
        "It draws UI buttons onto the screen buffer",
        "It acts as the central command center, providing access to app-specific data, resources, private files, and system services",
        "It acts as the Garbage Collector for Dalvik",
        "It is the main entry point for C++ NDK code"
      ],
      answer: 1,
      explanation: "Context is the central command center providing access to application-specific data, settings, private files, resources, assets, and system services.",
      slideRef: "Lecture 3, Slide 19"
    },
    {
      id: 20,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "For what purpose can a developer subclass the Application class?",
      options: [
        "To define custom animations for button clicks",
        "To hold global application data and perform early initialization of libraries (e.g. ACRA crash reporting)",
        "To override the Linux Kernel scheduler",
        "To render 3D OpenGL polygons"
      ],
      answer: 1,
      explanation: "Subclassing Application allows holding global data across activities and running early library initialization (e.g. ACRA.init(this)) in its onCreate().",
      slideRef: "Lecture 3, Slides 20-22"
    },
    {
      id: 21,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "What happens when an Android application exceeds its allocated heap memory limit?",
      options: [
        "The phone automatically reboots",
        "An OutOfMemory Exception (OOM) is thrown and the system may terminate activities",
        "The application is automatically converted into a background service",
        "RAM is dynamically downloaded from the cloud"
      ],
      answer: 1,
      explanation: "Lecture 3 Slide 23 notes: Upper memory limit for each Application; Out-of-memory Exception occurs if exceeded; Android kills activities when low on memory.",
      slideRef: "Lecture 3, Slide 23"
    },
    {
      id: 22,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "Which XML file serves as the manifest containing metadata, permissions, and component declarations for an Android app?",
      options: [
        "build.xml",
        "AndroidManifest.xml",
        "settings.gradle",
        "res/values/app.xml"
      ],
      answer: 1,
      explanation: "AndroidManifest.xml provides metadata, target SDK, permissions (<uses-permission>), and declares activities, services, and receivers.",
      slideRef: "Lecture 3, Slide 24"
    },
    {
      id: 23,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "What is an Activity in Android?",
      options: [
        "A background daemon thread that runs periodic tasks",
        "A fundamental building block with a unique task that handles the display of a single screen",
        "An SQLite database schema controller",
        "A network packet handler"
      ],
      answer: 1,
      explanation: "Lecture 3 Slide 28 defines Activity: Fundamental building block, at least one per application, handles display of a single screen.",
      slideRef: "Lecture 3, Slide 28"
    },
    {
      id: 24,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "In which Activity lifecycle method should you call setContentView() and initialize View references using findViewById()?",
      options: [
        "onStart()",
        "onResume()",
        "onCreate()",
        "onRestart()"
      ],
      answer: 2,
      explanation: "onCreate() initializes the activity, sets the layout with setContentView(R.layout.xxx), and finds view elements with findViewById().",
      slideRef: "Lecture 3, Slide 30"
    },
    {
      id: 25,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "In which Activity lifecycle method should you release expensive resources like the Camera and save unsaved changes?",
      options: [
        "onCreate()",
        "onStart()",
        "onPause()",
        "onResume()"
      ],
      answer: 2,
      explanation: "onPause(): called when activity loses focus; stop animations, save unsaved data, release resources (e.g. camera) so other activities can use them.",
      slideRef: "Lecture 3, Slide 31"
    },
    {
      id: 26,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "When overriding Activity lifecycle callbacks like onPause() or onResume(), what must you ALWAYS do?",
      options: [
        "Call finish()",
        "Always call the superclass method first (e.g. super.onPause())",
        "Inflate a new layout",
        "Clear all static fields"
      ],
      answer: 1,
      explanation: "Slide 31 explicitly states: 'Always call the superclass method first' (e.g. super.onPause(); super.onResume()).",
      slideRef: "Lecture 3, Slide 31"
    },
    {
      id: 27,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "What is the lifecycle sequence that occurs during a screen orientation change (device rotation)?",
      options: [
        "onPause() -> onResume()",
        "onSaveInstanceState() -> onDestroy() -> new instance created -> onCreate() -> onRestoreInstanceState()",
        "onDestroy() -> finish()",
        "onStop() -> onStart() without destroying the instance"
      ],
      answer: 1,
      explanation: "Screen orientation change triggers destruction of the current activity and creation of a new instance: onSaveInstanceState -> onDestroy -> onCreate -> onRestoreInstanceState.",
      slideRef: "Lecture 3, Slide 33"
    },
    {
      id: 28,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "Which method is explicitly called to close the current Activity programmatically?",
      options: [
        "stop()",
        "terminate()",
        "finish()",
        "destroy()"
      ],
      answer: 2,
      explanation: "Lecture 3 Slide 34: 'Close current activity: call finish()'. This leads to onDestroy() being called.",
      slideRef: "Lecture 3, Slide 34"
    },
    {
      id: 29,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "What is an Intent used for in Android?",
      options: [
        "To compile Java classes into DEX",
        "As an asynchronous messaging mechanism to pass messages/data and launch other activities or services",
        "To format string resources in XML",
        "To measure CPU temperature"
      ],
      answer: 1,
      explanation: "Intent is an asynchronous messaging mechanism used to create Activities and pass parameters (via putExtra).",
      slideRef: "Lecture 3, Slide 35"
    },
    {
      id: 30,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "Why were Fragments introduced into Android?",
      options: [
        "Because Java classes could not exceed 100 lines",
        "To handle the explosion in device variety (varying screen sizes, densities, orientations like tablet vs phone)",
        "To replace the Linux kernel file system",
        "Because Activities were completely deprecated in Android 3.0"
      ],
      answer: 1,
      explanation: "Fragments address the explosion in the variety of devices (differing screen sizes, resolutions, densities, and orientations).",
      slideRef: "Lecture 3, Slide 43"
    },
    {
      id: 31,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "From which Android API version were Fragments officially supported NATIVELY in the OS?",
      options: [
        "Android 1.5 Cupcake (API 3)",
        "Android 2.3 Gingerbread (API 9)",
        "Android 3.0 Honeycomb (API 11)",
        "Android 5.0 Lollipop (API 21)"
      ],
      answer: 2,
      explanation: "Fragments are officially supported natively from Honeycomb (API 11). Via Support Library, they can be used down to Donut (API 4).",
      slideRef: "Lecture 3, Slide 44"
    },
    {
      id: 32,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "Which Fragment lifecycle callback is responsible for inflating and returning its user interface View?",
      options: [
        "onCreate()",
        "onCreateView()",
        "onStart()",
        "onActivityCreated()"
      ],
      answer: 1,
      explanation: "onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) inflates and returns the Fragment's view hierarchy.",
      slideRef: "Lecture 3, Slide 46"
    },
    {
      id: 33,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "Which code snippet correctly adds a Fragment dynamically to a container layout?",
      options: [
        "container.addFragment(firstFragment);",
        "getFragmentManager().beginTransaction().add(R.id.container, firstFragment).commit();",
        "Activity.attach(firstFragment, R.id.container);",
        "FragmentManager.insert(R.id.container, firstFragment);"
      ],
      answer: 1,
      explanation: "Slide 51 shows: getFragmentManager().beginTransaction().add(R.id.container, firstFragment).commit();",
      slideRef: "Lecture 3, Slide 51"
    },
    {
      id: 34,
      lecture: 3,
      lectureTitle: "Architecture & Fundamentals",
      question: "What is the difference between View and ViewGroup?",
      options: [
        "ViewGroup is only used for databases, while View is used for layouts",
        "View is the basic interactive widget; ViewGroup is a container holding other Views and managing LayoutParams",
        "View cannot have attributes, but ViewGroup can",
        "ViewGroup is deprecated in modern Android"
      ],
      answer: 1,
      explanation: "View is the basic UI building block (TextView, Button). ViewGroup is a container subclass of View that contains child Views and manages layout rules.",
      slideRef: "Lecture 3, Slides 56, 62"
    },

    // Lecture 4
    {
      id: 35,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "Where are bundled static resources located in an Android project?",
      options: [
        "src/main/resources/",
        "res/ directory",
        "assets/system/",
        "lib/resources/"
      ],
      answer: 1,
      explanation: "All resources that are bundled into the app and indexed into R.java are located in the res/ directory.",
      slideRef: "Lecture 4, Slide 2"
    },
    {
      id: 36,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "How are resources referenced in Java code versus XML layout files?",
      options: [
        "In Java: @res/name ; In XML: R.name",
        "In Java: R.<category>.<name> ; In XML: @<category>/<name>",
        "In Java: Context.find(name) ; In XML: $name",
        "In Java: resource.get(name) ; In XML: <res name=...>"
      ],
      answer: 1,
      explanation: "In Java code: R.<category>.<resourceName> (e.g. R.string.refresh). In XML: @<category>/<resourceName> (e.g. @string/refresh).",
      slideRef: "Lecture 4, Slide 2, 55"
    },
    {
      id: 37,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "What is the base View class for layout containers in Android?",
      options: [
        "ViewManager",
        "ViewGroup",
        "LayoutInflater",
        "RootView"
      ],
      answer: 1,
      explanation: "ViewGroup is the base class for layout containers like FrameLayout, LinearLayout, RelativeLayout.",
      slideRef: "Lecture 4, Slide 7"
    },
    {
      id: 38,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "How does FrameLayout arrange its child Views?",
      options: [
        "In a single horizontal row",
        "In multiple layers using Z-based order (Photoshop-like stack), with the first child placed at the bottom",
        "In an automatic responsive grid",
        "In a circular wheel"
      ],
      answer: 1,
      explanation: "FrameLayout uses multiple layers in Z-based order like Photoshop; the first child in XML will be at the bottom.",
      slideRef: "Lecture 4, Slide 16"
    },
    {
      id: 39,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "What attribute enables dynamic stretching of child views in a LinearLayout?",
      options: [
        "android:layout_flex",
        "android:layout_weight",
        "android:layout_stretch",
        "android:gravity"
      ],
      answer: 1,
      explanation: "android:layout_weight specifies how excess space along the orientation axis is proportionally distributed to children.",
      slideRef: "Lecture 4, Slide 21"
    },
    {
      id: 40,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "In a horizontal LinearLayout with width = 720px: Button 1 has width=0px and weight=1; Button 2 has width=100px (no weight); Button 3 has width=0px and weight=1. What is the calculated width of Button 1 and Button 3?",
      options: [
        "240px each",
        "310px each",
        "360px each",
        "620px each"
      ],
      answer: 1,
      explanation: "Remaining space = 720px - 100px (fixed Button 2) = 620px. Sum of weights = 1 + 1 = 2. Each weighted button receives (1/2) * 620px = 310px.",
      slideRef: "Lecture 4, Slide 22"
    },
    {
      id: 41,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "How does RelativeLayout position its child Views?",
      options: [
        "Strictly in a single horizontal or vertical line",
        "Relative to the parent boundary or relative to sibling child Views (e.g. layout_toRightOf, layout_below)",
        "According to a fixed Cartesian coordinate (X,Y) in millimeters",
        "In a tabular spreadsheet format"
      ],
      answer: 1,
      explanation: "RelativeLayout positions children relative to parent boundaries or relative to each other (sibling views).",
      slideRef: "Lecture 4, Slides 25-28"
    },
    {
      id: 42,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "What container provides horizontal swipe gestures for page-by-page fragment switching?",
      options: [
        "ScrollView",
        "ViewPager",
        "DrawerLayout",
        "GridLayout"
      ],
      answer: 1,
      explanation: "ViewPager is a tab-like container supporting horizontal swipe gestures for page-by-page navigation.",
      slideRef: "Lecture 4, Slide 35"
    },
    {
      id: 43,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "What does pager.setOffscreenPageLimit(3) do on a ViewPager?",
      options: [
        "Caps the total number of pages in the adapter to 3",
        "Keeps 3 pages in memory on each side of the current page to prevent them from being destroyed and recreated",
        "Limits the swipe speed to 3 pixels per second",
        "Displays 3 fragments side-by-side simultaneously"
      ],
      answer: 1,
      explanation: "It sets the number of pages that should be retained to either side of the current page in the view hierarchy of the ViewPager.",
      slideRef: "Lecture 4, Slide 37"
    },
    {
      id: 44,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "Which component from the Android Support Design library is commonly used as a header for ViewPager?",
      options: [
        "PagerSlidingTabStrip",
        "TabLayout",
        "ToolbarHeader",
        "ActionBarTabs"
      ],
      answer: 1,
      explanation: "Lecture 4 Slide 36 & 43 highlights TabLayout from 'com.android.support:design', connected via tabLayout.setupWithViewPager(pager).",
      slideRef: "Lecture 4, Slide 36, 43"
    },
    {
      id: 45,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "How do you connect a TabLayout with a ViewPager in Java code?",
      options: [
        "pager.attachHeader(tabLayout);",
        "tabLayout.setupWithViewPager(pager);",
        "tabLayout.bind(pager);",
        "ViewPager.connectTabs(tabLayout);"
      ],
      answer: 1,
      explanation: "Slide 45 shows: tabLayout.setupWithViewPager(pager);",
      slideRef: "Lecture 4, Slide 45"
    },
    {
      id: 46,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "Which file in res/values/ stores dimension resources such as widths, heights, and margins?",
      options: [
        "sizes.xml",
        "dimens.xml",
        "metrics.xml",
        "bounds.xml"
      ],
      answer: 1,
      explanation: "Dimension values are defined in res/values/dimens.xml using units like dp and sp.",
      slideRef: "Lecture 4, Slide 48"
    },
    {
      id: 47,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "How is an internationalized French string defined in an Android project?",
      options: [
        "res/values/strings_fr.xml",
        "res/values-fr/strings.xml",
        "res/strings-french/strings.xml",
        "assets/french/strings.xml"
      ],
      answer: 1,
      explanation: "Localized resources use language qualifiers on the directory name: res/values-fr/strings.xml.",
      slideRef: "Lecture 4, Slide 50"
    },
    {
      id: 48,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "In what format are color values defined in res/values/colors.xml?",
      options: [
        "24-bit RGB string ('rgb(255,0,0)')",
        "32-bit hex AARRGGBB format (e.g. #3F51B5 or #20FF0000)",
        "HSL percentages",
        "CMYK values"
      ],
      answer: 1,
      explanation: "Colors in Android are defined in 32-bit hex format #AARRGGBB (Alpha, Red, Green, Blue).",
      slideRef: "Lecture 4, Slide 53, 56"
    },
    {
      id: 49,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "In a 9-Patch drawable (*.9.png), what do the black pixels on the TOP and LEFT borders designate?",
      options: [
        "The content padding area",
        "The stretchable area of the image",
        "The transparent cut-out region",
        "The drop shadow angle"
      ],
      answer: 1,
      explanation: "Lecture 4 Slide 61: 'Top & Left edges: Black pixels define stretching area. Bottom & Right edges: Black pixels define paddings'.",
      slideRef: "Lecture 4, Slide 61"
    },
    {
      id: 50,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "In a 9-Patch drawable (*.9.png), what do the black pixels on the BOTTOM and RIGHT borders designate?",
      options: [
        "The stretchable area",
        "The content / padding area",
        "The clickable area",
        "The background mask"
      ],
      answer: 1,
      explanation: "Bottom & Right edges define the padding box inside which content (e.g., text) is placed.",
      slideRef: "Lecture 4, Slide 61"
    },
    {
      id: 51,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "What is the key structural difference between res/raw/ and assets/?",
      options: [
        "res/raw/ files get compiled into R.raw IDs, while assets/ files do not generate R IDs and are accessed by relative path",
        "assets/ files are compiled into R.assets IDs, while res/raw/ is not",
        "res/raw/ can store subfolders, while assets/ cannot",
        "res/raw/ is read-write, while assets/ is read-only"
      ],
      answer: 0,
      explanation: "res/raw/ is an official Android resource generating R.raw.<name> IDs. assets/ is NOT a resource, has NO R IDs, supports arbitrary file names and subdirectories, and is accessed via getAssets().open().",
      slideRef: "Lecture 4, Slides 66-70"
    },
    {
      id: 52,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "How do you open an input stream to read a raw resource stored in res/raw/my_data.json?",
      options: [
        "new FileInputStream('res/raw/my_data.json')",
        "context.getResources().openRawResource(R.raw.my_data)",
        "context.getAssets().open('my_data.json')",
        "R.raw.my_data.readStream()"
      ],
      answer: 1,
      explanation: "Slide 68: InputStream is = context.getResources().openRawResource(R.raw.resid);",
      slideRef: "Lecture 4, Slide 68"
    },
    {
      id: 53,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "Which component replaced the legacy ActionBar to provide backward-compatible Material Design App Bar support down to API 7?",
      options: [
        "NavBar",
        "ToolBar (in Android Support Library)",
        "HeaderView",
        "SystemBar"
      ],
      answer: 1,
      explanation: "Lecture 4 Slide 80: 'App Bar: Previously called ActionBar; Android Support Library: ToolBar; Support material design for API 7+ (Eclair)'.",
      slideRef: "Lecture 4, Slide 80"
    },
    {
      id: 54,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "In a menu XML file (res/menu/xxx.xml), what attribute value for app:showAsAction ensures an item ALWAYS appears on the Toolbar?",
      options: [
        "ifRoom",
        "never",
        "always",
        "withText"
      ],
      answer: 2,
      explanation: "app:showAsAction='always' forces the action item to be visible directly on the toolbar.",
      slideRef: "Lecture 4, Slide 85"
    },
    {
      id: 55,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "Which Activity method must be overridden to inflate an XML menu for the App Bar?",
      options: [
        "onCreate()",
        "onCreateOptionsMenu(Menu menu)",
        "onOptionsItemSelected(MenuItem item)",
        "onMenuOpened()"
      ],
      answer: 1,
      explanation: "onCreateOptionsMenu(Menu menu) inflates the menu resource via getMenuInflater().inflate(R.menu.xxx, menu).",
      slideRef: "Lecture 4, Slide 88"
    },
    {
      id: 56,
      lecture: 4,
      lectureTitle: "Resources & Layouts",
      question: "Which Activity method must be overridden to handle click events on App Bar menu actions?",
      options: [
        "onActionClick()",
        "onOptionsItemSelected(MenuItem item)",
        "onCreateOptionsMenu()",
        "onContextItemSelected()"
      ],
      answer: 1,
      explanation: "onOptionsItemSelected(MenuItem item) receives clicks on action items; you check item.getItemId() with a switch-case statement.",
      slideRef: "Lecture 4, Slide 89"
    },

    // Lecture 5
    {
      id: 57,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "What are the two primary responsibilities of the Android Main Thread?",
      options: [
        "Executing database migrations and network socket polling",
        "Drawing UI widgets and dispatching user input events",
        "Garbage collection and DEX optimization",
        "Compiling XML layouts to C++"
      ],
      answer: 1,
      explanation: "Lecture 5 Slide 9: 'Main thread: Drawing widgets, Dispatching user inputs; Widget toolkit is not thread-safe'.",
      slideRef: "Lecture 5, Slide 9"
    },
    {
      id: 58,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "What is Rule #1 of the Android Thread Model?",
      options: [
        "Always manipulate Views on worker threads",
        "Do not block the Main thread (don't do slow calculations, network access, or heavy processing on it)",
        "Do not create more than one thread in an app",
        "Always run database queries on the UI thread"
      ],
      answer: 1,
      explanation: "Rule 1: Don't do slow things on the main thread (network access, image processing, heavy calculations). Blocking causes ANR.",
      slideRef: "Lecture 5, Slide 10"
    },
    {
      id: 59,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "What exact exception is thrown if you try to modify a View from a background worker thread?",
      options: [
        "NullPointerException",
        "android.view.ViewRootImpl$CalledFromWrongThreadException",
        "IllegalStateException",
        "NetworkOnMainThreadException"
      ],
      answer: 1,
      explanation: "Lecture 5 Slide 11: Touching views from a worker thread throws: android.view.ViewRootImpl$CalledFromWrongThreadException: Only the original thread that created a view hierarchy can touch its views.",
      slideRef: "Lecture 5, Slide 11"
    },
    {
      id: 60,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "What mechanism is used to communicate messages from a worker thread back to the Main Thread?",
      options: [
        "Handler and Message",
        "Intent and BroadcastReceiver only",
        "SharedPreferences",
        "Native C++ pipes"
      ],
      answer: 0,
      explanation: "Handler: A way to communicate with the main thread. Worker thread calls handler.sendMessage(msg); handler.handleMessage(msg) runs on the main thread.",
      slideRef: "Lecture 5, Slide 14"
    },
    {
      id: 61,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "On which thread does Handler.handleMessage(Message msg) execute when the handler is created on the Main Looper?",
      options: [
        "The worker thread that called sendMessage()",
        "The Main (UI) thread",
        "A daemon thread in the Linux kernel",
        "The Garbage Collection thread"
      ],
      answer: 1,
      explanation: "Handler.handleMessage() is executed on the thread associated with its Looper, here the Main (UI) thread.",
      slideRef: "Lecture 5, Slide 14, 16"
    },
    {
      id: 62,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "What is AsyncTask in Android?",
      options: [
        "A replacement for the Linux Kernel process scheduler",
        "An encapsulation of Thread and Handler that allows worker threads to easily report progress back to the UI",
        "A database abstraction for SQLite",
        "A layout manager for ViewPager"
      ],
      answer: 1,
      explanation: "Lecture 5 Slide 21: 'AsyncTask: An encapsulation of Handler and Thread; Also allow the worker thread to report its work progress to the UI'.",
      slideRef: "Lecture 5, Slide 21"
    },
    {
      id: 63,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "In AsyncTask<Params, Progress, Result>, what do the three generic types represent?",
      options: [
        "Params: worker thread input; Progress: UI update type; Result: delivered result type",
        "Params: thread priority; Progress: CPU clock; Result: return code",
        "Params: URL; Progress: HTTP status; Result: HTML string",
        "Params: Context; Progress: Activity; Result: Fragment"
      ],
      answer: 0,
      explanation: "Params: type passed to worker thread; Progress: type to report progress back; Result: result type to be delivered upon completion.",
      slideRef: "Lecture 5, Slide 22"
    },
    {
      id: 64,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "In AsyncTask<String, Integer, Bitmap>, what does the Integer generic type represent?",
      options: [
        "The thread ID",
        "The download percentage progress reported to the UI",
        "The width of the bitmap image",
        "The HTTP status code"
      ],
      answer: 1,
      explanation: "Slide 27: 1st param String (URL), 2nd param Integer (Percentage progress), 3rd param Bitmap (Decoded image).",
      slideRef: "Lecture 5, Slide 27"
    },
    {
      id: 65,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "Which of the four core methods of AsyncTask is REQUIRED to be implemented by a subclass?",
      options: [
        "onPreExecute()",
        "doInBackground()",
        "onProgressUpdate()",
        "onPostExecute()"
      ],
      answer: 1,
      explanation: "Lecture 5 Slide 24: [optional] onPreExecute(), [required] doInBackground(), [optional] onProgressUpdate(), [optional] onPostExecute().",
      slideRef: "Lecture 5, Slide 24"
    },
    {
      id: 66,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "Which AsyncTask method executes on the background WORKER thread?",
      options: [
        "onPreExecute()",
        "doInBackground()",
        "onProgressUpdate()",
        "onPostExecute()"
      ],
      answer: 1,
      explanation: "doInBackground() is the ONLY method executed on the worker thread. onPreExecute, onProgressUpdate, and onPostExecute run on the Main thread.",
      slideRef: "Lecture 5, Slide 24, 28"
    },
    {
      id: 67,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "Can you update an ImageView directly from inside AsyncTask.doInBackground()?",
      options: [
        "Yes, Android automatically dispatches it safely",
        "No, doing so will throw a CalledFromWrongThreadException because doInBackground runs on a worker thread",
        "Yes, but only if the image is in PNG format",
        "Yes, if the activity is in onResume"
      ],
      answer: 1,
      explanation: "doInBackground() runs on a worker thread, and worker threads must NEVER manipulate UI Views directly.",
      slideRef: "Lecture 5, Slide 11, 28"
    },
    {
      id: 68,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "Where should you write code to display a downloaded Bitmap on an ImageView after AsyncTask completes?",
      options: [
        "Inside onPreExecute()",
        "Inside doInBackground()",
        "Inside onPostExecute(Bitmap bitmap)",
        "Inside publishProgress()"
      ],
      answer: 2,
      explanation: "Slide 29: onPostExecute(Bitmap bitmap) runs on the main thread and receives the result returned by doInBackground(), making it safe to update the ImageView.",
      slideRef: "Lecture 5, Slide 28-29"
    },
    {
      id: 69,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "How does code inside doInBackground() trigger a call to onProgressUpdate() on the Main thread?",
      options: [
        "By calling publishProgress(values)",
        "By calling handler.sendMessage()",
        "By returning from doInBackground()",
        "By calling notify()"
      ],
      answer: 0,
      explanation: "Calling publishProgress(Progress... values) from doInBackground schedules onProgressUpdate(Progress... values) to execute on the main thread.",
      slideRef: "Lecture 5, Slide 28"
    },
    {
      id: 70,
      lecture: 5,
      lectureTitle: "Background Tasks & Services",
      question: "In Practical Work 14, how was an AsyncTask simulated in the student's project?",
      options: [
        "Simulate network latency with Thread.sleep() inside doInBackground() and show a Toast with the result inside onPostExecute()",
        "Download 10GB of video files on the UI thread",
        "Create 100 threads in a while-true loop",
        "Call finish() inside doInBackground()"
      ],
      answer: 0,
      explanation: "Lecture 5 Slide 30 (PW 14 Hint): 'Simulate a network request and show on a toast. Hint: sleep() in doInBackground, Toast in onPostExecute()'.",
      slideRef: "Lecture 5, Slide 30"
    }
  ],

  flashcards: [
    {
      id: "fc-1",
      category: "Platform",
      front: "Is Android a device or an operating system?",
      back: "Android is a Mobile Operating System, a Linux Distribution, and a set of user-space applications/frameworks. It is NOT a device!"
    },
    {
      id: "fc-2",
      category: "Grading",
      front: "What is the assessment grade breakdown in MAD?",
      back: "Attendance: 10%\nMidterm Project: 20%\nFinal Project: 50%\nOral Exam: 20%\n(4 ECTS = 40 hours total)"
    },
    {
      id: "fc-3",
      category: "Architecture",
      front: "What are the 4 main layers of Android Architecture (bottom to top)?",
      back: "1. Linux Kernel (C)\n2. Libraries (C/C++) & Android Runtime (Dalvik/ART)\n3. Application Framework (Java)\n4. Applications (Java)"
    },
    {
      id: "fc-4",
      category: "Compilation",
      front: "What is the compilation pipeline from .java to .apk?",
      back: ".java (source)\n-> javac ->\n.class (Java bytecode)\n-> dx compiler ->\n.dex (Dalvik executable)\n-> packaged into .apk"
    },
    {
      id: "fc-5",
      category: "Runtime",
      front: "What is the key difference between Dalvik and ART?",
      back: "Dalvik uses JIT (Just-In-Time) compilation at runtime.\nART uses AOT (Ahead-Of-Time) compilation during installation for faster execution."
    },
    {
      id: "fc-6",
      category: "Sandboxing",
      front: "How does Android isolate applications for security?",
      back: "Each app runs in its own Linux process, with its own VM instance, and is assigned a unique Linux User ID (UID)."
    },
    {
      id: "fc-7",
      category: "Controllers",
      front: "What are the 4 Controllers in Android's MVC architecture?",
      back: "1. Context\n2. Application\n3. Activity\n4. Fragment"
    },
    {
      id: "fc-8",
      category: "Lifecycle",
      front: "What are the core Activity lifecycle methods in chronological order?",
      back: "onCreate() -> onStart() -> onResume()\n[Running / Active]\nonPause() -> onStop() -> onDestroy()"
    },
    {
      id: "fc-9",
      category: "Lifecycle",
      front: "What happens to an Activity on screen rotation?",
      back: "The Activity is destroyed and recreated:\nonSaveInstanceState() -> onDestroy() -> new instance created -> onCreate() -> onRestoreInstanceState()"
    },
    {
      id: "fc-10",
      category: "Resources",
      front: "In onPause(), what resources should be released?",
      back: "Expensive shared resources such as the Camera (e.g. mCamera.release()), pause animations, and save unsaved draft data."
    },
    {
      id: "fc-11",
      category: "Fragments",
      front: "When were Fragments introduced natively vs support library?",
      back: "Natively introduced in Android 3.0 Honeycomb (API 11) for tablet multi-pane UI.\nSupported down to Android 1.6 Donut (API 4) via Support Library."
    },
    {
      id: "fc-12",
      category: "Layouts",
      front: "How does FrameLayout stack child views?",
      back: "Z-order based (like Photoshop layers). The first child defined in XML is placed at the bottom of the stack."
    },
    {
      id: "fc-13",
      category: "Layouts",
      front: "What is the LinearLayout layout_weight distribution formula?",
      back: "Remaining space = Parent size - sum of fixed sizes.\nWidth_i = base_i + (weight_i / sum_of_weights) * Remaining space"
    },
    {
      id: "fc-14",
      category: "Layouts",
      front: "Parent: 720px horizontal. Btn 1: 0px (w=1). Btn 2: 100px (no weight). Btn 3: 0px (w=1). Widths?",
      back: "Remaining = 720 - 100 = 620px.\nWeight sum = 2.\nBtn 1 = 310px\nBtn 2 = 100px\nBtn 3 = 310px"
    },
    {
      id: "fc-15",
      category: "Drawables",
      front: "In a 9-Patch image (*.9.png), what do top/left vs bottom/right borders mean?",
      back: "Top & Left: Black pixels define the STRETCHABLE region.\nBottom & Right: Black pixels define the CONTENT / PADDING region."
    },
    {
      id: "fc-16",
      category: "Raw Data",
      front: "What is the difference between res/raw/ and assets/?",
      back: "res/raw/ generates R.raw IDs, must follow resource naming rules.\nassets/ has NO R IDs, allows arbitrary filenames and subdirectories, accessed via getAssets().open()."
    },
    {
      id: "fc-17",
      category: "Menus",
      front: "What are the 3 values for app:showAsAction in menu XML?",
      back: "'always' = always on toolbar\n'ifRoom' = on toolbar if space permits\n'never' = always in 3-dots overflow popup menu"
    },
    {
      id: "fc-18",
      category: "Threading",
      front: "What is Rule #1 of Android Threading?",
      back: "NEVER block the Main (UI) thread with long-running tasks (network, disk, heavy math) -> prevents ANR (Application Not Responding)."
    },
    {
      id: "fc-19",
      category: "Threading",
      front: "What happens if a worker thread modifies a View directly?",
      back: "Crashes with: android.view.ViewRootImpl$CalledFromWrongThreadException: Only the original thread that created a view hierarchy can touch its views."
    },
    {
      id: "fc-20",
      category: "AsyncTask",
      front: "What do the 3 generics in AsyncTask<Params, Progress, Result> represent?",
      back: "Params = input type to worker thread (doInBackground)\nProgress = type for progress updates (onProgressUpdate)\nResult = output type delivered to UI (onPostExecute)"
    },
    {
      id: "fc-21",
      category: "AsyncTask",
      front: "Which AsyncTask method runs on the background worker thread?",
      back: "ONLY doInBackground()!\nonPreExecute, onProgressUpdate, and onPostExecute ALL run on the Main (UI) Thread."
    },
    {
      id: "fc-22",
      category: "ViewPager",
      front: "How do you connect a ViewPager to a TabLayout?",
      back: "tabLayout.setupWithViewPager(pager);\nRequires an adapter extending FragmentPagerAdapter or PagerAdapter."
    }
  ]
};
