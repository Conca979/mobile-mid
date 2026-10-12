# Lecture 1: Course Introduction & Assessment
## Comprehensive Line-by-Line Slide Explanation

---

### Slide 1: Title Slide
- **Slide Text:**
  - `Mobile Application Development`
  - `Tran Giang Son, tran-giang.son@usth.edu.vn`
  - `ICT Department, USTH`
- **Line-by-Line Explanation:**
  - **`Mobile Application Development`:** The formal course title (often abbreviated as MAD). Focuses on mobile front-end architectures using Java and the Android SDK.
  - **`Tran Giang Son, tran-giang.son@usth.edu.vn`:** The course instructor and head lecturer at the ICT Department, University of Science and Technology of Hanoi (USTH).
  - **`ICT Department, USTH`:** Information and Communication Technology Department, USTH (Vietnam France University).

---

### Slide 2: Outline
- **Slide Text:**
  - `Course Introduction Course Assessment`
- **Line-by-Line Explanation:**
  - Divides the introductory lecture into two halves: the academic curriculum/expectations, followed by the grading criteria and project requirements.

---

### Slide 3: Expected Learning Outcomes
- **Slide Text:**
  - `• Illustrate key concepts of mobile app development`
  - `• Understand key concepts of mobile app development`
  - `• Develop app for the Android platform`
  - `• Analyze and improve the performance of app`
  - `• Improve team work and communication skill`
  - `• Do the project`
  - `• and (hopefully!), pass it`
- **Line-by-Line Explanation:**
  - **`Illustrate key concepts...` & `Understand key concepts...`:** Students must grasp core mobile architectural patterns: component lifecycles, view trees, event dispatching, asynchronous execution, and resource bundling.
  - **`Develop app for the Android platform`:** Practical development targeting Android using Android Studio, Java, and XML layouts.
  - **`Analyze and improve the performance of app`:** Understanding memory limits, eliminating thread bottlenecks, avoiding UI freezes (ANRs), and minimizing GPU rendering overdraw.
  - **`Improve team work and communication skill`:** Hands-on collaborative group work via Git and GitHub.
  - **`Do the project / and (hopefully!), pass it`:** Passing requires completing both the practical works and the team projects.
- **Exam Focus:**
  - Android performance optimization is tested, specifically around **UI Overdraw** and **background threading**.

---

### Slide 4: Format & Assessment Breakdown
- **Slide Text:**
  - `• 4 ECTS = 40 hours`
  - `• Lecture / Practical work / Project: 24h / 10h / 6h`
  - `• Prerequisites: OOP`
  - `• Assessment:`
  - `• Attendance / Midterm project / Final project / Oral Exam`
  - `• 10% / 20% / 50% / 20%`
- **Line-by-Line Explanation:**
  - **`4 ECTS = 40 hours`:** European Credit Transfer System. 1 credit corresponds to 10 class hours here.
  - **`Lecture / Practical work / Project: 24h / 10h / 6h`:** 24 hours of theory lectures, 10 hours of hands-on practical lab sessions (PW1 to PW14 building the USTH Weather app), and 6 hours dedicated to project coaching.
  - **`Prerequisites: OOP`:** Object-Oriented Programming (Java) is mandatory: inheritance (`extends Activity`), polymorphism (`@Override`), interfaces (`View.OnClickListener`), and encapsulation.
  - **`Assessment: Attendance (10%)`:** Regular class presence.
  - **`Midterm project (20%)`:** Evaluation of group project progress around the midpoint of the course.
  - **`Final project (50%)`:** The primary grade weight (half the total mark), evaluating full app implementation, architecture, and code quality.
  - **`Oral Exam (20%)`:** Individual oral defense / questioning to test student understanding of code and concepts.
- **Exam Trap:**
  - Frequently asked in introductory quiz questions: Final Project is **50%**, Midterm is **20%**, Oral Exam is **20%**, Attendance is **10%**.

---

### Slide 5: Course Content Overview
- **Slide Text:**
  - `• Introduction`
  - `• Fundamentals (activity, fragment, view, context...)`
  - `• Resources (layout, values, 9-patch...)`
  - `• Handling input`
  - `• Storage`
  - `• Networking`
  - `• Background tasks and services`
  - `• Optimization`
  - `• Game (?)`
- **Line-by-Line Explanation:**
  - **`Fundamentals`:** The 4 controllers (`Context`, `Application`, `Activity`, `Fragment`) and basic `View` hierarchy.
  - **`Resources`:** Static assets in `res/` (layouts, strings, colors, dimensions, 9-patch stretchable images, menus).
  - **`Background tasks and services`:** Offloading work from the UI thread using Java Threads, `Handler`, and `AsyncTask`.
  - **`Optimization`:** Eliminating redundant view nesting and profiling GPU rendering overdraw.

---

### Slide 6: Group Projects
- **Slide Text:**
  - `• 5 students per group. Do it now.`
  - `• 2 passes`
  - `• Midterm`
  - `• Final`
- **Line-by-Line Explanation:**
  - Students must self-organize into teams of 5. Evaluation occurs in two distinct passes: Midterm milestone and Final defense.

---

### Slide 7: Suggested Project Topics
- **Slide Text:**
  - `1- Twitter client, 2- Wordpress client, 3- Online music player, 4- Wikipedia client, 5- Dropbox/Box client, 6- Moodle client, 7- Facebook client, 8- Email client, 9- IRC client, 10- Github Browser, 11- Flickr Image Browser, 12- Reddit client, 13- OpenDOTA client, 14- COVID-19 stats, 15- Online news reader, 16- Open Library client, 17- Instagram Client, 18- GrabFood-like Client, 19- Security Camera system, 20- Cryptocurrency Dashboard, 21- Stock dashboard, 22- IMDB client, 23- Recipe-Nutrition app, 24- Google Translate, 25- Chess.com stats, 26- Job market, 27- OpenVisionAPI frontend, 28- arXiv client, 29- NASA client, 30- Flight Info`
- **Line-by-Line Explanation:**
  - List of 30 client-server applications that consume web REST APIs and display dynamic content using Android front-end components.

---

### Slide 8: Git & Repository
- **Slide Text:**
  - `• Github`
  - `• Initial repository and instruction`
  - `• https://github.com/SonTG/androiddev2022`
  - `• Don’t be lazy with your commit messages`
- **Line-by-Line Explanation:**
  - Teams must track development history on GitHub, starting from the instructor's starter template repository. Clean, descriptive commit messages are evaluated.

---

### Slide 10: Presentation Rules
- **Slide Text:**
  - `• Project presentation`
  - `• 15 mins oral`
  - `• 3 mins Q / A`
  - `• Follow the template!`
- **Line-by-Line Explanation:**
  - Presentations must adhere to strict timing: 15 minutes of presentation followed by 3 minutes of questions from the examination committee.

---

### Slides 11–18: Required Presentation Slides Structure
- **Slide Text:**
  - `Presentation structure: Introduction -> Architecture -> Activities -> Networking -> Optimization -> Demo (with emulator) -> Conclusion`
  - **Slide 12 (Introduction):** `What does your app do? Why do we need it?`
  - **Slide 13 (Architecture):** `What are the main components of your app? Figure`
  - **Slide 14 (Activities):** `What are your activities? What does each of them do?`
  - **Slide 15 (Networking):** `Does your app connect to somewhere? How does it do? Blocking or Async access? Which kind of API do you use?`
  - **Slide 16 (Optimization):** `Show your UI overdraw status?`
  - **Slide 17 (Demo):** `Short: functionality. Prepare your own internet connection!`
  - **Slide 18 (Conclusion):** `What was done, What was NOT done, Possible future development`
- **Line-by-Line Explanation:**
  - **Architecture:** Demonstrates how data flows between Model, View, and Controllers.
  - **Activities:** Outlines every screen, its intent triggers, and its lifecycle management.
  - **Networking:** Emphasizes that network access must **never be blocking** (must be asynchronous on a background thread).
  - **Optimization (Crucial slide):** Explicitly asks for **UI Overdraw Status** (visualized using the "Debug GPU Overdraw" developer setting in Android to detect screens drawing the same pixel multiple times).

---

### Slide 19: Course References
- **Slide Text:**
  - `• Books`
  - `• Head First Android Development, by Dawn Griffiths and David Griffiths, Oreilly, 2015.`
  - `• Android Programming: The Big Nerd Ranch Guide, 2nd edition, by Bill Phillips and Brian Hardy, 2015`
  - `• Websites: stackoverflow.com, developer.android.com, com.github`
- **Line-by-Line Explanation:**
  - The course lectures heavily draw theoretical models (like MVC) and diagrams directly from *Big Nerd Ranch Guide (2nd ed, 2015)* and *Head First Android Development (2015)*.
