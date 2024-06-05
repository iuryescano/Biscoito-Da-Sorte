/* const button = document.getElementById('tertiarybox')

export function toggleMenu() {
    button.addEventListener('click', (event ) => {
        button.classList.toggle('hide') 
    })
}

toggleMenu() */
const menu1 = document.getElementById('screen1')
const menu2 = document.getElementById('screen2')


const button = document.querySelector("#buttonCookie")
const buttonTryAgain = document.querySelector("#buttonTryAgain")

const mensagemCookie = document.querySelector("#secondbox2")

const messages = [
    "Procure acender uma vela em vez de amaldicoar a escuridao",
    "Se alguem esta tao cansado que nao possa te dar um sorriso deixa-lhe o teu.",
]


function getRandomMessage() {
    const randomIndex = Math.round(Math.random() * (messages.length - 1));
    return messages[randomIndex];
}


button.addEventListener('click', (event ) => {
    const randomMessage = getRandomMessage();
    menu1.classList.add('hide') 
    menu2.classList.remove('hide')
    mensagemCookie.textContent = randomMessage;
})

buttonTryAgain.addEventListener('click', (event ) => {
    menu1.classList.remove('hide')
    menu2.classList.add('hide')
})



