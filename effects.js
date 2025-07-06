const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

/* if you want to always shows the FANCY AF effect

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

*/


// Masonry gallery generator for #photography
function generateMasonryGallery() {
  const imageCount = 18;
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  for (let i = 1; i <= imageCount; i++) {
    div = document.createElement('div');
    div.className = 'album-item';
    img = document.createElement('img');
    img.src = `album/${i}.jpg`;
    img.style.width = '100%';
    img.style.display = 'block';
    div.appendChild(img);
    gallery.appendChild(div);
  }
}
document.addEventListener('DOMContentLoaded', generateMasonryGallery);


//If you question that "Wait, did I really made this", then yes, I made it once with React and Tailwind, I just rewrote a lazier version for this one
//The react one is here https://dreamchasers.akvns.org/retro/the-show-must-go-on
//Due to NDA contract-related reasons, I cannot share the exact source-code of the web until the project is official announced
//On second thought, since the webpage is annouce before the result date, here's the source code of the gallery I made with React and Tailwind:
//https://github.com/arknights-vns/the-web/blob/main/components/ImageGallery.tsx and https://github.com/arknights-vns/the-web/blob/main/app/retro/the-show-must-go-on/page.tsx
//The ImageGallery components fetch all images in specified folder (for this instance, @/public/retro/the-show-must-go-on/album) 
//Then render the gallery in /app/retro/the-show-must-go-on/page.tsx
//It will give the gallery of images I shoot during Arknights Vietnam Station Offline: [The Show Must Go On] Offline event at the end of the retro page