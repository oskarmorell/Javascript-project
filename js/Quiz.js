var score = 0;
var answer1 = prompt("Where was Brad Pitt born? \n \n 1. California \n 2. Michigan \n 3. Oklahoma \n 4. Washington");
if(answer1 === "1"){
    score++;
    alert("Correct!");
}
else if(answer1 === "2"){
    alert("Incorrect!");
}
else if(answer1 === "3"){
    alert("Incorrect!");
}
else{
    alert("Incorrect!");
}
var answer2 = prompt("Where was Angelina Jolie born? \n \n 1. California \n 2. Michigan \n 3. Oklahoma \n 4. Washington");
if(answer2 === "1"){
    alert("Incorrect!");
}
else if(answer2 === "2"){
    score++;
    alert("Correct!");
}
else if(answer2 === "3"){
    alert("Incorrect!");
}
else{
    alert("Incorrect!");
}
var answer3 = prompt("Where was Oskar Morell born? \n \n 1. California \n 2. Michigan \n 3. Oklahoma \n 4. Washington");
if(answer3 === "1"){
    alert("Incorrect!");
}
else if(answer3 === "2"){
    alert("Incorrect!");
}
else if(answer3 === "3"){
    score++;
    alert("Correct!");
}
else{
    alert("Incorrect!");
}
alert("Final score: " + score + "/3");