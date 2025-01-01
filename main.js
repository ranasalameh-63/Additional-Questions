//////// Q1
let arr = [
    'apple.jpg',
    'orange.jpeg',
    'banana.png',
    'freez.png',
    'mango.png'
  ];
  
let ul1 = document.createElement('ul');

//////to add data and append it
for(let i = 0; i < arr.length; i++){
let li = document.createElement('li');
let img = document.createElement('img');
img.src = arr[i];
img.style.width = '100px';  
li.appendChild(img);  
ul1.appendChild(li);
}
//add to body
document.body.appendChild(ul1);
  ////////////////////////////////////////////




  
  /////// Q2
  let userInput = parseInt(prompt("Enter a number"));
  let arr1 = [1, 2, 3, 4, 5];

  function inArr(arr1 , userInput ){
    for(let i = 0; i < arr1.length; i++){
    if (userInput === arr1[i]){
      return 'Found';
    }
  }
     return -1;
    
  }
  let result = inArr(arr1, userInput);
  console.log(result);
