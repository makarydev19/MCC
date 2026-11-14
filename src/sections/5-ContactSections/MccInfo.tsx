import Link from 'next/link';
import { IconMail, IconMapPin } from '@tabler/icons-react';
import { contactData } from '@/Data/Data';
import { cn } from '@/libs/utils';

const LABELS = ['Email us', 'Head office'];
const ICONS = [IconMail, IconMapPin];

const MccInfo = ({ variant = 'cards' }: { variant?: 'cards' | 'list' }) => {
  const list = variant === 'list';
  return (
    <div className={cn('grid gap-4', !list && 'md:grid-cols-2')}>
      {contactData.map((item, index) => {
        const Icon = ICONS[index] ?? IconMapPin;
        const href = item.link || `mailto:${item.details}`;
        return (
          <Link
            key={item.details}
            href={href}
            target={item.link ? '_blank' : undefined}
            rel={item.link ? 'noopener noreferrer' : undefined}
            className={cn(
              'group flex items-center gap-4 transition-colors',
              list
                ? 'text-white'
                : 'card p-6 hover:border-brand/40 hover:shadow-card'
            )}
          >
            <span
              className={cn(
                'grid size-12 shrink-0 place-items-center rounded-xl transition-colors',
                list
                  ? 'border border-white/15 bg-white/5 group-hover:bg-white/10'
                  : 'bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white'
              )}
            >
              <Icon size={22} stroke={1.8} />
            </span>
            <span className="flex flex-col gap-1">
              <span
                className={cn(
                  'font-display text-xs font-bold uppercase tracking-[0.14em]',
                  list ? 'text-white/50' : 'text-subtle'
                )}
              >
                {LABELS[index]}
              </span>
              <span
                className={cn(
                  'font-medium leading-snug',
                  list ? 'text-white' : 'text-fg'
                )}
              >
                {item.details}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MccInfo;
