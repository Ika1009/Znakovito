let selectedLanguageCurrent = "sr";
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
  
  const closeDropdown = () => {
    const languageOptions = document.getElementById("languageOptions");
    languageOptions.classList.remove("block");
    languageOptions.classList.add("hidden");
  };
  
  document.getElementById("languageButton").addEventListener("click", () => {
    const languageOptions = document.getElementById("languageOptions");
    languageOptions.classList.toggle("hidden");
});  
