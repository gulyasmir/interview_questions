import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Вы выбрали: ${option}`);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        {isOpen ? 'Закрыть меню' : 'Открыть меню'}
      </button>
      {isOpen && (
        <ul>
          <li onClick={() => handleOptionClick('Профиль')}>Профиль</li>
          <li onClick={() => handleOptionClick('Настройки')}>Настройки</li>
          <li onClick={() => handleOptionClick('Выход')}>Выход</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
/*
В этом примере мы создаем функциональный компонент DropdownMenu, который использует хук состояния useState для управления состоянием меню (открыто или закрыто). При нажатии на кнопку вызывается функция toggleMenu, которая изменяет состояние isOpen. Если isOpen равно true, отображается список вариантов меню. При выборе варианта вызывается функция handleOptionClick, которая выводит выбранный вариант в консоль и закрывает меню.

Для более сложных и стилизованных меню вы можете использовать библиотеки компонентов, такие как Material-UI. Например, компонент Menu из Material-UI предоставляет расширенные возможности для создания меню.
*/