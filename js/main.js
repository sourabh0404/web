
const swup = new Swup();

function init() {
  if(document.querySelector('#page-container')){


    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");
    
    gsap.to(sections, {
      xPercent: -85 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
      }
    });
  
  }
  if (document.querySelector('#home-page')) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
    
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    gsap.to(".sec-2-text-container h2", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".sec-2-text-container h2",
        scrub: 1,
        start: "top center",
        end: "bottom top",
        start: "top 100%", // updated start value
        end: "bottom 30%", // updated end value
      },
    });

     
    let mainSections = document.querySelectorAll(".section-3");
    mainSections.forEach(mainSection => {
    let exDiv = mainSection.querySelector(".sec-3-ex-div");
    let headings = exDiv.querySelectorAll("h1");
    let tl = gsap.timeline();
    tl.from(headings, { y: 80, stagger: 0.5, opacity: 0, duration: 1, ease: "power3.out" })
    ScrollTrigger.create({
  trigger: exDiv,
  start: "center 100%",
  end: "top 50%",
  toggleActions: "play none none reverse",
  animation: tl
  });
  });


  const  gsapItem=gsap.utils.toArray('.reveal_img_item');


  gsap.to(".sec-5-title", {
    x: "9vw",
    scrollTrigger: {
      trigger: ".sec-5-title",
      start: "top 80%",
      end: "top 9vw",
      // scrub: true,
      scrub: 3, 
    },
  });
  
  gsap.to(".m-sec-5-title", {
    x: "10vw",
    scrollTrigger: {
      trigger: ".m-sec-5-title",
      start: "top 80%",
      end: "top 10vw",
      // scrub: true,
      scrub: 2, 
    },
  });
  
  gsapItem.forEach((gsIt) => {
      const imgNum = gsIt.querySelector('.reveal_img_num');
      const imgB1 = gsIt.querySelector('.reveal_img_b1');
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: gsIt,
          start: "top 40%",
          toggleActions: "play none none none"
        }
      });
    
      tl.from(imgNum, 1, { opacity: 0, translateY: "80px", ease: "expo.out" })
        .to(imgB1, 1.2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "expo.out" }, "-=0.5")
        // .from(imgImg, 1, { opacity: 0, scale: 1.2, ease: "expo.out" }, "-=1.2");
    });
    const revealImgItems = document.querySelectorAll(".reveal_img_item");
    revealImgItems.forEach((item) => {
      const image = item.querySelector(".reveal_img-img");
    
      const timeline = gsap.timeline({ paused: true });
    
      timeline.set(image, {
        scale: 1,
      });
    
  
      timeline.to(image, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    
      // Add event listeners to start/stop the animation for each item
      item.addEventListener("mouseenter", () => {
        timeline.play();
      });
    
      item.addEventListener("mouseleave", () => {
        timeline.reverse();
      });
    });

    const img11 = document.querySelector('.sec-7-img-1');

  // Define the scroll-triggered animation
  gsap.to(img11, {
    y: '-20vh',
    scrollTrigger: {
      trigger: img11,
      start: 'top 70%',
      end: 'bottom 20%',
      scrub: 3
    }
  });


  const splide = new Splide('.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    autoWidth:true,
    gap:40,
    arrows:false,
    pagination:false,
    autoScroll: {
      speed: 2,
    },
  } );
  
  splide.mount(window.splide.Extensions);
}
}


if (document.readyState === 'complete') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', () => init());
}

swup.on('pageView', () => init());





