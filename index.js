const startbtn = document.querySelector(".btn")
const homePage = document.querySelector("#homePage")
const mainPage = document.querySelector("#mainPage")
const currentWord = document.querySelector("#current-word")
const text = document.querySelector("#word-input")
const score = document.querySelector("#score")
const timer = document.querySelector("#time")
const gameOver = document.querySelector("#gameOverPage")
const totalScore = document.querySelector("#final-score")
const retryBtn = document.querySelector("#retryBtn")
const homeBtn = document.querySelector("#homeBtn")


const words = [
    "apple",
    "window",
    "cat",
    "journey",
    "table",
    "green",
    "monster",
    "dog",
    "blanket",
    "chair",
    "planet",
    "smile",
    "computer",
    "fish",
    "diamond",
    "river",
    "teacher",
    "book",
    "picture",
    "train",
    "holiday",
    "mouse",
    "battery",
    "cloud",
    "village",
    "phone",
    "garden",
    "rocket",
    "bread",
    "freedom",
    "light",
    "morning",
    "pizza",
    "library",
    "happy",
    "station",
    "juice",
    "captain",
    "house",
    "balance",
    "music",
    "country",
    "water",
    "building",
    "horse",
    "machine",
    "glass",
    "network",
    "tree",
    "weather",
    "shirt",
    "chicken",
    "star",
    "history",
    "paper",
    "airport",
    "bike",
    "student",
    "flower",
    "sun",
    "meeting",
    "coffee",
    "elephant",
    "road",
    "project",
    "ball",
    "message",
    "dream",
    "science",
    "desk",
    "kitchen",
    "salt",
    "fashion",
    "stone",
    "brother",
    "hand",
    "program",
    "beach",
    "country",
    "clock",
    "camera",
    "queen",
    "mountain",
    "orange",
    "doctor",
    "cake",
    "traffic",
    "pencil",
    "farmer",
    "baby",
    "speaker",
    "market",
    "snow",
    "plastic",
    "school",
    "rabbit",
    "party",
    "office",
    "forest",
    "friend",
    "engine",
    "world",
    "bridge",
    "bread",
    "tiger",
    "energy",
    "watch",
    "family",
    "ocean",
    "button",
    "fruit",
    "violet",
    "simple",
    "window",
    "dance",
    "pocket",
    "music",
    "mirror",
    "phone",
    "bottle",
    "zebra",
    "success",
    "future",
    "silver",
    "laugh",
    "pillow",
    "market",
    "school",
    "ticket",
    "artist",
    "yellow",
    "circle",
    "banana",
    "winter",
    "summer",
    "office",
    "guitar",
    "wallet",
    "castle",
    "helmet",
    "pepper",
    "rocket",
    "sister",
    "doctor",
    "farmer",
    "nature",
    "engine",
    "friend",
    "bridge",
    "garden",
    "planet",
    "forest",
    "flower",
    "travel",
    "thunder",
    "library",
    "teacher",
    "battery",
    "computer",
    "building",
    "blanket",
    "mountain",
    "elephant",
    "airplane",
    "painting",
    "sunshine",
    "backpack",
    "notebook",
    "football",
    "language",
    "birthday",
    "adventure",
    "umbrella",
    "chocolate",
    "hospital",
    "keyboard",
    "campfire",
    "pineapple",
    "breakfast"
];

let time
let countDown

startbtn.addEventListener("click", () => {

    homePage.style.display = "none"
    mainPage.style.display = "block"

    text.focus()

    time = 20
    timer.textContent = time

    countDown = setInterval(() => {
        time--
        timer.textContent = time
        if (time < 0) {
            clearInterval(countDown)
            mainPage.style.display = "none"
            gameOver.style.display = "block"

            totalScore.textContent = score.innerHTML
        }
    }, 1000);

})

function generateRandomWord() {
    let randomNum = Math.floor(Math.random() * words.length)
    let randomWord = words[randomNum]

    return randomWord;
}
currentWord.textContent = generateRandomWord()

text.addEventListener("input", () => {
    const word = currentWord.innerHTML

    if (word === text.value) {

        if (word.length <= 5) {
            score.textContent = Number(score.innerHTML) + 50
        } else if (word.length > 8) {
            score.textContent = Number(score.innerHTML) + 125
        } else {
            score.textContent = Number(score.innerHTML) + 100
        }


        if (Number(score.innerHTML) >= 500 && Number(score.innerHTML) <= 999) {
            time = 18
        }
        else if (Number(score.innerHTML) >= 1000 && Number(score.innerHTML) <= 1499) {
            time = 15
        }
        else if (Number(score.innerHTML) >= 1500 && Number(score.innerHTML) <= 1999) {
            time = 12
        }
        else if (Number(score.innerHTML) >= 2000 && Number(score.innerHTML) <= 2699) {
            time = 10
        } else if (Number(score.innerHTML) >= 2700 && Number(score.innerHTML) <= 3399) {
            time = 8
        }
        else if (Number(score.innerHTML) >= 3400) {
            time = 6
        }
        else {
            time = 20
        }


        currentWord.textContent = generateRandomWord()

        clearInterval(countDown)
        text.value = ""
        timer.textContent = time



        countDown = setInterval(() => {
            time--
            timer.textContent = time
            if (time < 0) {
                clearInterval(countDown)
                mainPage.style.display = "none"
                gameOver.style.display = "block"

                totalScore.textContent = score.innerHTML
            }
        }, 1000)

    }

})




homeBtn.addEventListener("click", () => {
    homePage.style.display = " block"
    gameOver.style.display = "none"
    score.textContent = "0"
    currentWord.textContent = generateRandomWord()

})

retryBtn.addEventListener("click", () => {
    mainPage.style.display = "block"
    gameOver.style.display = "none"
    currentWord.textContent = generateRandomWord()
    text.focus()

    score.textContent = "0"
    clearInterval(countDown)
    time = 20
    timer.textContent = time

    countDown = setInterval(() => {
        time--
        timer.textContent = time
        if (time < 0) {
            clearInterval(countDown)
            mainPage.style.display = "none"
            gameOver.style.display = "block"

            totalScore.textContent = score.innerHTML
        }
    }, 1000)

})











