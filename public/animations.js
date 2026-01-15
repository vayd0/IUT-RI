/* Animations */

function rotateIn(element, increase) {
  gsap.fromTo(
    element,
    {
      scale: 0,
      rotate: -100,
      opacity: 0,
    },
    {
      scale: 1,
      rotate: 0 + increase * Math.floor(Math.random() * 30),
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

function followScroll(element) {
  ScrollTrigger.create({
    trigger: element,
    start: "top 90%",
    end: "top 40%",
    onEnter: () => gsap.to(element, { scale: 1.2, duration: 0.2, overwrite: "auto" }),
    onLeave: () => gsap.to(element, { scale: 1, duration: 0.2, overwrite: "auto" }),
    onLeaveBack: () => gsap.to(element, { scale: 1, duration: 0.2, overwrite: "auto" }),
    onEnterBack: () => gsap.to(element, { scale: 1.2, duration: 0.2, overwrite: "auto" }),
  });

  gsap.to(element, {
    opacity: 1,
    rotate: 180,
    ease: "cubic-bezier(0.77, 0, 0.175, 1)",
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "top 0%",
      scrub: true,
    },
  });
}

function applyRotateIn() {
  Array.from(document.getElementsByClassName("rotating")).forEach(
    (element, index) => {
      rotateIn(element, index);
    }
  );
}

function applyFollowScroll() {
  gsap.utils.toArray(".follow-scroll").forEach((element) => {
    followScroll(element);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  gsap.registerPlugin(ScrollTrigger);

  applyRotateIn();
  applyFollowScroll();
});