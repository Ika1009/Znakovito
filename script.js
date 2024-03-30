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
}
