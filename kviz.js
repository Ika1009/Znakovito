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
            { text: "https://bonanza.rs/fon/znakovi/d_sr.png", isCorrect: false },
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

let username;
function closeModal()
{
    const prvipoput = document.getElementById("my-modal").classList.add("hidden");
    username = document.getElementById("default-input").textContent;
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

    const currentQuestion = quizQuestionsNaEngleskom[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    currentQuestion.options.forEach((option, index) => {
        const img = document.getElementById(index + 1);
        img.src = option.text;
    
        //const grandparent = img.parentElement.parentElement;
        //const newGrandparent = grandparent.cloneNode(true);
        //img.parentElement.replaceChild(newGrandparent, grandparent);
        //newGrandparent.addEventListener("click", () => checkAnswer(option.isCorrect));
        img.addEventListener("click", () => checkAnswer(option));
        console.log("Slika " + img.src + " option " + option);
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
        icon.classList.add("hidden");
        console.log("Correct");
        score++;
    } else {
        resultText.textContent = "Incorrect!";
        helpText.textContent = "The correct answer was: ";
        document.getElementById("popupImage").src = option.text;
        iicon.classList.add("bg-red-100");
        check.classList.add("hidden");
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
            icon.classList.remove("hidden");
            iicon.classList.remove("bg-green-100");
            displayQuestion();
        }
        else {
            iicon.classList.remove("bg-red-100");
            check.classList.remove("hidden");
        }
        displayQuestion();
        

    });
}

const popup = document.getElementById('info-popup');

// Call displayQuestion() to start the quiz
displayQuestion();

let selectedLanguageCurrent = localStorage.getItem('selectedLanguage') || 'sr';

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
      case 'fr':
        selectedLanguageCurrent = "fr";
        languageButton.textContent = "Français";
        let img3 = document.createElement('img');
        img3.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/640px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png';
        img3.alt = 'Zastava Francuske';
        img3.classList.add('h-5', 'w-5', 'rounded-full', 'me-2');
        let targetDiv3 = document.getElementById('languageButton');
        targetDiv3.appendChild(img3);
        break;
      case 'sr':
        selectedLanguageCurrent = "sr";  
        languageButton.textContent = "Srpski";
        let img6 = document.createElement('img');
        img6.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1200px-Flag_of_Serbia.svg.png';
        img6.alt = 'Zastava Srbije';
        img6.classList.add('h-5', 'w-5', 'rounded-full', 'me-2');
        let targetDiv6 = document.getElementById('languageButton');
        targetDiv6.appendChild(img6);     
        break;
      case 'de':
        selectedLanguageCurrent = "de";
        languageButton.textContent = "Deutsch";
        let img2 = document.createElement('img');
        img2.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png';
        img2.alt = 'Zastava Nemačke';
        img2.classList.add('h-5', 'w-5', 'rounded-full', 'me-2');
        let targetDiv2 = document.getElementById('languageButton');
        targetDiv2.appendChild(img2);
        break;
      case 'it':
        selectedLanguageCurrent = "it"; 
        languageButton.textContent = "Italiano";
        let img4 = document.createElement('img');
        img4.src = 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg';
        img4.alt = 'Zastava Italije';
        img4.classList.add('h-5', 'w-5', 'rounded-full', 'me-2');
        let targetDiv4 = document.getElementById('languageButton');
        targetDiv4.appendChild(img4); 
        break;
      case 'es':
        selectedLanguageCurrent = "es";   
        languageButton.textContent = "Español";
        let img5 = document.createElement('img');
        img5.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png';
        img5.alt = 'Zastava Italije';
        img5.classList.add('h-5', 'w-5', 'rounded-full', 'me-2');
        let targetDiv5 = document.getElementById('languageButton');
        targetDiv5.appendChild(img5); 
        break;
      default:
        selectedLanguage.textContent = "Select Language";
    }
    closeDropdown();
};

const closeDropdown = () => {
    const languageOptions = document.getElementById("languageOptions");
    languageOptions.classList.remove("block");
    languageOptions.classList.add("hidden");
};

document.getElementById("languageButton").addEventListener("click", () => {
    const languageOptions = document.getElementById("languageOptions");
    languageOptions.classList.toggle("hidden");
});

// Call selectLanguage with the stored language when the page loads
window.onload = () => {
    selectLanguage(selectedLanguageCurrent);
};
