$(document).ready(function () {
  $("#hb").click(function() {
      $(".navbar-left").addClass("show");
  });
  $("#overlay").click(function() {
      $(".navbar-left").removeClass("show");
  });
  $("#btn-close").click(function() {
      $(".navbar-left").removeClass("show");
  });
  $('.bc-carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });

});

const container = document.querySelector('#card-container');

function loadImages(numImages = 1){
   let i=0;
    while(i < numImages){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then(data=>{
      const doc =  document.createElement('div');
      doc.className = "col-12 col-lg-6 offset-lg-3 item";
      doc.innerHTML = `
        <a href="./categories.html" class="card border-0">
          <div class="ratio ratio-21x9">
            <img src="assets/img/img1.jpeg" alt="" class="object-cover">
          </div>
          <div class="card-body">
            <p>20 Article</p>
            <h2>Beauty and Fashion</h2>
          </div>
        </a>
      `
      container.appendChild(doc)
    })
    i++;
   }   
  }

loadImages();

window.addEventListener('scroll',()=>{
    console.log(window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    loadImages();
    }
})