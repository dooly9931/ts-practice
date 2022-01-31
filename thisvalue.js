'use strict';

function hello(arg) {
  console.log(`this: ${JSON.stringify(this)}, arg: ${arg}`);
}

hello('arg1');

let human = {
  name: 'Human',
};

human.hello = hello;
human.hello('arg1');

let boundHello = hello.bind(human);

boundHello('arg1');

class thisClass {
  constructor() {
    this.name = 'Class';
    this.inClassHello = this.inClassHello.bind(this);
  }

  inClassHello(arg) {
    console.log(`inClassHello\nthis: ${JSON.stringify(this)}, arg: ${arg}`);
  }
}

let instance = new thisClass();

let executor = {
  name: 'Executor',
  exeHello: instance.inClassHello,
};

executor.exeHello('arg1');
