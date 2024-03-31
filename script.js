document.getElementById("textInputButton").addEventListener("click", function() {
    const textInput = document.getElementById("textInput");

    // Check if the input field is not null and has a value
    if (textInput && textInput.value.trim() !== "") {
        displaySignLanguage(textInput.value);
    }
    textInput.textContent = "";
});

const startListening = () => {
    let recognition;
    if (window.webkitSpeechRecognition) {
        recognition = new webkitSpeechRecognition();
    } else if (window.SpeechRecognition) {
        recognition = new SpeechRecognition();
    } else {
        console.error('Speech recognition is not supported in this browser.');
        return;
    }

    recognition.lang = selectedLanguageCurrent; // Specify the language

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        // document.getElementById('transcription').textContent = transcript;

        console.log('Transcribed text: ', transcript);
        displaySignLanguage(transcript);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error occurred:', event.error);
    };

    recognition.start();
};

// Function to handle audio file
const handleAudioFile = async (input) => {
    const file = input.files[0];
    if (file) {
        const text = "Zoki je najjaci";
        displaySignLanguage(text);
    }
};
function displaySignLanguage(text) {
    // Clear previous images
    clearSignLanguage();
    // Assuming 'text' is the input text
    const container = document.getElementById('sign-language-container');

    // Function to show an image for a letter
    function showImage(letter) {
        const img = document.createElement('img');
        img.width = 100;
        img.height = 100;
        img.src = `./znakovi/${letter}.png`;
        img.alt = letter;
        container.appendChild(img);
    }

    // Function to check and replace love phrases
    const replaceLovePhrases = (input) => {
        const lovePhrases = {
            'sr': ['volim te', 'ja te volim', 'ljubim te', 'volem te', 'volim vas', 'ljubim vas', 'volem vas'],
            'en': ['i love you', 'love you', 'luv ya', 'luv u', 'love ya', 'love u'],
            'es': ['te quiero', 'te amo', 'amor', 'quiero mucho', 'me gustas']
        };
        let replacedInput = input;
        for (const lang in lovePhrases) {
            if (lovePhrases.hasOwnProperty(lang)) {
                lovePhrases[lang].forEach(phrase => {
                    if (input.toLowerCase().includes(phrase)) {
                        replacedInput = replacedInput.replace(new RegExp(phrase, 'gi'), 'ily');
                    }
                });
            }
        }
        return replacedInput;
    };

    // Function to map special words based on the selected language
    const mapSpecialWords = (word) => {
        const specialWordsMapping = {
            'sr': ['majk', 'prijatelj', 'zdravo'],
            'es': ['madre', 'amigo', 'hola'],
            'en': ['mother', 'friend', 'hello']
        };
        const specialWords = specialWordsMapping[selectedLanguageCurrent] || [];
        const specialWord = specialWords.find(special => word.toLowerCase().includes(special)) || '';
        if (specialWord && specialWord !== '') {
            showImage(specialWord);
            return true; // Indicate that a special word was found
        }
        return false; // Indicate that no special word was found
    };


    // Replace love phrases with 'ily'
    text = replaceLovePhrases(text);

    // Loop through each word in the input text
    text.split(' ').forEach(word => {
        // Check for special cases
        if (word === "ily") {
            showImage("ily");
            return;
        }
        if (mapSpecialWords(word)) {
            return; // Move to the next iteration if a special word is found
        }
        // Loop through each letter in the word
        for (let i = 0; i < word.length; i++) {
            let letter = word[i].toLowerCase();
            // Check if the character is from Cyrillic script
            if (/[\u0400-\u04FF]/.test(letter)) {
                letter = convertToLatin(letter);
            }
            // Check for combinations 'lj', 'nj', 'dž', and 'đ' only if the language selected is Serbian
            if (selectedLanguageCurrent === 'sr') {
                const nextLetter = i < word.length - 1 ? word[i + 1].toLowerCase() : '';
                if ((letter === 'l' || letter === 'n') && nextLetter === 'j') {
                    letter += 'j';
                    i++;
                } else if (letter === 'd' && nextLetter === 'ž') {
                    letter = 'dž';
                    i++;
                } else if (letter === 'd' && nextLetter === 'j') {
                    letter = 'đ';
                    i++;
                }
                // Dodati sr ako je srpski zbog duplo rucnog znakovnog pokazivanja
                letter = letter + '_sr';
            }
            showImage(letter);
        }
        // Add a space between words
        const space = document.createElement('div');
        space.width = 500;
        space.height = 5;
        container.appendChild(space);
    });

    // Function to convert Cyrillic to Latin script
    function convertToLatin(char) {
        const cyrillicToLatinMap = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ђ': 'đ', 'е': 'e', 'ж': 'ž', 'з': 'z', 'и': 'i',
            'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj', 'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r',
            'с': 's', 'т': 't', 'ћ': 'ć', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'џ': 'dž', 'ш': 'š'
        };
        return cyrillicToLatinMap[char] || char;
    }
}


function clearSignLanguage() {
    const container = document.getElementById('sign-language-container');
    container.innerHTML = ''; // Clear the container content
}
let selectedLanguageCurrent = localStorage.getItem('selectedLanguage') || 'sr';

const selectLanguage = (langCode) => {
    const selectedLanguage = document.getElementById("selectedLanguage");
    switch(langCode) {
        case 'en':
            selectedLanguageCurrent = "en";    
            selectedLanguage.textContent = "English";
            // Update other text elements accordingly
            break;
        case 'fr':
            selectedLanguageCurrent = "fr";
            selectedLanguage.textContent = "Francuski";
            // Update other text elements accordingly
            break;
        case 'sr':
            selectedLanguageCurrent = "sr";    
            selectedLanguage.textContent = "Srpski";
            // Update other text elements accordingly
            break;
        case 'de':
            selectedLanguageCurrent = "de";
            selectedLanguage.textContent = "Nemački";
            // Update other text elements accordingly
            break;
        case 'it':
            selectedLanguageCurrent = "it";    
            selectedLanguage.textContent = "Italijanski";
            // Update other text elements accordingly
            break;
        case 'es':
            selectedLanguageCurrent = "es";    
            selectedLanguage.textContent = "Španski";
            // Update other text elements accordingly
            break;
        default:
            selectedLanguage.textContent = "Select Language";
    }
    // Save selected language to local storage
    localStorage.setItem('selectedLanguage', selectedLanguageCurrent);
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
});  
