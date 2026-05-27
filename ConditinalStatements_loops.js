// exercise 1

let temp;
let response;

if (temp<0)
{
  response = "it's freezing";
}
else if (temp>=0 && temp<=15) 
{
  response = "it's cold";
}
else if (temp>=16 && temp<=25) 
{
  response = "its mild";
}
else if(temp>25)
{
  response ="it's warm ";
}
console.log(response);

// 2

switch(temp) {
  case temp<0:
    response = "it's freezing ";
    break;
    case temp>=0 && temp>=15:
    response = "it's cold ";
    break;
    case temp>=16 && temp>=25:
    response = "it's mild";
    break;
    case temp>25:
    response = "it's warm";
    break;
}
console.log(response);

//excersice 2
 let val1 = 2;
 let val2 = 3;
 let num = 10;
 let result1 = num%val1;
 let result2 = num%val2;
  let message;
  
  if (result1===0 && result2===0)
  {
    message = "Divisible by both";
  }
  else if (result1===0 && result2!==0) {
    message ="Divisible by 2";
  }
  else if (result1!==0 && result2===0) 
  {
    message = "Divisible by 3";
  } 
  else 
  {
    message = "Not diviseble by 2 nor 3";
  }
console.log(message);

// 2 
switch(result1,result2) {
  case result1===0 && result2===0:
    response = "Divisible by both";
    break;
    case result1===0 && result2!==0:
    response = "Divisible by 2";
    break;
    case result1!==0 && result2===0:
    response = "Divisible by 3";
    break;
    case result1!==0 && result2!==0:
    response = "Not diviseble by 2 nor 3";
    break;
}
console.log(message);


//Exercise 3
// 1
for (let x=1; x<=10; x++)
{
  console.log(x);
}
// 2 
for (let y=0; y<=20; y+=2)
{
  console.log(y);
}
// 3
let total= 0;
for (let z=1; z<=100; z++)
{
  total += z;
  
}
console.log(total);

// 4
 const numbers=[1,2,3,4,5]
 
 for(let i= 0; i<numbers; i++)
 {
   console.log(numbers[i]);
 }
 
 // 5
 const numbers = [3,7,3,5,10,6];
 const max = Math.max(... numbers );
 console.log(max);
 
 //Exercise 4
 // 1
 let i=1;
 while(i<=10) {
   
   console.log(i);
   i++;
 }
 
 // 2
 
 let i=0;
 while(i<=20) {
   
   console.log(i);
   i+=2;
 }
 
 // 3
 
 let total= 0;
 let z = 1;
while ( z<=100)
{
  total += z;
  z++;
}
console.log(total);

// 4

let m = 1;
let random_value = Math.floor(Math.random()*50);

while (m < 50; random_value%5) 
{
 console.log(m++);
}

//Exercise 5
// 1
let i = 1;
do {
  console.log(i)
  i++;
} while (i<=10);

// 2
let i = 1;
let total = 0;

do {
  
 total += i;
  i++;
} while (i<=100);
 console.log(total);
 
 // 3
 var num;
var min= 11;

window.prompt("Please enter a number grater than 10");
do {


  if (number >= min)
    break;
  else(window.prompt("Invalid input, please enter a number grater than 10 "));
      }
      while (num<min);

 // 4
  var answ = 7;
  
  do {
    var guess = prompt("Guess A Number Between 1 - 10!")
  } while (guess !== answ);
  document.write("You've guessed right!");
