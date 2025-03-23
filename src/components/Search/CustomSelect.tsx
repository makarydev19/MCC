"use client";

import { useState, useEffect, useRef, FC } from "react";
import { FaChevronDown } from "react-icons/fa";

type CustomSelectProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      {/* Select Box */}
      <div
        className="flex items-center flex-wrap justify-between w-full p-2 bg-transparent dark:bg-transparent cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>{value || placeholder || "Select an option"}</span>
        <FaChevronDown
          className={`text-sm transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Dropdown Options */}
      <div
        className={`z-10 w-full mt-2 bg-transparent dark:bg-transparent hide-scrollbar transition-all duration-300 ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overflowY: isOpen ? "auto" : "hidden" }} // Ensures smooth scrolling once opened
      >
        {options.map((option) => (
          <div
            key={option}
            className="relative px-4 py-2 text-sm text-gray-900 dark:text-white cursor-pointer dark:hover:bg-zinc-950 hover:bg-gray-100 hover:rounded-lg"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
