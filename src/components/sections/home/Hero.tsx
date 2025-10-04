// components/hero/SplitHero.tsx
'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true);
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-background">
      {/* African-inspired gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.08)_1px,transparent_1px)] [background-size:32px_32px] opacity-60" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Proudly African-Built Technology
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Empower Your Business with
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                African Innovation
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Built by Africans, for African entrepreneurs. Our cloud-native SaaS platform combines
              cutting-edge AI with deep understanding of local business needs to accelerate your
              digital transformation.
            </p>

            {/* Feature list */}
            <ul className="mt-8 grid gap-4 text-sm text-muted-foreground">
              {[
                'Multi-currency support (Naira, Cedi, Rand, Shilling)',
                'Offline-first architecture for unreliable connectivity',
                'Local payment gateway integrations',
                'Swahili, Yoruba, Amharic language support',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group px-8 py-3 text-base bg-primary hover:bg-primary/90"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Start Building Today
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-primary/20 hover:bg-primary/5"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5" /> Watch Success Stories
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-8 pt-6 border-t border-muted">
              <p className="text-xs text-muted-foreground mb-3">
                Trusted by 2,500+ African businesses
              </p>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <span>🇳🇬 Lagos</span>
                <span>🇰🇪 Nairobi</span>
                <span>🇿🇦 Cape Town</span>
                <span>🇬🇭 Accra</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Main mockup container */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-2xl">
              <div className="aspect-[16/11] relative">
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1920&auto=format&fit=crop"
                  alt="African entrepreneurs using Afro Tech Solutions dashboard"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              {/* Dashboard preview overlay */}
              <div className="absolute left-4 top-4 rounded-lg bg-background/95 backdrop-blur-sm px-3 py-2 text-xs font-medium shadow-lg border border-primary/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Live Dashboard
                </div>
              </div>
            </div>

            {/* Floating metric cards */}
            <div className="absolute -right-4 top-8 hidden w-40 rounded-xl border border-primary/10 bg-background/95 backdrop-blur-sm p-4 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Monthly Growth</p>
              <p className="text-lg font-bold text-primary">+247%</p>
              <p className="text-xs text-muted-foreground">Across 15 countries</p>
            </div>

            <div className="absolute -left-4 bottom-8 hidden w-44 rounded-xl border border-primary/10 bg-background/95 backdrop-blur-sm p-4 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Success Rate</p>
              <p className="text-lg font-bold text-primary">94.8%</p>
              <p className="text-xs text-muted-foreground">Business digitization</p>
            </div>

            {/* Decorative African pattern element */}
            <div className="absolute -z-10 -right-12 -bottom-12 w-32 h-32 opacity-10">
              <div className="w-full h-full bg-primary rounded-full"></div>
              <div className="absolute top-4 left-4 w-24 h-24 bg-accent rounded-full"></div>
              <div className="absolute top-8 left-8 w-16 h-16 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
