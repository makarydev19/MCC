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
  <div className="flex justify-center mt-20 gap-2">
    <button
      onClick={goToPreviousPage}
      disabled={currentPage === 1}
      className="bg-primary dark:bg-zinc-800 text-white py-2 px-4 rounded"
    >
      Previous
    </button>
    {[...Array(totalPages)].map((_, idx) => (
      <button
        key={idx}
        onClick={() => handlePageClick(idx + 1)}
        className={`py-2 px-4 rounded ${
          currentPage === idx + 1
            ? 'bg-primary dark:bg-zinc-800 text-white'
            : 'bg-gray-300 dark:bg-slate-50 dark:text-black'
        }`}
      >
        {idx + 1}
      </button>
    ))}
    <button
      onClick={goToNextPage}
      disabled={currentPage === totalPages}
      className="bg-primary dark:bg-zinc-800 text-white py-2 px-4 rounded"
    >
      Next
    </button>
  </div>
);

export default Pagination;
