// Origami wordmark — the trigger only. All of the motion lives in
// _sass/_layout.scss (.site-title.is-unfolding span + @keyframes origamiUnfold).
//
// This file's whole job is to decide WHETHER the fold happens, and to tell CSS
// each letter's position in the cascade. That split is deliberate: the resting
// state in the stylesheet is the FINISHED state — full name, no transform — so
// if this script never runs, never loads, or bails out below, the wordmark is
// simply there. There is no state in which the name is invisible.
//
// No dependencies, no build step, no framework. Loaded with `defer` from
// head.liquid, so it runs after the document is parsed but before first paint,
// which is what keeps the folded start from flashing as finished text first.
(function () {
  'use strict';

  var title = document.querySelector('.site-title');
  if (!title) return;

  // Checked here as well as in the stylesheet's media query, on purpose. The
  // CSS guard alone would still leave the trigger class on the element; this
  // way a reader who has asked for less motion never gets the fold applied at
  // all, by either route.
  var mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq && mq.matches) return;

  var letters = title.querySelectorAll('span');
  if (!letters.length) return;

  // --i is the letter's index; the stylesheet turns it into an animation-delay.
  // Keeping the arithmetic in CSS means the stagger can be retuned without
  // touching this file.
  for (var i = 0; i < letters.length; i++) {
    letters[i].style.setProperty('--i', i);
  }

  title.classList.add('is-unfolding');
})();
