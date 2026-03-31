import React from 'react';
import Button from '../ui/Button/Button';
import PricingCard from './PricingCard/PricingCard';

const pricingData = [
    {
        title: 'Starter',
        description: 'Perfect for getting started',
        price: 0,
        features: [
            'Access to 10 free tools',
            'Basic templates',
            'Community support',
            '1 project per month'
        ],
        buttonContent: 'Get Started Free'
    },
    {
        title: 'Pro',
        description: 'Best for professionals',
        price: 29,
        features: [
            'Access to all premium tools',
            'Unlimited templates',
            'Priority support',
            'Unlimited projects',
            'Cloud sync',
            'Advanced analytics'
        ],
        buttonContent: 'Start Pro Trial',
        tagType: 'Most Popular'
    },
    {
        title: 'Enterprise',
        description: 'For teams and businesses',
        price: 99,
        features: [
            'Everything in Pro',
            'Team collaboration',
            'Custom integrations',
            'Dedicated support',
            'SLA guarantee',
            'Custom branding'
        ],
        buttonContent: 'Contact Sales'
    }
]

const Pricing = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto mt-20'>
            <div className='text-center space-y-3'>
                <h2 className='text-4xl lg:text-5xl font-bold'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382] text-base'>
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className='mt-15 grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8'>
                {
                    pricingData.map(data => {
                        return (
                            <PricingCard
                                key={data.title}
                                data={data} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Pricing;