// Application Logic for Android Front-End Midterm Trainer

// --- Audio Feedback Engine (Web Audio API) ---
class SoundEffects {
  constructor() {
    this.audioCtx = null;
    this.muted = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.18);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.04);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }
}

const sfx = new SoundEffects();

// --- Main State ---
const State = {
  activeView: "practice-view",
  allQuestions: QUIZ_DATA.questions || [],
  filteredQuestions: [...(QUIZ_DATA.questions || [])],
  practiceIndex: 0,
  practiceScore: 0,
  userPracticeAnswers: {}, // id -> { selectedIndex, isCorrect }
  bookmarkedIds: new Set(JSON.parse(localStorage.getItem("mad_bookmarks") || "[]")),

  // Mock Exam State
  mockQuestions: [],
  mockIndex: 0,
  mockAnswers: {}, // id -> selectedIndex
  mockTimerInterval: null,
  mockRemainingSeconds: 20 * 60,

  // Flashcards State
  flashcards: QUIZ_DATA.flashcards || [],
  fcIndex: 0
};

// --- DOM References ---
const DOM = {
  // Navigation
  navButtons: document.querySelectorAll(".tab-btn"),
  views: document.querySelectorAll(".view-section"),
  soundToggleBtn: document.getElementById("sound-toggle-btn"),

  // Practice Quiz
  lectureFilter: document.getElementById("lecture-filter"),
  shuffleBtn: document.getElementById("shuffle-btn"),
  progressText: document.getElementById("quiz-progress-text"),
  scoreText: document.getElementById("quiz-score-text"),
  accuracyText: document.getElementById("quiz-accuracy-text"),
  progressBar: document.getElementById("quiz-progress-bar"),
  lectureBadge: document.getElementById("q-lecture-badge"),
  bookmarkBtn: document.getElementById("q-bookmark-btn"),
  questionText: document.getElementById("q-text"),
  optionsContainer: document.getElementById("options-container"),
  explanationBox: document.getElementById("q-explanation-box"),
  explanationText: document.getElementById("q-explanation-text"),
  slideRef: document.getElementById("q-slide-ref"),
  prevBtn: document.getElementById("q-prev-btn"),
  nextBtn: document.getElementById("q-next-btn"),

  // Mock Exam
  mockSetupCard: document.getElementById("mock-setup-card"),
  mockActiveCard: document.getElementById("mock-active-card"),
  mockResultsCard: document.getElementById("mock-results-card"),
  startMockBtn: document.getElementById("start-mock-btn"),
  mockTimer: document.getElementById("mock-timer"),
  mockCounter: document.getElementById("mock-question-counter"),
  submitMockBtn: document.getElementById("submit-mock-btn"),
  mockQText: document.getElementById("mock-q-text"),
  mockOptionsContainer: document.getElementById("mock-options-container"),
  mockPrevBtn: document.getElementById("mock-prev-btn"),
  mockNextBtn: document.getElementById("mock-next-btn"),
  mockScorePercent: document.getElementById("mock-score-percent"),
  mockResultStatus: document.getElementById("mock-result-status"),
  mockResultSummary: document.getElementById("mock-result-summary"),
  mockReviewList: document.getElementById("mock-review-list"),
  retakeMockBtn: document.getElementById("retake-mock-btn"),

  // Flashcards
  fcCard: document.getElementById("flashcard-element"),
  fcCategory: document.getElementById("fc-category"),
  fcPrompt: document.getElementById("fc-prompt"),
  fcAnswer: document.getElementById("fc-answer"),
  fcCounter: document.getElementById("fc-counter"),
  fcPrevBtn: document.getElementById("fc-prev-btn"),
  fcNextBtn: document.getElementById("fc-next-btn"),

  // Weight Calculator
  calcParentWidth: document.getElementById("calc-parent-width"),
  calcChild1Weight: document.getElementById("calc-child1-weight"),
  calcChild2Fixed: document.getElementById("calc-child2-fixed"),
  calcChild3Weight: document.getElementById("calc-child3-weight"),
  previewChunk1: document.getElementById("preview-chunk-1"),
  previewChunk2: document.getElementById("preview-chunk-2"),
  previewChunk3: document.getElementById("preview-chunk-3"),
  calcBreakdownText: document.getElementById("calc-breakdown-text")
};

// --- View Navigation ---
function switchView(viewId) {
  DOM.views.forEach(v => v.classList.remove("active"));
  DOM.navButtons.forEach(b => b.classList.remove("active"));

  const targetView = document.getElementById(viewId);
  const targetBtn = Array.from(DOM.navButtons).find(b => b.dataset.target === viewId);

  if (targetView) targetView.classList.add("active");
  if (targetBtn) targetBtn.classList.add("active");

  State.activeView = viewId;
  sfx.playClick();
}

DOM.navButtons.forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.target));
});

// Sound Toggle
DOM.soundToggleBtn.addEventListener("click", () => {
  sfx.muted = !sfx.muted;
  DOM.soundToggleBtn.textContent = sfx.muted ? "🔇" : "🔔";
  DOM.soundToggleBtn.title = sfx.muted ? "Unmute Sounds" : "Mute Sounds";
});

// --- Practice Quiz Logic ---
function filterQuestions() {
  const selected = DOM.lectureFilter.value;
  if (selected === "all") {
    State.filteredQuestions = [...State.allQuestions];
  } else if (selected === "bookmarked") {
    State.filteredQuestions = State.allQuestions.filter(q => State.bookmarkedIds.has(q.id));
  } else {
    const lecNum = parseInt(selected, 10);
    State.filteredQuestions = State.allQuestions.filter(q => q.lecture === lecNum);
  }

  if (State.filteredQuestions.length === 0) {
    alert("No questions found for this filter!");
    DOM.lectureFilter.value = "all";
    State.filteredQuestions = [...State.allQuestions];
  }

  State.practiceIndex = 0;
  renderPracticeQuestion();
}

DOM.lectureFilter.addEventListener("change", filterQuestions);

DOM.shuffleBtn.addEventListener("click", () => {
  sfx.playClick();
  State.filteredQuestions.sort(() => Math.random() - 0.5);
  State.practiceIndex = 0;
  renderPracticeQuestion();
});

function renderPracticeQuestion() {
  const q = State.filteredQuestions[State.practiceIndex];
  if (!q) return;

  // Header / Badge
  DOM.lectureBadge.textContent = `Lecture ${q.lecture}: ${q.lectureTitle}`;
  DOM.questionText.textContent = `${State.practiceIndex + 1}. ${q.question}`;

  // Bookmark status
  const isBookmarked = State.bookmarkedIds.has(q.id);
  DOM.bookmarkBtn.textContent = isBookmarked ? "★" : "☆";
  DOM.bookmarkBtn.classList.toggle("active", isBookmarked);

  // Clear options
  DOM.optionsContainer.innerHTML = "";

  const savedAnswer = State.userPracticeAnswers[q.id];
  const prefixes = ["A", "B", "C", "D"];

  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-prefix">${prefixes[idx]}</span><span>${optText}</span>`;

    if (savedAnswer) {
      btn.disabled = true;
      if (idx === q.answer) {
        btn.classList.add("correct");
      }
      if (idx === savedAnswer.selectedIndex && idx !== q.answer) {
        btn.classList.add("wrong");
      }
    } else {
      btn.addEventListener("click", () => handlePracticeAnswer(idx, q));
    }

    DOM.optionsContainer.appendChild(btn);
  });

  // Explanation
  if (savedAnswer) {
    DOM.explanationText.textContent = q.explanation;
    DOM.slideRef.textContent = `Reference: ${q.slideRef}`;
    DOM.explanationBox.classList.add("active");
  } else {
    DOM.explanationBox.classList.remove("active");
  }

  // Navigation state
  DOM.prevBtn.disabled = State.practiceIndex === 0;
  DOM.nextBtn.textContent = (State.practiceIndex === State.filteredQuestions.length - 1) ? "Finish Quiz" : "Next Question →";

  // Progress Bar & Stats
  updatePracticeStats();
}

function handlePracticeAnswer(chosenIdx, question) {
  const isCorrect = (chosenIdx === question.answer);
  State.userPracticeAnswers[question.id] = { selectedIndex: chosenIdx, isCorrect };

  if (isCorrect) {
    sfx.playCorrect();
    State.practiceScore++;
  } else {
    sfx.playWrong();
  }

  renderPracticeQuestion();
}

function updatePracticeStats() {
  const total = State.filteredQuestions.length;
  const current = State.practiceIndex + 1;
  DOM.progressText.textContent = `${current} / ${total}`;

  const pct = Math.round((current / total) * 100);
  DOM.progressBar.style.width = `${pct}%`;

  const answeredList = Object.values(State.userPracticeAnswers);
  const answeredCount = answeredList.length;
  const correctCount = answeredList.filter(a => a.isCorrect).length;

  DOM.scoreText.textContent = `${correctCount} / ${answeredCount}`;
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  DOM.accuracyText.textContent = answeredCount > 0 ? `${accuracy}%` : "-%";
}

// Next / Prev button listeners
DOM.nextBtn.addEventListener("click", () => {
  sfx.playClick();
  if (State.practiceIndex < State.filteredQuestions.length - 1) {
    State.practiceIndex++;
    renderPracticeQuestion();
  } else {
    alert(`Quiz completed! Your score: ${DOM.scoreText.textContent} (${DOM.accuracyText.textContent})`);
  }
});

DOM.prevBtn.addEventListener("click", () => {
  sfx.playClick();
  if (State.practiceIndex > 0) {
    State.practiceIndex--;
    renderPracticeQuestion();
  }
});

// Bookmark Toggle
DOM.bookmarkBtn.addEventListener("click", () => {
  const q = State.filteredQuestions[State.practiceIndex];
  if (!q) return;

  if (State.bookmarkedIds.has(q.id)) {
    State.bookmarkedIds.delete(q.id);
  } else {
    State.bookmarkedIds.add(q.id);
  }
  localStorage.setItem("mad_bookmarks", JSON.stringify(Array.from(State.bookmarkedIds)));
  sfx.playClick();
  renderPracticeQuestion();
});

// --- Mock Exam Logic ---
DOM.startMockBtn.addEventListener("click", startMockExam);

function startMockExam() {
  sfx.playClick();
  // Pick 20 randomized questions across all lectures
  const shuffled = [...State.allQuestions].sort(() => Math.random() - 0.5);
  State.mockQuestions = shuffled.slice(0, 20);
  State.mockIndex = 0;
  State.mockAnswers = {};
  State.mockRemainingSeconds = 20 * 60; // 20 minutes

  DOM.mockSetupCard.style.display = "none";
  DOM.mockResultsCard.style.display = "none";
  DOM.mockActiveCard.style.display = "block";

  // Start timer
  if (State.mockTimerInterval) clearInterval(State.mockTimerInterval);
  updateMockTimerDisplay();
  State.mockTimerInterval = setInterval(() => {
    State.mockRemainingSeconds--;
    updateMockTimerDisplay();
    if (State.mockRemainingSeconds <= 0) {
      clearInterval(State.mockTimerInterval);
      submitMockExam();
    }
  }, 1000);

  renderMockQuestion();
}

function updateMockTimerDisplay() {
  const mins = Math.floor(State.mockRemainingSeconds / 60);
  const secs = State.mockRemainingSeconds % 60;
  DOM.mockTimer.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  if (mins < 3) {
    DOM.mockTimer.style.color = "var(--error)";
  } else {
    DOM.mockTimer.style.color = "var(--warning)";
  }
}

function renderMockQuestion() {
  const q = State.mockQuestions[State.mockIndex];
  if (!q) return;

  DOM.mockCounter.textContent = `Question ${State.mockIndex + 1} of ${State.mockQuestions.length}`;
  DOM.mockQText.textContent = `${State.mockIndex + 1}. ${q.question}`;
  DOM.mockOptionsContainer.innerHTML = "";

  const savedChoice = State.mockAnswers[q.id];
  const prefixes = ["A", "B", "C", "D"];

  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    if (savedChoice === idx) {
      btn.classList.add("selected");
    }
    btn.innerHTML = `<span class="option-prefix">${prefixes[idx]}</span><span>${optText}</span>`;

    btn.addEventListener("click", () => {
      sfx.playClick();
      State.mockAnswers[q.id] = idx;
      renderMockQuestion();
    });

    DOM.mockOptionsContainer.appendChild(btn);
  });

  DOM.mockPrevBtn.disabled = State.mockIndex === 0;
  DOM.mockNextBtn.textContent = (State.mockIndex === State.mockQuestions.length - 1) ? "Finish →" : "Next →";
}

DOM.mockNextBtn.addEventListener("click", () => {
  sfx.playClick();
  if (State.mockIndex < State.mockQuestions.length - 1) {
    State.mockIndex++;
    renderMockQuestion();
  }
});

DOM.mockPrevBtn.addEventListener("click", () => {
  sfx.playClick();
  if (State.mockIndex > 0) {
    State.mockIndex--;
    renderMockQuestion();
  }
});

DOM.submitMockBtn.addEventListener("click", () => {
  const answered = Object.keys(State.mockAnswers).length;
  if (answered < State.mockQuestions.length) {
    if (!confirm(`You have only answered ${answered} of ${State.mockQuestions.length} questions. Submit anyway?`)) {
      return;
    }
  }
  submitMockExam();
});

function submitMockExam() {
  if (State.mockTimerInterval) clearInterval(State.mockTimerInterval);
  sfx.playCorrect();

  let correctCount = 0;
  DOM.mockReviewList.innerHTML = "";

  State.mockQuestions.forEach((q, idx) => {
    const userChoice = State.mockAnswers[q.id];
    const isCorrect = userChoice === q.answer;
    if (isCorrect) correctCount++;

    const item = document.createElement("div");
    item.style.background = isCorrect ? "rgba(16, 185, 129, 0.08)" : "rgba(239, 68, 68, 0.08)";
    item.style.border = `1px solid ${isCorrect ? "var(--success-border)" : "var(--error-border)"}`;
    item.style.padding = "1rem";
    item.style.borderRadius = "var(--radius-sm)";

    const userText = userChoice !== undefined ? q.options[userChoice] : "No answer";
    const correctText = q.options[q.answer];

    item.innerHTML = `
      <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 0.4rem; color: var(--text-main);">
        ${idx + 1}. ${q.question}
      </div>
      <div style="font-size: 0.85rem; color: ${isCorrect ? "var(--success)" : "var(--error)"}; margin-bottom: 0.3rem;">
        ${isCorrect ? "✓ Correct" : `✗ Your answer: ${userText} | Correct: ${correctText}`}
      </div>
      <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">
        ${q.explanation} (<em>${q.slideRef}</em>)
      </div>
    `;
    DOM.mockReviewList.appendChild(item);
  });

  const percentage = Math.round((correctCount / State.mockQuestions.length) * 100);
  DOM.mockScorePercent.textContent = `${percentage}%`;
  DOM.mockResultSummary.textContent = `You scored ${correctCount} out of ${State.mockQuestions.length} questions correct (${percentage}%).`;

  if (percentage >= 80) {
    DOM.mockResultStatus.textContent = "🎉 Excellent Work! Ready for Midterm!";
    DOM.mockResultStatus.style.color = "var(--success)";
  } else if (percentage >= 50) {
    DOM.mockResultStatus.textContent = "👍 Good Attempt! Review your mistakes below.";
    DOM.mockResultStatus.style.color = "var(--warning)";
  } else {
    DOM.mockResultStatus.textContent = "📚 More Study Needed. Check the study guide.";
    DOM.mockResultStatus.style.color = "var(--error)";
  }

  DOM.mockActiveCard.style.display = "none";
  DOM.mockResultsCard.style.display = "block";
}

DOM.retakeMockBtn.addEventListener("click", () => {
  DOM.mockResultsCard.style.display = "none";
  DOM.mockSetupCard.style.display = "block";
});

// --- Flashcards Logic ---
function renderFlashcard() {
  const fc = State.flashcards[State.fcIndex];
  if (!fc) return;

  DOM.fcCard.classList.remove("flipped");
  DOM.fcCategory.textContent = fc.category;
  DOM.fcPrompt.textContent = fc.front;
  DOM.fcAnswer.textContent = fc.back;
  DOM.fcCounter.textContent = `${State.fcIndex + 1} / ${State.flashcards.length}`;
  DOM.fcPrevBtn.disabled = State.fcIndex === 0;
}

DOM.fcCard.addEventListener("click", () => {
  sfx.playClick();
  DOM.fcCard.classList.toggle("flipped");
});

DOM.fcNextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sfx.playClick();
  if (State.fcIndex < State.flashcards.length - 1) {
    State.fcIndex++;
    renderFlashcard();
  }
});

DOM.fcPrevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sfx.playClick();
  if (State.fcIndex > 0) {
    State.fcIndex--;
    renderFlashcard();
  }
});

// --- Interactive LinearLayout Weight Calculator ---
function calculateWeights() {
  const parentWidth = parseFloat(DOM.calcParentWidth.value) || 0;
  const child1Weight = parseFloat(DOM.calcChild1Weight.value) || 0;
  const child2Fixed = parseFloat(DOM.calcChild2Fixed.value) || 0;
  const child3Weight = parseFloat(DOM.calcChild3Weight.value) || 0;

  const remaining = Math.max(0, parentWidth - child2Fixed);
  const totalWeight = child1Weight + child3Weight;

  let width1 = 0;
  let width3 = 0;

  if (totalWeight > 0) {
    width1 = Math.round((child1Weight / totalWeight) * remaining);
    width3 = Math.round((child3Weight / totalWeight) * remaining);
  }

  // Adjust preview percentages
  const pct1 = parentWidth > 0 ? (width1 / parentWidth) * 100 : 0;
  const pct2 = parentWidth > 0 ? (child2Fixed / parentWidth) * 100 : 0;
  const pct3 = parentWidth > 0 ? (width3 / parentWidth) * 100 : 0;

  DOM.previewChunk1.style.width = `${pct1}%`;
  DOM.previewChunk1.textContent = `Btn 1 (${width1}px)`;

  DOM.previewChunk2.style.width = `${pct2}%`;
  DOM.previewChunk2.textContent = `Btn 2 (${child2Fixed}px)`;

  DOM.previewChunk3.style.width = `${pct3}%`;
  DOM.previewChunk3.textContent = `Btn 3 (${width3}px)`;

  DOM.calcBreakdownText.innerHTML = `
    • <strong>Parent width:</strong> ${parentWidth}px<br>
    • <strong>Fixed width (Child 2):</strong> ${child2Fixed}px &rarr; Remaining space = ${parentWidth}px - ${child2Fixed}px = <strong>${remaining}px</strong>.<br>
    • <strong>Sum of weights:</strong> ${child1Weight} + ${child3Weight} = <strong>${totalWeight}</strong>.<br>
    • <strong>Button 1 width:</strong> (${child1Weight} / ${totalWeight}) &times; ${remaining}px = <strong>${width1}px</strong>.<br>
    • <strong>Button 2 width:</strong> <strong>${child2Fixed}px</strong> (fixed size, layout_weight=0).<br>
    • <strong>Button 3 width:</strong> (${child3Weight} / ${totalWeight}) &times; ${remaining}px = <strong>${width3}px</strong>.
  `;
}

[DOM.calcParentWidth, DOM.calcChild1Weight, DOM.calcChild2Fixed, DOM.calcChild3Weight].forEach(input => {
  input.addEventListener("input", calculateWeights);
});

// --- Accordion Logic ---
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    sfx.playClick();
    const item = header.parentElement;
    item.classList.toggle("open");
  });
});

// --- Initialize App ---
function init() {
  renderPracticeQuestion();
  renderFlashcard();
  calculateWeights();
}

window.addEventListener("DOMContentLoaded", init);
