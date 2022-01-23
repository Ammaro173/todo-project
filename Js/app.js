// starting by declaring variables
'use strict'
var name = prompt ('Kindly enter your name');

var gender = prompt ('Kindly enter your gender [male/female]').toLowerCase();

var age = prompt('Kindly insert your age');
if (age <= 0){
    alert('age is less or equal to zero');
    age=prompt('age entry is Wrong, Enter Again!');
    if(age <=0){
        alert('age is still Wrong! less or equal to zero, will skip now');
    }
};

// declaring array for task 6 (questions and answers)
let ques=['is this your first time visit this site? (Yes/No) Only' , 'would you like to rate us? (Yes/No) Only' , 'do u like to be in the beta team? (Yes/No) Only']
let ans= new Array(3) //ans : answers
if(Object.seal){
    // fill array with some value because
    // empty slots can not be changed after calling Object.seal
ans.fill(undefined);

Object.seal(ans);
// now a is a fixed-size array with mutable entries
}

for (let index = 0; index < ques.length; index++) {
    ans[index] = prompt(ques[index]).toLowerCase();

    if (ans[index] === ''){
        alert('invalid entry , Only Yes/No')
        ans[index] ='invalid';
    }
    else if  (ans[index] !== 'yes' && ans[index] !== 'no') {
        alert('invalid entry , Only Yes/No')
        ans[index] ='invalid';
    }
    console.log(ans);
}

function traverse (){
    console.log(ans);
    return ans;
}
traverse()

// function AgeEntry(){
// let aged =parseInt(age);
// }
// Alert message on wrong age entry


// confrim skipping
let y = confirm('are you sure you want to Skip! the welcome inro? [OK button will Skip ! ]');

if (y == 1){
}

else if (y == 0){
    if (gender !== 'male' && gender !== 'female'){
        alert('gender entry is wrong');
        // var gender = prompt('Kindly enter your gender again!','male/female only').toLowerCase();
        var final =alert ('Hello ' + name);
    }

else if  (gender == 'male'){
    name = 'Mr.' + name
        var final =alert ('Hello ' + name)
    }
    else if (gender == 'female'){
    name = 'Ms.' + name
        var final=alert ('Hello ' + name)
    }
};


                                                                 // name = 'Mr.'+ name
                                                                   // var final = alert ('Hello ' + name);
        
    
    
    // else( conf == 0)
    // {
    //     var final =alert ('Hello ' + name)
    
    



// console.log(gender);
// var tess = alert ('hello33'+ gender)
// console.log(text);
// console.log(result);





// if (gender == 'Male' || 'male' || 'Female' || 'female'){
    
// // }



// gender.toString();