// //////list of class//////////////////
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
////list of ids///////////////////////////////////////////////////////////////////////
let elem = document.getElementById("changingParameter");


let slideIndex = 1;
showSlides(slideIndex);
var x = 0;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    if(i==0){
      x=1;
    }
    else{

      x=i-1;
    }
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// auto animation seting and function


setInterval(function () {
  x++;
 if (x >= slides.length) {
    x = 0;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // console.log(slides[i])
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[x].style.display = "block";
  dots[x].className += " active";
 
}, 2000);

// incresing decresing

var size = 30;

function increse() {
  if (size < 100) {
    elem.style.width = `${size}px`;
    elem.style.height = `${size}px`;
    size += 10;
  } else {
    alert("maximaum size");
    size = 100;
  }
}
// decresing
function decrese() {
  if (size > 20) {
    size -= 10;
    elem.style.width = `${size}px`;
    elem.style.height = `${size}px`;
  } else {
    alert("you have reched minimum size");
    size = 30;
  }
}

function changecolure() {
  var red = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  elem.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

// second task of moving

function howmanytimes() {
  let m = document.querySelector(".moveup");
  let a = Number(document.getElementById("getnumber").value);

  let b = a;
  for (let i = 0; i < a; i++) {
    (document.querySelector(".moveup").textContent = `${b}`),
      (document.querySelector(
        ".moveup"
      ).style.animation = `myfirst 2s ease-in-out  ${a}`);
  }
}

// creating new div boxes
function noOfBoxes(event) {
  event.preventDefault()
  let num = Number(document.getElementById("noOfBoxes").value);
  if (num <= 0) {
    
    return;
  }
  let parent = document.getElementById("mainparent");
  let columns = parent.querySelectorAll(".col");
  if (columns.length > 0) {
    for (let i = 0; i < columns.length; i++) {
      parent.removeChild(columns[i]);
    }
  }
  for (let i = 0; i < num; i++) {
    let box = document.createElement("div");
    box.classList.add("col");
    box.textContent = `" "`;
    parent.appendChild(box);
  }
}

// check wherthe its prime number or not
function checkprimenumbe(a) {
  if (a == 2 || a == 3) return true;
  if (a % 2 == 0 || a % 3 == 0) return false;
  for (i = 5; i < Math.sqrt(a); i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}
//  making sorted array
function sorting(x) {
  x = x.split(",");
  let newar = [];
  for (let i = 0; i < x.length; i++) {
    newar.push(parseInt(x[i]));
  }
  return newar.sort(function (a, b) {
    return a - b;
  });
}
// fibonessi series on n-number
function fiboness(n) {
  let num = Number(n);
  let a = 0,
    b = 1,
    arrage = 0,
    sum = 0;
  for (let i = 1; i < num; i++) {
    sum = a + b;
    a = b;
    b = sum;
    arrage += "," + sum;
  }
  return arrage;
}

// for number system
let element = document.getElementById("labels");
function prime() {
  element.textContent = "Check whether its prime number or not";
  document.getElementById("result").innerHTML = "";
  document.getElementById("inside").type = "number";
}
function sort() {
  element.textContent = "sort the given number";
  document.getElementById("result").innerHTML = "";
  document.getElementById("inside").type = "text";
}
function fibonass() {
  element.textContent = "Find fibonessi series of n number";
  document.getElementById("result").innerHTML = "";
  document.getElementById("inside").type = "number";
}
function binary() {
  element.textContent = "Check is whether a number present or not";
  document.getElementById("inside").type = "number";
  document.getElementById("result").innerHTML = [1, 20, 30, 40, 50, 60, 70];
}

//  calculating mathematcal functiion

const ar = [1, 20, 30, 40, 50, 60, 70];
function calculation() {
  let a = document.getElementById("labels").textContent;
  let che = document.getElementById("inside").value;
  if (che) {
    if (a === "Check whether its prime number or not") {
      let nuber_pime = Number(document.getElementById("inside").value);
      if (checkprimenumbe(nuber_pime)) {
        document.getElementById("result").textContent = "ITS PRIME NUMBER";
      } else {
        document.getElementById("result").textContent = "ITS NOT PRIME NUMBER";
      }
    } else if (a === "sort the given number") {
      let sortin = document.getElementById("inside").value;
      let patter=/^[0-9,]+[0-9]+$/;
      if(sortin.match(patter)){
        let arr = sorting(sortin);
        document.getElementById("result").textContent = arr;
      }
      else{
        return;
      }
    } else if (a == "Find fibonessi series of n number") {
      let fibonumber = document.getElementById("inside").value;
      let val = fiboness(fibonumber);
      document.getElementById("result").textContent = val;
    } else if (a == "Check is whether a number present or not") {
      let bina = Number(document.getElementById("inside").value);
      if (checkBinary(ar, bina)) {
        document.getElementById(
          "result"
        ).textContent = `yeah your number ${bina}  present !!!`;
      } else {
        document.getElementById(
          "result"
        ).textContent = `sorry your number ${bina} not there!`;
      }
    }
  }
}
// =================//check binary//========//
function checkBinary(ar, x) {
  let start = 0,
    end = ar.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (ar[mid] === x) return true;
    // Else look in left or right half accordingly
    else if (ar[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return false;
}

// store in local storage and session storage
var key = 0;
function add() {
  let a = document.getElementById("localStorage").value;
  var letters = /^[a-zA-Z][a-zA-Z0-9\\s]+$/;;

  if(a.match(letters)){
  if (localStorage.length == 0) {
    key = 0;
  }
  if (a.length != " ") {
    localStorage.setItem(`${key}`, a);
    sessionStorage.setItem(`${key}`, a);
  }
  key++;
  // }
  // else
  //   {
  //   return false;
}
else{
  return false;
}
}

function view() {
  let para_parent = document.getElementById("para_parent");
  let h1tags = document.getElementsByClassName("display");

  for (let i = 0; i < h1tags.length; i++) {
    para_parent.removeChild(h1tags[i]);
  }
  p = document.createElement("p");
  p.setAttribute("id", "display");
  p.setAttribute("class", "display");
  para_parent.appendChild(p);
  for (let i = 0; i < localStorage.length; i++) {
    p.textContent += localStorage.getItem(`${i}`) + " ,";
  }
}
//
function CheckNumeric(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /^[0-9,]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

document.getElementById("remove").addEventListener("click", () => {
  localStorage.removeItem(`${localStorage.length - 1}`);
});

document.getElementById("removeall").addEventListener("click", () => {
  localStorage.clear();
});


// aman////////////////////////
let moving = document.querySelector(".moving-ball");
let btn = document.querySelector(".submit-btn");
let input = document.getElementById("lname");

btn.addEventListener("click", () => {
  let iterations = input.value;
  myMove(1, iterations);
  moving.style.display = "block";
  // animation_box.textContent = "";
});
function myMove(count, total) {
  if (Number(total) != 0) {
    moving.textContent = count;
  }
  let id = null;
  let pos = 10;
  let posy = 90;
  clearInterval(id)
;
  if (Number(total) != 0) {
    id = setInterval(frame, 15);
  }
  function frame() {
    if (pos == 90) {
      moving.style.left = 10 + "%";
      clearInterval(id)
;
    } else {
      if (posy >= 10) {
        posy--;
        moving.style.top = posy + "%";
      } else {
        pos++;
        moving.style.left = pos + "%";
      }
    }
  }
  if (count < total) {
    setTimeout(function () {
      myMove(count + 1, total);
    }, 3000);
  }
}