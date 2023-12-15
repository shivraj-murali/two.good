function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function videoconAnimation(){
    var videocon = document.querySelector('#videoContainer');
    var playbtn = document.querySelector('#play');

videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn, {
        scale:1,
        opacity:1
    })
})

videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn, {
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
        left: dets.x-30,
        top: dets.y-70,
    })
})
}

locomotiveAnimation();

gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
})

gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
})



videoconAnimation();


function loadingAnimation(){
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 1,
        duration:0.5,
        stagger:0.5
    })

    gsap.from("#videoContainer", {
        scale: 0.9,
        opacity: 0,
        delay: 2.5,
        duration:1,
        stagger:0.5
    })
}

loadingAnimation()

function cardAnimation(){
    var card1 = document.querySelector("#dets1")
    card1.addEventListener("mouseenter", function(){
        gsap.to("#dets1", {
            height: "350px",
           padddingTop: "1.5rem",
           duration: 0.5
        })
    })

    card1.addEventListener("mouseleave", function(){
        gsap.to("#dets1", {
            height: "40px",
           padddingTop: "0.25rem",
           duration: 0.5
        })
    })
    var card2 = document.querySelector("#dets2")
    card2.addEventListener("mouseenter", function(){
        gsap.to("#dets2", {
            height: "350px",
           padddingTop: "1.5rem",
           duration: 0.5
        })
    })

    card2.addEventListener("mouseleave", function(){
        gsap.to("#dets2", {
            height: "40px",
           padddingTop: "0.25rem",
           duration: 0.5
        })
    })

    var card3 = document.querySelector("#dets3")
    card3.addEventListener("mouseenter", function(){
        gsap.to("#dets3", {
            height: "350px",
           padddingTop: "1.5rem",
           duration: 0.5
        })
    })

    card3.addEventListener("mouseleave", function(){
        gsap.to("#dets3", {
            height: "40px",
           padddingTop: "0.25rem",
           duration: 0.5
        })
    })
}

cardAnimation();

document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
        left:dets.x,
        top: dets.y
    })
})

function cursorAnimation(){
    var cursor = document.querySelectorAll(".child")

    cursor.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to("#cursor", {
            scale:1
        })
    })

    elem.addEventListener("mouseleave", function(){
        gsap.to("#cursor", {
            scale:0
        })
    })
})
}

cursorAnimation()