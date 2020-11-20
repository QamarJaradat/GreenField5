import React from 'react';
import './A-Style.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='center'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join our newsletter to receive the new updates</p>
                    <p className='footer-subscription-text'>
                        You can unsubscribe at any time.</p>
                    <div className='input-areas'>
                        <form>
                            <input style={{ "width": '60%' }}
                                className='footer-input'
                                name='email'
                                type='email'
                                placeholder='Your Email'
                            />
                            <Button buttonStyle='btn--outline'>Subscribe</Button>
                        </form>
                    </div>
                </section>
                <div class='footer-links center'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Trips</Link>
                            <Link to='/'>Prices</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section class='social-media center' >
                    <div class='social-media-wrap'>
                        <div class='footer-logo'>
                            <Link to='/' className='social-logo'>
                                LAFLEFNE
                        </Link>
                        </div>
                        <small class='website-rights'>LAFLEFNE © 2020</small>
                        <div class='social-icons'>
                            <Link
                                class='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i class='fab fa-facebook-f' />
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i class='fab fa-instagram' />
                            </Link>
                            <Link
                                class='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <i class='fab fa-youtube' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <i class='fab fa-twitter' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Footer;