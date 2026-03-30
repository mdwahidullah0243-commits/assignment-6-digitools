import React from 'react';
import Card from '../ui/Card/Card';

const stepsData = [
    {
        id: '01',
        title: 'Create Account',
        description: 'Sign up for free in seconds. No credit card required to get started.'
    },
    {
        id: '02',
        title: 'Choose Products',
        description: 'Browse our catalog and select the tools that fit your needs.'
    },
    {
        id: '03',
        title: 'Start Creating',
        description: 'Download and start using your premium tools immediately.'
    }
]

const Steps = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto mt-20'>
            <div className='text-center space-y-3'>
                <h2 className='text-4xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-[#627382] text-base'>
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            <div className='mt-10 grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    stepsData.map(stepCard => {
                        return (
                            <Card
                                key={stepCard.id}
                                stepCard={stepCard} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Steps;