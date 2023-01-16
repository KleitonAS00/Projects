const change = document.querySelector('.change');
const principalContent = document.getElementById('content');
const secondaryContent = document.querySelector('#other-plans');


change.addEventListener('click', function changePlan() {
    principalContent.setAttribute('class', 'hidden')
    if(principalContent.classList.contains('hidden')) {
        principalContent.style.display = "none"
    }
})
