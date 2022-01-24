VANTA.NET({
    el: "#my-project",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3f4aff,
    backgroundColor: 0x112239,
    points: 16.00,
    maxDistance: 23.00
  })

const switchToggle = document.querySelector('input[type=checkbox]');
const toggleIcon = document.querySelector('#toggle-icon')
const nav = document.querySelector('#navbar')

function switchMode (e){
    // console.log('Test');
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme','light')
        lightMode();
    }
}
function darkMode(){
    // console.log('Dark Mode');
    toggleIcon.children[0].textContent="โหมดกลางคืน";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
    nav.style.background = 'rgb(0 0 0 / 50%)';
}
function lightMode(){
    // console.log('Light Mode');
    toggleIcon.children[0].textContent="โหมดกลางวัน";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
    nav.style.background = 'rgb(255 255 255 / 50%)';
}

switchToggle.addEventListener('change',switchMode);