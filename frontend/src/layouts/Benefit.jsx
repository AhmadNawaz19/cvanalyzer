import React, { use, useEffect, useState } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import './styles/benefit.css'

const Benefit = React.memo(() => {

    const [next, setNext] = useState(0)
    const [card, setCard] = useState([])
    const benefitDetail = [
        { title: "Improve Your ATS Score", description: "A resume analyzer helps you optimize your resume for Applicant Tracking Systems used by most companies today. It scans your document and identifies missing keywords that recruiters are searching for. By adding the right skills and phrases, your chances of passing automated screening increase significantly. " },
        { title: "Identify Missing Skills and Keywords", description: "One of the biggest advantages of a resume analyzer is discovering what your resume lacks. It compares your resume with job descriptions and points out missing skills or important keywords. This helps you align your resume with industry demands and recruiter expectations. Many applicants unknowingly skip critical terms that are essential for selection.." },
        { title: "Get Professional Suggestions for Improvement", description: "A resume analyzer acts like a personal career assistant by giving smart suggestions. It reviews your content, structure, and wording to improve overall quality. You receive feedback on weak bullet points and how to make them more impactful. " },
        { title: "Save Time and Increase Job Success Rate", description: "Creating a perfect resume manually can take a lot of time and effort. A resume analyzer speeds up this process by instantly identifying problems and providing solutions. Instead of guessing what works, you get data-driven insights. This reduces trial and error and helps you apply faster to multiple jobs." }
    ]

    const nextBox = () => {
        setNext(next + 1)
    }

    useEffect(() => {
        if (next === benefitDetail.length) {
            setNext(0)
        } else {
            setCard([benefitDetail[next]])
        }
    }, [next])

    return (
        <div id='benefit'>
            <h1>👀 Resume Analyzer Benefits</h1><br />
            {
                card.map((val, idx) => {
                    return <div key={idx} id="benefitCard">
                        <h1 id='title'>{val.title}</h1>
                        <p id="description">{val.description}</p>
                    </div>
                })
            }
            <button onClick={nextBox}><i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
    )
})

Benefit.displayName = 'benefit'

export default Benefit