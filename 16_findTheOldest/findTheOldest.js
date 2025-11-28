const findTheOldest = function(array) {
    return array.reduce((oldest, person) => {
        let personAge = 0
        let oldestAge = 0
        if(!oldest.yearOfDeath){
            oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
        } else {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth
        }
        if(!person.yearOfDeath){
            personAge = new Date().getFullYear() - person.yearOfBirth;
        } else {
        personAge = person.yearOfDeath - person.yearOfBirth;
        };
        if (personAge > oldestAge){
            return person;
        };
        return oldest
    }, array[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
