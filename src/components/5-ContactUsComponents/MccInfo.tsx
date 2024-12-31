import { contactData } from '@/Data/Data';
import React from 'react';

const MccInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-center md:px-0 md:grid-cols-2">
      {contactData.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden bg-white dark:bg-zinc-950 border dark:border-zinc-900 rounded-xl"
        >
          <div className="p-6">
            <svg
              className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d={item.iconPath}
              />
            </svg>
            {item.details.map((detail, i) => (
              <p
                key={i}
                className="mt-6 text-lg font-medium leading-relaxed text-gray-900 dark:text-gray-100"
              >
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MccInfo;
