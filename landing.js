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
