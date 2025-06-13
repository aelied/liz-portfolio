'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

document.querySelectorAll(".toggle-circle").forEach((circle) => {
  circle.addEventListener("click", () => {
    const expanded = circle.getAttribute("aria-expanded") === "true";
    const bioText = circle.nextElementSibling;

    if (expanded) {
      // Collapse this bubble only
      circle.setAttribute("aria-expanded", "false");
      bioText.setAttribute("hidden", "");
    } else {
      // Expand this bubble only (don't close others)
      circle.setAttribute("aria-expanded", "true");
      bioText.removeAttribute("hidden");
    }
  });
});

let active = null;

function toggleBox(boxId) {
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');

  if (active === boxId) {
    // Collapse
    box1.classList.remove('show');
    box2.classList.remove('show');
    btn1.classList.remove('left');
    btn2.classList.remove('right');
    active = null;
  } else {
    // Expand
    if (boxId === 'box1') {
      box1.classList.add('show');
      box2.classList.remove('show');
    } else {
      box2.classList.add('show');
      box1.classList.remove('show');
    }
    btn1.classList.add('left');
    btn2.classList.add('right');
    active = boxId;
  }
}

function toggleContent(boxId) {
  const boxes = document.querySelectorAll('.content-box');
  boxes.forEach(box => {
    if (box.id === boxId) {
      box.classList.toggle('show');
    } else {
      box.classList.remove('show');
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".collapsible-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Toggle only this button
      btn.classList.toggle("active");
    });
  });
});


window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
