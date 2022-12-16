class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(capacity,count = 0, data = []) {
    // Initialize your buckets here
    // Your code here
    this.capacity = capacity;
    this.count = count;
    this.data = data;
    for(let i = 0; i < capacity; i++){
      this.data.push(null);
    }
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    let keyPair = new KeyValuePair(key,value);
    let Index = this.hashMod(key);
    if(this.data[Index] !== null){
      let current = this.data[Index];
      while(current){
        if(current.key == key){
          current.value  = value;
          return;
        }
        else{
        current = current.next;
      }
    }
      keyPair.next = this.data[Index];
      this.data[Index] = keyPair;
      this.count++;
    }
    else{
    this.data[Index] = keyPair;
    this.count++;
  }
}

  read(key) {
    // Your code here
    let Index = this.hashMod(key);
    if(this.data[Index] !== null){
      let current = this.data[Index];
      while(current){
        if(current.key == key){
          return current.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }


  resize() {
    // Your code here
    this.capacity = this.capacity * 2;
    for(let i = this.capacity/2; i <  this.capacity ; i++){
      this.data.push(null);
    }
    for(let i = 0; i <  this.capacity/2; i++){
        let current  = this.data[i];
        while(current){
          let newIndex = this.hashMod(current.key);
          if(newIndex !== i){
            this.data[newIndex] = current;
            let current2 = this.data[i];
            if(this.data[i] == current ){
              this.data[i] = null;
            }
            else if(this.data[i].next == current){
              this.data[i].next = null;
            }
        }
        current = current.next;
      }
    }
  }


  delete(key) {
    // Your code here
    let Index = this.hashMod(key);
    let current = this.data[Index];
    while(current !== null){
      if(current.key == key){
        current.value = undefined;
        current.key = undefined;
        current = current.next;
        this.count--;
        if(!current){
          return;
        }
      }
      current = current.next;
    }
    return "Key not found";
  }
  
}


module.exports = HashTable;