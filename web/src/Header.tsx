import React from 'react';

interface HeaderProps {
  title: string; // '?' o sinal de interrogação  defini se a propriedade sera obrigatória
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;