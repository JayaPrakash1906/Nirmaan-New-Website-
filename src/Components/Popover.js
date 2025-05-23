import React, { useState, useEffect } from "react";
import './Popover.css'; // Add custom styles here

function Popover({isVisible, onClose, children}) {
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(()=>{
        if(isVisible)
        {
                setIsAnimating(true);
        }
        else{
            const timer = setTimeout(()=> setIsAnimating(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isVisible])

    if (!isAnimating && !isVisible) {
        return null;
    }
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xs flex justify-center items-center border-md ${isVisible ? 'animate-show' : 'animate-hide'}`} id="wrapper" onClick={handleClose}>
            <div className="w-[800px]">
                <div className="bg-white p-4 rounded">
                      {children}
                </div>
            </div>
        </div>
    );
}

export default Popover;
