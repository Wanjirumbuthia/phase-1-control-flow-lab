function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance  <= 400)
  {return 'This one is on me!';}
  else if  ( distance <=2000)
  {return 'That will be twenty bucks.';}
  else if (distance<=2500)
  {return 'I will gladly take your thirty bucks.';}
  else 
  {return 'No can do.';}
}

function ternaryCheckCity(destination){
  // Write your code here!
  return destination === "NYC" ? "Ok, sounds good.":"No go.";}


function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  if (tipAmount === 'generous')
  { return 'Thank you so much.';}
  else if (tipAmount === 'not as generous')
  {return 'Thank you.';}
  else
  {return 'Bye.';}
}