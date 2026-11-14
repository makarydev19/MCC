'use client';

import { useState, useEffect, useRef, FC, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconCheck, IconChevronDown } from '@tabler/icons-react';
import { cn } from '@/libs/utils';

type CustomSelectProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: ReactNode;
};

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const label = value && value !== 'All' ? value : placeholder || 'Select';

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
        className="flex min-h-[44px] w-full items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 text-sm font-semibold text-fg transition-colors hover:border-subtle/50"
      >
        <span className="flex items-center gap-2.5 truncate">
          <span className="text-subtle">{icon}</span>
          <span className="truncate">{label}</span>
        </span>
        <IconChevronDown
          size={16}
          className={cn(
            'shrink-0 text-subtle transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 z-50 mt-2 max-h-72 w-full min-w-[240px] origin-top overflow-auto rounded-xl border border-line bg-surface p-1.5 shadow-lift hide-scrollbar"
          >
            {options.map((option) => {
              const selected = (value || 'All') === option;
              return (
                <li key={option}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                    }}
                    className={cn(
                      'flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
                      selected
                        ? 'bg-brand/10 font-semibold text-brand'
                        : 'text-fg hover:bg-muted'
                    )}
                  >
                    {option}
                    {selected && <IconCheck size={16} />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
