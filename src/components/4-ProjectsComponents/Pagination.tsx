import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

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
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 my-20">
      {/* Previous Button */}
      <button
        title="Previous"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 text-sm font-medium rounded-md ${
          currentPage === 1
            ? 'dark:bg-black/50 bg-white/50 cursor-not-allowed text-gray-400 dark:text-white/15 translate-y-1' // Disabled state
            : 'bg-primary dark:bg-zinc-800 text-white hover:translate-y-1'
        }`}
      >
        <FaArrowLeft />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            page === currentPage
              ? 'bg-white dark:bg-slate-50 dark:text-black shadow-lg translate-y-1'
              : 'bg-primary dark:bg-zinc-800 text-white hover:translate-y-1'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        title="Next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 text-sm font-medium rounded-md ${
          currentPage === totalPages
            ? 'dark:bg-black/50 bg-white/50 cursor-not-allowed text-gray-400 dark:text-white/15 translate-y-1' // Disabled state
            : 'bg-primary dark:bg-zinc-800 text-white hover:translate-y-1'
        }`}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
