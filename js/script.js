let quizDB = [{
        question: "Q1: HTML stands for?",
        a: "hyper text transfor protocol",
        b: "hyper text markup language",
        c: "hyper text moduler language",
        d: "hyper transmission model protocol",
        ans: "ans2"
    },
    {
        question: "Q2:Who is making the Web standards?",
        a: "microsoft",
        b: "mozila",
        c: "google",
        d: "the world wide web consortium",
        ans: 'ans4'
    },
    {
        question: "Q3:Choose the correct HTML element for the largest heading:",
        a: "<heading>",
        b: "<h1>",
        c: ">head>",
        d: "<h6>",
        ans: 'ans2'
    },

    {
        question: "Q4:What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<lb>",
        c: "<break>",
        d: "<line>",
        ans: 'ans1'
    },
    {
        question: "Q5:Choose the correct HTML element to define important text?",
        a: "<strong>",
        b: "<important>",
        c: "<i>",
        d: "<b>",
        ans: 'ans1'
    },
    {
        question: "Q6:Choose the correct HTML element to define emphasized text?",
        a: "<i>",
        b: "<strong>",
        c: "<em>",
        d: "<italic>",
        ans: 'ans3'
    },
    {
        question: "Q7:Which character is used to indicate an end tag?",
        a: "^",
        b: "<",
        c: "*",
        d: "/",
        ans: 'ans4'
    },
    {
        question: "Q8:How can you make a numbered list?",
        a: "<dl>",
        b: "<ol>",
        c: "<ul>",
        d: "<list>",
        ans: 'ans2'
    },
    {
        question: "Q9:What is the correct HTML for making a text area?",
        a: "<textarea>",
        b: "<input type='textbox'>",
        c: "<input type='textarea'>",
        d: "<input type='text'>",
        ans: 'ans1'
    },

    {
        question: "Q10:Which HTML element defines the title of a document?",
        a: "<head>",
        b: "<title>",
        c: "<meta'>",
        d: "<body'>",
        ans: 'ans2'
    }

];

//fetching the id
let query = document.querySelector('.question');
let op1 = document.getElementById('option1');
let op2 = document.getElementById('option2');
let op3 = document.getElementById('option3');
let op4 = document.getElementById('option4');
// console.log(question);

let answer = document.querySelectorAll('.answer');
// console.log(answer);

let submit = document.querySelector('.sub');

let swScore = document.querySelector('.score');
let rate = document.querySelector('.rate');

//get the time query
let times = document.querySelector('.time');
// console.log(times);
let lft = document.querySelector('.lft');



let questionCout = 0;
let score = 0;

//create the loadquesionfunction

const loadQuestion = () => {
    const qList = quizDB[questionCout];

    query.innerHTML = qList.question;
    op1.innerText = qList.a;
    op2.innerText = qList.b;
    op3.innerText = qList.c;
    op4.innerText = qList.d;
}

//calling the loadquestion
loadQuestion();


const getAnswer = () => {
    let keyAns;
    answer.forEach((currentElement) => {
        if (currentElement.checked) {
            keyAns = currentElement.id;
        }
    });
    return keyAns;
}

const dSelectElements = () => {
    answer.forEach((currentElement) => currentElement.checked = false);
}

submit.addEventListener('click', () => {
    const cheackAns = getAnswer();
    console.log(cheackAns);

    if (cheackAns === quizDB[questionCout].ans) {
        score++;
    }

    questionCout++;

    dSelectElements();

    if (questionCout < quizDB.length) {
        loadQuestion();
    } else {
        swScore.classList.add('scNone');
        rate.innerText = `${score}/${quizDB.length}`;
    }
})

//countdown
let startingMiniuts = 5;
let time = startingMiniuts * 60;


const downCount = () => {
    var miniuts = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    } else {
        seconds = seconds;
    }

    times.innerText = `${miniuts}: ${seconds}`;
    time--;

    if (miniuts < 0) {
        clearInterval(test_condtion);
        lft.innerText = "time over";
        times.innerText = "00:00";
        swScore.classList.add('scNone');
        rate.innerText = `${score}/${quizDB.length}`;
    }
}
let test_condtion = setInterval(downCount, 1000);