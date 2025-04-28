'use client';

interface LoadingContentProps {
  children: React.ReactNode;
  isLoading: boolean;
}

const LoadingContent = ({ isLoading, children }: LoadingContentProps) => {
  if (!isLoading) return <>{children}</>;

  return (
    <span className="loading">
      <svg className="spinner" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="path" />
        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      Loading
    </span>
  );
};

export default LoadingContent;
