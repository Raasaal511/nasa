$(document).ready(function(){
	$('.slider').slick({
	    centerMode: true,
		slidesToShow: 5,
		asNavFor: '.sliderbig',
		variableWidth: true,
		  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]


	});
	$('.sliderbig').slick({
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        fade: true,
		asNavFor: '.slider',


	})

	$('.full-screen-sliderbig').slick({
	    arrows: true,
	    slidersToShow:  1,
	    centerMode: true,
	    fade: true,
        asNavFor: '.sliderbig',

	})
});

document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.sliderbig__item-img');
    const fullScreenView = document.querySelector('.fullscreen-view');
    const fullScreenImage = document.querySelector('.full-screen-image');
    const closeButton = document.querySelector('.close-button');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const imagePath = this.getAttribute('src');
            fullScreenImage.setAttribute('src', imagePath);
            fullScreenView.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function () {
        fullScreenView.style.display = 'none';
    });
});