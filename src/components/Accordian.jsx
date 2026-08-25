import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Accordian(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleAccordian() {
        setIsOpen(prev => !prev);
    }

    return (
        <div className="bg-white shadow">
            <div className="flex justify-between border-b border-b-emerald-400 p-3">
                <h2>{props.accordianTitle}</h2>
                <button onClick={toggleAccordian}>
                    <ChevronDown className={isOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
            </div>
            {isOpen && (
                <div className="p-3">
                    <p>{props.accordianBody}</p>
                </div>
            )}
        </div>
    );
}

export default Accordian;