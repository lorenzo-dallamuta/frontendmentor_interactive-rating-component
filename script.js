let rating

const grade_result = document.querySelector('.result-box__grade-number')
const modal = document.querySelector(".result-box")
const rating_buttons = document.querySelectorAll('.rate-box__rating')
const submit_button = document.querySelector('.rate-box__submit')
const signal_icon = document.querySelector('.rate-box__icon')

rating_buttons.forEach((n, i) => n.addEventListener('click', e => {
  rating = i + 1
  submit_button.disabled = false
  signal_icon.setAttribute('data', "./images/icon-star.svg")
}))

submit_button.addEventListener('click', (e) => {
  grade_result.innerText = rating.toString()
  modal.showModal()
  // do post stuff
  e.preventDefault()
})
