// Create an array of quiz questions
const quizQuestions = [
    {
        question: "How is the ?",
        options: [
            { text: "Paris", isCorrect: true },
            { text: "Madrid", isCorrect: false },
            { text: "Berlin", isCorrect: false },
            { text: "Rome", isCorrect: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: [
            { text: "Earth", isCorrect: false },
            { text: "Mars", isCorrect: true },
            { text: "Venus", isCorrect: false },
            { text: "Jupiter", isCorrect: false }
        ]
    },
    // Add more questions here...
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
