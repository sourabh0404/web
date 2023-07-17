// navbar---
const toggleBtn = document.querySelector('#toggle-btn');
const menu = document.querySelector('.menu-page');
const menuItems = document.querySelectorAll('.menu-big a');
let isOpen = false;

toggleBtn.addEventListener('click', () => {
  if (!isOpen) {
    openMenu();
    isOpen = true;
  } else {
    closeMenu();
    isOpen = false;
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenuWithAnimation(() => {
      setTimeout(() => {
        window.location.href = item.getAttribute('href');
      }, 500);
    });
  });
});

function openMenu() {
  menu.classList.add('show');
  gsap.to(menu, { duration: 0.5, left: 0, ease: "power4.inOut", onComplete: runCustomAnimationWithDelay });
}

function runCustomAnimationWithDelay() {
  setTimeout(runCustomAnimation, 400);
}

function runCustomAnimation() {
  gsap.to("#create , #create2", { y: '0%', duration: 0.7, ease: "SlowMo.easeOut" });
}

function closeMenuWithAnimation(callback) {
  gsap.to("#create , #create2", { y: '100%', duration: 0.7, ease: "SlowMo.easeOut", onComplete: callback });

  function callback() {
    gsap.to(menu, {
      duration: 0.5,
      left: "-100%",
      ease: "power4.inOut",
      onComplete: () => {
        menu.classList.remove('show');
      }
    });
  }
}

function closeMenu() {
  gsap.to("#create , #create2", {
    y: '100%',
    duration: 0.5,
    ease: "SlowMo.easeOut",
    onComplete: () => {
      gsap.to(menu, {
        duration: 0.5,
        left: "-100%",
        ease: "power4.inOut",
        onComplete: () => {
          menu.classList.remove('show');
        }
      });
    }
  });
}
