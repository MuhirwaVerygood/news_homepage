import RetroPcs from "../assets/images/image-retro-pcs.jpg"
import LaptopPcs from  "../assets/images/image-top-laptops.jpg"
import GrowthGaming from "../assets/images/image-gaming-growth.jpg"
const Footer = () => {
  return (
    <div className='lg:w-full  flex lg:flex-row lg:mt-[5%] lg:gap-6 lg:pb-[2%] '>
      <div className="flex lg:flex-row lg:w-[33%] lg:h-[200px] items-center ">
      <div  className="lg:w-[200px] lg:h-[200px] "
        style={{
          backgroundImage: `url(${RetroPcs})`,
          backgroundSize: "contain", // Adjust how the background image covers the div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat:"no-repeat"

        }}
      >  
      </div>
        <div className="">
            <h1 className="text-orange-300 text-[40px] font-bold lg:mb-2">01</h1>
            <h1 className="font-bold lg:mb-2">Reviving Retro PCs</h1>
            <p className="text-gray-400">
                What happens when old PCs <br />
                are given modern upgrades?
            </p>
        </div>
      </div>


      <div className="flex lg:flex-row  lg:h-[200px] items-center">
      <div  className="lg:w-[200px] lg:h-[200px]"
        style={{
          backgroundImage: `url(${LaptopPcs})`,
          backgroundSize: "contain", // Adjust how the background image covers the div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat:"no-repeat"
        }}
      >  
      </div>
        <div>
            <h1 className="text-orange-300 text-[40px] font-bold lg:mb-2">02</h1>
            <h1 className="font-bold text-orange-400 lg:mb-2">Top 10 Laptops of 2022</h1>
            <p className="text-gray-400">
                What happens when old PCs <br />
                are given modern upgrades?
            </p>
        </div>
      </div>



      <div className="flex lg:flex-row  lg:h-[200px] items-center">
      <div  className="lg:w-[200px] lg:h-[200px]"
        style={{
          backgroundImage: `url(${GrowthGaming})`,
          backgroundSize: "contain", // Adjust how the background image covers the div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat:"no-repeat"
        }}
      >  
      </div>
        <div>
            <h1 className="text-orange-300 text-[40px] font-bold lg:mb-2">03</h1>
            <h1 className="font-bold lg:mb-2">The Growth Of Gaming </h1>
            <p className="text-gray-400">
                How the pandemic has sparked  <br />
                fresh opportunities
            </p>
        </div>
      </div>    
    </div>
  )
}

export default Footer
