function menuClick() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/css/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/css/img/close_white_36dp.svg";
    }
}

document.querySelector('.login-button').addEventListener('click', function() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/css/img/menu_white_36dp.svg";
    }
});

const nav = document.getElementsByTagName("nav")[0];
const topoNav = nav.offsetTop;

window.onscroll = function() {
    fixarMenuNoTopo();
}

function fixarMenuNoTopo() {
    if (window.pageYOffset >= topoNav) {
        nav.classList.add("FixoNoTopo");
    } else {
        nav.classList.remove("FixoNoTopo");
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

       
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = "assets/css/img/menu_white_36dp.svg";
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToTop() {
    console.log("Marcos Rego");
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
 
    });
}
