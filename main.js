// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph');
const errMsg = document.querySelector('#modal');

function handleClick(e) {
  const like = e.target;
  mimicServerCall()
  .then(function () { 
    switch(like.innerText) {
      case EMPTY_HEART:
        like.innerText = FULL_HEART;
        like.classList.add('activated-heart'); 
        break; 
      case FULL_HEART:
        like.innerText = EMPTY_HEART;
        like.classList.remove('activated-heart');
    }
  })
  .catch(function(error){
    errMsg.classList.remove('hidden');
    setTimeout(() => errMsg.classList.add('hidden'), 3000);  
  })
}

for (const heart of hearts) {
  heart.addEventListener("click", handleClick)
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
