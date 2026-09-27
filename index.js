const ScorePerClickGauche = document.getElementById('ScorePerClickGauche');
const ScorePerClick = document.getElementById('scroePerClick');
const mainButtonWrapper = document.getElementById('mainButtonWrapper');
const nombredeclic = document.getElementById('nombredeclic');
const deuxieme = document.getElementById('deuxieme');

if (ScorePerClick.textContent === "") {
    ScorePerClick.textContent = 0;
}

mainButtonWrapper.addEventListener('click', function(){
    let HisValue = ScorePerClick.textContent;
    ScorePerClick.textContent = Number(HisValue) + Number(ScorePerClickGauche.textContent);
    nombredeclic.textContent = Number(nombredeclic.textContent) + 1;
})

const IMGrandom = document.getElementById('IMGrandom');

let sonActif = true;

deuxieme.addEventListener('click', function() {
    sonActif = !sonActif;

    if (sonActif) {
        deuxieme.classList.add('on');
        deuxieme.classList.remove('off');
        IMGrandom.src = './sonOn.png';
    } else {
        deuxieme.classList.add('off');
        deuxieme.classList.remove('on');
        IMGrandom.src = './sonOff.png';
    }
});