const quizData = [
    {
        question: "What was the first bacteria on earth?",
        a: "paremecium",
        b: "euglina",
        c: "syanobacteria",
        d: "cyanobacteria",
        correct: "d",
    },
    {
        question: "Who was the leader of japan during WW2?",
        a: "Donald Trupmt",
        b: "Horoshima Zenin The First",
        c: "Emperor Hirohito",
        d: "Emperor Nahito",
        correct: "c",
    },
    {
        question: "What is the most viewed anime of all time?",
        a: "Dargon Ball Z",
        b: "Naruto Shippuden",
        c: "Chainsaw Man",
        d: "Attack On Titan",
        correct: "a",
    },
    {
        question: "When was the camera invented?",
        a: "1818",
        b: "1873",
        c: "1793",
        d: "1816",
        correct: "d",
    },

    
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const asnwer = getSelected()
    if(asnwer) {
        if(asnwer === quizData[currentQuiz].correct) {
            score++
        }
        
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button href="index-home.html">Reload</button>
            `
        }
    }
})
