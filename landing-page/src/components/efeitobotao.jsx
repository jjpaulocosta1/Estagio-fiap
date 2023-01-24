import React, {useState} from "react";

function InscrevaButton() {
    const [buttonColor, setButtonColor] = useState("transparent");
    const [textColor, setTextColor] = useState("#ED145B");
    const [borderColor, setBorderColor] = useState("#ED145B");

    return (
        <button 
            className="inscreva-button"
            style={{ backgroundColor: buttonColor, color: textColor }}
            onMouseEnter={() => {
                setButtonColor("#ED145B");
                setTextColor("#000000");
            }}
            onMouseLeave={() => {
                setButtonColor("transparent");
                setTextColor("#ED145B");
            }}
        >
            Inscreva-se
        </button>
    );
}

export default InscrevaButton;