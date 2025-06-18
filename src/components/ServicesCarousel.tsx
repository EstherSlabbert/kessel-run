import {
  CalendarClockIcon,
  ContainerIcon,
  ForkliftIcon,
  MapPinnedIcon,
  RadiationIcon,
  TruckIcon,
} from 'lucide-react';

import { UtilityCard } from '@/components/UtilityCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import { Link } from '@/components/links/Link';
import { cn } from '@/utils/classUtils';
import { buttonVariants } from './ui/button/buttonVariants';

export const ServicesCarousel = () => {
  return (
    <Carousel opts={{ loop: true }} className="w-full">
      <CarouselContent className="-ml-1">
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <UtilityCard
              icon={<TruckIcon />}
              title="Long Distance Transport"
              description="For long-haul needs."
            >
              <Link
                className={cn(buttonVariants({ variant: 'default' }), 'w-full no-underline!')}
                to={'/services#long-distance-transport'}
                label="Learn More"
              />
            </UtilityCard>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <UtilityCard
              icon={<RadiationIcon />}
              title="Emergency loads"
              description="When time is critical."
            >
              <Link
                className={cn(buttonVariants({ variant: 'default' }), 'w-full no-underline!')}
                to={'/services#emergency-loads'}
                label="Learn More"
              />
            </UtilityCard>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <UtilityCard
              icon={<MapPinnedIcon />}
              title="Direct freight"
              description="Point-to-point deliveries."
            >
              <Link
                className={cn(buttonVariants({ variant: 'default' }), 'w-full no-underline!')}
                to={'/services#direct-freight'}
                label="Learn more"
              />
            </UtilityCard>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <UtilityCard
              icon={<ForkliftIcon />}
              title="Crane Trucks and Rigging"
              description="On-site handling."
            >
              <Link
                className={cn(buttonVariants({ variant: 'default' }), 'w-full no-underline!')}
                to={'/services#crane-trucks-and-rigging'}
                label="Learn more"
              />
            </UtilityCard>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <UtilityCard
              icon={<CalendarClockIcon />}
              title="Express Cartage"
              description="For urban and regional areas."
            >
              <Link
                className={cn(buttonVariants({ variant: 'default' }), 'w-full no-underline!')}
                to={'/services#express-cartage'}
                label="Learn more"
              />
            </UtilityCard>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <UtilityCard
              icon={<ContainerIcon />}
              title="Abnormal and Escorted Loads"
              description="Safe delivery."
            >
              <Link
                className={cn(buttonVariants({ variant: 'default' }), 'w-full no-underline!')}
                to={'/services#abnormal-and-escorted-load'}
                label="Learn more"
              />
            </UtilityCard>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
