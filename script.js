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
        
    // Loop through each word in the input text
    text.split(' ').forEach(word => {
        // Loop through each letter in the word
        for (let i = 0; i < word.length; i++) {
            let letter = word[i].toLowerCase(); // Assuming your image filenames are lowercase
            
            // Check if the character is from Cyrillic script
            if (/[\u0400-\u04FF]/.test(letter)) { // Range for Cyrillic characters
                // Convert Cyrillic to Latin script if applicable
                letter = convertToLatin(letter);
            }
            
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
        
        // Add a space between words
        const space = document.createElement('div');
        space.width = 500;
        space.height = 5;
        container.appendChild(space);
    });
    
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

const selectLanguage = (langCode) => {
    const selectedLanguage = document.getElementById("selectedLanguage");
    switch(langCode) {
      case 'en':
        selectedLanguage.textContent = "English";
        break;
      case 'fr':
        selectedLanguage.textContent = "French";
        break;
      // Add cases for more languages as needed
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
