import React from 'react';
import Divider from '../imgs/504-5045315_white-divider-png.png';
import { motion } from 'framer-motion';

function About() {
    return(
        <motion.div className='About'
            initial = {{opacity: 0, scale: 1, x:200 }}
            animate = {{opacity: 1, scale: 1, x: 0, transition: {duration: 1.5}}}
            exit = {{opacity: 0, scale: 1, x: 200, transition: {duration: 1}}}>
            <h1>Hi I'm Jason Corchado</h1>
            <p>I'm a Full Stack developer from New York. I'm passionate about this field and enjoy learning as well as growing within this field. just like many New Yorkers I'm determined to be the best version of myself every day, and I think that shows in my work ethic as well as my code.</p>
            <img src={Divider} alt='divider' />
            <p>I believe the web is the present and future of our civilization, I intend to use my skills to help create websites and webapps that help companies represent their buisness through design and a user expierance that is easy to use and navigate. I have languages that I am already familiar and proficent with but I'm willing and capable of expanding that toolset.</p>
            <img src={Divider} alt='divider' />
            <p>On that note feel free to contact me if you would like to work with me or have any questions about what I can offer. </p> 
            
        </motion.div>
    );
};

export default About;