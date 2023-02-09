

function whodat(){
    let name =prompt("what is your name?");
    if(name != null){
        alert("hello, " + name);
    } else {
        alert("error hacker error")
    }
}

function newtophotography(){
    const answer =prompt("Are you new to photography");
    if(answer == "no"){
     alert("go to Portfolio");
    }else if(answer == "yes"){
      alert("Go to about page");
    }else{
          alert("Welcome");
    }
}
// apple();

// pie2(9);

// console.log(ingredientX);
whodat();
newtophotography();