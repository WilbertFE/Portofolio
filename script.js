
// fitur darkmode 2.0
const toggleButton = document.querySelector('.toggle-button');
const bulatan = document.querySelector('.bulatan');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const header = document.querySelector('.header');
let theme = 'dark';
if(localStorage.getItem('theme')){
    lightMode();
}
toggleButton.addEventListener('click', function(){
    if (theme === 'dark'){
        lightMode();
    } else {
        darkMode();
    }
});

// akhir fitur darkmode 2.0


// fitur ligthbox
const kotak = document.querySelectorAll('.kotak');
kotak.forEach(function(e){
    e.addEventListener('click', function(){
        lightBox();
    });
});
// akhir fitur lightbox











// functions
function lightBox (){
    const containerLBox = document.createElement('div');
    const fragment = document.createElement('div');
    containerLBox.classList.add('containerLBox');
    fragment.classList.add('lightbox');
    containerLBox.appendChild(fragment);
    document.body.appendChild(containerLBox);
}
function lightMode (){
        theme = 'light';
        localStorage.setItem('theme', 'light');
        document.body.classList.toggle('light-mode');
        header.style.color = '#fff';
        bulatan.classList.remove('geserKiri');
        bulatan.classList.add('geserKanan');
}
function darkMode (){
        theme = 'dark';
        localStorage.removeItem('theme');
        document.body.classList.toggle('light-mode');
        bulatan.classList.remove('geserKanan');
        bulatan.classList.add('geserKiri');
}
// akhir functions