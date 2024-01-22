$(".x-btn ").on("click" , function(){
    $('.asid-bar').animate({width: 'toggle'} , 500  )
} )


$(".icon ").on("click" , function(){
    $('.asid-bar').animate({width: 'toggle'} , 500 )
} )



$('.asid-item').on('click' , function(e) {
    let aherf =  e.target.getAttribute('href') ;
    let offsetSec = $(aherf).offset().top
    $('body').animate({scrollTop: offsetSec} , 3000  )

} )

$('#Duration  h3 ').on("click" , function(e) {
    $(e.target).next().slideToggle(1000);
} )

let endDate = new Date('2024-01-31T00:00:00');

let countdown = setInterval(function() {

  let currentDate = new Date();


  let timeDiff = endDate - currentDate;

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);


let cartona = '';
cartona += `

<div class="count1">${days} D</div>
<div class="count2">${hours} H</div>
<div class="count3">${minutes} M</div>
<div class="count4">${seconds} S</div>

`

document.getElementById("counter").innerHTML = cartona  
  if (timeDiff < 0) {
    clearInterval(countdown);
    console.log('انتهى الوقت!');
  }
}, 1000);







let tt = document.getElementById("textarea");

tt.addEventListener('input' , function(){
    let inputElement = document.getElementById("textarea");
    let inputValue = inputElement.value;
    let characterCount = inputValue.length;
    let therest =  100 -characterCount
    if(therest < 0){
        document.getElementById('c-span').innerText = "your available character finished"
    }else{
        document.getElementById('c-span').innerText = therest
    }
}  )








