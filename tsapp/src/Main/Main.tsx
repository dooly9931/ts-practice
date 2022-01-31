import React, { ReactElement } from 'react';

interface PropsObject { // basic interface
  name?: string, // optional properties
}

interface SquareConfig {
  readonly color?: string, // readonly properties
  width: number,
  [propName: string]: any, // string index signature
}

interface Square {
  color: string,
  area: number,
}

interface createSquareFunc { // function interface
  (config: SquareConfig): Square,
}

let createSquare: createSquareFunc; // declaration
createSquare = (conf) => { // definitioin. var names don't need to match, no need to state types (contextual typing)
  let colorStr: string = conf.color ? conf.color : 'blue';
  let widthNum: number = conf.width ? conf.width : 100;
  let area: number = widthNum * widthNum;
  return { color: colorStr, area: area };
}

let mySquare = createSquare({ color: 'red', width: 100, name: 'hello' });

interface Card {
  info: string,
}

let createNameCard = (firstname: string, lastname = 'Kim'): Card => { // default parameter
  let name: string = firstname + ' ' + lastname;
  return { info: name };
}

let createLikesCard = (like: string, ...restOfLikes: string[]): Card => { // rest of parameters
  let likes: string = like + ', ' + restOfLikes.join(', ');
  return { info: likes };
}

const Main = (props: PropsObject): ReactElement | null => {
  let name: string | undefined = props.name;

  return (
    <div>Hi, {name}!</div>
  );
};

export default Main;
