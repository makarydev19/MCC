'use client';

import { IconRefresh } from '@tabler/icons-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-x flex min-h-[80vh] flex-col items-start justify-center gap-8 py-44">
      <p className="eyebrow">Error</p>
      <h2 className="h-section">Something went wrong!</h2>
      <button
        onClick={() => {
          reset();
          window.location.reload();
        }}
        className="btn-brand"
      >
        <IconRefresh />
        Try Again
      </button>
    </div>
  );
}
