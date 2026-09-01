export default function AboutPage () {
    return (
        <>
            <span className="page-title">About Me</span>

            <div className="about-item">
                <div className="about-item-title">
                    Software Developer in South Florida
                </div>
                <div className="about-item-title">
                    Recent M.S. Graduate from BU
                </div>
                <div className="about-item-title">
                    Frontend: React, JavaScript, HTML, CSS, TypeScript, Next.js
                </div>
                <div className="about-item-title">
                    Backend: Python, MongoDB, Node.js, RESTful APIs, PostgreSQL, MySQL
                </div>
                <div className="about-item-title">
                    Mobile: Jetpack Compose, React Native, Android SDK
                </div>
            </div>
                
            <span className='about-title'>Work Experience</span>
            <div className='about-item'>
                <div className="about-item-title">
                    <span>Shopdango - Front-End Developer</span>
                    <span>June 2022 - November 2022</span>
                </div>

                <div className="about-item-sub"> 
                    <span>Worked with a small Agile team to create custom React components, itegrate necessary MongoDB databases, and meet sprint deadlines.</span>
                </div>
                  
                <div className="about-item-sub">
                    <span className="emphasis">React </span>
                    <span className="emphasis">MongoDB</span>
                    <span className="emphasis">Agile</span>
                </div>
                
            </div>

            <span className='about-title'>Education</span>
            <div className="about-item">
                <div className="about-item-title">
                    <span>Boston University</span>
                    <span>September 2024 - May 2026</span>
                </div>
                <span className='about-item-title'>Master of Science in Computer & Information Systems</span>

                <hr className="seperator"/>

                <div className="about-item-title">
                    <span>University of Florida</span>
                    <span>August 2016 - August 2020</span>
                </div>
                <span className='about-item-title'>Bachelor of Arts in Criminology</span>
            </div>
        </>
    )
}