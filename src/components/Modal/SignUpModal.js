
import "./SignUpModal.css"

export default function SignUpModal({ children, open, onClose }) {
if(!open) return null

    return (
        <>
        <div className='outerModal'>
        <div className='innerModal'>
        {children}
        <br />
        <button onClick={onClose}>Close</button>
        </div>
        </div>
        </>
    )
}
