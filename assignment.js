//feetToMile
function feetToMile(feet){

    if (feet<0){
        console.log("Length cannot be negative");
        return -1;
    }
    else{
        var mile = 0.000189394*feet;   //1 feet= 0.000189394 mile
        return mile;    
    }
}

//woodCalculator
function woodCalculator(chair, table, bed){

    if (chair<0 || table<0 || bed<0){
        console.log("Number of chairs, tables or beds cannot be negative");
        return -1;
    }
    else{    
        var numberOfWood;
        numberOfWood = chair*1 + table*3 + bed*5;   /*chair requires 1 cubic feet wood, table requires 3 cubic feet wood  and bed requires 5 cubic feet wood */        
                                                   
        return numberOfWood;
    }
}

//brickCalculator
function brickCalculator(floor){
    var height;
    var bricks;
    if (floor <0){
        console.log("Floor cannot be negative");
        return -1;
    }
    else if (floor == 0){
        return 0;
    }
    else if (floor <=10){
        height= floor*15;   //15 feet for each of the first 10 floors
        bricks= height*1000;
        return bricks;
    }
    else if (floor <=20){
        height= 10*15;  //15 feet for each of the first 10 floors
        height= height + (floor-10)*12; //12 feet for the rest of the floors
        bricks= height*1000;
        return bricks;
    }
    else{
        height= 10*15 +10*12; //15 feet for each of the first 10 floors and 12 feet for each of the next 10 floors
        height= height + (floor-20)*10; //10 feet for the rest of the floors
        bricks= height*1000;
        return bricks;
    }
}

//tinyFriend
function tinyFriend(array){
    var min = array[0].length;
    var indexNumber = 0;
    for (var i=1; i<array.length; i++){
        if (array[i].length<min){
            min = array[i].length;
            indexNumber = i;
        }
    }
    return console.log("Friend no.", indexNumber+1, " has the smallest name");
}