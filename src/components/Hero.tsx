import React from 'react';

import heroImage from '@/assets/gabriel-santos-GBVDilE8yvI-unsplash.jpg';
import { QuoteDialog } from '@/views/Quote/Quote-dialog';

const Hero: React.FC = () => {
  return (
    <section
      className="border-rounded relative flex min-h-[80vh] w-full items-center justify-center rounded-xl bg-cover bg-center text-primary-foreground"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '25% 75%',
        backgroundRepeat: 'no-repeat',
      }}
      title="white truck on road during daytime by Gabriel Santos (https://unsplash.com/photos/white-truck-on-road-during-daytime-GBVDilE8yvI)"
    >
      <div className="absolute bottom-0 left-0 w-full rounded-xl bg-black/50 px-8 py-6">
        <div className="max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold">Find a Way. Get There.</h1>
          <p className="mb-4 text-lg">
            Reliable and efficient freight transport services across South Africa and beyond
          </p>
          <QuoteDialog buttonVariant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
