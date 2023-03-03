import React, { ReactNode } from 'react';
import './button.scss'
import clsx from 'clsx';


interface ButtonProps {
  onClick?: () => (void);
  href?: string
  children: string | ReactNode;

  target?: '_blank' | '_self',
  type?: 'raised' | 'plain',
  size?: 'small' | 'medium' | 'large'
}

const Button = ({ onClick, children, href, target = '_self', type = 'plain', size = 'medium'}: ButtonProps) => {

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if(onClick){
      e.preventDefault();
      onClick();
    }
  };
  return (
    <a className={clsx('button', `button--${type}`, `button--size--${size}`)} target={target} href={href} onClick={handleClick}>{children}</a>
  );
};

export default Button;