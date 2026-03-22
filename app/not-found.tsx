import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center space-y-8">
        {/* 404 Visual */}
        <div className="space-y-4">
          <div className="text-7xl font-bold text-primary/80 font-sans drop-shadow-sm">
            404
          </div>
          <h1 className="text-3xl font-bold text-foreground font-sans">
            Page not found
          </h1>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <p className="text-muted-foreground text-base leading-relaxed">
            We couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground/60">
            <Search className="h-4 w-4" />
            <span className="text-sm">Exploring the unknown</span>
          </div>
        </div>

        {/* Illustration Areas */}
        <div className="flex justify-center gap-4 py-8">
          <div className="h-16 w-16 rounded-lg bg-secondary/20 border border-border/50 opacity-60" />
          <div className="h-16 w-16 rounded-lg bg-accent/20 border border-border/50 opacity-40" />
          <div className="h-16 w-16 rounded-lg bg-primary/10 border border-border/50 opacity-50" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            asChild
            className="w-full h-10 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium"
          >
            <a href="/">Back to Home</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full h-10 font-sans font-medium"
          >
            <a href="/about">Learn More</a>
          </Button>
        </div>

        {/* Footer Help Text */}
        <p className="text-xs text-muted-foreground/70">
          If you think this is a mistake,{' '}
          <a
            href="mailto:support@snapact.com"
            className="text-primary hover:underline font-medium"
          >
            let us know
          </a>
        </p>
      </div>
    </div>
  );
}
