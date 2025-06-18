import { Link } from '@/components/links/Link';
import { QuoteDialog } from '@/views/Quote/Quote-dialog';
import ostrichMeme from '@/assets/south-africa-165619_1280-meme.jpg';

const Contact = () => {
  return (
    <div className="container flex w-5/6 flex-col items-center justify-center gap-8 p-4">
      <section className="flex flex-col items-center justify-center gap-2 text-center">
        <h1 className="mb-4">Contact Us</h1>
        <div>
          <p className="mb-4">
            <strong>Ben</strong>
          </p>
          <p>
            <strong>Cell:</strong> <span className="p-2">078 974 9607</span>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <Link to="mailto:kesselrunltd@gmail.com" isExternal className="p-2">
              kesselrunltd@gmail.com
            </Link>
          </p>
        </div>
        <div className="mr-5">
          <QuoteDialog />
        </div>
      </section>
      <section>
        <img
          src={ostrichMeme}
          alt="ostrich meme: My mother-in-law can make the Kessel Run in under 12 parsecs"
          title="Photo by Yolanda Coervers (https://pixabay.com/photos/south-africa-ostrich-eyes-africa-165619/)"
          className="h-50"
        />
      </section>
    </div>
  );
};

export default Contact;
