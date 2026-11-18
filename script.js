
const questions = [

    {
        question: "What's the first thing you noticed about me?",
        options: [
            "A little too sweet 🙈",
            "Your way of talking",
            "Your vibe and personality",
            "Still figuring that out 😉"
        ]
    },

    {
        question: "Do my messages ever make you smile without a reason?",
        options: [
            "Yess, sometimes 🙈",
            "Okay, maybe a little 🤭",
            "More than you think ❤️",
            "Don't get too excited 😂"
        ]
    },

    {
        question: "If we could spend an evening together, what would you like us to do?",
        options: [
            "A long drive with music 🎶",
            "Coffee and endless conversations ☕",
            "Watching the sunset together 🌅",
            "Just walking and talking ❤️"
        ]
    },

    {
        question: "If I told you that you're kinda special to me, what would your reaction be?",
        options: [
            "Aww, that's so sweet 🥹",
            "You're making me blush 🙈",
            "You're special too ❤️",
            "Prove it first 😉"
        ]
    },

    {
        question: "What's one thing you'd like to know about me but haven't asked yet?",
        options: [
            "What makes you happy? ✨",
            "What's your idea of love? ❤️",
            "What do you think about me? 👀",
            "When are we meeting? 🙈"
        ]
    }

];


let currentQuestion = 0;

let answers = [null, null, null, null, null];


const welcomeScreen = document.getElementById("welcome-screen");

const questionScreen = document.getElementById("question-screen");

const finalScreen = document.getElementById("final-screen");

const questionTitle = document.getElementById("question-title");

const questionNumber = document.getElementById("question-number");

const stepCount = document.getElementById("step-count");

const progressFill = document.getElementById("progress-fill");

const optionsContainer = document.getElementById("options-container");

const nextButton = document.getElementById("next-button");

const errorMessage = document.getElementById("error-message");


function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(item => {

        item.classList.remove("active");

    });

    screen.classList.add("active");

}


function startQuiz() {

    currentQuestion = 0;

    answers = [null, null, null, null, null];

    showScreen(questionScreen);

    updateQuestion();

}


function updateQuestion() {

    const question = questions[currentQuestion];

    questionTitle.textContent = question.question;

    questionNumber.textContent =
        "QUESTION " + (currentQuestion + 1);

    stepCount.textContent =
        "0" + (currentQuestion + 1) + " / 05";

    progressFill.style.width =
        ((currentQuestion + 1) / 5 * 100) + "%";


    optionsContainer.innerHTML = "";

    nextButton.disabled = true;

    errorMessage.style.display = "none";


    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option-card";

        button.textContent = option;

        button.type = "button";


        if (answers[currentQuestion] === index) {

            button.classList.add("selected");

            nextButton.disabled = false;

        }


        button.addEventListener("click", function() {

            selectOption(index);

        });


        optionsContainer.appendChild(button);

    });

}


function selectOption(index) {

    answers[currentQuestion] = index;

    nextButton.disabled = false;

    errorMessage.style.display = "none";


    const optionCards =
        document.querySelectorAll(".option-card");


    optionCards.forEach((card, cardIndex) => {

        card.classList.remove("selected");

        if (cardIndex === index) {

            card.classList.add("selected");

        }

    });

}


function nextQuestion() {

    if (answers[currentQuestion] === null) {

        errorMessage.style.display = "block";

        return;

    }


    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        updateQuestion();

    } else {

        showFinalScreen();

    }

}


function showFinalScreen() {

    showScreen(finalScreen);

    createHeartBurst();

}


const heartsContainer = document.getElementById("hearts");

const heartSymbols = ["♡", "♥", "❤", "✦"];


function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 22) + "px";

    heart.style.animationDuration =
        (7 + Math.random() * 8) + "s";


    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 15000);

}


setInterval(createHeart, 650);


function createHeartBurst() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 120);

    }

}
