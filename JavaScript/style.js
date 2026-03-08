// Fonction pour basculer la langue
window.changeLanguage = function () {
    const lang = document.getElementById("languageSelector").value;
    const elements = document.querySelectorAll('[data-fr]');

    elements.forEach(el => {
        el.textContent = el.getAttribute(lang === 'en' ? 'data-en' : 'data-fr');
    });

    localStorage.setItem('userLang', lang);
};

// Appliquer la langue au chargement de la page
window.onload = () => {
    const savedLang = localStorage.getItem('userLang') || 'fr';
    const selector = document.getElementById("languageSelector");
    if (selector) {
        selector.value = savedLang;
        changeLanguage();
    }
};


const dishInfo = {
    'sushi': {
        fr: "🍣 Sushi : Riz vinaigré de Niigata et thon rouge frais.",
        en: "🍣 Sushi: Vinegared Niigata rice and fresh bluefin tuna."
    },
    'ramen': {
        fr: "🍜 Ramen : Bouillon de Kyushu et nouilles faites main.",
        en: "🍜 Ramen: Kyushu broth and handmade noodles."
    },
    'bento': {
        fr: "🍱 Bento : Un repas complet avec riz, saumon et légumes.",
        en: "🍱 Bento: A complete meal with rice, salmon, and vegetables."
    },
    'matcha': {
        fr: "🍵 Matcha : Thé vert bio moulu sur pierre à Uji.",
        en: "🍵 Matcha: Organic stone-ground green tea from Uji."
    },
    'onigiri': {
        fr: "🍙 Onigiri : Riz enveloppé d'une algue Nori croustillante.",
        en: "🍙 Onigiri: Rice wrapped in crispy Nori seaweed."
    }
};

const wrapper = document.getElementById('belt-wrapper');
const group = document.getElementById('items-group');


const clone = group.cloneNode(true);
wrapper.appendChild(clone);

let posX = 0;
let speed = 0.7;
let isPaused = false;

// 2. FONCTION DE MOUVEMENT
function move() {
    if (!isPaused) {
        posX -= speed;


        if (Math.abs(posX) >= group.offsetWidth) {
            posX = 0;
        }
        wrapper.style.transform = `translateX(${posX}px)`;
    }
    requestAnimationFrame(move);
}

// 3. INTERACTION
function showInfo(dishKey) {
    const bubble = document.getElementById('chef-bubble');
    const lang = document.getElementById('languageSelector').value; // Récupère la langue actuelle


    bubble.innerText = dishInfo[dishKey][lang];


    isPaused = true;


    setTimeout(() => {
        isPaused = false;

        bubble.innerText = bubble.getAttribute('data-' + lang);
    }, 4000);
}


// Lancement de l'animation
move();





