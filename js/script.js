document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.birthday-card');
    card.addEventListener('click', function() {
        card.style.transform = 'rotateY(-180deg)';
    });
});
