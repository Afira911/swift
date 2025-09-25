import React from 'react'
import './Resume.css'
import theme_pattern from '../../assets/theme_pattern.png'
import resume_notes from '../../assets/resume_notes.js'

const Resume = () => {
    return (
        <div id='resume' className='resume'>
            <div className="resume-title">
                <h1>Resume</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="resume-container">
                {resume_notes.map((resume, index) => {
                    return <div key={index} className='resume-format'>
                        <h3>{resume.s_no}</h3>
                        <h2>{resume.s_name}</h2>
                        <p>{resume.s_desc}</p>
                        <div className='resume-readmore'>
                            <p>Read More ⟶</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Resume