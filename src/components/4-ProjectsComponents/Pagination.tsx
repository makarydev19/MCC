'use client';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  handlePageClick: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  goToPreviousPage,
  goToNextPage,
  handlePageClick,
}) => (
  <div className="flex flex-wrap justify-center my-20 gap-2">
    {/* Previous Button */}
    <button
      onClick={goToPreviousPage}
      disabled={currentPage === 1}
      className={`py-2 px-4 rounded-xl shadow-2xl transition-transform ${
        currentPage === 1
          ? 'dark:bg-black/50 bg-white/50 cursor-not-allowed text-gray-400 dark:text-white/15 translate-y-1' // Disabled state
          : 'bg-primary dark:bg-zinc-800 text-white hover:translate-y-1'
      }`}
    >
      Previous
    </button>

    {/* Page Number Buttons */}
    {[...Array(totalPages)].map((_, idx) => (
      <button
        key={idx}
        onClick={() => handlePageClick(idx + 1)}
        className={`py-2 px-4 rounded-xl transition-transform ${
          currentPage === idx + 1
            ? 'bg-white dark:bg-slate-50 dark:text-black shadow-lg translate-y-1'
            : 'bg-primary dark:bg-zinc-800 text-white hover:translate-y-1'
        }`}
      >
        {idx + 1}
      </button>
    ))}

    {/* Next Button */}
    <button
      onClick={goToNextPage}
      disabled={currentPage === totalPages}
      className={`py-2 px-4 rounded-xl shadow-2xl transition-transform ${
        currentPage === totalPages
          ? 'dark:bg-black/50 bg-white/50 cursor-not-allowed text-gray-400 dark:text-white/15 translate-y-1' // Disabled state
          : 'bg-primary dark:bg-zinc-800 text-white hover:translate-y-1'
      }`}
    >
      Next
    </button>
  </div>
);

export default Pagination;
