// phew… not a lot going on here. Please add some code!

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons and answers
  const buttons = document.querySelectorAll(".card__button-answer");
  const answers = document.querySelectorAll(".card__answer");

  // Add an event listener to each button
  buttons.forEach(function (button, index) {
    // Select the corresponding answer based on the index of the button
    const answer = answers[index];

    // Add an event listener to react to button clicks
    button.addEventListener("click", function () {
      // Check if the "visible" class is present on the answer
      if (answer.classList.contains("visible")) {
        // If so, change the button text to "Show answer" and remove the "visible" class from the answer
        button.textContent = "Show answer";
        answer.classList.remove("visible");
      } else {
        // If not, change the button text to "Hide answer" and add the "visible" class to the answer
        button.textContent = "Hide answer";
        answer.classList.add("visible");
      }
    });
  });

  // Bookmark toggle function, changes the color of the icon
  const bookmarkButtons = document.querySelectorAll(".bookmark");
  bookmarkButtons.forEach(function (bookmarkButton) {
    bookmarkButton.addEventListener("click", function () {
      const bookmarkIcon = bookmarkButton.querySelector(".bookmark__icon");
      bookmarkIcon.classList.toggle("icon-active");
    });
  });
  // Select the form and form fields
  const form = document.querySelector("form");
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");
  const container = document.querySelector("#container");
  const questionCounter = document.querySelector("#question-counter");
  const answerCounter = document.querySelector("#answer-counter");

  // Function to update the character count display for a field
  const maxCharacters = 150;
  function updateCounter(field, counter) {
    const remaining = maxCharacters - field.value.length;
    counter.textContent = remaining + " characters left...";
  }

  // Add event listeners to update the character count displays for each field
  question.addEventListener("input", () => {
    updateCounter(question, questionCounter);
    checkInput();
  });
  answer.addEventListener("input", () => {
    updateCounter(answer, answerCounter);
    checkInput();
  });

  // Function to check if both fields have input and enable/disable the submit button
  function checkInput() {
    const submitBtn = document.querySelector("#submit-btn");
    if (question.value.length > 0 && answer.value.length > 0) {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Create new elements for the submitted question and answer
    const newDiv = document.createElement("div");
    newDiv.classList.add("qa-container");
    const newQuestion = document.createElement("p");
    newQuestion.textContent = "Frage: " + question.value;
    newQuestion.classList.add("qa-container");
    const newAnswer = document.createElement("p");
    newAnswer.textContent = "Antwort: " + answer.value;
    newAnswer.classList.add("qa-container");
    newDiv.appendChild(newQuestion);
    newDiv.appendChild(newAnswer);
    container.appendChild(newDiv);

    // Reset the form fields and character count displays
    question.value = "";
    answer.value = "";
    updateCounter(question, questionCounter);
    updateCounter(answer, answerCounter);

    // Disable the submit button again
    const submitBtn = document.querySelector("#submit-btn");
    submitBtn.disabled = true;
  });
});
