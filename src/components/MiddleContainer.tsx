import BgImage from "../assets/images/image-web-3-desktop.jpg"
const MiddleContainer = () => {
  return (
    <div className="flex lg:flex-row lg:mt-[2%] lg:gap-4">
      <div className="lg:w-[70%] flex flex-col">
        <div className="lg:h-[5%] ">
        <img src={BgImage} alt="A simple bg-image" />
        </div>
      </div>
      <div className="lg:w-[30%] bg-gray-900 lg:pt-[3%] ">
        <div className="lg:w-[90%] mx-auto flex flex-col">
        <h1 className="text-[30px] text-yellow-500 font-bold  ">New</h1>

        <div className="lg:pt-[5%]" >
            <h1 className="text-white font-bold text-[20px] lg:mb-2">Hydrogen vs Electric cars</h1>
            <p className="text-[18px] text-gray-400 lg:mb-[5%]">Will hydrogen-fueled cars ever catch up to <br /> EVs ?</p>
            <hr className="border-gray-800"/>
        </div>

        <div className="lg:pt-[5%]">
            <h1 className="text-yellow-500 font-bold text-[20px] lg:mb-2">The Downsides of AI Artistry</h1>
            <p className="text-[18px] text-gray-400 lg:mb-[5%]">What are the possible adverse effects of <br /> on-demand AI image generation </p>
            <hr className="border-gray-800"/>
        </div>
       


        <div className="lg:pt-[5%]" >
            <h1 className="text-white font-bold text-[20px] lg:mb-2">Is VC Funding Drying Up ?</h1>
            <p className="text-[18px] text-gray-400 lg:mb-[5%]">Private funding by VC firms is down 50% <br /> YOY. We take a look at what happens</p>
            <hr className="border-gray-800"/>
        </div>

        </div>
      </div>
    </div>
  )
}

export default MiddleContainer
