document.getElementById("textInputButton").addEventListener("click", function() {
    const textInput = document.getElementById("textInput");
    
    // Clear previous images
    clearSignLanguage();

    // Check if the input field is not null and has a value
    if (textInput && textInput.value.trim() !== "") {
        displaySignLanguage(textInput.value);
    }
});

function clearSignLanguage() {
    const container = document.getElementById('sign-language-container');
    container.innerHTML = ''; // Clear the container content
}

const handleAudioFile = (input) => {
    const file = input.files[0];
    if (file) {
        console.log("Selected audio file:", file.name);
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
