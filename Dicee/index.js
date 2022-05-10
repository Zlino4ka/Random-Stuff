var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

var image1 = "dice"+randomNumber1;
var image2 = "dice"+randomNumber2;

  document.querySelector(".img1").setAttribute("src", 'images/'+image1+'.png');
  document.querySelector(".img2").setAttribute("src", 'images/'+image2+'.png');

  if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Second player won!";
  } else if (randomNumber2 < randomNumber2) {
    document.querySelector("h1").textContent = "First player won!";
  } else {
    document.querySelector("h1").textContent = "The Draw!";
  }
