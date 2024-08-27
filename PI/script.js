document.addEventListener('DOMContentLoaded', () => {
    const carteirinhas = document.querySelectorAll('.carteirinha');

    carteirinhas.forEach(carteirinha => {
        carteirinha.addEventListener('mousemove', function (e) {
            const { clientX: mouseX, clientY: mouseY } = e;
            const { offsetWidth: width, offsetHeight: height, offsetTop: top, offsetLeft: left } = carteirinha;
            const centerX = (mouseX - left) - (width / 2);
            const centerY = (mouseY - top) - (height / 2);

            const rotateX = (centerY / height) * -50;
            const rotateY = (centerX / width) * 50;

            carteirinha.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        carteirinha.addEventListener('mouseleave', function () {
            carteirinha.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });
});

const modals = document.querySelectorAll('.services__modal');
const carteirinhas = document.querySelectorAll('.carteirinha');
const closeButtons = document.querySelectorAll('.services__modal-close');

carteirinhas.forEach(carteirinha => {
    carteirinha.addEventListener('click', () => {
        const modalId = carteirinha.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('services__modal')) {
        e.target.style.display = 'none';
    }
});

