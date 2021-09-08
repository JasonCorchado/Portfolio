import React from 'react';
import github from '../imgs/Icons/Github.png';
import linkedin from '../imgs/Icons/icons8-linkedin-480.png';
import gmail from '../imgs/Icons/icons8-gmail-480.png';

function Contact() {
    return(
        <div className='Contact'>
            <div>
                <img src={github} alt='github'/>
                <a href='https://github.com/JasonCorchado' target="_blank" rel="noreferrer">Github</a>
            </div>
            <div>
                <img src={linkedin} alt='linkedin'/>
                <a href='https://www.linkedin.com/in/jason-corchado/' target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div>
                <img src={gmail} alt='gmail'/>
                <a href="mailto:corchadojason@gmail.com?subject=Message%20from%20portfolio%20site" target="_blank" rel="noopener noreferrer">Corchadojason@gmail.com</a>
            </div>
        </div>
    );
}

export default Contact;