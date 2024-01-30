import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function LangSwitcher({
  lang,
  bahasa,
}: {
  lang: string;
  bahasa: string;
}) {
  return (
    <div className="flex relative items-center gap-2 group">
      {lang === "en" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-7 border border-white rounded-[0.2rem] shadow-sm"
          viewBox="0 0 5800 3900"
        >
          <path d="M0,0h5800v3900H0" fill="#b31942" />
          <path
            d="M0,450H5800m0,600H0m0,600H5800m0,600H0m0,600H5800m0,600H0"
            stroke="#FFF"
            strokeWidth="300"
          />
          <path d="M0,0h2964v2100H0" fill="#0a3161" />
          <g fill="#FFF">
            <g id="s18">
              <g id="s9">
                <g id="s5">
                  <g id="s4">
                    <path
                      id="s"
                      d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"
                    />
                    <use xlinkHref="#s" y="420" />
                    <use xlinkHref="#s" y="840" />
                    <use xlinkHref="#s" y="1260" />
                  </g>
                  <use xlinkHref="#s" y="1680" />
                </g>
                <use xlinkHref="#s4" x="247" y="210" />
              </g>
              <use xlinkHref="#s9" x="494" />
            </g>
            <use xlinkHref="#s18" x="988" />
            <use xlinkHref="#s9" x="1976" />
            <use xlinkHref="#s5" x="2470" />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          className="w-7 border border-white rounded-[0.2rem] shadow-sm"
          viewBox="0 0 46.35 32.3"
        >
          <g fillRule="nonzero">
            <path
              fill="#fff"
              stroke="#CCC"
              strokeWidth=".19"
              strokeMiterlimit="2.613"
              d="M2.63.09h41.09c1.39 0 2.53 1.15 2.53 2.54v27.04c0 1.39-1.13 2.53-2.52 2.54H2.61a2.553 2.553 0 0 1-2.52-2.54V2.63C.09 1.24 1.24.09 2.63.09z"
            />
            <path
              fill="red"
              d="M2.72.18h40.91c1.44-.04 2.53 1.1 2.53 2.54v13.43H.18V2.72C.18 1.28 1.27.14 2.72.18z"
            />
          </g>
        </svg>
      )}
      <div className="flex items-center gap-1">
        <p className="group-hover:text-sky-600 transition-all uppercase">
          {lang}
        </p>
        <CaretDown
          size={14}
          className="group-hover:rotate-180 group-hover:text-sky-600 transition-all"
        />
      </div>
      {/* modal */}
      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 flex flex-col gap-2 transition-all absolute p-2 top-7 -left-7 rounded bg-slate-100 border border-slate-300 dark:border-slate-600 dark:bg-slate-800">
        <p className="font-medium">{bahasa}:</p>
        <Link href="/en" className="flex items-center gap-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-7 border border-white rounded-[0.2rem] shadow-sm"
            viewBox="0 0 5800 3900"
          >
            <path d="M0,0h5800v3900H0" fill="#b31942" />
            <path
              d="M0,450H5800m0,600H0m0,600H5800m0,600H0m0,600H5800m0,600H0"
              stroke="#FFF"
              strokeWidth="300"
            />
            <path d="M0,0h2964v2100H0" fill="#0a3161" />
            <g fill="#FFF">
              <g id="s18">
                <g id="s9">
                  <g id="s5">
                    <g id="s4">
                      <path
                        id="s"
                        d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"
                      />
                      <use xlinkHref="#s" y="420" />
                      <use xlinkHref="#s" y="840" />
                      <use xlinkHref="#s" y="1260" />
                    </g>
                    <use xlinkHref="#s" y="1680" />
                  </g>
                  <use xlinkHref="#s4" x="247" y="210" />
                </g>
                <use xlinkHref="#s9" x="494" />
              </g>
              <use xlinkHref="#s18" x="988" />
              <use xlinkHref="#s9" x="1976" />
              <use xlinkHref="#s5" x="2470" />
            </g>
          </svg>
          <p className="text-sm font-medium">English</p>
        </Link>
        <Link href="/id" className="flex items-center gap-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            className="w-7 border border-white rounded-[0.2rem] shadow-sm"
            viewBox="0 0 46.35 32.3"
          >
            <g fillRule="nonzero">
              <path
                fill="#fff"
                stroke="#CCC"
                strokeWidth=".19"
                strokeMiterlimit="2.613"
                d="M2.63.09h41.09c1.39 0 2.53 1.15 2.53 2.54v27.04c0 1.39-1.13 2.53-2.52 2.54H2.61a2.553 2.553 0 0 1-2.52-2.54V2.63C.09 1.24 1.24.09 2.63.09z"
              />
              <path
                fill="red"
                d="M2.72.18h40.91c1.44-.04 2.53 1.1 2.53 2.54v13.43H.18V2.72C.18 1.28 1.27.14 2.72.18z"
              />
            </g>
          </svg>
          <p className="text-sm font-medium">Indonesian</p>
        </Link>
      </div>
    </div>
  );
}
