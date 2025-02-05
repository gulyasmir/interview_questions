import React from 'react';

function Welcome(props) {
  return <h1>Привет, {props.name}!</h1>;
}

export default Welcome;


/*
В этом примере мы определяем функциональный компонент Welcome, который принимает объект props в качестве аргумента и возвращает элемент JSX — заголовок <h1>, отображающий приветствие с именем, переданным через props.name
*/