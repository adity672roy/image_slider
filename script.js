// var t1 = gsap.timeline({
// //   duration: 1,
//   repeat: -1,
// });

// t1.to(
//   ".imgContainer",
//   {
//     width: "100%",
//     duration: 2,
//     stagger: 2,
//     ease: Expo.easeInOut,
//   },
//   "a"
// )
//   .to(
//     ".imgContainer",
//     {
//       delay: 2,
//       width: "0%",
//       stagger: 2,
//     },
//     "a"
//   )
//   .to(
//     ".text h1",
//     {
//       top: "0%",
//       stagger: 2,
//       duration: 2,
//       ease: Expo.easeInOut,
//     },
//     "a"
//   )
//   .to(
//     ".text h1",
//     {
//       delay: 2,
//       top: "-100%",
//       stagger: 2,
//     },
//     "a"
//   )

//   .to(
//     ".info p",
//     {
//       top: "0%",
//       stagger: 2,
//       duration: 2,
//       ease: Expo.easeInOut,
//     },
//     "a"
//   )
//   .to(
//     ".info p",
//     {
//       delay: 2,
//       top: "-100%",
//       stagger: 2,
//     },
//     "a"
//   );

gsap.from(".navbar", {
  opacity: 0,
  duration: 2,
  y: -50,
  ease: Expo.easeInOut,
});
gsap.from(".icons", {
  opacity: 0,
  duration: 2,
  x: 50,
  ease: Expo.easeInOut,
});

var t1 = gsap.timeline({
  repeat: -1,
});

t1.to(
  ".imgContainer",
  {
    width: "100%",
    duration: 5,
    stagger: 5,
    ease: Expo.easeInOut,
  },
  "a"
)
  .to(
    ".imgContainer",
    {
      delay: 5,
      width: "0%",
      stagger: 5,
    },
    "a"
  )
  .to(
    ".text h1",
    {
      top: "0%",
      stagger: 5,
      duration: 5,
      ease: Expo.easeInOut,
    },
    "a"
  )
  .to(
    ".text h1",
    {
      delay: 5,
      top: "-100%",
      stagger: 5,
    },
    "a"
  )

  .to(
    ".info p",
    {
      top: "0%",
      stagger: 5,
      duration: 5,
      ease: Expo.easeInOut,
    },
    "a"
  )
  .to(
    ".info p",
    {
      delay: 5,
      top: "-100%",
      stagger: 5,
    },
    "a"
  );
