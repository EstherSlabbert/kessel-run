import { useEffect } from 'react';

import treeRings from '@/assets/wood-1290696_1280.jpg';
import tallTrees from '@/assets/pexels-ivan-babich-889856565-22145348.jpg';
import cameraLens from '@/assets/paul-skorupskas-7KLa-xLbSXA-unsplash.jpg';
import ladyJustice from '@/assets/pexels-ekaterina-bolovtsova-6077123.jpg';

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <div className="container flex w-5/6 flex-col items-center justify-center gap-8 p-4">
      <section className="flex gap-4">
        <div>
          <h1 className="mb-4">Company history</h1>
          <p>
            At our inception our team of like-minded individuals came together to form Kessel Run.
            We are experienced in our own fields as we are familiar with diverse aspects of the
            transport industry and sought to enter the market. Since inception Kessel Run has grown
            from strength to strength. We continue to service our first client to this day. We are
            hoping to organically grow in a responsible and sustainable way.
          </p>
        </div>
        <img
          src={treeRings}
          alt="Seasoned annual tree rings"
          title="Photo by jacke1970 (https://pixabay.com/photos/wood-tribe-nature-tree-1290696/)"
          className="size-36 rounded-full"
        />
      </section>
      <section className="flex gap-4 rounded-2xl border p-4">
        <img
          src={tallTrees}
          alt="Green leaves on tall trees"
          title="Photo by Ivan  Babich (https://www.pexels.com/photo/green-leaves-on-a-tree-22145348/)"
          className="size-36 rounded-full"
        />
        <div>
          <h1 className="mb-4">Mission</h1>
          <p>
            Our mission is to become a profitable and competitive transport entity by growing
            organically and increasing in magnitude sustainably.
          </p>
          <p>
            In addition to operating our business profitably, we strive to operate it responsibly
            both for our clients and our employees, for whom our goal is to provide a safe and
            secure work environment. As part of our competitive edge we aspire to adapt to modern
            management techniques to deliver a positive, reliable experience.
          </p>
        </div>
      </section>
      <section className="flex gap-4">
        <div>
          <h1 className="mb-4">Vision</h1>
          <p>
            Our aim is to act as an indispensable partner to our customers by helping them build and
            maximize sustainable competitive advantages. We do this by helping them get their
            products to market and run their operation quickly, efficiently, and safely. This will
            be established in an environment of respect, honesty and responsibility. We will
            constantly and aggressively pursue our market opportunities. We will relentlessly
            support, train and mentor our team.
          </p>
        </div>
        <img
          src={cameraLens}
          alt="Person holding camera lens"
          title="Photo by Paul Skorupskas (https://unsplash.com/photos/person-holding-camera-lens-7KLa-xLbSXA)"
          className="size-36 rounded-full"
        />
      </section>
      <section className="flex gap-4 rounded-2xl border p-4">
        <img
          src={ladyJustice}
          alt="Lady Justice and a Gavel"
          title="Photo by KATRIN  BOLOVTSOVA (https://www.pexels.com/photo/lady-justice-and-a-gavel-6077123/)"
          className="size-36 rounded-full"
        />
        <div>
          <h1 className="mb-4">Values</h1>
          <p>
            Throughout our expertly crafted and reliably delivered logistics solutions it is rest
            assured that every interaction will be driven by integrity and respect. We intend to
            protect family values, emphasizes cooperation and critical thinking by empowering
            individuals. We believe that a rising tide should lift all boats.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
