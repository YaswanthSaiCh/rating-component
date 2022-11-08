const ratings = document.querySelectorAll('.number')
const score = document.querySelector('.selected-star')
const container = document.querySelector('.container')
const thankyou = document.querySelector('.thankyou-container')
const errorMsg = document.createElement('p')
const submit = document.querySelector('.submit-btn')

//Hiding thankyou-container before submitting the rating
container.style.display = "block";
thankyou.style.display = "none";

ratings.forEach(rating=>rating.addEventListener('click',()=>{
    score.innerHTML = rating.innerHTML
    errorMsg.style.display = "none"
}))

submit.addEventListener('click', ()=>{
    if (score.innerText === '0') {
        errorMsg.innerText = 'You haven\'t selected any rating'
        errorMsg.classList.add('error')
        container.appendChild(errorMsg)
    } else {
        container.style.display = "none";
        thankyou.style.display = "block";    
    }
})