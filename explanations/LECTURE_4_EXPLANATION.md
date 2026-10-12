# Lecture 4: Android Resources
## Comprehensive Line-by-Line Slide Explanation

---

### Slides 1–3: Resource Overview
- **Slide Text:**
  - `Android Resources`
  - `• Things that are embedded (bundled) into the app`
  - `• Resources in res/ directory`
  - `• Several resource categories`
  - `• Accessible through code: R.<category>.<resourceName>`
  - `• Do NOT hard-code values inside codes`
  - `• Contents: Values, Layouts, Drawables, Raw, Styles, Design Guidelines`
- **Line-by-Line Explanation:**
  - **`Embedded (bundled) into the app`:** Resources are static non-code assets compiled by AAPT (Android Asset Packaging Tool) into the final APK.
  - **`res/ directory`:** Root folder in an Android project containing all structured assets.
  - **`Accessible through code: R.<category>.<resourceName>`:** AAPT generates a static Java class named `R.java`. Every resource file or XML element gets assigned a unique 32-bit hex integer ID (e.g. `R.string.app_name`, `R.layout.main_activity`).
  - **`Do NOT hard-code values inside codes`:** Coding best practice in Android. Raw strings, pixel sizes, and hex colors should never appear directly in Java source code; they must be externalized in `res/` to support theming, localization (i18n), and varying device dimensions.

---

### Slides 4–15: Layouts & Layout XML
- **Slide Text:**
  - **Slide 6–7 (Remind):**
    - `• HTML: <div>, <table>, <header>, <nav>, float, padding`
    - `• Android base class for layouting: ViewGroup (FrameLayout, LinearLayout, RelativeLayout)`
  - **Slide 10 (Layout):**
    - `• A way to organize Views inside an UI`
    - `• Can be created by code or XML files in res/layout`
    - `• Hierarchical “structure” of one UI; Can be nested; WYSIWYG or manual editor`
  - **Slide 11 (Layout XML):**
    - `• Containers (ViewGroups) contain Views (TextView, ImageView, Button...)`
    - `• Required: layout_width, layout_height`
    - `• Optional: id (for later findViewById())`
  - **Slide 13 («Adaptive» Layout on Android):**
    - `• Use different layout XMLs in different directories`
    - `• Tablet: layout-large, layout-xlarge; Phone: layout-normal; Small: layout-small; Orientation: -land, -port`
  - **Slide 14 (Loading XML layout):**
    - `• Activity: in onCreate(), with setContentView(R.layout.activity_layout);`
    - `• Fragment: in onCreateView(), with inflater.inflate(R.layout.fragment_layout, container, false);`
- **Line-by-Line Explanation:**
  - **`ViewGroup`:** The base layout class that defines how child views are measured and positioned on screen.
  - **Required XML Attributes:**
    - Every View inside an XML layout must specify `android:layout_width` and `android:layout_height`.
    - Permitted sizing constants:
      - `match_parent` (formerly `fill_parent`): Expand to occupy all available space within parent.
      - `wrap_content`: Shrink to fit the internal content of the view.
      - Fixed dimension (e.g., `100dp`).
    - `android:id="@+id/name"`: Optional attribute required if the view needs to be referenced in Java via `findViewById(R.id.name)`.
  - **Adaptive Configuration Directories:**
    - Android selects the most appropriate XML file based on device screen characteristics at runtime:
      - `layout/`: Default layout.
      - `layout-land/`: Automatically loaded when device is rotated to landscape orientation.
      - `layout-large/` / `layout-xlarge/`: Automatically loaded on tablets (7" and 10").
  - **Layout Inflation:**
    - **In Activity:** Inflated in `onCreate()` by calling `setContentView(R.layout.xxx)`.
    - **In Fragment:** Inflated in `onCreateView()` using `LayoutInflater`:
      ```java
      return inflater.inflate(R.layout.fragment_layout, container, false);
      ```
      (The `false` parameter prevents the view from being immediately attached to the container before the fragment transaction completes).

---

### Slides 16–24: FrameLayout & LinearLayout (With Weight Math)
- **Slide Text:**
  - **Slide 17–18 (FrameLayout):**
    - `• Can contain multiple children (Views)`
    - `• Multiple layers, Z-based order: like a Photoshop design`
    - `• First child will be at the bottom`
    - `• Support child margins; Support gravity`
  - **Slide 20–22 (LinearLayout):**
    - `• One direction: Horizontal or Vertical`
    - `• LinearLayout Stretching: Use layout_weight`
    - `• Based on orientation: horizontal stretches width, vertical stretches height`
    - `• no layout_weight: no stretch`
    - `• Width calculation formula:`
      ```text
      Width_i = base_i + (weight_i / sum_weights) * (Width_parent - sum_fixed)
      ```
  - **Slide 23 (LinearLayout Exercise 1):**
    - `<LinearLayout width="720px" orientation="horizontal">`
    - `<Button width="0px" weight="1" text="Logout" />`
    - `<Button width="100px" (no weight) text="Restart" />`
    - `<Button width="0px" weight="1" text="Poweroff" />`
    - `What’s the width value of each child in this layout?`
- **Line-by-Line Explanation:**
  - **`FrameLayout`:**
    - Arranges child views in a stacked **Z-order** on top of each other.
    - **Layer ordering:** The **first view** declared in XML is rendered at the **very bottom**; each subsequent view is layered over the previous one.
    - Ideal for overlapping elements (e.g., placing a play button icon on top of a video thumbnail).
    - Uses `android:layout_gravity` (e.g. `center`, `bottom|right`) to position children.
  - **`LinearLayout`:**
    - Positions children strictly along a single axis via `android:orientation="horizontal"` or `"vertical"`.
  - **`layout_weight` Stretching & Math Formula (High-Yield):**
    - Used to distribute remaining unallocated screen real estate among child views.
    - **Step 1:** Measure all fixed child views (`layout_weight` = 0) and subtract their sizes from the parent container dimension:
      ```text
      Remaining Space = Width_parent - Sum_of_fixed_widths
      ```
    - **Step 2:** Sum up the `layout_weight` values of all weighted child views:
      ```text
      Total Weight = sum(weight_j)
      ```
    - **Step 3:** Distribute remaining space proportionally to each weighted view:
      ```text
      Width_i = base_width_i + (weight_i / Total Weight) * Remaining Space
      ```
  - **Walkthrough of Slide 23 Exercise:**
    - Parent Width = `720px`.
    - Fixed child: Button 2 = `100px` (no weight).
    - Weighted children: Button 1 (weight = 1, base = 0px), Button 3 (weight = 1, base = 0px).
    - Remaining space to distribute: `720px - 100px = 620px`.
    - Sum of weights: `1 + 1 = 2`.
    - Button 1 width = `0px + (1 / 2) * 620px = 310px`.
    - Button 2 width = `100px` (fixed).
    - Button 3 width = `0px + (1 / 2) * 620px = 310px`.

---

### Slides 25–30: RelativeLayout
- **Slide Text:**
  - `• Multiple layers, Z-order based: similar to Photoshop layers`
  - `• Relativity of children’s position and size: to parent, to each other`
  - `• Questions: How to simulate vertical LinearLayout using RelativeLayout? Is it possible to simulate LinearLayout’s stretching feature (layout_weight) using RelativeLayout?`
- **Line-by-Line Explanation:**
  - **`RelativeLayout`:**
    - Positions views relative to parent borders (`layout_alignParentTop="true"`, `layout_centerInParent="true"`, `layout_alignParentBottom="true"`).
    - Positions views relative to sibling views using IDs (`layout_below="@id/header"`, `layout_toRightOf="@id/avatar"`, `layout_alignBaseline="@id/title"`).
  - **Simulating LinearLayout in RelativeLayout:**
    - Can simulate vertical ordering by anchoring each view below the previous one (`android:layout_below="@+id/previous_item"`).
    - **Can RelativeLayout simulate `layout_weight`?** No, pure RelativeLayout does not calculate proportional percentage distribution like `layout_weight` without external constraints or PercentRelativeLayout.

---

### Slides 31–46: ViewPager & TabLayout
- **Slide Text:**
  - **Slide 36–38 (ViewPager):**
    - `• Tab-like container, Widely used, user-friendly`
    - `• Horizontal swipe gesture, «Page-by-page» scrolling`
    - `• No header. Use a separate View for that (previously PagerSlidingTabStrip, now TabLayout)`
    - `• Each tab content is a fragment; UI inflated/created by fragment`
    - `• «Off-screen» limit: fragments outside this limit are destroyed and recreated when necessary. Why?`
  - **Slide 39 (XML):** `<android.support.v4.view.ViewPager android:id="@+id/pager" ... />`
  - **Slide 41 (Adapter):**
    - `public class HomeFragmentPagerAdapter extends FragmentPagerAdapter {`
    - `  public int getCount() { return PAGE_COUNT; }`
    - `  public Fragment getItem(int page) { switch(page) ... }`
    - `  public CharSequence getPageTitle(int page) { return titles[page]; }`
    - `}`
  - **Slide 42 (Binding):**
    - `pager.setOffscreenPageLimit(3); pager.setAdapter(adapter);`
  - **Slide 44–46 (Header: TabLayout):**
    - `build.gradle: implementation "com.android.support:design:23.1.0"`
    - `<android.support.design.widget.TabLayout android:id="@+id/tab" ... />`
    - `tabLayout.setupWithViewPager(pager);`
- **Line-by-Line Explanation:**
  - **`ViewPager`:**
    - A ViewGroup that allows swiping horizontally between full-screen pages.
    - Requires a subclass of **`FragmentPagerAdapter`** (or `FragmentStatePagerAdapter`) to supply Fragment instances for each page.
    - 3 core adapter methods to implement:
      1. `getCount()`: Returns the total number of pages.
      2. `getItem(int position)`: Returns the `Fragment` instance for that page index.
      3. `getPageTitle(int position)`: Returns the text title for the tab header.
  - **`setOffscreenPageLimit(int limit)`:**
    - By default, ViewPager keeps 1 page to the left and 1 to the right in memory.
    - If `limit` is set to 3, it retains 3 pages on each side alive in RAM. Pages beyond this boundary are destroyed to prevent out-of-memory errors and recreated when scrolled back into view.
  - **`TabLayout` (Android Support Design Library):**
    - Replaced third-party tab bars (like `PagerSlidingTabStrip`).
    - Linked in Java with a single line:
      ```java
      tabLayout.setupWithViewPager(pager);
      ```
    - Automatically syncs tab clicks with swipe gestures and populates tab titles using `adapter.getPageTitle()`.

---

### Slides 47–57: Values & Internationalization (i18n)
- **Slide Text:**
  - **Slide 49–52 (Why Values?):**
    - `• Central point of all “constants”, Themeable, i18n (internationalization!), Size-, orientation- dependent`
    - `• strings.xml, integers.xml, bool.xml, colors.xml, dimens.xml, arrays.xml, styles.xml`
  - **Slide 53–57 (Qualifiers):**
    - `• Default: res/values/strings.xml -> i18n: res/values-fr/strings.xml`
    - `• Integers: res/values/integers.xml -> Landscape: res/values-land/integers.xml`
    - `• Booleans: res/values/bools.xml -> Tablet: res/values-large/bools.xml`
    - `• Colors: res/values/colors.xml (#3F51B5) -> res/values-large/colors.xml`
    - `• Dimensions: res/values/dimens.xml (dp for layouts, sp for fonts)`
  - **Slide 59 (Accessing Values in Java):**
    - `String title = context.getString(R.string.refresh);`
    - `int cols = getResources().getInteger(R.integer.column_count);`
    - `int color = ContextCompat.getColor(context, R.color.colorPrimary);`
    - `int height = (int) context.getResources().getDimension(R.dimen.title_height);`
- **Line-by-Line Explanation:**
  - **Resource Directories:**
    - `strings.xml`: Text strings `<string name="refresh">Refresh</string>`.
    - `colors.xml`: 32-bit hex color format in **#AARRGGBB** (Alpha, Red, Green, Blue).
    - `dimens.xml`: Sizing units:
      - **`dp` (Density-independent Pixels):** Used for view widths, heights, margins, and padding so they render consistently across varying physical screen densities.
      - **`sp` (Scale-independent Pixels):** Used exclusively for font sizing so user system font scale settings are respected.
  - **Internationalization (i18n):**
    - Placing translated strings in `res/values-vi/strings.xml` (Vietnamese) or `res/values-fr/strings.xml` (French) allows Android to automatically display the correct language based on the phone's system locale without any manual Java code branching.
  - **Reading in Java:**
    - Use `context.getString(R.string.xxx)`, `ContextCompat.getColor(context, R.color.xxx)`, or `getResources().getDimension(R.dimen.xxx)`.

---

### Slides 58–63: Drawables & 9-Patch Images (High-Yield Exam Rules)
- **Slide Text:**
  - **Slide 59 (Drawables):**
    - `• 2 types: XML drawables (res/drawable) & Bitmap drawables (PNG/JPEG) (res/drawable-*dpi)`
    - `• ImageView: src="@drawable/name" ; View: background="@drawable/name"`
  - **Slide 60–62 (9patch Drawables):**
    - `• *.9.png`
    - `• Transparency; Stretch certain part of the image; Padding`
    - `• Top & Left edges: Black pixels define stretching area`
    - `• Bottom & Right edges: Black pixels define paddings`
    - `• Warning: other edge pixels need to be completely transparent`
- **Line-by-Line Explanation:**
  - **Drawables:**
    - XML Drawables: Shapes, vector graphics, gradients, or state lists (`<shape>`, `<selector>`).
    - Bitmap Drawables: Raster images placed in density-qualified folders (`drawable-mdpi`, `drawable-hdpi`, `drawable-xhdpi`, `drawable-xxhdpi`).
  - **9-Patch Images (`*.9.png`):**
    - Standard PNG images surrounded by an extra **1-pixel transparent perimeter frame** containing 1-pixel-wide black indicator marks.
    - **Top Border (Black pixels):** Defines the **horizontal stretchable zone**.
    - **Left Border (Black pixels):** Defines the **vertical stretchable zone**.
    - **Bottom Border (Black pixels):** Defines the **horizontal content padding area**.
    - **Right Border (Black pixels):** Defines the **vertical content padding area**.
    - When a button stretches to fit long text, only the stretchable zones expand, preventing rounded corners or border artwork from distorting.
    - **Rule:** Any border pixel that is not marking a stretch/padding zone must be **100% transparent**.

---

### Slides 64–71: Raw Data (`res/raw/` vs. `assets/`)
- **Slide Text:**
  - `• Embedded in your apps: Anything not common types (JSON, MP3, HTML/CSS/JS)`
  - `• 2 different places: res/raw/ vs assets/`
  - **Slide 67–68 (res/raw/):**
    - `• A «resource»; Conforms resource name convention; Accessible with Context.getResources(); R.raw.<name>`
    - `• InputStream is = context.getResources().openRawResource(R.raw.resid);`
  - **Slide 69–70 (assets/):**
    - `• Not a resource; NO R.<assets>; Name it whatever you like; Supports subfolders`
    - `• InputStream is = getAssets().open("<filename>");`
- **Line-by-Line Explanation:**
  - **`res/raw/`:**
    - Treated as a formal Android resource.
    - AAPT indexes each file into `R.raw.<filename>`.
    - **Strict naming rules:** lowercase letters, digits, and underscores only; **no subdirectories allowed**.
    - Opened via `context.getResources().openRawResource(R.raw.name)`.
  - **`assets/`:**
    - An arbitrary, unindexed raw filesystem folder bundled with the APK.
    - Does **NOT** generate any `R` ID.
    - Allows arbitrary filenames, spaces, mixed cases, and **nested subdirectories** (e.g. `assets/web/fonts/font.ttf`).
    - Opened via `context.getAssets().open("path/to/file")`.

---

### Slides 72–92: Menus & The App Bar (ToolBar)
- **Slide Text:**
  - **Slide 76 (Menu Types):** `App Bar (ActionBar), Context Menu, Popup Menu`
  - **Slide 80–81 (App Bar):**
    - `• Previously called ActionBar; Android Support Library: ToolBar`
    - `• Support material design for API 7+ (Eclair); Best compatibility`
    - `• App Bar layout: Navigation drawer/back icon, app logo, activity title, actions`
  - **Slide 82 (3 Steps to Setup App Bar):**
    - `1. Define Menu resource in res/menu/<name>.xml`
    - `2. Inflate the menu xml in onCreateOptionsMenu()`
    - `3. Respond to actions in onOptionsItemSelected()`
  - **Slide 84–86 (Menu XML Attributes):**
    - `<menu xmlns:android="..." xmlns:app="...">`
    - `<item android:id="@+id/action_search" android:icon="@drawable/ic_search" android:title="@string/search" app:showAsAction="ifRoom" />`
    - `• app:showAsAction values: ifRoom, never, always`
  - **Slide 88–89 (Activity Java Code):**
    - `onCreateOptionsMenu(Menu menu): getMenuInflater().inflate(R.menu.menu_weather, menu); return true;`
    - `onOptionsItemSelected(MenuItem item): switch(item.getItemId()) { case R.id.search: ... return true; default: return super.onOptionsItemSelected(item); }`
- **Line-by-Line Explanation:**
  - **From ActionBar to `Toolbar`:**
    - Native `ActionBar` was tied to the window decor and only available on newer Android releases.
    - Google introduced `Toolbar` in the Android Support Library, which can be placed anywhere in an XML layout hierarchy and backports Material Design action bars down to Android 2.1 Eclair (API 7).
  - **`app:showAsAction` Values (High-Yield):**
    - **`always`:** Always pinned directly onto the App Bar as an icon.
    - **`ifRoom`:** Placed directly on the App Bar if horizontal screen width permits; otherwise demoted into the 3-dots overflow popup menu.
    - **`never`:** Never shown as an icon; always placed inside the 3-dots overflow popup menu.
  - **Java Callbacks:**
    - `onCreateOptionsMenu(Menu menu)`: Called once when the activity's options menu is first displayed. You must call `getMenuInflater().inflate(...)` and return `true` for the menu to be displayed.
    - `onOptionsItemSelected(MenuItem item)`: Invoked whenever the user taps an action button or overflow item. You check `item.getItemId()` against defined resource IDs using a `switch` statement.
