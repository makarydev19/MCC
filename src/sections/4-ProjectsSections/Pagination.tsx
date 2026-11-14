import React from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { cn } from '@/libs/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return <div className="h-20" />;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const base =
    'grid size-11 place-items-center rounded-xl font-display text-[0.9375rem] font-bold transition-all duration-200';

  return (
    <nav
      aria-label="Pagination"
      className="my-16 flex items-center justify-center gap-2 md:my-20"
    >
      <button
        aria-label="Previous page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          base,
          'border border-line bg-surface text-fg hover:border-fg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line'
        )}
      >
        <IconChevronLeft size={18} />
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          className={cn(
            base,
            page === currentPage
              ? 'bg-ink text-white shadow-card dark:bg-white dark:text-ink'
              : 'border border-line bg-surface text-fg hover:-translate-y-0.5 hover:border-fg'
          )}
        >
          {page}
        </button>
      ))}

      <button
        aria-label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          base,
          'border border-line bg-surface text-fg hover:border-fg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line'
        )}
      >
        <IconChevronRight size={18} />
      </button>
    </nav>
  );
};

export default Pagination;
