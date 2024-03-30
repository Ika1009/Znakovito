const splitTextIntoArray = () => {
    const textInput = document.getElementById("textInput");
    const text = textInput.value;
    const charArray = text.split('');
    return charArray;
}

document.getElementById("textInput").addEventListener("input", function() {
    let charArray = splitTextIntoArray();
    console.log(charArray);
});

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

        // You can use the transcribed text here as needed
        processTranscription(transcript);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error occurred:', event.error);
    };

    recognition.start();
};

const processTranscription = (transcript) => {
    // Do something with the transcribed text, e.g., send it to a server, perform a search, etc.
    console.log('Transcribed text:', transcript);
};