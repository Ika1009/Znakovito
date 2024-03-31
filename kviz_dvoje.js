// Create an array of quiz questions
// Create an array of quiz questions
const quizQuestionsNaSrpskom = [
    {
        question: "Koji znak predstavlja slovo Y u Američkom Znakovnom Jeziku?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/c.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/y.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/u.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/d.png", isCorrect: false }
        ]
    },
    {
        question: "Koji znak predstavlja slovo A u Američkom Znakovnom Jeziku?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/o.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/h.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/a.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/s.png", isCorrect: false }
        ]
    },
    {
        question: "Koji od ovih znakova predstavlja Ljubav?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/ily.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/majk.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/y.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/zdravo.png", isCorrect: false }
        ]
    },
    {
        question: "Koji znak predstavlja slovo N u Američkom Znakovnom Jeziku?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/j.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/g.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/r.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/n.png", isCorrect: true }
        ]
    },    
    {
        question: "Koji znak predstavlja slovo T u Američkom Znakovnom Jeziku?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/u.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/b.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/z.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/t.png", isCorrect: true }
        ]
    },
    {
        question: "Koji znak predstavlja slovo W u Američkom Znakovnom Jeziku?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/q.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/g.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/w.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/x.png", isCorrect: false }
        ]
    }
];

let scores = [0, 0];
let currentQuestionIndex = 0;
let currentPlayer = 0;

// Add player usernames
let playerUsernames = ["Player 1 Username", "Player 2 Username"];

function displayQuestion() {
    if(currentQuestionIndex == 6) // Quiz finished
    {
        document.getElementById("popupTitle").textContent = "Quiz Finished - " + playerUsernames[0] + ": " + scores[0] + " - " + playerUsernames[1] + ": " + scores[1];
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
        scores[currentPlayer]++;
        resultText.textContent = playerUsernames[currentPlayer] + " Correct! - " + playerUsernames[0] + ": " + scores[0] + " - " + playerUsernames[1] + ": " + scores[1];
        helpText.textContent = "Proceed to the next question"
        iicon.classList.add("bg-green-100");
        icon.classList.add("text-green-600");
        console.log("Correct");
    } else {
        scores[currentPlayer]--;
        resultText.textContent = playerUsernames[currentPlayer] + " Incorrect! - " + playerUsernames[0] + ": " + scores[0] + " - " + playerUsernames[1] + ": " + scores[1];
        helpText.textContent = "The correct answer was: ";
        popup.getElementById("popupImage").src = option.text;
        iicon.classList.add("bg-red-100");
        icon.classList.add("text-red-600");
        console.log("Incorrect");
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
