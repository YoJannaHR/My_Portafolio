const d = document;

d.getElementById("button-up").addEventListener("click", scrollup);

export function scrollup() {
  const currentscroll = d.documentElement.scrollTop || d.body.scrollTop;

  if (currentscroll > 0) {
    window.requestAnimationFrame(scrollup);
    window.scrollTo(0, currentscroll - currentscroll / 15);
  }
}

let buttonUp = document.getElementById("button-up");

export function newScroll() {
    window.onscroll = function () {
       
        const scroll = document.documentElement.scrollTop;
        console.log(scroll);
         if (scroll > 100) {
            
           buttonUp.style.transform = "scale(1)";
         } else if (scroll < 100) {
           buttonUp.style.transform = "scale(0)";
         }
       };
}
