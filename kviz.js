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

const username;
function closeModal()
{
    username = document.getElementById("default-modal").textContent;
}

let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
    if(currentQuestionIndex == 6) // Quiz finished
    {
        document.getElementById("popupTitle").textContent = "Quiz Finished " + username;
        document.getElementById("popupDesc").textContent = "Your score is " + score;
        popup.classList.remove("hidden");
        const confirmButton = document.getElementById('confirm-button');
            confirmButton.addEventListener('click', function() {
            popup.classList.add("hidden");
            windows.location.href = "./index.html";
        });
    }
    
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    const currentQuestion = quizQuestionsNaSrpskom[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    let imgCounter = 1;
    currentQuestion.options.forEach((option, index) => {
        const img = document.getElementById(imgCounter);
        img.src = option.text;
    
        //const grandparent = img.parentElement.parentElement;
        //const newGrandparent = grandparent.cloneNode(true);
        //img.parentElement.replaceChild(newGrandparent, grandparent);
        //newGrandparent.addEventListener("click", () => checkAnswer(option.isCorrect));
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
        resultText.textContent = "Correct!";
        helpText.textContent = "Proceed to the next question"
        iicon.classList.add("bg-green-100");
        icon.classList.add("text-green-600");
        console.log("Correct");
        score++;
    } else {
        resultText.textContent = "Incorrect!";
        helpText.textContent = "The correct answer was: ";
        popup.getElementById("popupImage").src = option.text;
        iicon.classList.add("bg-red-100");
        icon.classList.add("text-red-600");
        console.log("Incorrect");
        score--;
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

const selectLanguage = (langCode) => {
    const selectedLanguage = document.getElementById("selectedLanguage");
    switch(langCode) {
      case 'en':
        selectedLanguageCurrent = "en";    
        languageButton.textContent = "English";
        let img = document.createElement('img');
        img.src = 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg';
        img.alt = 'Description of the image';
        img.classList.add('h-5', 'w-5', 'rounded-full', 'me-2');
        let targetDiv = document.getElementById('languageButton');
        targetDiv.appendChild(img);
        heder1.textContent = "Practice";
        heder2.textContent = "Quiz";
        heder3.textContent = "Translation";
        tekst1.textContent = "Your guide through the worlds sign languages!";
        tekst2.textContent = "Different countries, different sign languages. With Znakovito, overcome language barriers and learn sign language from any country.";
        tekst3.textContent = "Get started";
        tekst4.textContent = "Deaf and mute persons";
        tekst5.textContent = "marries another deaf and mute person";
        tekst6.textContent = "Audio and text translation";
        tekst7.textContent = "Whether you use voice messages, text input or audio files, Znakovito offers accurate sign language translation - adapted to different local dialects.";
        tekst8.textContent = "Quiz for two";
        tekst9.textContent = "Feel the connection with your partner, friend or family member through a challenging quiz, where your skills in learning sign language are scored.";
        tekst10.textContent = "Learning through games";
        tekst11.textContent = "Explore our single-player quiz that allows you to quickly learn new sign languages ​​while traveling abroad or preparing to communicate in new locations.";
        break;
      case 'fr':
        selectedLanguageCurrent = "fr";
        break;
      case 'sr':
        selectedLanguageCurrent = "sr";    
        break;
      case 'de':
        selectedLanguageCurrent = "de";
        break;
      case 'it':
        selectedLanguageCurrent = "it";  
        break;
      case 'es':
        selectedLanguageCurrent = "es";   
        break;
      default:
        selectedLanguage.textContent = "Select Language";
    }
    closeDropdown();
};

