//output  -->output class name
//input  -->input class name

function display() {
    let input = document.querySelector('.input').value; //taking the values from input
    let key = document.querySelector('.key').value;//taking the key value from key
    let output = document.querySelector('.output');// the place where output will display
    //display the contect in output
 
// let convert = null.toString(info)
 localStorage.setItem(`${key}`,`${input}`)//sending detail to local storage

 let info = localStorage.getItem(`${key}`)//calling detail from local storage
 //the output
 output.innerHTML+=
 `
 ${info} <br>
`
  
}
// clear local storage
function clearStorage() {
    localStorage.clear()
}
// remove item
function remove() {
   localStorage.setItem(`${key}`)
}
display()

