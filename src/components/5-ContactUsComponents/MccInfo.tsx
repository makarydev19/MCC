import React from 'react';
import { contactData } from '@/Data/Data';
import Link from 'next/link';

const MccInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-center md:px-0 md:grid-cols-2">
      {contactData.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden bg-white dark:bg-zinc-950 border dark:border-zinc-900 rounded-xl"
        >
          <div className="p-6">
            <Link href={item.link}>
              <div
                className={`flex items-center justify-center ${index === 0 ? 'cursor-default' : ''}`}
              >
                {item.icon}
              </div>
            </Link>
            <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900 dark:text-gray-100">
              {item.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MccInfo;
