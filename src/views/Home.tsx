import { buttonVariants } from '@/components/ui/button/buttonVariants';
import { cn } from '@/utils/classUtils';
import { Link } from '@/components/links/Link';
import Hero from '@/components/Hero';
import { ContactUsCard } from '@/components/ContactUsCard';
import { ServicesCarousel } from '@/components/ServicesCarousel';

const Home = () => {
  return (
    <div className="container flex w-5/6 flex-col items-center justify-center gap-16 p-4">
      <Hero />

      <section className="flex w-full flex-col items-center gap-12">
        <h1 className="text-center">Our Transport Solutions</h1>
        <ServicesCarousel />
      </section>

      <section className="w-full">
        <h1 className="mb-4 text-center">Who We Are</h1>
        <p className="mb-2">
          Kessel Run is a road freight partner that was formed by a team of seasoned transport
          professionals who sought to bring efficiency and integrity to the road freight industry.
        </p>
        <p className="mb-2">
          We have offered national transportation services within the mining, freight and logistic,
          and engineering industries.
        </p>
        <p className="mb-2">
          Our company centers itself on efficiently, and safely meeting your road transporting
          needs.
        </p>
        <Link
          className={cn(buttonVariants({ variant: 'secondary' }), 'no-underline!')}
          to={'/about'}
          label="Learn more"
        />
      </section>

      <section className="w-full">
        <ContactUsCard />
      </section>
    </div>
  );
};

export default Home;
