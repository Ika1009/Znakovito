// Create an array of quiz questions
// Create an array of quiz questions
const quizQuestionsNaSrpskom = [
    {
        question: "Koji znak predstavlja slovo Y u engleskom znakovnom jeziku?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/c.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/y.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/u.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/d.png", isCorrect: false }
        ]
    },
    {
        question: "Koji znak predstavlja slovo A u engleskom znakovnom jeziku?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/o.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/h.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/a.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/s.png", isCorrect: false }
        ]
    },
    {
        question: "Koji od ovih znakova predstavlja Ljubav?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/ily.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/majk.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/y.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/zdravo.png", isCorrect: false }
        ]
    },
    {
        question: "Koji znak predstavlja slovo N u engleskom znakovnom jeziku?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/j.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/w.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/r.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/n.png", isCorrect: true }
        ]
    },    
    {
        question: "Koji znak predstavlja slovo T u engleskom znakovnom jeziku?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/u.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/b.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/z.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/t.png", isCorrect: true }
        ]
    },
    {
        question: "Koji znak predstavlja slovo W u engleskom znakovnom jeziku?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/q.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/g.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/w.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/x.png", isCorrect: false }
        ]
    }
];

// Create an array of quiz questions
const quizQuestionsNaEngleskom = [
    {
        question: "What sign represents the letter A in Serbian Sign Language?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/o_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/h_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/a_sr.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/s_sr.png", isCorrect: false }
        ]
    },    
    {
        question: "What sign represents the letter Ć in Serbian Sign Language?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/c_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/ć_sr.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/u_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/d_sr.png", isCorrect: false }
        ]
    },
    {
        question: "Which of these signs represents the word friendship?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/ily.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/majk.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/prijatelj.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/zdravo.png", isCorrect: false }
        ]
    },
    {
        question: "What sign represents the letter N in American Sign Language?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/j_sr.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/đ_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/č_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/n_sr.png", isCorrect: true }
        ]
    },    
    {
        question: "What sign represents the letter T in American Sign Language?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/u_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/b_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/u_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/t_sr.png", isCorrect: true }
        ]
    },
    {
        question: "What sign represents the letter M in American Sign Language?",
        options: [
            { text: "https://bonanza.rs/fon/znakovi/s_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/d_sr.png", isCorrect: false },
            { text: "https://bonanza.rs/fon/znakovi/m_sr.png", isCorrect: true },
            { text: "https://bonanza.rs/fon/znakovi/c_sr.png", isCorrect: false }
        ]
    }
];


// Example usage:
console.log(quizQuestions[0].question); // "What is the capital of France?"
console.log(quizQuestions[0].options[0].text); // "Paris"
console.log(quizQuestions[1].options[1].isCorrect); // true

// Iterate through all quiz questions
quizQuestions.forEach((question, index) => {
    console.log(`Question ${index + 1}: ${question.question}`);
    question.options.forEach((option, optionIndex) => {
        console.log(`Option ${optionIndex + 1}: ${option.text} (Correct: ${option.isCorrect})`);
    });
});
