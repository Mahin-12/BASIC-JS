

//problem 1: convert kilometer To Meter (by using function)

function kilometerToMeter(num) {   
    var result = num * 1000;
    if (num > 0) {
        return result;     //If the value of num will be positive ,function return the result by converting km to m  
    }
    else {
        var error = "Answer is  error";     //or the value will be nagetive, function return an error ["Answer is error"]
        return error;
    }
}
var number = kilometerToMeter(-3);
console.log(number);


//Problem 2: budgetCalculator [find the total budget of three products such as clock, phone & laptop]

function budgetCalculator(C, P, L) { 

  //multiply three products with their constant values {50 for clock ,100 for phone, 500 for laptop}
    const clock = C * 50;    
    const phone = P * 100;
    const laptop = L * 500;
    
    var totalMoney = clock + phone + laptop;  
    return totalMoney;
}
var totalAmount = budgetCalculator(5, 0, 5);
console.log(totalAmount);


//Problem 3: hotelCost [find the hotel bill for per nights by using function]

function hotelCost(perNight) {
    let amount = 0; 
    //using 'if else' statement in the function.    
    if (perNight <= 10) {
        amount = perNight * 100;   // In if section calculating hotel bill for 1st ten-nights. 
        return amount;
    }
    else if (perNight <= 20) {
        let firstNight = 10 * 100;
        let remaining = perNight - 10;   //in else if section calculating hotel bill after 10th-nights and before 21th-nights. 
        let secondNight = remaining * 80;
        amount = firstNight + secondNight;  //Addition firstNight and secondNight and return the amount.
        return amount;
    }
    else {
        let firstNight = 10 * 100;
        let secondNight = 10 * 80;
        let remaining = perNight - 20;  //In else section calculating hotel bill after 20th-nights and infinite.
        let thirdNight = remaining * 50;
        amount = firstNight + secondNight + thirdNight;//Addition first ,secon and third Night and return the amount. 
        return amount;
    }
}
var totalAmount = hotelCost(5);
console.log(totalAmount);



//Problem 4:megaFriend (find the largest name from array)

function megaFriend(name) {  //define a function megaFriend with perametr (name).
    var max = name[0]; 

 //using for loop and inside the for loop using if statement.   
    for (var i = 0; i < name.length; i++) {
        var element = name[i];

        if (element.length > max.length) {
            max = element;
        }
    }
    return max;  //return the maximum length of name.
}
var result = megaFriend(["lopa", "Nahid Parvez", "Mahin Ahmed", "Musabber Uddin Ahammod"]);
console.log(result);





