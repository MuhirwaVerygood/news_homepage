import BgImage from "../assets/images/image-web-3-desktop.jpg";
const MiddleContainer = () => {
  return (
    <div className="flex lg:flex-row lg:mt-[2%] lg:gap-8">
      <div className="lg:w-[75%] flex flex-col">
        <div>
          <img src={BgImage} width={"100%"}   alt="A simple bg-image" />
        </div>

        <div className="flex lg:flex-row w-full lg:pt-[2%]">
          <div className="w-[80%]">
            <h1 className="font-bold text-[40px] leading-[50px] tracking-wider ">
              The Bright <br /> Future of <br /> Web 3.0?
            </h1>
          </div>
          <div className="w-[50%] flex lg:flex-col ">
            <span className="text-gray-400 text-[18px] lg:mb-[2%]">
                We dive into the next evolution of the web that <br />
                claims to put the power of the platforms back <br />
                into the hands of the people. But is it really <br />
                fulfilling it's  promise? 
            </span>

            <button className="text-white bg-black lg:w-[50%] lg:py-3 tracking-widest  focus:bg-orange-600 focus:text-black font-bold">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="lg:w-[25%] bg-gray-900 lg:pt-[3%] ">
        <div className="lg:w-[90%] mx-auto flex flex-col">
          <h1 className="text-[30px] text-yellow-500 font-bold  ">New</h1>

          <div className="lg:pt-[5%]">
            <h1 className="text-white font-bold text-[20px] lg:mb-2">
              Hydrogen vs Electric cars
            </h1>
            <p className="text-[18px] text-gray-400 lg:mb-[5%]">
              Will hydrogen-fueled cars ever catch up to <br /> EVs ?
            </p>
            <hr className="border-gray-800" />
          </div>

          <div className="lg:pt-[5%]">
            <h1 className="text-yellow-500 font-bold text-[20px] lg:mb-2">
              The Downsides of AI Artistry
            </h1>
            <p className="text-[18px] text-gray-400 lg:mb-[5%]">
              What are the possible adverse effects of <br /> on-demand AI image
              generation{" "}
            </p>
            <hr className="border-gray-800" />
          </div>

          <div className="lg:pt-[5%]">
            <h1 className="text-white font-bold text-[20px] lg:mb-2">
              Is VC Funding Drying Up ?
            </h1>
            <p className="text-[18px] text-gray-400 lg:mb-[5%]">
              Private funding by VC firms is down 50% <br /> YOY. We take a look
              at what happens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContainer;
