'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto lg:px-24 max-sm:px-10 py-44">
      <h2 className="font-heading text-secondary mb-10">
        Something went wrong!
      </h2>
      <button
        onClick={() => {
          reset();
          window.location.reload(); // Reload the page
        }}
        className="btn-primary px-8"
      >
        Try Again
      </button>
    </div>
  );
}
