class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add element to the top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  // Check top item in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  isEmpty() {
    console.log(this.count == 0 ? "stack is empty" : "stack is not empty");
    return this.count == 0;
  }

  // check size of stack
  size() {
    console.log(`size = ${this.count}`);
    return this.count;
  }

  // Print elements in stack
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

    // clear stack
    clear(){
        this.items = []
        this.count = 0
        console.log('Stack cleared')
        return this.items;
    }   

}

const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);

stack.peek();

stack.push(300);

stack.clear();

console.log(stack.print());

stack.pop();
stack.pop();

console.log(stack.print());

stack.size();

stack.isEmpty();
