const selectInput = document.getElementById('noPpl');

(() => {
    for(let i = 0; i < 30; i++) {
        let opt = document.createElement('option');
        opt.value = i + 1;
        opt.innerText = i + 1;
        selectInput.appendChild(opt);
    }
})();


