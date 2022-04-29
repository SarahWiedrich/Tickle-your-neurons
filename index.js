
//getting ACCESS to the html elements//
let question = document.querySelector('#question');

let choices = document.querySelectorAll('.btn');

let counterText = document.querySelector('#question-counter');

let scoreText = document.querySelector('#score');

//VARIABLES//
let score = 0;
let questionCounter = 0 //what question are you on//
let avaliabelQuestions = []; //creates a copy of the questions so that we can take questions out of the array once we use them so we don't repeat questions//
let currentQuestion = {};

//List of questions and answers ARRAY//
let questions = [
    {
        question: "You're planning a backyard human rib barbacue. If each person eat's one rib, how many people will one torso feed?",
        choice1: '11',
        choice2: '16',
        choice3: '24',
        choice4: '36',
        answer: 3
    },

    {
        question: "Which of these items is BEST described as happening 'once in a blue moon'?",
        choice1: "volcanic eruptions",
        choice2: "the tides",
        choice3: "hight winds",
        choice4: "thunderstormes",
        answer: 1
    },

    {
        question: "Which is NOT true about BOTH Hamlet and Scooby Doo?",
        choice1: "they both spent a lot of time in castles",
        choice2: "they both knew someone named Daphne",
        choice3: "they both saw ghosts",
        choice4: "they were both Great Danes",
        answer: 2
    },

    {
        question: "Sad day....your luggage gets lost in Oklahoma City. When you finally receive it in Chicago what three-letter city code will be stamped on the tag hanging from the handle?",
        choice1:"CHI",
        choice2:"DEN",
        choice3:"SEA",
        choice4:"ORD",
        answer: 4
    },

    {
        question: "Which of the following would be most likely to hit a 'uvula?",
        choice1: "a broom handle",
        choice2: "a tongue depressor",
        choice3: "a Polish farmer",
        choice4: "a baseball bat",
        answer: 2
    },

    {
        question: "Which hairstyle, named for a household cleaning tool, did the Beatles make famous?",
        choice1: "the rag shag",
        choice2: "the mop top",
        choice3: "the broom groom",
        choice4: "the toilet brush cut",
        answer: 2
    },

    {
        question: "Suppose Urkel is your typical 98 pound weakling. How much would he weigh in England?",
        choice1: "2 Stone",
        choice2: "5 Stone",
        choice3: "7 Stone",
        choice4: "11 meters",
        answer: 3
    },

    {
        question: "What is a balck hole?",
        choice1: "a term for all Disney movies from the 70's",
        choice2: "a dead planet",
        choice3: "a hole is space that has no gravity",
        choice4: "a collapsed start so dense that only x-rays can escape its pull",
        answer: 4
    },

    {
        question: "Which is longest?",
        choice1: "that average small intestine",
        choice2: "the average large intesstine",
        choice3: "two meters",
        choice4: "half a biblical rod",
        answer: 1
    },

    {
        question: "Which little piggy had roast beef?",
        choice1: "big toe",
        choice2: "second toe",
        choice3: "middle toe",
        choice4: "pinkie toe",
        answer: 3
    },

    {
        question: "The word 'enema' comes from the Greek root 'enienai' which means what?",
        choice1: "to encounter",
        choice2: "to be an enemy",
        choice3: "to send in",
        choice4: "to set free",
        answer: 3
    },

    {
        question: "Which of these are there actually two of?",
        choice1: "north poles",
        choice2: "international datelines",
        choice3: "equators",
        choice4: "prime meridians",
        answer: 1
    },
]

//FUNCTIONS to play the game//
let startGame = () => {
    questionCounter = 0;//start the questions at 0//
    score = 0;//start the score at 0//
    avaliabelQuestions = [...questions];//take the questions array, spread it out and put them into the new array for avaliabeQuestions-makes a full copy of all the questions so we can make changes without affecting the original questions array//
};
startGame() 

let getNewQuestion = () => {

    if(avaliabelQuestions.length === 0){
        alert('Player, when I think of you... I think of superlative`s like: great, amazing, fabulous, trivia geek with no social life, stuff like that. HIGH FIVE! ')
    };
   
    if(avaliabelQuestions.length > 0){
        questionCounter++; //incriments the question counter//
        counterText.innerText = `${questionCounter}`;//updates the counter text //
    };

    let questionIndex = Math.floor(Math.random() * avaliabelQuestions.length);//questionIndex stores the choice from the random question generator which is randomly pulling a question object from the avaliable questions array//
    currentQuestion = avaliabelQuestions[questionIndex];//takes the question object that was just randomly picked and gets it out of the array and stores it as the currentQuestion//
    question.innerText = currentQuestion.question; //grabs the text stored in the currentQuestion question key and puts it into the h2 to populate on the screen/

    // //populates the choices into each button//
    choices.forEach (choice => {
        let number = choice.dataset['number'];//getting access to the data-number attribute in html//
        choice.innerText = currentQuestion['choice' + number]; //populating the choice text options//
    })

    avaliabelQuestions.splice(questionIndex, 1); //removes questions we already used//
};

getNewQuestion()

//adding a CLICK EVENT to thier choice//
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        let selectedChoice = e.target;
        let selectedAnswer = selectedChoice.dataset['number'];  //??//
        console.log(selectedAnswer);

        //checks if the clicked answer matches the answer key for the current question object - if so logs 'correct' if not logs 'incorrect'//
        let checkAnswer = 'incorrect';
        if(selectedAnswer == currentQuestion.answer){
            checkAnswer = 'correct';
        }
        console.log(checkAnswer);
        //incriments score when answered correctly and changes button color//
        if(checkAnswer == 'correct'){
            score++
            scoreText.innerText = score;
            choice.classList.add('btnGreen');    //css styles this button gree//
            setTimeout(() =>{
                choice.classList.remove('btnGreen');   //waits 2 seconds then removes the class which removes the green color//
            },2000)          
        } else {
            choice.classList.add('btnRed');

            // let rightAnswer = currentQuestion.answer;
            // if(rightAnswer == 'correct'){
            //     choice.classList.add('btnGreen');  
            //     setTimeout(() =>{
            //         choice.classList.remove('btnGreen'); 
            //     },2000)

            // let rightAnswer = currentQuestion.answer;
            // currentQuestion.answer = rightAnswer.dataset['number'];
            // rightAnswer.classList.add('btnGreen');

            // let rightAnswer = currentQuestion.answer
            // rightAnswer.classList.add('btnGreen');

            // answer.classList.add('btnGreen');
            // currentQuestion.answer.classList.add('btnGreen');
            setTimeout(() =>{
                choice.classList.remove('btnRed');
            },2000)          
        };

        setTimeout(() => {
            getNewQuestion(); //after question has been answered, wait 2 seconds, then call the new question function//
        },2000)
    });
});

// //audio//
// let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// if (!isChrome){
//     $('#iframeAudio').remove()
// }
// else {
//     $('#playAudio').remove()
// }