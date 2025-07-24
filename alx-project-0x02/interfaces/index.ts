import { ReactNode } from "react";

export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}

export interface Post {
    id: number;
    title: string;
    content: string;
}

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large'
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
    onClick: () => void
    className: string
    children: ReactNode
}