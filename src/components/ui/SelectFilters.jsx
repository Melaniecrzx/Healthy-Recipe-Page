import { useEffect, useRef, useState } from "react"
import dropDownIcon from "../../../public/assets/images/icon-chevron-down.svg"

export default function SelectFilters({ title, id, name, value, options, onChange, ...props }) {
    const [showFilters, setShowFilters] = useState(false);
    const dropdownRef = useRef(null);

    const selectedOption = options.find(opt => opt.value === value);

    const displayText = selectedOption && value !== null
        ? selectedOption.name 
        : title;


    const handleChange = (optValue) => {
        if (onChange) {
            onChange(name, optValue);
        }
        setShowFilters(false);
    }
    const handleClear = () => {
        if (onChange) {
            onChange(name, null)
        }
        setShowFilters(false);

    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowFilters(false);
            }
        };

        if (showFilters) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showFilters]);

    return (
        <div className="bg-white rounded-[10px] relative font7 md:w-50" ref={dropdownRef}>
            <button className="flex justify-between px-4 py-2.5 cursor-pointer w-full" onClick={() => setShowFilters(!showFilters)}>
                <p className="">{displayText}</p>
                <img src={dropDownIcon} alt="Chevron Down Icon" className={`w-5 h-5 transition ease-in-out duration-300 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            {showFilters && (
                <div className="flex flex-col absolute z-40 bg-white p-2 rounded-lg top-12 shadow-lg w-full md:max-w-60 ">
                    {options.map((opt) => (
                        <label key={opt.value} className="flex gap-2 p-2">
                            <input
                                type="radio"
                                name={name}
                                value={opt.value}
                                checked={value === opt.value}
                                className="cursor-pointer"
                                onChange={() => handleChange(opt.value)}
                            />
                            <span>{opt.name}</span>
                        </label>
                    ))}
                    <button className="text-start cursor-pointer" onClick={handleClear}>Clear</button>
                </div>
            )}
        </div>
    )
}