// Event Bubling
// Menempelkan event pada container

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    console.log(e.target);
});