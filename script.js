document.getElementById("textInputButton").addEventListener("click", function() {
    const textInput = document.getElementById("textInput");
    
    // Clear previous images
    clearSignLanguage();

    // Check if the input field is not null and has a value
    if (textInput && textInput.value.trim() !== "") {
        displaySignLanguage(textInput.value);
    }
});

// Function to handle audio file
const handleAudioFile = async (input) => {
    clearSignLanguage();
    const file = input.files[0];
    if (file) {
        console.log("Selected audio file:", file.name);
        const text = await sendAudioToGoogleCloud(file);
        console.log("Text from uplaoded file is: " + text);
        displaySignLanguage(text);
    }
};


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
        document.getElementById('transcription').textContent = transcript;

        console.log('Transcribed text:', transcript);
        displaySignLanguage(transcript);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error occurred:', event.error);
    };

    recognition.start();
};

// Function to send audio file to Google Cloud Speech-to-Text API
const sendAudioToGoogleCloud = async (file) => {
    const data = new FormData();
    data.append('file', file);

    const response = await fetch('https://speech.googleapis.com/v1/speech:recognize', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_GOOGLE_CLOUD_API_KEY',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            config: {
                encoding: 'LINEAR16',
                sampleRateHertz: 16000,
                languageCode: 'en-US',
            },
            audio: {
                content: data
            }
        })
    });

    const result = await response.json();
    return result;
};

function displaySignLanguage(text) {
    // Assuming 'text' is the input text
    const container = document.getElementById('sign-language-container');
    
    // Loop through each word in the input text
    text.split(' ').forEach(word => {
        // Loop through each letter in the word
        for (let i = 0; i < word.length; i++) {
            const letter = word[i].toLowerCase(); // Assuming your image filenames are lowercase
            
            // Create an image element
            const img = document.createElement('img');
            img.src = `./znakovi/${letter}.png`; // Assuming the images are stored in the 'znakovi' directory
            img.alt = letter; // Set alt text for accessibility
            
            // Append the image to the container
            container.appendChild(img);
        }
        
        // Add a space between words
        const space = document.createTextNode(' ');
        container.appendChild(space);
    });
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
