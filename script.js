
// fitur darkmode 
const toggleButton = document.querySelector('.toggle-button');
const bulatan = document.querySelector('.bulatan');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
let mode = 'dark';
toggleButton.addEventListener('click', function(){
    if (mode === 'dark'){
        mode = 'light';
        bulatan.classList.remove('geserKiri');
        bulatan.classList.add('geserKanan');
        dark.style.fontWeight = 'normal';
        light.style.fontWeight = 'bold';
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    } else {
        mode = 'dark';
        bulatan.classList.remove('geserKanan');
        bulatan.classList.add('geserKiri');
        light.style.fontWeight = 'normal';
        dark.style.fontWeight = 'bold';
        document.body.style.backgroundColor = '#001C33';
        document.body.style.color = '#fff';
    }
});
// akhir fitur darkmode