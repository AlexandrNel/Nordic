const slider_slide1 = document.getElementById('slider-slide1')
const slider_slide2 = document.getElementById('slider-slide2')
const slider_slide3 = document.getElementById('slider-slide3')
const slider_slide4 = document.getElementById('slider-slide4')

// Choosing the format of the event

const buffet = document.getElementById('buffet')
const gastronomic_dinner = document.getElementById('gastronomic-dinner')
const banquet = document.getElementById('banquet')
let format_of_event = document.getElementById('format-of-event')

// Event cost verification


let priceOfBuffet = 5000;
let priceOfGastronomic_dinner = 4000;
let priceOfBanquet = 3000;

let price_per_person = document.getElementById('price-per-person')

const valueOfPersons = document.getElementById("number-of-persons").value;
let valueOfSpan = document.getElementById("value-number-of-persons");

let personsNumberOfEvent = document.getElementById('guest-number-of-event')



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
    let personsNumberOfEvent = document.getElementById('guest-number-of-event')
    valueOfSpan.innerHTML = valueOfPersons
    personsNumberOfEvent.innerHTML = valueOfPersons
  
    // console.log(`Value: ${valueOfPersons}`)
    // console.log(`Span: ${valueOfSpan}`)
  }

  let NumberOfPersons = document.getElementById("number-of-persons").value;

  document.getElementById("number-of-persons").addEventListener('mousemove', func1)
  document.getElementById("number-of-persons").addEventListener('click', func1)

  document.getElementById('date').valueAsDate = new Date();



// Choosing the format of the event

function eventFormat(event, event1, event2){
  format_of_event.innerHTML = event.innerHTML
  event.classList.toggle('button--secondary')
  if (event.classList.contains('button--secondary')){
    format_of_event.innerHTML = event.innerHTML
  } else {
    format_of_event.innerHTML = ""
  }
  if (event.classList.contains('button--secondary') & (event1.classList.contains('button--secondary') || event2.classList.contains('button--secondary'))){
    event1.classList.remove('button--secondary')
    event2.classList.remove('button--secondary')
  }
} 

buffet.addEventListener('click', function(){
eventFormat(buffet, gastronomic_dinner, banquet)
})
gastronomic_dinner.addEventListener('click', function(){
  eventFormat(gastronomic_dinner, buffet, banquet)
})
banquet.addEventListener('click', function(){
  eventFormat(banquet, gastronomic_dinner, buffet)
})

// ======================================================


// Event cost verification

function eventCostCheck(event, cost){
  if (event.classList.contains('button--secondary'))
  {price_per_person.innerHTML = cost}
 else {price_per_person.innerHTML = "0"}
}
buffet.addEventListener('click', function(){
  eventCostCheck(buffet, priceOfBuffet)
})
gastronomic_dinner.addEventListener('click', function(){
  eventCostCheck(gastronomic_dinner, priceOfGastronomic_dinner)
})
banquet.addEventListener('click', function(){
  eventCostCheck(banquet, priceOfBanquet)
})



let dotSecond = document.getElementById('dotSecond')
let dotFirst = document.getElementById('dotFirst')

dotSecond.addEventListener('click', function(){
  dotSecond.classList.add('feedback__dot--active')
  if (dotSecond.classList.contains('feedback__dot--active'))
  {document.getElementById('feedback-form-second-block').classList.remove('disable')}
  else {document.getElementById('feedback-form-second-block').classList.add('disable')}
  
  if (dotSecond.classList.contains('feedback__dot--active')){
    document.getElementById('feedback-form-first-block').classList.add('disable')
  } else {document.getElementById('feedback-form-first-block').classList.remove('disable')}
})

dotFirst.addEventListener('click', function(){
  if (dotSecond.classList.contains('feedback__dot--active')){
    dotSecond.classList.remove('feedback__dot--active')
    document.getElementById('feedback-form-first-block').classList.remove('disable')
    document.getElementById('feedback-form-second-block').classList.add('disable')
  } else {console.log("It's good")}
})

document.getElementById('feedback-btn').addEventListener('click', function(){
  dotFirst
})