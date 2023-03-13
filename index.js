// TODO: free sample if the ride <= 400 feet
// TODO: 30 dollars for a distance > 2000 feet
// TODO: not allow rides > 2500 feet)

function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400){
    return ('This one is on me!');
  }
  else if (ride > 2000 && ride <= 2500){
    return ('I will gladly take your thirty bucks.')
  }
  else if (ride > 2500){
    return ('No can do.')
  }
}

// TODO: returns "Ok, sounds good." city == NYC
// TODO: should return "No go." != NYC

function ternaryCheckCity(city){
  // Write your code here!
  let check = city == 'NYC'
  let result = ""
  
  check ? result = "Ok, sounds good." : result ="No go.";
  return result;
}

// TODO: return "Thank you so much." tip == generous
// TODO: return "Thank you." tip !generous
// TODO: else return "Bye."

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye."
  }
}