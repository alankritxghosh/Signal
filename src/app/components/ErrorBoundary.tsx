import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen flex items-center justify-center p-6"
          style={{ background: 'var(--color-bg-primary)' }}
        >
          <div className="text-center max-w-md">
            <div 
              className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(239, 68, 68, 0.1)' }}
            >
              <svg 
                className="w-8 h-8 text-red-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
            </div>
            <h1 
              className="text-xl font-semibold mb-2"
              style={{ 
                color: 'var(--color-text-primary)',
                fontFamily: "'Inter', sans-serif" 
              }}
            >
              Something went wrong
            </h1>
            <p 
              className="mb-6"
              style={{ 
                color: 'var(--color-text-secondary)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                lineHeight: 1.6 
              }}
            >
              We're sorry, but something unexpected happened. Please refresh the page to try again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl font-medium"
              style={{
                background: 'var(--color-accent-gradient)',
                color: 'white',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
