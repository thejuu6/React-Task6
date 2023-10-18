import React, { useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import myImage from './../../assets/download.png'
import './MainHero.css'
import resume from './../../assets/myresume.pdf'

const MainHero = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'Enthusiastic Web Developer', 'Mern Stack Developer'],
        loop: {},
    });

    return (
        <div className="waste">
            <div className="left-hero">
                <div className="intro">
                    <p> I'm THEJASWI</p>
                </div>
                <div className="typewriter" style={{ paddingBottom: "10px" }}>
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {text.length == 0 ? <br /> : text}
                    </span>
                    <p>   </p><p></p>
                    <p>knack of building application with front and back end operations</p>
                    <a href={resume} className='btn dummy'>Get Resume</a>
                    <br />
                </div>

            </div>

            <div className="right-hero">
                <img src={myImage} alt="" style={{ width: "250px", height: "250px", borderRadius: 300 / 2, marginRight: "20px" }} />
                <br />
                <a href={resume} className='btn dummy2'>Get Resume</a>
            </div>
        </div>
    )
}

export default MainHero
