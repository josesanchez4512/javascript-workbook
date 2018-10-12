//write a function that returns the sum of two numbers if both arguments are numbers

const sumOfTwoNumbers = (num1,num2) => {

    if (isNaN(num1) || isNaN(num2)){
      return 'please enter a number, cool guy'
    }else return parseInt(num1)+parseInt(num2);
  }   
  // sumOfTwoNumbers('24',8);
  // sumOfTwoNumbers (345,8723494);
  
  //OR
  
  const sumOfTwoNumbersAgain = (num1,num2)=>{
    if (typeof(num1)==='number' && typeof(num2)==='number'){
      return num1+num2;
    }
  }
  // sumOfTwoNumbersAgain('2',5);
  
  //write a function that returns 'both are true' if both arguments are true
  
  const bothTrue = (arg1,arg2)=>{
    if (arg1 && arg2){
      return 'both are true'
    }else return 'you need to take this more serious, bruh'
  }
  // bothTrue(32,'bruh')
  // bothTrue('brah','bruh')
  
  //write a function that takes 3 paramaters and if all 3 parameters are strings, return true
  
  const allTrue = (arg1,arg2,arg3)=>{
    if (typeof(arg1) === 'string' && typeof(arg2) === 'string' && typeof(arg3) === 'string'){
      return 'true'
    }else return 'what!?'
  }
  // allTrue('asdfasdf','cucumber','whomever')
  // allTrue('Lady Gaga','cucumber','whomever')
  
  //write a switch statement that evaluates a variable month 
  //and for each of the 12 months,returns the number of days 
  //in that month
  
  const numOfDays=(month)=>{
    switch(month){
    case 'February':
      return 'This month has 28 or 29 days!';
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      return '31 days in this month!';
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return 'This month has 30 days!';
    default:
      return 'Do you not know what a month is? Try again, tough guy.';
    }
  }
  // numOfDays('February');
          
