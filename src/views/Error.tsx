import { FlameIcon, MoonIcon, XIcon } from 'lucide-react';
import { LinkWithTooltip } from '@/components/links/LinkWithTooltip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

const Error = () => {
  return (
    <Alert className="flex h-screen w-full flex-col items-center justify-center gap-4 border-2 border-primary bg-foreground/80">
      <AlertTitle className="flex flex-col items-center text-5xl font-bold">
        <div className="relative">
          <div className="h-50 w-50 -translate-z-2 rotate-x-75 -rotate-y-5 rotate-z-30 bg-[#4B527E] transform-3d" />
          <MoonIcon className="absolute -top-5 left-5 fill-yellow stroke-0" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="absolute top-8 right-15 z-10 size-15 rotate-x-10 rotate-y-0 fill-[#50727B] stroke-0 transform-3d"
          >
            <path d="M11.998 2C14.2072 2 15.998 3.79086 15.998 6V15H16.998C17.5476 15 17.998 14.55 17.998 14V8C17.998 7.44772 18.4458 7 18.998 7C19.5503 7 19.998 7.44772 19.998 8V14C19.998 15.6569 18.6569 17 16.998 17H15.998V20H17.998V22H5.99805V20H7.99805V14H6.99805C5.34119 14 3.99805 12.6569 3.99805 11V9C3.99805 8.44772 4.44576 8 4.99805 8C5.55033 8 5.99805 8.44772 5.99805 9V11C5.99805 11.55 6.44805 12 6.99805 12C7.36471 12 7.69805 12 7.99805 12V6C7.99805 3.79086 9.78891 2 11.998 2Z"></path>
          </svg>

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 71.52618048568888 81.57927817454117"
            width="71.52618048568888"
            height="81.57927817454117"
            className="absolute top-0 left-19 z-10 size-10 rotate-x-0 -rotate-y-10 -rotate-z-1 animate-bounce duration-4000 transform-3d"
          >
            <rect
              x="0"
              y="0"
              width="71.52618048568888"
              height="81.57927817454117"
              fill="#ffffff00"
            ></rect>
            <g transform="translate(17.59178083439747 46.948767171031) rotate(0 3.727996826171875 10.800000000000011)">
              <text
                x="0"
                y="16.064"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize="16px"
                fill="#ffffff"
                textAnchor="start"
                direction="ltr"
                dominantBaseline="alphabetic"
              >
                z
              </text>
            </g>
            <g transform="translate(34.29369867007176 36.65698633631325) rotate(0 5.92999267578125 13.5)">
              <text
                x="0"
                y="20.08"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize="20px"
                fill="#ffffff"
                textAnchor="start"
                direction="ltr"
                dominantBaseline="alphabetic"
              >
                z
              </text>
            </g>
            <g transform="translate(44.922191838227945 10) rotate(0 8.301994323730469 18.899999999999977)">
              <text
                x="0"
                y="28.112000000000002"
                fontFamily="Nunito, Segoe UI Emoji"
                fontSize="28px"
                fill="#ffffff"
                textAnchor="start"
                direction="ltr"
                dominantBaseline="alphabetic"
              >
                z
              </text>
            </g>
            <g
              transform="translate(10 71.5791781745412) rotate(0 0.00004999999998744897 0.00004999999998744897)"
              stroke="none"
            >
              <path
                fill="#ffffff"
                d="M 3.14,-3.14 Q 3.14,-3.14 3.55,-2.55 3.97,-1.97 4.18,-1.28 4.40,-0.59 4.38,0.11 4.36,0.83 4.11,1.51 3.86,2.18 3.41,2.74 2.96,3.30 2.36,3.69 1.75,4.08 1.05,4.25 0.36,4.42 -0.35,4.36 -1.07,4.31 -1.73,4.02 -2.39,3.74 -2.92,3.26 -3.46,2.78 -3.81,2.15 -4.16,1.53 -4.30,0.82 -4.43,0.11 -4.34,-0.59 -4.24,-1.30 -3.92,-1.94 -3.60,-2.59 -3.09,-3.09 -2.59,-3.60 -1.94,-3.92 -1.30,-4.24 -0.59,-4.34 0.12,-4.43 0.82,-4.30 1.53,-4.16 2.15,-3.81 2.78,-3.46 3.26,-2.92 3.74,-2.39 4.02,-1.73 4.31,-1.07 4.36,-0.35 4.42,0.36 4.25,1.05 4.07,1.75 3.69,2.36 3.30,2.96 2.74,3.41 2.18,3.86 1.51,4.11 0.83,4.36 0.11,4.38 -0.60,4.40 -1.28,4.18 -1.97,3.97 -2.55,3.55 -3.14,3.13 -3.14,3.14 -3.14,3.14 -3.47,2.71 -3.80,2.29 -4.02,1.80 -4.24,1.32 -4.33,0.79 -4.43,0.26 -4.40,-0.26 -4.36,-0.80 -4.20,-1.31 -4.04,-1.82 -3.77,-2.28 -3.49,-2.73 -3.11,-3.11 -2.73,-3.49 -2.28,-3.77 -1.82,-4.05 -1.31,-4.20 -0.80,-4.36 -0.26,-4.40 0.26,-4.43 0.79,-4.33 1.32,-4.24 1.80,-4.02 2.29,-3.80 2.71,-3.47 3.14,-3.14 3.14,-3.14 L 3.14,-3.14 Z"
              ></path>
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="absolute top-9 left-8 z-20 size-20 rotate-x-0 -rotate-y-10 -rotate-z-1 fill-[#2E236E] stroke-[#4B527E] stroke-[0.5] transform-3d"
          >
            <path d="M12.8659 3.00017L22.1034 19H23V21H1V19H1.89638L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM12 12.9248L8.65869 19H15.3414L12 12.9248Z"></path>
          </svg>

          <FlameIcon className="absolute top-19 left-22 z-60 size-10 animate-pulse fill-[#FCB454] stroke-[#FF9B17]" />
          <XIcon className="absolute top-25 left-23 z-50 size-8 rotate-x-66 fill-red stroke-primary stroke-3 transform-3d" />
        </div>
        <span className="text-muted">Oops!</span>
      </AlertTitle>
      <AlertDescription className="flex flex-col items-center justify-center gap-2 text-lg font-semibold text-muted">
        <span>Something went wrong</span>
        <span>
          Please try reloading the page. If you still need help, Please contact{' '}
          <LinkWithTooltip
            className="px-2 text-lg text-muted"
            label="support"
            to="mailto:some-email@company.com"
            tooltip="some-email@company.com"
          />{' '}
        </span>
      </AlertDescription>
    </Alert>
  );
};

export default Error;
