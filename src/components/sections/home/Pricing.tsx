'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Users, Building, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/');
  };
  const handleEnterprisePlan = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Ubuntu Starter',
      description: 'Perfect for emerging African startups and solo entrepreneurs',
      price: billingPeriod === 'monthly' ? '$15' : '$12',
      period: '/month',
      badge: null,
      icon: <Users className="size-6 text-primary" />,
      features: [
        'Up to 5 business projects',
        'African market templates',
        'Community support network',
        '10GB cloud storage',
        'Basic analytics dashboard',
        'Mobile-first design tools',
        'Local payment integration',
      ],
      cta: 'Start Your Journey',
      popular: false,
      action: handleStarterPlan,
    },
    {
      name: 'Sankofa Pro',
      description: 'Ideal for growing African businesses ready to scale across borders',
      price: billingPeriod === 'monthly' ? '$45' : '$36',
      period: '/month',
      badge: 'Most Popular',
      icon: <Building className="size-6 text-primary" />,
      features: [
        'Unlimited business projects',
        'Premium African-focused templates',
        'Priority expert support',
        '500GB cloud storage',
        'Advanced market analytics',
        'Multi-currency support',
        'Team collaboration tools',
        'API access & integrations',
        'Cross-border payment solutions',
      ],
      cta: 'Scale Your Business',
      popular: true,
      action: handleProfessionalPlan,
    },
    {
      name: 'Baobab Enterprise',
      description: 'For established African corporations and large organizations',
      price: 'Custom',
      period: '',
      badge: 'Enterprise Ready',
      icon: <Rocket className="size-6 text-primary" />,
      features: [
        'Everything in Sankofa Pro',
        'Unlimited storage & bandwidth',
        '24/7 dedicated support',
        'Custom African market integrations',
        'Enterprise-grade security',
        'SLA guarantee (99.9% uptime)',
        'Dedicated success manager',
        'Custom training programs',
        'White-label solutions',
      ],
      cta: 'Transform Your Enterprise',
      popular: false,
      action: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* African-inspired background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-secondary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium">
            🌍 Pricing for African Innovation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Empowering African Tech
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              One Solution at a Time
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Built by Africans, for Africans. Choose a plan that grows with your vision. From Lagos
            to Cape Town, Nairobi to Accra - we're here to support your digital transformation.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={cn(
                'px-6 py-3 text-sm font-medium rounded-md transition-all',
                billingPeriod === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={cn(
                'px-6 py-3 text-sm font-medium rounded-md transition-all',
                billingPeriod === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-xl',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/30'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-6 py-2">
                    <Star className="size-3 mr-2" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <div className="mb-4 flex justify-center">{plan.icon}</div>

                <CardTitle className="text-2xl mb-3">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {plan.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
                {billingPeriod === 'annual' && plan.price !== 'Custom' && (
                  <p className="text-sm text-muted-foreground mt-2">Billed annually • Save 25%</p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6 font-medium',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Sankofa Pro' && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform African Business?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join thousands of African entrepreneurs, startups, and enterprises who trust Afro Tech
              Solutions to power their digital transformation. Let's build the future of African
              technology together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleScheduleDemo} size="lg" className="px-8">
                Schedule a Demo
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Talk to Sales Team
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              🌍 Proudly serving 54+ African countries • 🚀 Trusted by 10,000+ businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
