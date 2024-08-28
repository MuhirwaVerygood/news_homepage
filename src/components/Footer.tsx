import RetroPcs from "../assets/images/image-retro-pcs.jpg"
import LaptopPcs from  "../assets/images/image-top-laptops.jpg"
import GrowthGaming from "../assets/images/image-gaming-growth.jpg"
const Footer = () => {
  return (
    <div className='md:w-full  sm:mt-[5%] ss:w-[90%]    ss:mx-auto  flex lg:flex-row ss:flex-col lg:mt-[5%]  lg:gap-6 lg:pb-[2%] items-center'>
      <div className="flex lg:flex-row lg:w-[33%]   ss:gap-3 sm:gap-2 lg:h-[200px] sm:w-full md:mt-[4%]  lg:mt-0  ss:h-[180px]  items-center ">
      <div  className="ss:w-[100px] lg:w-[200px]  sm:w-[70%] sm:bg-cover  ss:bg-contain bg-no-repeat lg:bg-contain ss:h-[180px]   lg:h-[200px] "
        style={{
          backgroundImage: `url(${RetroPcs})`,
        //   backgroundSize: "cover", // Adjust how the background image covers the div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat:"no-repeat"

        }}
      >  
      </div>
        <div >
            <h1 className="text-orange-300 lg:text-[40px] ss:text-[30px] font-bold lg:mb-2">01</h1>
            <h1 className="font-bold lg:mb-2">Reviving Retro PCs</h1>
            <p className="text-gray-400">
                What happens when old PCs <br />
                are given modern upgrades?
            </p>
        </div>
      </div>


      <div className="flex lg:flex-row lg:w-[33%]   ss:gap-3 sm:gap-2 lg:h-[200px] sm:w-full sm:mt-[4%]  lg:mt-0  ss:h-[180px]  items-center ">
      <div  className={`ss:w-[100px] lg:w-[200px] sm:w-[70%] sm:bg-cover  ss:bg-contain bg-no-repeat lg:bg-contain ss:h-[180px]   lg:h-[200px] `}
        style={{ 
          backgroundImage: `url(${LaptopPcs})`,
        //   backgroundSize: "contain", // Adjust how the background image covers the div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat:"no-repeat"
        }}
      >  
      </div>
        <div>
            <h1 className="text-orange-300 lg:text-[40px] ss:text-[30px] font-bold lg:mb-2">02</h1>
            <h1 className="font-bold text-orange-400 lg:mb-2">Top 10 Laptops of 2022</h1>
            <p className="text-gray-400">
                What happens when old PCs <br />
                are given modern upgrades?
            </p>
        </div>
      </div>



      <div className="flex lg:flex-row lg:w-[33%]  md:mb-[3%]  ss:gap-3 sm:gap-2 lg:h-[200px] sm:w-full sm:mt-[4%]  lg:mt-0  ss:h-[180px]  items-center ">
      <div  className="ss:w-[100px] lg:w-[200px] sm:w-[70%]  ss:bg-contain  sm:bg-cover bg-no-repeat lg:bg-contain ss:h-[180px]   lg:h-[200px] "
        style={{
          backgroundImage: `url(${GrowthGaming})`,
        //   backgroundSize: "contain", // Adjust how the background image covers the div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat:"no-repeat"
        }}
      >  
      </div>
        <div>
            <h1 className="text-orange-300 lg:text-[40px] ss:text-[30px] font-bold lg:mb-2">03</h1>
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
