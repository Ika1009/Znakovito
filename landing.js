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
