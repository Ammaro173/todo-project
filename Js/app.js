var name = prompt('Kindly enter your name' );

var gender = prompt('Kindly enter your gender [male/female]').toLowerCase();


var age = prompt('Kindly insert your age');

var aged =parseInt(age);

if (aged <= 0){
    alert('age is less or equal to zero');
    age=prompt('age entry is Wrong, Enter Again!');
    if(age <=0){
        alert('age is still Wrong! less or equal to zero, will skip now');
    }
};


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