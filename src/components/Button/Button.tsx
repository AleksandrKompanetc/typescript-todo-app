import React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  color: 'orange' | 'blue' | 'red';
}

export const Button: React.FC<ButtonProps> = ({children, color, onClick}) => {
  return (
    <button></button>
  )
}