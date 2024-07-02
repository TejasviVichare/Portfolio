import React from 'react';
import Slider from './slider';
import Features from './features';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';



export default function Home(){
    return(
        <>
         <Slider />
         <Features />
         <Projects />
         <Resume />
         <Contact />
        
        </>
    )
}