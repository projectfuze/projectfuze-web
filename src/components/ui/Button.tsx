'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  className?: string;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm tracking-wide";

  const variants = {
    primary: "bg-[#D4A84B] text-white hover:bg-[#b8903b] focus:ring-[#D4A84B] shadow-sm",
    secondary: "bg-white text-[#3D3D3D] border-2 border-[#3D3D3D] hover:bg-gray-50",
    dark: "bg-[#3D3D3D] text-white hover:bg-black focus:ring-gray-700 shadow-sm border border-transparent",
    outline: "bg-transparent border border-[#3D3D3D] text-[#3D3D3D] hover:bg-gray-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
