const LoadingSpinner = () => (
  <div
    role="status"
    aria-label="Loading"
    className="flex h-screen flex-col items-center justify-center gap-5"
  >
    <div className="loader" aria-hidden>
      <span />
      <span />
      <span />
    </div>
    <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-subtle">
      Loading
    </p>
  </div>
);

export default LoadingSpinner;
