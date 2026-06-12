import Resume from '../Torres_Andrew_Resume2026.pdf'

export default function ResumePage () {
    return (
        <>
            <span className="page-title">Resume</span>
            <div className="resume">
                <a href={Resume} download='Torres_Andrew_Resume' target='_blank' rel="noreferrer">
                    <img src="/images/ResumePhoto.PNG" alt="resume"/>
                </a>
            </div>
        </>
    )
}