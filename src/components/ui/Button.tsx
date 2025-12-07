'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  className?: string;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4A84B]";

  const variants = {
    primary: "bg-[#D4A84B] text-white hover:bg-[#c4983b] shadow-lg shadow-orange-500/20",
    secondary: "bg-white text-[#3D3D3D] border-2 border-[#3D3D3D] hover:bg-gray-50",
    dark: "bg-[#3D3D3D] text-white hover:bg-[#2a2a2a] shadow-lg",
    outline: "bg-transparent text-[#D4A84B] border border-[#D4A84B] hover:bg-[#D4A84B]/10"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
