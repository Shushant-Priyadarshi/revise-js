const arr = [23,43,12,43,64]

//for of
    for (const i of arr) {
        //console.log(i*10);
    
    }

    const greetings= "Hello worlds"
    for(const greet of greetings){
        // if(greet === " ") continue
        // else console.log(`Each element is: ${greet}`);
        
    }
//for in
    for (const key in greetings) {
        //console.log(`Each element is: ${greetings[key]}`);
    }

//for each : inside prototype

    const programming = ["Java","Js","Python","C++" ]
    programming.forEach(element => {
        console.log(element);   
    });

