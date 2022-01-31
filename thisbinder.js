import React, { Component } from 'react';

class ThisBinder extends Component {
  constructor(props) {
    super(props);
    this.withBinding = this.withBinding.bind(this);
  }

  withBinding() {
    console.log(`with binding, ${this}!`)
  }

  classField = () => {
    console.log(`with class field syntax, ${this}!`);
  };

  arrowFunc() {
    console.log(`with arrow function syntax, ${this}!`);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.withBinding} >Explicit binding</button>
        <button type="button" onClick={this.classField} >Binding with ClassField Syntax</button>
        <button type="button" onClick={() => this.arrowFunc()} >Binding with Arrow Function Syntax</button>
      </div>
    );
  }
}

export default ThisBinder;
