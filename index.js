const ScorePerClickGauche = document.getElementById('ScorePerClickGauche');
const ScorePerClick = document.getElementById('scroePerClick');
const mainButtonWrapper = document.getElementById('mainButtonWrapper');
const nombredeclic = document.getElementById('nombredeclic');
const deuxieme = document.getElementById('deuxieme');
const upPoule = document.getElementById('upPoule');

if (ScorePerClick.textContent === "") {
    ScorePerClick.textContent = 0;
}

function spawnPlusOne() {
    const plusOne = document.createElement('p');
    plusOne.textContent = `+ ${Number(ScorePerClickGauche.textContent)}`;
    plusOne.classList.add('popPlus');

    let randomLeftOffset = Math.random() * 200 - 100;
    plusOne.style.left = `calc(50% + ${randomLeftOffset}px)`;
    plusOne.style.animation = 'slideUp 1s ease forwards';

    mainButtonWrapper.appendChild(plusOne);

    plusOne.addEventListener('animationend', function() {
        plusOne.remove();
    });
}

mainButtonWrapper.addEventListener('click', function(){
    let HisValue = ScorePerClick.textContent;
    ScorePerClick.textContent = Number(HisValue) + Number(ScorePerClickGauche.textContent);
    nombredeclic.textContent = Number(nombredeclic.textContent) + 1;

    spawnPlusOne();
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
const verif = function() {
    if (Number(nombredeclic.textContent) == 25) {
        upPoule.style.display = "flex"
    }
}

upPoule.addEventListener('click', function(){
    if (Number(ScorePerClick.textContent) < 50) {
        alert("Tu n'as pas assez de points")
        return;
    }
    ScorePerClickGauche.textContent = 5
    upPoule.style.display = "none";
})
setInterval(verif, 100)
