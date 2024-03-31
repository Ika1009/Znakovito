let scores = [0, 0];
let currentQuestionIndex = 0;
let currentPlayer = 0;

function displayQuestion() {
    if(currentQuestionIndex == 6) // Quiz finished
    {
        document.getElementById("popupTitle").textContent = "Quiz Finished - Player 1: " + scores[0] + " - Player 2: " + scores[1];
        document.getElementById("popupDesc").textContent = "The game has ended.";
        popup.classList.remove("hidden");
        const confirmButton = document.getElementById('confirm-button');
            confirmButton.addEventListener('click', function() {
            popup.classList.add("hidden");
            windows.location.href = "./index.html";
        });
    }
    
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    const currentQuestion = quizQuestionsNaEngleskom[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    let imgCounter = 1;
    currentQuestion.options.forEach((option, index) => {
        const img = document.getElementById(imgCounter);
        img.src = option.text;
        img.addEventListener("click", () => checkAnswer(option));
        
        imgCounter++;
    });
    currentQuestionIndex++;
}

function checkAnswer(option) {
    let isCorrect = option.isCorrect;
    console.log("Check answer")
    const icon = document.getElementById("icon");
    const iicon = document.getElementById("iicon");
    const resultText = document.getElementById("popupTitle");
    const helpText = document.getElementById("popupDesc");
    const acceptPrivacyEl = document.getElementById('confirm-button');

    if (isCorrect) {
        resultText.textContent = "Player " + (currentPlayer + 1) + " Correct! - Player 1: " + scores[0] + " - Player 2: " + scores[1];
        helpText.textContent = "Proceed to the next question"
        iicon.classList.add("bg-green-100");
        icon.classList.add("text-green-600");
        console.log("Correct");
        scores[currentPlayer]++;
    } else {
        resultText.textContent = "Player " + (currentPlayer + 1) + " Incorrect! - Player 1: " + scores[0] + " - Player 2: " + scores[1];
        helpText.textContent = "The correct answer was: ";
        popup.getElementById("popupImage").src = option.text;
        iicon.classList.add("bg-red-100");
        icon.classList.add("text-red-600");
        console.log("Incorrect");
        scores[currentPlayer]--;
    }

    // Show the modal with the result
    popup.classList.remove("hidden");

    // Hide the modal and display the next question when the user confirms
    const confirmButton = document.getElementById('confirm-button');
    confirmButton.addEventListener('click', function() {
        popup.classList.add("hidden");
        if (isCorrect) {
            currentPlayer = (currentPlayer + 1) % 2; // Switch player
            displayQuestion();
        }
    });
}

const popup = document.getElementById('info-popup');

// Call displayQuestion() to start the quiz
displayQuestion();
