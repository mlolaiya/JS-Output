


//My first method
const ul = document.querySelector('.items');


ul.firstElementChild.innerHTML = '<h3>NAME:</h3> <h3>OLAIYA MOSHOOD L</h3>';
ul.children[1].innerText = 'HEIGHT: 5.5ft'
ul.lastElementChild.innerHTML = 'COUNTRY: <h3>NIGERIA</h3>';


//I used another method here without HTML Frame
var myName = "<h3>NAME: OLAIYA MOSHOOD L</h3>";
var height = "<h3>HEIGHT: 5.5FT</h3>";
var country = "<h3>COUNTRY: NIGERIA</h3>";

document.write(myName);
document.write(height);
document.write(country);