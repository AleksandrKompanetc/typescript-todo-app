import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount}) => {
  return (
    <div>header</div>
  )
}