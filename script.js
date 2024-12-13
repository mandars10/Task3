function toggleAnswer(index) {
  const answers = document.querySelectorAll(".faq-answer");
  const arrows = document.querySelectorAll(".arrow");
  const currentAnswer = answers[index];
  const currentArrow = arrows[index];
  currentAnswer.style.display =
    currentAnswer.style.display === "block" ? "none" : "block";
  currentArrow.classList.toggle("open");
}
