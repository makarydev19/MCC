'use client';

import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconMoon, IconSun } from '@tabler/icons-react';
import ThemeContext from '@/Context/themeContext';
import { cn } from '@/libs/utils';

const ToggleTheme = ({ light = false }: { light?: boolean }) => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const toggle = () => {
    if (darkTheme) {
      setDarkTheme(false);
      localStorage.removeItem('mcc-theme');
    } else {
      setDarkTheme(true);
      localStorage.setItem('mcc-theme', 'true');
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={darkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative grid size-11 place-items-center overflow-hidden rounded-xl border transition-colors duration-200',
        light
          ? 'border-white/20 text-white hover:bg-white/10'
          : 'border-line text-fg hover:bg-muted'
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={darkTheme ? 'sun' : 'moon'}
          initial={{ y: 14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {darkTheme ? (
            <IconSun size={20} stroke={2} />
          ) : (
            <IconMoon size={20} stroke={2} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ToggleTheme;
