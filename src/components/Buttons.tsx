import React, { ReactNode } from 'react'
interface ButtonProps {
    children: ReactNode;
    color: string;
    onclick: () => void;
}
export const Buttons = ({ children, color, onclick }: ButtonProps) => {
  return (
    <button className={`btn btn-${color}`} onClick={onclick}>{children}</button>
  )
}
