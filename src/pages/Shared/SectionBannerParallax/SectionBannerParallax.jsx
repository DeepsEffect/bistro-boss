/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";

const SectionBannerParallax = ({ img, bannerTitle, bannerDesc }) => {
  return (
    <Parallax
      bgImage={img}
      strength={300}
      className="relative overflow-hidden bg-cover bg-no-repeat"
    >
      <div
        style={{
          height: "700px",
          boxSizing: "border-box",
          objectFit: "cover",
        }}
        className="relative"
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                {bannerTitle}
                <br />
              </h1>
              <p className="max-w-2xl">{bannerDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default SectionBannerParallax;
