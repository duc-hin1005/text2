document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('heartContainer').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('click', function() {
    let yesButton = document.getElementById('yesButton');
    let noButton = document.getElementById('noButton');
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let newSize = parseFloat(currentSize) * 1.2;
    yesButton.style.fontSize = newSize + 'px';

    let x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    let y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});
