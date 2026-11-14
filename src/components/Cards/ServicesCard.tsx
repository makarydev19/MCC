'use client';

import { motion } from 'framer-motion';
import { IconArrowDownRight } from '@tabler/icons-react';
import { Services } from '@/Data/Data';

const ServicesCard = () => {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
      {Services.map((service, i) => (
        <motion.a
          key={service.id}
          href={`#service-${service.num}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className="group card flex min-h-[168px] flex-col justify-between p-5 transition-[background-color,border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-ink hover:bg-ink hover:shadow-lift dark:hover:border-white/20 md:p-6"
        >
          <span className="flex items-center justify-between">
            <span className="font-display text-sm font-bold tracking-[0.12em] text-brand group-hover:text-[#E5383B]">
              {service.num}
            </span>
            <IconArrowDownRight
              size={20}
              className="text-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-white"
            />
          </span>
          <h3 className="font-display text-lg font-bold leading-tight tracking-tight text-fg transition-colors group-hover:text-white md:text-xl">
            {service.title}
          </h3>
        </motion.a>
      ))}
    </div>
  );
};

export default ServicesCard;
