import React from 'react'
import "./Modal.css"

export default function Modal({ children, open, onClose }) {
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
