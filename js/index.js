const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  

  const slider_slide1 = document.getElementById('slider-slide1')
  const slider_slide2 = document.getElementById('slider-slide2')
  const slider_slide3 = document.getElementById('slider-slide3')
  const slider_slide4 = document.getElementById('slider-slide4')

  slider_slide1.addEventListener('mouseover', function(){     
  document.querySelector('#slider-slide1 .slider__text').classList.add("slider__text--margin")
  document.querySelector('#slider-slide1 .slider__image').classList.add("slider__image--border")
  }) 
  slider_slide1.addEventListener('mouseout', function(){
    document.querySelector('#slider-slide1 .slider__text').classList.remove("slider__text--margin")
    document.querySelector('#slider-slide1 .slider__image').classList.remove("slider__image--border")
  })
 

  slider_slide2.addEventListener('mouseover', function(){     
  document.querySelector('#slider-slide2 .slider__text').classList.add("slider__text--margin")
  document.querySelector('#slider-slide2 .slider__image').classList.add("slider__image--border")
  }) 
  slider_slide2.addEventListener('mouseout', function(){
    document.querySelector('#slider-slide2 .slider__text').classList.remove("slider__text--margin")
    document.querySelector('#slider-slide2 .slider__image').classList.remove("slider__image--border")
  })
 
  slider_slide3.addEventListener('mouseover', function(){     
  document.querySelector('#slider-slide3 .slider__text').classList.add("slider__text--margin")
  document.querySelector('#slider-slide3 .slider__image').classList.add("slider__image--border")
  }) 
  slider_slide3.addEventListener('mouseout', function(){
    document.querySelector('#slider-slide3 .slider__text').classList.remove("slider__text--margin")
    document.querySelector('#slider-slide3 .slider__image').classList.remove("slider__image--border")
  })
 
  slider_slide4.addEventListener('mouseover', function(){     
  document.querySelector('#slider-slide4 .slider__text').classList.add("slider__text--margin")
  document.querySelector('#slider-slide4 .slider__image').classList.add("slider__image--border")
  }) 
  slider_slide4.addEventListener('mouseout', function(){
    document.querySelector('#slider-slide4 .slider__text').classList.remove("slider__text--margin")
    document.querySelector('#slider-slide4 .slider__image').classList.remove("slider__image--border")
  })
 

  

  const func1 = () => {
    const valueOfPersons = document.getElementById("number-of-persons").value;
    let valueOfSpan = document.getElementById("value-number-of-persons");
    valueOfSpan.innerHTML = valueOfPersons
  
  
    // console.log(`Value: ${valueOfPersons}`)
    // console.log(`Span: ${valueOfSpan}`)
  }

  document.getElementById("number-of-persons").addEventListener('mousemove', func1)
  document.getElementById("number-of-persons").addEventListener('click', func1)