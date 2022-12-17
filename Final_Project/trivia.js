const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answers');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } 
    else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: "What is Harry Potter's Patronus?",
        answers: [
            {text:"Stag", correct:true},
            {text:"Doe", correct:false},
            {text:"Jack Russel Terrier", correct:false},
            {text:"Wolf", correct:false}
        ]   
    },
    {
        question: "How old was Dumbledore when he died?",
        answers: [
            {text:"93", correct:false},
            {text:"150", correct:true},
            {text:"123", correct:false},
            {text:"178", correct:false}
        ]  
    },
    {
        question: "What did Mad-Eye Moody turn Malfoy into in Goblet of Fire?",
        answers: [
            {text:"Rat", correct:false},
            {text:"Weasel", correct:false},
            {text:"Squirrel", correct:false},
            {text:"Ferret", correct:true}
        ]   
    },
    {
        question: "What drink poisoned Ron in Half-Blood Prince?",
        answers: [
            {text:"Oak-matured mead", correct:true},
            {text:"Firewhiskey", correct:false},
            {text:"Butterbeer", correct:false},
            {text:"Gillywater", correct:false}
        ]   
    },
    {
        question: "What was the name of Voldemort's mother?",
        answers: [
            {text:"Merope", correct:true},
            {text:"Melissa", correct:false},
            {text:"Melanie", correct:false},
            {text:"Melody", correct:false}
        ]   
    },
    {
        question: "Who kills Bellatrix Lestrange?",
        answers: [
            {text:"Minerva McGonagall", correct:false},
            {text:"Ginny Weasley", correct:false},
            {text:"Molly Weasley", correct:true},
            {text:"Hermione Granger", correct:false}
        ]   
    },
    {
        question: "What is the basilisk most afraid of?",
        answers: [
            {text:"Roosters", correct:true},
            {text:"Spiders", correct:false},
            {text:"Rats", correct:false},
            {text:"Toads", correct:false}
        ]   
    },
    {
        question: "What was Umbridge appointed to be in Order of the Phoenix after Decree 23?",
        answers: [
            {text:"Hogwarts Lead Investigator", correct:false},
            {text:"Headmistress", correct:false},
            {text:"High Inquisitor", correct:true},
            {text:"Ministry of Magic Education Ambassador", correct:false}
        ]   
    },
    {
        question: "What is the spell that erases memories?",
        answers: [
            {text:"Furnunculus", correct:false},
            {text:"Imperio", correct:false},
            {text:"Serpensortia", correct:false},
            {text:"Obliviate", correct:true}
        ]   
    },
    {
        question: "What spell did Harry use to harm Draco in Half-Blood Prince?",
        answers: [
            {text:"Crucio", correct:false},
            {text:"Sectumsempra", correct:true},
            {text:"Avada Kedavra", correct:false},
            {text:"Stupefy", correct:false}
        ]   
    }
]