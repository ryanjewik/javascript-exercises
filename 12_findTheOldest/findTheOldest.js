const findTheOldest = function(people) {
    oldestPerson = people[0];
    const todayYear = new Date();
    
    
    for (i = 1; i < people.length -1; i++){

        if (oldestPerson['yearOfDeath'] === undefined){
            personOneDeath = todayYear.getFullYear();
        }
        else{
            personOneDeath = oldestPerson['yearOfDeath'];
        }
        personOneBirth = oldestPerson['yearOfBirth'];

        
        
        if (people[i]['yearOfDeath'] === undefined){
            personTwoDeath = todayYear.getFullYear();
        }
        else{
            personTwoDeath = people[i]['yearOfDeath'];
        }
        personTwoBirth = people[i]['yearOfBirth'];
        
        
        
        
        if (personOneDeath - personOneBirth <
        personTwoDeath - personTwoBirth){
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
