currentIndex=0
images=["first.jpg","second.jpg","third.jpg","fourth.jpg","fifth.jpg","sixth.jpg","seven.jpg","eight.jpg","nine.jpg"]

setInterval(
    function() {
     currentIndex=Math.round(Math.random()*5)
     document.getElementById("img1").src = 
     images[ currentIndex ]
    },2000
)

function changeImage(arrowtype){
    
    if(arrowtype=="right"){
       currentIndex = currentIndex==5?0:++currentIndex
    }
    else if(arrowtype=="left"){
        currentIndex = currentIndex==0?5:--currentIndex
    }
    document.getElementById("img1").src=images[currentIndex]
}


function toggleSlideShow() {

    var slideshowContainer = document.querySelector('#slide-area');

    var arrowIcon = document.querySelector('#arrow-icon');


    if (slideshowContainer.style.display === 'none') {

      slideshowContainer.style.display = 'block';

      arrowIcon.src = ' downarrow.png'; // Up arrow image

      arrowIcon.alt = 'Up arrow';

    } else {

      slideshowContainer.style.display = 'none';

      arrowIcon.src = 'uparrow.png'; // Down arrow image

      arrowIcon.alt = 'Down arrow';

    }

  }
