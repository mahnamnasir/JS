const getSleepHours = day =>
{
switch(day)
{
  case 'monday':
  return 8;
  case 'tuesday':
  return 7;
  case 'wednesday':
  return 7;
  case 'thursday':
  return 6;
  case 'friday':
  return 5;
  case 'saturday':
  return 8;
  case 'sunday':
  return 9;
  default :
  console.log("entered wrong day")
}
}
console.log(getSleepHours('monday'));
console.log(getSleepHours('tuesday'));
console.log(getSleepHours('wednesday'));
console.log(getSleepHours('thursday'));
console.log(getSleepHours('friday'));
console.log(getSleepHours('saturday'));
console.log(getSleepHours('sunday'));
const getActualSleepHours =() =>
{
const totalSleepHours = getSleepHours('monday') + getSleepHours('tuesday')+ getSleepHours('wednesday')+ getSleepHours('thursday')+ getSleepHours('friday')+getSleepHours('saturday')+
getSleepHours('sunday');
return totalSleepHours;
//console.log(totalSleepHours);
}
const getIdealSleepHours = () =>{
  let idealHours = 7
  return idealHours*7
}
console.log(getIdealSleepHours())
console.log(getActualSleepHours())

const calculateSleepDebt = () =>
{
  const idealSleepHours = getIdealSleepHours();
  const actualSleepHours = getActualSleepHours();
  if(idealSleepHours === actualSleepHours)
  {
    return 'user got the perfect amount of sleep';
  } else if(idealSleepHours <= actualSleepHours){
    console.log('You got ' + ( actualSleepHours-idealSleepHours) + ' hour(s) more sleep than you needed this week. Do some work.');

    return 'the user got more sleep than needed';
  } else if(idealSleepHours >= actualSleepHours)
  {
console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    return 'the user should get some rest';
  } else{
    return "no sleep no life";
  }
}
console.log(calculateSleepDebt());
