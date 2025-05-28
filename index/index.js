function initializeSlides() {
  const slideGroups = {
    es: document.querySelectorAll('.slide-content-es'),
    en: document.querySelectorAll('.slide-content-en')
  };

  Object.entries(slideGroups).forEach(([lang, slides]) => {
    if (slides.length > 0) {
      // Clear any existing intervals for this language
      if (slides[0].interval) {
        clearInterval(slides[0].interval);
      }
      
      // Initialize slides
      let currentSlide = 0;
      slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === 0) slide.classList.add('active');
      });
      
      // Set up new interval
      slides[0].interval = setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 3000);
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeSlides);
window.addEventListener('load', initializeSlides);


//Toggle function for the menu buttons in mobile

function toggleMenuMobile (idMenuButton,idMenuContent){

    document.getElementById(idMenuButton).addEventListener('click',function(){

        let menu = document.getElementById(idMenuContent);

        if(menu.style.display == 'none' || menu.style.display == ''){
            menu.style.display = 'block';
        }else{
            menu.style.display = 'none';
        }
    });
}

//Toggle function for the menu buttons in desktop

function toggleMenuDesktop (idMenuButton,idMenuContent,idMenuHolder,menuOptionClass){


    document.getElementById(idMenuButton).addEventListener('click',function(){

        console.log('click');

        let menu = document.getElementById(idMenuContent);
        let menuHolder = document.getElementById(idMenuHolder);
        let menuOptions = document.getElementsByClassName(menuOptionClass);

        if(menu.style.display == 'none' || menu.style.display ==''){

            menu.style.display = 'block';
            menuHolder.style.display = 'none';

            for(let i = 0; i < menuOptions.length; i++){
                let menuOption = menuOptions[i];
                if(menuOption.id != menu.id){
                    menuOption.style.display = 'none';
                }
            }
            
        }else{

            menu.style.display = 'none';
            menuHolder.style.display = 'block';
        }
    });
}

document.querySelectorAll('[lang="en"]').forEach(element => {
  element.style.display = 'none';
});

//Switching the language
document.getElementById('switch-lang').addEventListener('click', function() {

    const firstEsElement = document.querySelector('[lang="es"]');
    const isSpanishVisible = window.getComputedStyle(firstEsElement).display !== 'none';

    if (!isSpanishVisible) {
        // Switch to Spanish
        document.querySelectorAll('[lang="es"]').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelectorAll('[lang="en"]').forEach(el => {
            el.style.display = 'none';
        });
    } else {
        // Switch to English
        document.querySelectorAll('[lang="es"]').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('[lang="en"]').forEach(el => {
            el.style.display = 'block';
        });
    }

    // Close any open menu info
    document.querySelectorAll('.menu-info').forEach(el => {
        el.style.display = 'none';
    });
});

let mediaQuery = window.matchMedia('(max-width: 650px)')

if(!mediaQuery.matches){
    // language es menu button toggle
    toggleMenuDesktop("flavors-specialties-es","flavors-specialties-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("fresh-flavors-es","fresh-flavors-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("chilaquiles-es","chilaquiles-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("mexican-corn-es","mexican-corn-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("made-home-es","made-home-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("sandwich-es","sandwich-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("eggs-es","eggs-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("omelettes-es","omelettes-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("extras-es","extras-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("drinks-es","drinks-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("big-drinks-es","big-drinks-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("juices-combination-es","juices-combination-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("juices-es","juices-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("milk-combinations-es","milk-combinations-es-info","info-holder-es","menu-info");
    toggleMenuDesktop("chocolate-es","chocolate-es-info","info-holder-es","menu-info");

    // language en menu button toggle

    toggleMenuDesktop("flavors-specialties-en","flavors-specialties-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("fresh-flavors-en","fresh-flavors-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("chilaquiles-en","chilaquiles-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("mexican-corn-en","mexican-corn-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("made-home-en","made-home-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("sandwich-en","sandwich-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("eggs-en","eggs-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("omelettes-en","omelettes-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("extras-en","extras-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("drinks-en","drinks-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("big-drinks-en","big-drinks-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("juices-combination-en","juices-combination-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("juices-en","juices-es-info","info-holder-en","menu-info");
    toggleMenuDesktop("milk-combinations-en","milk-combinations-en-info","info-holder-en","menu-info");
    toggleMenuDesktop("chocolate-en","chocolate-en-info","info-holder-en","menu-info");

}else{

    // language es menu button toggle mobile
    toggleMenuMobile("flavors-specialties-es-mobile","flavors-specialties-es-mobile-info");
    toggleMenuMobile("fresh-flavors-es-mobile","fresh-flavors-es-mobile-info");
    toggleMenuMobile("chilaquiles-es-mobile","chilaquiles-es-mobile-info");
    toggleMenuMobile("mexican-corn-es-mobile","mexican-corn-es-mobile-info");
    toggleMenuMobile("made-home-es-mobile","made-home-es-mobile-info");
    toggleMenuMobile("sandwich-es-mobile","sandwich-es-mobile-info");
    toggleMenuMobile("eggs-es-mobile","eggs-es-mobile-info");
    toggleMenuMobile("omelettes-es-mobile","omelettes-es-mobile-info");
    toggleMenuMobile("extras-es-mobile","extras-es-mobile-info");
    toggleMenuMobile("drinks-es-mobile","drinks-es-mobile-info");
    toggleMenuMobile("big-drinks-es-mobile","big-drinks-es-mobile-info");
    toggleMenuMobile("juices-combination-es-mobile","juices-combination-es-mobile-info");
    toggleMenuMobile("juices-es-mobile","juices-es-mobile-info");
    toggleMenuMobile("milk-combinations-es-mobile","milk-combinations-es-mobile-info");
    toggleMenuMobile("chocolate-es-mobile","chocolate-es-mobile-info");

    // language en menu button toggle mobile
    toggleMenuMobile("flavors-specialties-en-mobile","flavors-specialties-en-mobile-info");
    toggleMenuMobile("fresh-flavors-en-mobile","fresh-flavors-en-mobile-info");
    toggleMenuMobile("chilaquiles-en-mobile","chilaquiles-en-mobile-info");
    toggleMenuMobile("mexican-corn-en-mobile","mexican-corn-en-mobile-info");
    toggleMenuMobile("made-home-en-mobile","made-home-en-mobile-info");
    toggleMenuMobile("sandwich-en-mobile","sandwich-en-mobile-info");
    toggleMenuMobile("eggs-en-mobile","eggs-en-mobile-info");
    toggleMenuMobile("omelettes-en-mobile","omelettes-en-mobile-info");
    toggleMenuMobile("extras-en-mobile","extras-en-mobile-info");
    toggleMenuMobile("drinks-en-mobile","drinks-en-mobile-info");
    toggleMenuMobile("big-drinks-en-mobile","big-drinks-en-mobile-info");
    toggleMenuMobile("juices-combination-en-mobile","juices-combination-en-mobile-info");
    toggleMenuMobile("juices-en-mobile","juices-en-mobile-info");
    toggleMenuMobile("milk-combinations-en-mobile","milk-combinations-en-mobile-info");
    toggleMenuMobile("chocolate-en-mobile","chocolate-en-mobile-info");

}











