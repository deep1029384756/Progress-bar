//loader line
const sections = document.querySelectorAll("section");
const loaderLine = document.querySelector(".header__loader-line");
const length = Array.from(sections);
var aboutsec=  document.querySelector(".about")
var whatsec=  document.querySelector(".what-i-do")
var resume=  document.querySelector(".resume")
var client=  document.querySelector(".client-speak")
var work=  document.querySelector(".my-work")
var contact=  document.querySelector(".contact")
//function container
const loaderFunctions = {
  //chnage the wodth on scolling
  changeWidth: function (pos) {
    loaderLine.style.width = pos / 50 + "%";
  },
  //check and change the color
  changeColor: function (pos) {
      console.log(Math.floor(window.scrollY))
      console.log(resume.offsetTop)
      if(Math.floor(window.scrollY) ===aboutsec.offsetTop){
        console.log("hey")
        loaderFunctions.setColor();
      }
      if(Math.floor(window.scrollY) ===whatsec.offsetTop){
        loaderFunctions.setColor()
      }
      if(Math.floor(window.scrollY) ===resume.offsetTop){
        loaderFunctions.setColor()
      }
      if(Math.floor(window.scrollY) ===client.offsetTop){
        loaderFunctions.setColor()
      }
      if(Math.floor(window.scrollY) ===work.offsetTop){
        loaderFunctions.setColor()
      }
      if(Math.floor(window.scrollY) ===contact.offsetTop){
        loaderFunctions.setColor()
      }
    

    // if (Math.floor(pos/50) % 10 === 0) {
    //   //console.log(pos);
    //   loaderFunctions.setColor();
    // }
  },
  //fucntion to set new color
  setColor: function () {
    const randomColor = Math.floor(Math.random() * 16581375).toString(16);
   // console.log(randomColor);
    loaderLine.style.backgroundColor = "#" + randomColor;
  },
};
//console.log(Math.random());
//total distance is 6000
//prev should be 0, then


document.addEventListener("scroll", (event) => {
  let pos = window.scrollY;
  // if(aboutsec.offsetTop== 0){
  //   //console.log(aboutsec.scrollTop)
  // }
  //console.log(pos)
 // console.log(aboutsec.offsetTop)
 // console.log( whatsec.offsetTop)
  //change width
  loaderFunctions.changeWidth(pos);
  //change the color if need to
  loaderFunctions.changeColor(pos);
});


