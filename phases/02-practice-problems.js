const [HashTable, KeyValuePair, insert] = require("./01-implementation");

function anagrams(str1, str2) {
  // Your code here
  let str1Arr = str1.split("");
  let str1Set = new Set(str1Arr);
  for(let i = 0; i < str2.length; i++){
      if(!(str1Set.has(str2[i]))){
        return false;
      };
  }
  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  let answer = [];
  let setArr1 = new Set(arr1);
  for(let i = 0; i < arr2.length; i++){
    if(setArr1.has(arr2[i])){
      answer.push(arr2[i]);
    }
  }
  return answer;
}


function duplicate(arr) {
  // Your code here  
  let arrSet = new Set(arr);
  for(let i = 0; i <  arr.length; i++){
    if(arrSet.has(arr[i])){
      for(let j = i+1; j < arr.length; j++){
        if(arr[i] == arr[j]){
          return arr[j];
        }
      }
    }
  }
  return false;
}
//OverKill :-) down here:-
/*
let hashTable = new HashTable(arr.length);
for(let i = 0; i < arr.length; i++){
  let keyPair = new KeyValuePair(arr[i],i);
    let Index = hashMod(keyPair.key);
    if(hashTable.data[Index] !== null){
      keyPair.next = hashTable.data[Index];
      hashTable.data[Index] = keyPair;
      hashTable.count++;
    }
    else{
    hashTable.data[Index] = keyPair;
    hashTable.count++;
  }
}
for(let i = 0; i < hashTable.capacity; i++){
  let current  = hashTable.data[i];
  if(current){
  while(current.next){
    if(current.key == current.next.key){
      return current.key;
    }
    current = current.next;
  }
}  
}
function hashMod(key) {
  // Get index after hashing
  return hash(key) % hashTable.capacity;
}

 function hash(key) {
  let hashValue = 0;
  let keyString = `${key}`;

  for (let i = 0; i < keyString.length; i++) {
    hashValue += keyString.charCodeAt(i);
  }
  return hashValue;
}
*/


function twoSum(nums, target) {
  // Your code here
  let numSet = new Set(nums);
  for(let i = 0; i <  nums.length; i++){
    let answer = target - nums[i];
    if(numSet.has(answer)){
      for(let j = i+1; j < nums.length; j++){
        if(answer == nums[j]){
          return true;
        }
      }
    }
  }
  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
  let patternHash = {};
  let stringHash = {};
  if(strings.length !== pattern.length){
    return false;
  }
  for(let i = 0; i < pattern.length; i++){
    if((pattern[i] in patternHash && patternHash[pattern[i]] !== strings[i]) || (strings[i] in stringHash && stringHash[strings[i]] !== pattern[i])){
      return false;
    }
    else{
      patternHash[pattern[i]] = strings[i];
      stringHash[strings[i]] = pattern[i];
    }
  }
  return true;

}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];