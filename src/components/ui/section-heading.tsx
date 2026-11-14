import { cn } from '@/libs/utils';
import { Reveal } from './reveal';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  light = false,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'mx-auto items-center text-center',
        className
      )}
    >
      <Reveal>
        <p className={cn('eyebrow', light && 'text-[#E5383B]')}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            'h-section max-w-3xl',
            light && 'text-white',
            align === 'center' && 'mx-auto'
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              'lead max-w-2xl',
              light && 'text-white/70',
              align === 'center' && 'mx-auto'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
