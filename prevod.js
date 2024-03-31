let selectedLanguageCurrent = localStorage.getItem('selectedLanguage') || 'sr';

const selectLanguage = (langCode) => {
    const selectedLanguage = document.getElementById("selectedLanguage");
    switch(langCode) {
      case 'en':
        selectedLanguageCurrent = "en";    
        languageButton.textContent = "English";
        let img = document.createElement('img');
        img.src = 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg';
        img.alt = 'Zastava Amerike';
        img.classList.add('h-5', 'w-5', 'rounded-full', 'me-2');
        let targetDiv = document.getElementById('languageButton');
        targetDiv.appendChild(img);
        heder1.textContent = "Practice";
        heder2.textContent = "Quiz";
        heder3.textContent = "Translation";
        break;
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