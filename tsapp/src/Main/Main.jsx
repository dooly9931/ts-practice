import React from 'react';
let createSquare; // declaration
createSquare = (conf) => {
    let colorStr = conf.color ? conf.color : 'blue';
    let widthNum = conf.width ? conf.width : 100;
    let area = widthNum * widthNum;
    return { color: colorStr, area: area };
};
let mySquare = createSquare({ color: 'red', width: 100, name: 'hello' });
let createIDCard = (firstname, lastname = 'Kim', like, ...restOfLikes) => {
    let name = firstname + ' ' + lastname;
    let likes = like + ', ' + restOfLikes.join(', ');
    let card = {
        name,
        likes,
    };
    return card;
};
const Main = (props) => {
    let name = props.name;
    return (<div>Hi, {name}!</div>);
};
export default Main;
