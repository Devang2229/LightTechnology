/*External JavaScript */

// alert('External JavaScript is running!');

//Grab the imagegallery Uland output to the console
var gallery = document.getElementById('imagegallery');
// console.log(gallery);

//Get all anchor element on page
var links = document.getElementsByTagName('a');
// console.log(links)

//get the source attribute value from the IMG elemnt on the page
var img = document.querySelector('#placeholder');
// consle.log(img);
var src = img.getAttribute('src');
// console.log(src);

//change the src attribute on the IMG element
img.setAttribute('src', 'images/led.jpg');


//change the color of the last paragarph element
var para = document.querySelector('#description');
para.setAttribute('style','color:red;');
