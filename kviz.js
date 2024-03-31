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

// Create an array of quiz questions
const quizQuestionsNaEngleskom = [
    {
        question: "What sign represents the letter A in Serbian Sign Language?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/o_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/h_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/a_sr.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/s_sr.png", isCorrect: false }
        ]
    },    
    {
        question: "What sign represents the letter Ć in Serbian Sign Language?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/c_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/ć_sr.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/u_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/d_sr.png", isCorrect: false }
        ]
    },
    {
        question: "Which of these signs represents the word friendship?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/ily.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/majk.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/prijatelj.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/zdravo.png", isCorrect: false }
        ]
    },
    {
        question: "What sign represents the letter N in Serbian Sign Language?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/j_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/đ_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/č_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/n_sr.png", isCorrect: true }
        ]
    },    
    {
        question: "What sign represents the letter T in Serbian Sign Language?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/u_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/b_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/u_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/t_sr.png", isCorrect: true }
        ]
    },
    {
        question: "What sign represents the letter M in Serbian Sign Language?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/s_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/d_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/m_sr.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/c_sr.png", isCorrect: false }
        ]
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    const currentQuestion = quizQuestionsNaEngleskom[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    let imgCounter = 1;
    currentQuestion.options.forEach((option, index) => {
        const img = document.getElementById(imgCounter);
        img.src = option.text;
    
        //const grandparent = img.parentElement.parentElement;
        //const newGrandparent = grandparent.cloneNode(true);
        //img.parentElement.replaceChild(newGrandparent, grandparent);
        //newGrandparent.addEventListener("click", () => checkAnswer(option.isCorrect));
        img.addEventListener("click", () => checkAnswer(option.isCorrect));
        
        imgCounter++;
    });
    currentQuestionIndex++;
}

function checkAnswer(isCorrect) {
    console.log("Check answer")
    const icon = document.getElementById("icon");
    const iicon = document.getElementById("iicon");
    const resultText = document.getElementById("popupTitle"); // Assuming you have a result-text element in your modal
    const helpText = document.getElementById("popupDesc");
    const acceptPrivacyEl = document.getElementById('confirm-button');

    if (isCorrect) {
        resultText.textContent = "Correct!";
        helpText.textContent = "Proceed to the next question"
        iicon.classList.add("bg-green-100");
        icon.classList.add("text-green-600");
        console.log("Correct");
        currentQuestionIndex++;
    } else {
        resultText.textContent = "Incorrect!";
        helpText.textContent = "The correct answer was: "
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
            displayQuestion();
        }
    });
}

const popup = document.getElementById('info-popup');

// Call displayQuestion() to start the quiz
displayQuestion();

