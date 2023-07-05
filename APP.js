const etoiles = document.querySelectorAll('.star-item');
const taux = document.querySelector('.taux');
const btn = document.querySelector('button')
let value = 0;


etoiles.forEach((etoile) => {
    etoile.addEventListener('click', function () {
        if (!etoile.hasAttribute('fill')) {
            etoile.setAttribute('fill', 'yellow')
            value +=20
        } else {
            etoile.removeAttribute('fill')
            value -=20
        }
        taux.textContent = value + '%'
    });
});

btn.addEventListener('click', () => {
    taux.textContent = 0 + '%'
    value = 0
    etoiles.forEach((etoile) => {
        etoile.removeAttribute('fill')
    })
})





