"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto lg:px-20 max-sm:px-10 py-44">
      <h2 className="font-heading text-red-800 mb-10">Somthing went wrong!</h2>
      <button onClick={() => reset()} className="btn-primary px-8">
        Try Again
      </button>
    </div>
  );
}
