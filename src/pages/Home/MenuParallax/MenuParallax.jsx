import { Parallax } from "react-parallax";
import img from "../../../assets/home/chef-service.jpg";

const MenuParallax = () => {
  return (
    <Parallax
      bgImage={img}
      strength={500}
      className="relative overflow-hidden bg-cover bg-no-repeat lg:mt-10"
    >
      <div
        style={{
          height: "500px",
        }}
        className="relative"
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Bistro Boss
                <br />
              </h1>
              <p className="max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default MenuParallax;
