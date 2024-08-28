import BgImage from "../assets/images/image-web-3-desktop.jpg";
const Main = () => {
  return (
    <div className="flex lg:flex-row ss:flex-col ss:w-[90%] md:w-full mx-auto lg:mt-[2%] lg:gap-8">
      <div className="lg:w-[75%] flex flex-col">
        <div>
          <img src={BgImage} width={"100%"}   alt="A simple bg-image" />
        </div>

        <div className="flex lg:flex-row  ss:flex-col w-full lg:pt-[2%]">
          <div className="w-[70%]">
            <h1 className="font-bold ss:text-[30px] md:text-[30px] lg:leading-[50px] ss:leading-[40px] lg:tracking-wider ">
              The Bright <br /> Future of <br /> Web 3.0?
            </h1>
          </div>
          <div className=" ss:w-full ss:mb-[5%] lg:mt-0 ss:pt-[5%] lg:pt-0 lg:w-[50%] flex ss:flex-col ">
            <span className="text-gray-400 text-[18px] lg:mb-[2%]">
                We dive into the next evolution of the web that <br className="ss:hidden md:block"  />
                claims to put the power of the platforms back <br className="ss:hidden md:block"/>
                into the hands of the people. But is it really <br className="ss:hidden md:block" />
                fulfilling it's  promise? 
            </span>

             <button className="text-white bg-black  ss:w-[50%] lg:py-3 ss:py-3   md:py-4 ss:mt-5 ss:mb-5  tracking-widest  focus:bg-orange-600 focus:text-black font-bold">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%]  bg-gray-900 ss:pt-[5%] lg:pt-[3%] ">
        <div className="ss:w-[90%]  mx-auto flex flex-col">
          <h1 className="text-[30px] text-yellow-500 font-bold  ">New</h1>

          <div className="ss:pt-[5%]">
            <h1 className="text-white font-bold text-[20px] ss:mb-[4%]">
              Hydrogen vs Electric cars
            </h1>
            <p className="text-[18px] text-gray-400   ss:mb-[7%]">
              Will hydrogen-fueled cars ever catch up to <br /> EVs ?
            </p>
            <hr className="border-gray-800" />
          </div>

          <div className="ss:pt-[5%]">
            <h1 className="text-yellow-500 font-bold text-[20px] ss:mb-[4%]">
              The Downsides of AI Artistry
            </h1>
            <p className="text-[18px] text-gray-400 ss:mb-[7%]">
              What are the possible adverse effects of <br /> on-demand AI image
              generation{" "}
            </p>
            <hr className="border-gray-800" />
          </div>

          <div className="ss:pt-[5%] ss:pb-[5%]">
            <h1 className="text-white font-bold text-[20px] ss:mb-[4%]">
              Is VC Funding Drying Up ?
            </h1>
            <p className="text-[18px] text-gray-400 ">
              Private funding by VC firms is down 50% <br /> YOY. We take a look
              at what happens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
