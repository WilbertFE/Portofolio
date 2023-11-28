
// fitur darkmode 
const toggleButton = document.querySelector('.toggle-button');
const bulatan = document.querySelector('.bulatan');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const header = document.querySelector('.header');
let mode = 'dark';

// ngecek light mode atau engga
if (localStorage.getItem('mode')){
    lightMode();
}
// akhir ngecek

toggleButton.addEventListener('click', function(){
    if (mode === 'dark'){
        lightMode();
    } else {
        darkMode();
    }
});
// akhir fitur darkmode


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
    mode = 'light';
    bulatan.classList.remove('geserKiri');
    bulatan.classList.add('geserKanan');
    dark.style.fontWeight = 'normal';
    light.style.fontWeight = 'bold';
    document.body.style.backgroundColor = '#ddd';
    document.body.style.color = '#000';
    header.style.color = '#fff';
    localStorage.setItem('mode', 'light');
}
function darkMode (){
    mode = 'dark';
    bulatan.classList.remove('geserKanan');
    bulatan.classList.add('geserKiri');
    light.style.fontWeight = 'normal';
    dark.style.fontWeight = 'bold';
    document.body.style.backgroundColor = '#001C33';
    document.body.style.color = '#fff';
    localStorage.removeItem('mode');
}
// akhir functions