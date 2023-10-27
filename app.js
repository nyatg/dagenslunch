const selectInput = document.getElementById('noPpl');
const main = document.querySelector('.main');
const submitBtn = document.querySelector('.submitBtn');

//Funktion som skapar valen i selector-inputen
(() => {
    for(let i = 0; i < 30; i++) {
        let opt = document.createElement('option');
        opt.value = i + 1;
        opt.innerText = i + 1;
        selectInput.appendChild(opt);
    }
})();



// Gör modalen med funktionalitet
(function makeOffer() {
    const modal = document.createElement('dialog');
    modal.setAttribute("data-modal", '')

    const title = document.createElement('h2');
    title.innerText = "Dagens Lunch!"

    const img = document.createElement('img');
    img.src = "./mcd.jpg"

    const btn = document.createElement('a');
    btn.innerText = "Köp En McBurgare Genast!"
    btn.href = 'https://www.mcdonalds.com/se/sv-se.html';

    modal.addEventListener("click", e => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right || 
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            modal.close();
            modal.style.display = 'none'
        }
    });

    modal.appendChild(title);
    modal.appendChild(img);
    modal.appendChild(btn);
    main.appendChild(modal);
})();


//Funktionalitet till "en burgare tack"
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector('[data-modal]');
    modal.showModal();
    modal.style.display = 'flex';
})
