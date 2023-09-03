// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const driverDetails = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(driverList, driverName){
    let match = driverList.filter(function(name){
        return name.toLowerCase() === driverName.toLowerCase();
    });
    return match;
}

function fuzzyMatch(driverList, searchLetters){
    let partialMatch = driverList.filter(function(letters){
        for (let i = 0; i < searchLetters.length; i++) {
                return letters[i].toLowerCase() === searchLetters[i].toLowerCase();
            }
        })  
         
    return partialMatch;
    }

function matchName(driverList, driverName){
    let nameCheck = driverList.filter(function(element){
        return element.name === driverName;
    })
    return nameCheck;
}

//console.log(findMatching(drivers, 'Bobby'))
//console.log(fuzzyMatch(drivers, "Sa"))
//console.log(matchName(driverDetails,"Annette"))