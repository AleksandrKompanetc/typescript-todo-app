import React from 'react';

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount}) => {
  return (
    <div>header</div>
  )
}