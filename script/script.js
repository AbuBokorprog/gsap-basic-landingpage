const tl = gsap.timeline();

tl.from("#nav img, #nav p, #nav button", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

tl.from("#main h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
tl.from("#main img", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

tl.from("#main h5", {
  scale: 0,
  opacity: 0,
});
tl.to("#main h5", {
  y: 50,
  duration: 1,
  repeat: -1,
  yoyo: true,
});
