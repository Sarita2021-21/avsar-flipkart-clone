// console.log(slide)
const slide=document.querySelectorAll('.carousel-image img')
let i = 1;

setInterval(() => {
    i++;
    const slides = document.querySelector('.change')
    slides.classList.remove('change')
    if (i > slide.length) {
        slide[0].classList.add('change')
        i = 1
    }
    else {
        slides.nextElementSibling.classList.add('change')
    }

}, 3000);

// console.log(slides)

// // button slideshow 
// document.querySelector('#button-container').addEventListener('click', () => {
//     document.querySelectorAll('.target').forEach(item => {
//         item.classList.toggle('change')
//     })
// })
