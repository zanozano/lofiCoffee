import React from 'react';

export const SvgIcon = ({ width, height, fill, children, ...props }) => {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 682.667 682.667"
            {...props}
        >
            {children}
        </svg>
    );
};
