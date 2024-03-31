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

    recognition.lang = 'sr'; // Specify the language

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
    text = replaceLovePhrases(text);

    // Map English special words to their Serbian equivalents
    const specialWordsMapping = {
        'mother': 'majk',
        'madre': 'majk',
        'friend': 'prijatelj',
        'amigo': 'prijatelj',
        'hello': 'zdravo',
        'halo': 'zdravo',
        'thank you': 'hvala',
        'please': 'molim',
    };
        
    // Loop through each word in the input text
    text.split(' ').forEach(word => {
        if(word == "ily")
        {
            showImage("ily");
            continue;
        }
        
        
        // Check if the current word is a special word based on the selected language
        let specialWord = '';
        
        if (languageSelectedCurrent === 'sr') {
            specialWord = ['majk', 'prijatelj', 'zdravo'].includes(word.toLowerCase()) ? word.toLowerCase() : '';
        } else if (languageSelectedCurrent === 'es') {
            specialWord = ['madre', 'amigo', 'hola'].includes(word.toLowerCase()) ? word.toLowerCase() : '';
        } else if (languageSelectedCurrent === 'en') {
            specialWord = ['mother', 'friend', 'hello'].includes(word.toLowerCase()) ? word.toLowerCase() : '';
        }
        if(specialWord && specialWord !== '') {
            showImage(specialWord);
        }
        
        // Loop through each letter in the word
        for (let i = 0; i < word.length; i++) {
            let letter = word[i].toLowerCase(); // Assuming your image filenames are lowercase
            
            // Check if the character is from Cyrillic script and the language selected is Serbian
            if (languageSelectedCurrent === 'sr' && /[\u0400-\u04FF]/.test(letter)) { // Range for Cyrillic characters
                // Convert Cyrillic to Latin script if applicable
                letter = convertToLatin(letter);
            }
            
            // Check for combinations 'lj', 'nj', 'dž', and 'đ' only if the language selected is Serbian
            if (languageSelectedCurrent === 'sr') {
                const nextLetter = i < word.length - 1 ? word[i + 1].toLowerCase() : '';
                if ((letter === 'l' || letter === 'n') && nextLetter === 'j') {
                    // Combine 'lj' or 'nj' into a single character
                    letter += 'j';
                    // Increment the loop counter to skip the next letter
                    i++;
                } else if (letter === 'd' && nextLetter === 'ž') {
                    // Combine 'd' and 'ž' into 'dž'
                    letter = 'dž';
                    // Increment the loop counter to skip the next letter
                    i++;
                } else if (letter === 'd' && nextLetter === 'j') {
                    // Combine 'd' and 'j' into 'đ'
                    letter = 'đ';
                    // Increment the loop counter to skip the next letter
                    i++;
                }
            }
            showImage(letter);
        }
        
        // Add a space between words
        const space = document.createElement('div');
        space.width = 500;
        space.height = 5;
        container.appendChild(space);
    });

    function showImage(letter){       
        // Create an image element
        const img = document.createElement('img');
        img.width = 100;
        img.height = 100;
        // img.style.objectFit = "contain";
        img.src = `./znakovi/${letter}.png`; // Assuming the images are stored in the 'znakovi' directory
        img.alt = letter; // Set alt text for accessibility 
                    // Append the image to the container
        container.appendChild(img);
    }

    const lovePhrases = {
        'sr': ['volim te', 'ljubim te', 'volem te', 'volim vas', 'ljubim vas', 'volem vas'],
        'en': ['i love you', 'love you', 'luv ya', 'luv u', 'love ya', 'love u']
    };
    
    const replaceLovePhrases = (input) => {
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

    // Function to convert Cyrillic to Latin script
    function convertToLatin(char) {
        // Define a mapping between Cyrillic and Latin characters
        const cyrillicToLatinMap = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ђ': 'đ', 'е': 'e', 'ж': 'ž', 'з': 'z', 'и': 'i',
            'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj', 'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r',
            'с': 's', 'т': 't', 'ћ': 'ć', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'џ': 'dž', 'ш': 'š'
        };
        
        // If the character exists in the mapping, return its Latin counterpart, otherwise return the original character
        return cyrillicToLatinMap[char] || char;
    }

}

function clearSignLanguage() {
    const container = document.getElementById('sign-language-container');
    container.innerHTML = ''; // Clear the container content
}
let selectedLanguageCurrent = "sr";
const selectLanguage = (langCode) => {
    const selectedLanguage = document.getElementById("selectedLanguage");
    switch(langCode) {
      case 'en':
        selectedLanguageCurrent = "en";    
        selectedLanguage.textContent = "English";
        inputFileText.textContent = "Input File";
        uploadFileText.textContent = "Upload or drag & drop your file.";
        textInput.placeholder = "Type here";
        textInputButton.textContent = "Submit";
        break;
      case 'fr':
        selectedLanguageCurrent = "fr";
        selectedLanguage.textContent = "Francuski";
        inputFileText.textContent = "Fichier d'entrée";
        uploadFileText.textContent = "Téléchargez ou glissez-déposez votre fichier.";
        textInput.placeholder = "Écrivez ici";
        textInputButton.textContent = "Soumettre";
        break;
      case 'sr':
        selectedLanguageCurrent = "sr";    
        selectedLanguage.textContent = "Srpski";
        inputFileText.textContent = "Улазни документ";
        uploadFileText.textContent = "Отпремите или превуците и отпустите своју датотеку";
        textInput.placeholder = "Откуцајте овде";
        textInputButton.textContent = "Потврди";
        break;
      case 'de':
        selectedLanguageCurrent = "de";
        selectedLanguage.textContent = "Nemački";
        inputFileText.textContent = "Eingabedatei";
        uploadFileText.textContent = "Laden Sie Ihre Datei hoch oder ziehen Sie sie per Drag & Drop";
        textInput.placeholder = "Geben Sie hier ein";
        textInputButton.textContent = "Einreichen";
        break;
      case 'it':
        selectedLanguageCurrent = "it";    
        selectedLanguage.textContent = "Italijanski";
        inputFileText.textContent = "File di input";
        uploadFileText.textContent = "Carica o trascina e rilascia il tuo file";
        textInput.placeholder = "Digitare qui";
        textInputButton.textContent = "Invia";
        break;
      case 'es':
        selectedLanguageCurrent = "es";    
        selectedLanguage.textContent = "Španski";
        inputFileText.textContent = "Entrada de archivo";
        uploadFileText.textContent = "Sube o arrastra y suelta tu archivo";
        textInput.placeholder = "Escriba aquí";
        textInputButton.textContent = "Entregar";
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
