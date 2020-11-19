import React from 'react';
import './A-Style.css';
import { Link } from 'react-router-dom';
import $ from 'jquery'

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={() => {
                    $.ajax({
                        method: 'POST',
                        url: '/logout',
                        success: (res) => {
                            console.log('see you another time')
                            window.location.href = "/"
                        },
                        error: (err) => {
                            console.log(err)

                        }


                    })
                }}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};