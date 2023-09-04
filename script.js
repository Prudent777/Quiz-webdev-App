const questions = [
    {
        question: "Qu'est-ce que HTML signifie?",
        choices: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language"],
        correctAnswer: 0
    },
    {
        question: "Quel langage de programmation est utilisé pour styliser les pages web?",
        choices: ["Java", "CSS", "Python"],
        correctAnswer: 1
    },
    {
        question: "Quelle balise est utilisée pour lier un fichier JavaScript externe?",
        choices: ["<js>", "<javascript>", "<script>"],
        correctAnswer: 2
    },
    {
        question: "Quelle balise est utilisée pour créer un lien hypertexte?",
        choices: ["<link>", "<a>", "<href>"],
        correctAnswer: 1
    },
    {
        question: "Quelle propriété CSS est utilisée pour définir la couleur du texte?",
        choices: ["text-color", "color", "font-color"],
        correctAnswer: 1
    }
    // Ajoutez d'autres questions ici
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultsElement = document.getElementById("results");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    questions[currentQuestion].choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.className = "choice";
        choiceButton.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.textContent = "";
    choicesElement.innerHTML = "";
    submitButton.style.display = "none";
    resultsElement.textContent = `Votre score: ${score} sur ${questions.length}`;
}

showQuestion();
submitButton.addEventListener("click", () => checkAnswer());
