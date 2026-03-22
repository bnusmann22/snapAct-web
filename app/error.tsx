'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 rounded-full bg-destructive/10 border-2 border-destructive/20 flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
        </div>

        {/* Error Content */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold text-foreground font-sans">
            Something went wrong
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            We encountered an unexpected error. Our team has been notified and we're working to fix it.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-6 p-4 bg-destructive/5 border border-destructive/20 rounded-lg text-left">
              <p className="text-xs font-mono text-destructive break-words">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={reset}
            className="w-full h-10 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium"
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full h-10 font-sans font-medium"
          >
            <a href="/">Go Home</a>
          </Button>
        </div>

        {/* Support Link */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          If the problem persists, please{' '}
          <a
            href="mailto:support@snapact.com"
            className="text-primary hover:underline font-medium"
          >
            contact support
          </a>
        </p>
      </div>
    </div>
  );
}
