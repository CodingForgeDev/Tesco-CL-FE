import React, { CSSProperties } from 'react';

interface SkeletonProps {
    className?: string;
    variant?: 'default' | 'glass';
    style?: CSSProperties;
}

export const Skeleton = ({ className = '', variant = 'default', style }: SkeletonProps) => {
    return (
        <div 
            className={`skeleton${variant === 'glass' ? '-glass' : ''} ${className}`} 
            style={style}
            aria-hidden="true" 
        />
    );
};
