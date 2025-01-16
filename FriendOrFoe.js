

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

const input = ["Ryan", "Kieran", "Jason", "Yous"];
//    Output = ["Ryan", "Yous"]




function friend(friends){
    return friends.filter(el => el.length === 4);
  }

console.log(friend(input));

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    return str.endsWith(ending);
  }

console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false