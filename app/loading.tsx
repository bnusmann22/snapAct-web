import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6">
        {/* Loading Spinner */}
        <div className="animate-pulse">
          <div className="h-16 w-16 rounded-full border-4 border-border border-t-primary animate-spin" />
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-foreground font-sans">
            Loading
          </h1>
          <p className="text-muted-foreground text-sm max-w-sm">
            Please wait while we prepare your content...
          </p>
        </div>

        {/* Progress Indicator Dots */}
        <div className="flex gap-2 mt-4">
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
}
