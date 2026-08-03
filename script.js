const images = document.querySelectorAll(".gallery img");

let current = 0;

function openLightbox(index){

    current = index;

    document.getElementById("lightbox-img").src = images[current].src;

    document.getElementById("lightbox").classList.add("show");

}

function closeLightbox(){

    document.getElementById("lightbox").classList.remove("show");

}

function changeSlide(step){

    current += step;

    if(current < 0)
        current = images.length - 1;

    if(current >= images.length)
        current = 0;

    document.getElementById("lightbox-img").src = images[current].src;

}

function filterSelection(category){

    let items = document.getElementsByClassName("image");

    for(let i=0;i<items.length;i++){

        if(category=="all"){

            items[i].style.display="block";

        }

        else if(items[i].classList.contains(category)){

            items[i].style.display="block";

        }

        else{

            items[i].style.display="none";

        }

    }

}