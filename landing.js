let selectedLanguageCurrent = localStorage.getItem('selectedLanguage') || 'sr';

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
        tekst4.textContent = "Deaf and mute";
        tekst5.textContent = "marries another deaf and mute person";
        tekst44.textContent = "About 466 million people";
        tekst55.textContent = "all over the world are hearing impaired, and have to use sign language which leads to a big language barrier when traveling abroad.";
        tekst6.textContent = "Audio and text translation";
        tekst7.textContent = "Whether you use voice messages, text input or audio files, Znakovito offers accurate sign language translation - adapted to different local dialects.";
        tekst8.textContent = "Quiz for two";
        tekst9.textContent = "Feel the connection with your partner, friend or family member through a challenging quiz, where your skills in learning sign language are scored.";
        tekst10.textContent = "Learning through games";
        tekst11.textContent = "Explore our single-player quiz that allows you to quickly learn new sign languages ​​while traveling abroad or preparing to communicate in new locations.";
        tekst12.textContent = "Contact us";
        tekst13.textContent = "STAY IN TOUCH";
        tekst14.textContent = "Sign languages ​​are universal. Learn them and facilitate communication with deaf and mute people around the world. Join our community and discover world sign languages!";
        tekst15.textContent = "Our location";
        tekst16.textContent = "Phone number";
        tekst17.textContent = "Email address";
        tekst18.placeholder = "Name";
        tekst19.placeholder = "Phone number";
        tekst20.placeholder = "Message";
        tekst21.textContent = "Send message";
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
        heder1.textContent = "Vežba";
        heder2.textContent = "Kviz";
        heder3.textContent = "Prevod";
        tekst1.textContent = "Tvoj vodič kroz svetske znakovne jezike!";
        tekst2.textContent = "Različite zemlje, različiti znakovni jezici. Sa Znakovito, prevaziđi jezičke barijere i nauči znakovni jezik iz bilo koje zemlje.";
        tekst3.textContent = "Započni";
        tekst4.textContent = "Gluvonemih";
        tekst5.textContent = "stupa u brak sa drugom gluvonemom osobom";
        tekst44.textContent = "Oko 466 miliona ljudi";
        tekst55.textContent = "širom sveta ima problema sa sluhom, i moraju koristiti znakovni jezik što dovodi do velike jezičke barijere pri putovanju u inostranstvo.";
        tekst6.textContent = "Audio i tekst prevod";
        tekst7.textContent = "Bez obzira da li koristiš glasovne poruke, tekstualni unos ili audio fajlove, Znakovito nudi precizan prevod u znakovni jezik - prilagođen različitim lokalnim dijalektima.";
        tekst8.textContent = "Kviz za dvoje";
        tekst9.textContent = "Oseti povezanost sa partnerom, prijateljem ili članom porodice kroz izazovni kviz, gde se boduju tvoje veštine u učenju znakovnog jezika.";
        tekst10.textContent = "Učenje kroz igre";
        tekst11.textContent = "Istraži naš single-player kviz koji omogućava brzo učenje novih znakovnih jezika dok putuješ u inostranstvo ili se pripremaš za komunikaciju na novim lokacijama.";
        tekst12.textContent = "Kontaktiraj nas";
        tekst13.textContent = "OSTANIMO U KONTAKTU";
        tekst14.textContent = "Znakovni jezici su univerzalni. Nauči ih i olakšaj komunikaciju sa gluvonemim osobama širom sveta. Pridruži se našoj zajednici i otkrij svetske znakovne jezike!";
        tekst15.textContent = "Naša lokacija";
        tekst16.textContent = "Broj telefona";
        tekst17.textContent = "Email adresa";
        tekst18.placeholder = "Ime";
        tekst19.placeholder = "Broj telefona";
        tekst20.placeholder = "Poruka";
        tekst21.textContent = "Pošalji poruku";
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
        heder1.textContent = "Übung";
        heder2.textContent = "Quiz";
        heder3.textContent = "Übersetzung";
        tekst1.textContent = "Ihr Führer zu den Gebärdensprachen der Welt!";
        tekst2.textContent = "Andere Länder, andere Gebärdensprachen. Überwinden Sie mit Znakovito Sprachbarrieren und lernen Sie die Gebärdensprache aus jedem Land.";
        tekst3.textContent = "Loslegen";
        tekst4.textContent = "Taubstumm";
        tekst5.textContent = "heiratet eine andere taubstumme Person";
        tekst44.textContent = "Etwa 466 Millionen Menschen";
        tekst55.textContent = "Menschen auf der ganzen Welt sind hörbehindert und müssen die Gebärdensprache verwenden, was bei Reisen ins Ausland zu einer großen Sprachbarriere führt.";
        tekst6.textContent = "Audio- und Textübersetzung";
        tekst7.textContent = "Unabhängig davon, ob Sie Sprachnachrichten, Texteingaben oder Audiodateien verwenden, bietet Znakovito eine präzise Gebärdensprachübersetzung – angepasst an verschiedene lokale Dialekte.";
        tekst8.textContent = "Quiz für zwei";
        tekst9.textContent = "Spüren Sie die Verbindung zu Ihrem Partner, Freund oder Familienmitglied durch ein anspruchsvolles Quiz, bei dem Ihre Fähigkeiten beim Erlernen der Gebärdensprache bewertet werden.";
        tekst10.textContent = "Lernen durch Spiele";
        tekst11.textContent = "Entdecken Sie unser Einzelspieler-Quiz, mit dem Sie schnell neue Gebärdensprachen lernen können, während Sie ins Ausland reisen oder sich auf die Kommunikation an neuen Orten vorbereiten.";
        tekst12.textContent = "Contact us";
        tekst13.textContent = "STAY IN TOUCH";
        tekst14.textContent = "Sign languages ​​are universal. Learn them and facilitate communication with deaf and mute people around the world. Join our community and discover world sign languages!";
        tekst15.textContent = "Our location";
        tekst16.textContent = "Phone number";
        tekst17.textContent = "Email address";
        tekst18.placeholder = "Name";
        tekst19.placeholder = "Phone number";
        tekst20.placeholder = "Message";
        tekst21.textContent = "Send message";
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
