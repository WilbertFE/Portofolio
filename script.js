
// toggle button
const toggleButton = document.querySelector('.toggle-button');
const bulatan = document.querySelector('.bulatan');
let ditekan = false;
toggleButton.addEventListener('click', function(){
    if(!ditekan){
        ditekan = true;
        bulatan.classList.remove('light');
        bulatan.classList.add('dark');
    }else {
        ditekan = false;
        bulatan.classList.remove('dark');
        bulatan.classList.add('light');
    }
});
// akhir toggle button