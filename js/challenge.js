const counter = document.getElementById('counter')
const resume = document.getElementById('pause')
const minusButton = document.getElementById('minus').addEventListener('click', minusCounter)
const plusButton = document.getElementById('plus').addEventListener('click', plusCounter)
const like = document.getElementById('heart').addEventListener('click', likeNumber)
const submit = document.getElementById('submit').addEventListener('click', submitComment)
const submitButton = document.getElementById('submit')
const likes = {}

let intervalID = setInterval(function timerCount() {
  i = parseInt(counter.innerText)
  i ++
  counter.innerText = i
}, 1000)

resume.addEventListener("click", function(e) {
  if (resume.innerText === 'pause'){
        resume.innerText = "resume"
        clearInterval(intervalID)
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        submitButton.disabled = true
    } else {
        intervalID = setInterval(function timerCounter(){
            i = parseInt(counter.innerText)
            i ++
            counter.innerText = i
        }, 1000);
        resume.innerText = "pause"
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        submitButton.disabled = false
 }
})

function likeNumber() {
  let number = parseInt(counter.innerText)
  likes[number] ? (likes[number] += 1) : (likes[number] = 1)

  if (document.getElementById(`${number}`)) {
    document.getElementById(
      `${number}`
    ).innerText = `${number} has been liked ${likes[number]} times`
  } else {
    let likeItem = document.createElement('li')
    let likeStated = document.querySelector('.likes')
    likeItem.id = number
    likeItem.innerText = `${number} has been liked 1 time`
    likeStated.appendChild(likeItem)
  }
}

function minusCounter() {
  let number = parseInt(counter.innerText)
  number--
  counter.innerText = number
}

function plusCounter() {
  let number = parseInt(counter.innerText)
  number++
  counter.innerText = number
}

function submitComment() {
  event.preventDefault()
  let comment = document.getElementById('comment-input').value
  let commentArea = document.createElement('p')
  commentArea.innerText = comment
  let area = document.getElementById('list')
  area.appendChild(commentArea)
  document.forms['comment-form'].reset()
}
