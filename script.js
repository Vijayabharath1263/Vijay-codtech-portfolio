

gsap.from("h1", {
  y: -40,
  opacity: 0,
  duration: 1
});

gsap.from("p", {
  opacity: 0,
  delay: 0.5
});

gsap.from("button", {
  scale: 0,
  delay: 1
});

gsap.from(".project", {
  opacity: 0,
  y: 30,
  stagger: 0.3,
  duration: 1
});
