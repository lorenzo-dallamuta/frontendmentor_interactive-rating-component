let rating

const grade_result = document.querySelector('.result-box__grade-number')
const rating_buttons = document.querySelectorAll('.rate-box__rating')
const submit_button = document.querySelector('.rate-box__submit')

rating_buttons.forEach((n, i) => n.addEventListener('click', e => rating = i + 1))

submit_button.addEventListener('click', (e) => {
  grade_result.innerText = rating.toString()
  // do post stuff
  e.preventDefault()
})
