let input = 'love you';
const vowels =['a','e','i','o','u'];
resultArray = [];
for(let i=0;i<input.length;i++)
{
  //console.log(input[i]);
  //console.log('i is '+ i);
 for(let j=0;j<vowels.length;j++)
 {
   if(input[i]=== vowels[j])
   {
     if(input[i]==='e')
     {
       resultArray.push('ee')
     } else
     { 
       resultArray.push(input[i])
     }
      if(input[i]==='u')
     {
       resultArray.push('uu')
     } else
     { 
       resultArray.push(input[i])
    }
} 
}
}
//console.log(resultArray);
console.log(`User input in English: ${input}`);
//output
let resultString = resultArray.join("");
resultString.toString();
resultString.toUpperCase();
console.log(`Output in Whale Language : ${resultString}`);