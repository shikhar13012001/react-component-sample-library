import React from 'react';

interface ButtonProps {
    label: string;
    // onClick is an optional prop
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick}>{label}</button>
    );
}

export default Button;