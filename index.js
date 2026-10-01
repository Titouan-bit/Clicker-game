const ScorePerClickGauche = document.getElementById('ScorePerClickGauche');
const ScorePerClick = document.getElementById('scroePerClick');
const mainButtonWrapper = document.getElementById('mainButtonWrapper');
const nombredeclic = document.getElementById('nombredeclic');
const deuxieme = document.getElementById('deuxieme');
const upPoule = document.getElementById('upPoule');
const Achievement100Click = document.getElementById('Achievement100Click');
let onetime = 0;

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

let lastClickTime = 0;

mainButtonWrapper.addEventListener('click', function(){
    const now = Date.now();
    const interval = now - lastClickTime;
    lastClickTime = now;

    if (interval < 50) {
        alert("autoclick are not allowed");
        return;
    }

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
    if (Number(nombredeclic.textContent) >= 100) {
        if (onetime == 1) {
            return;
        }
        Achievement100Click.style.display = "flex";
        Achievement100Click.style.animation = "dropFromRight 0.8s ease forwards";

        setTimeout(function() {
            Achievement100Click.style.animation = "RedropLeft 0.8s ease forwards";

            setTimeout(function() {
                Achievement100Click.style.display = "none";
            }, 800);
        }, 2000);

        onetime = 1;
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
