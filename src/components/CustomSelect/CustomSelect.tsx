"use client";

import { useState, useEffect, useRef, ChangeEvent, FC } from "react";
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
      <div
        className="flex items-center justify-between w-full p-2 bg-white dark:bg-zinc-900 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>{value || placeholder || "Select an option"}</span>
        <FaChevronDown className="text-sm" />
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 overflow-y-auto bg-white dark:bg-zinc-900 shadow-lg max-h-48">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-sm text-gray-700 dark:text-white cursor-pointer dark:hover:bg-zinc-800 hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
