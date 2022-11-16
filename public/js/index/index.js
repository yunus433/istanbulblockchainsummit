// window.addEventListener('load', () => {
//   const startPageAnimationWrapper = document.querySelector('.start-page-animation-wrapper');
//   const eachStartPageAnimation1 = document.querySelector('.each-start-page-animation-1');
//   const eachStartPageAnimation2 = document.querySelector('.each-start-page-animation-2');
//   const eachStartPageAnimation3 = document.querySelector('.each-start-page-animation-3');
//   const eachStartPageAnimation4 = document.querySelector('.each-start-page-animation-4');
//   const eachStartPageAnimation5 = document.querySelector('.each-start-page-animation-5');
//   const eachStartPageAnimation6 = document.querySelector('.each-start-page-animation-6');

//   document.querySelector('.all-wrapper').addEventListener('scroll', event => {
//     const percentage = (event.target.scrollTop + 180) / window.innerHeight;

//     if (percentage > 1) {
//       eachStartPageAnimation1.style.top = '-250px';
//       eachStartPageAnimation2.style.top = '-120px';
//       eachStartPageAnimation2.style.right = '-100px';
//       eachStartPageAnimation3.style.right = '30px';
//       eachStartPageAnimation4.style.top = '280px';
//       eachStartPageAnimation4.style.right = '-30px';
//       eachStartPageAnimation5.style.right = '10px';
//       eachStartPageAnimation6.style.top = '500px';
//       eachStartPageAnimation6.style.right = '0px';

//       if (percentage > 1.2) {
//         if (percentage > 2.2) {
//           startPageAnimationWrapper.style.display = 'none';
//         } else {
//           startPageAnimationWrapper.style.display = 'unset';
//           startPageAnimationWrapper.style.opacity = `${2.2 - percentage}`;
//         }
//       }
//     } else {
//       eachStartPageAnimation1.style.top = `-${500 - 250 * percentage}px`;
//       eachStartPageAnimation2.style.top = `-${80 + 40 * percentage}px`;
//       eachStartPageAnimation2.style.right = `-${150 - 50 * percentage}px`;
//       eachStartPageAnimation3.style.right = `${180 - 150 * percentage}px`;
//       eachStartPageAnimation4.style.top = `${340 - 60 * percentage}px`;
//       eachStartPageAnimation4.style.right = `-${150 - 120 * percentage}px`;
//       eachStartPageAnimation5.style.right = `${150 - 140 * percentage}px`;
//       eachStartPageAnimation6.style.top = `${600 - 100 * percentage}px`;
//       eachStartPageAnimation6.style.right = `-${20 - 20 * percentage}px`;
//     }
//   })
// })
