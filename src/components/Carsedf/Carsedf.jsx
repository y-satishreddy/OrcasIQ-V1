import { FaChevronRight, FaGlobe, FaRegCalendarAlt } from "react-icons/fa";
import GirlImage from "../../assets/girl.png";
import Google from "../../assets/google.png";
import Mdo from "../../assets/mdo.jpg";
import "./carsedf.css";
import { useState } from "react";
const Carsedf = () => {
  const [showImage, setShowImage] = useState(false);
  return (
    <section>
      {/* ============================================================================== */}
      <div className="h-[auto] w-[100%] bg-[#0A3A5E] py-[1%] px-[5%] courts-banner-font-family flex justify-between items-center">
        <div className="h-[100%] w-[80%] banner-content">
          <div>
            <a
              href=""
              className="text-[white] hover:text-[#2EC4B6] underline-animate text-base"
            >
              Mnrwdds
            </a>{" "}
            <FaChevronRight size={10} className="inline text-[white]" />
            <p className="inline text-[white]">Msas Dcweace</p>
          </div>
          <div className="py-3">
            <h2 className="text-[white] font-[500]  text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium nihil facere quidem.
            </h2>
          </div>
          <div>
            <p className="text-[white] text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              accusantium voluptates ipsum repellat id placeat officiis maxime
              voluptatem modi aliquid?
            </p>
          </div>
          <div className="py-3">
            <p className="text-[white] text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            </p>
          </div>
          <button
            className="text-[#0A3A5E] text-base font-[500] rounded bg-[white] py-1 px-2
 active:scale-95  hover:text-[#2EC4B6] transition-all duration-100 ease-in-out"
          >
            Buy Now
          </button>
          <div className="flex text-[white] gap-[10px]">
            <div className="flex py-4 gap-[5px]">
              <FaRegCalendarAlt size={20} />
              <p className="inline">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex py-4 gap-[5px]">
              <FaGlobe size={20} />
              <p className="inline">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[20%] banner-image">
          <img src={GirlImage} alt="" className="h-[100%]" />
        </div>
      </div>
      {/* ============================================================================== */}
      <br />
      <div className="benefits px-[5%] py-[1%] mt-3 flex flex-col gap-2">
        <h2 className="text-[black] font-[500]  text-3xl">Cfuwse Nejamfisa</h2>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex gap-[1%] course-benefits">
          <div className="h-[auto] w-[24%] shadow-md p-4 rounded flex gap-[10px] flex-col">
            <img src={Google} alt="" className="h-[40px] w-[40px]" />
            <h3 className="text-[black] font-[500] text-2xl">
              Portfolio Websites
            </h3>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur rerum cupiditate quaerat, libero deleniti ipsum a
              quidem sint, minima accusamus cum illo
            </p>
          </div>
          <div className="h-[auto] w-[24%] shadow-md rounded p-4 flex gap-[10px] flex-col">
            <img src={Google} alt="" className="h-[40px] w-[40px]" />
            <h3 className="text-[black] font-[500] text-2xl">
              Portfolio Websites
            </h3>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur rerum cupiditate quaerat, libero deleniti ipsum a
              quidem sint, minima accusamus cum illo
            </p>
          </div>
          <div className="h-[auto] w-[24%] shadow-md rounded p-4 flex gap-[10px] flex-col">
            <img src={Google} alt="" className="h-[40px] w-[40px]" />
            <h3 className="text-[black] font-[500] text-2xl">
              Portfolio Websites
            </h3>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur rerum cupiditate quaerat, libero deleniti ipsum a
              quidem sint, minima accusamus cum illo
            </p>
          </div>
          <div className="h-[auto] w-[24%] shadow-md rounded p-4 flex gap-[10px] flex-col">
            <img src={Google} alt="" className="h-[40px] w-[40px]" />
            <h3 className="text-[black] font-[500] text-2xl">
              Portfolio Websites
            </h3>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur rerum cupiditate quaerat, libero deleniti ipsum a
              quidem sint, minima accusamus cum illo
            </p>
          </div>
        </div>
      </div>

      <br />
      {/* ============================================================================== */}
      <div className="benefits px-[5%] py-[1%] mt-3 flex flex-col gap-2">
        <h2 className="text-black font-medium text-3xl">Cfuwse Nejamfisa</h2>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="mdoules-main flex flex-col md:flex-row items-stretch w-full">
          {/* Left Side */}
          <div className="modules-main-part_one flex-1 flex flex-col gap-y-[30px]">
            {/* Row 1 */}
            <div className="flex gap-x-[30px]">
              <div className="w-[40%] bg-white rounded p-4 flex flex-col gap-[10px] shadow-md">
                <img src={Google} alt="logo" className="h-[40px] w-[40px]" />
                <h3 className="text-black font-medium text-2xl">Portfolio</h3>
                <p className="text-[13px]">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="w-[40%] bg-white rounded p-4 flex flex-col gap-[10px] shadow-md">
                <img src={Google} alt="logo" className="h-[40px] w-[40px]" />
                <h3 className="text-black font-medium text-2xl">Portfolio</h3>
                <p className="text-[13px]">Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-x-[30px]">
              <div className="w-[40%] bg-white rounded p-4 flex flex-col gap-[10px] shadow-md">
                <img src={Google} alt="logo" className="h-[40px] w-[40px]" />
                <h3 className="text-black font-medium text-2xl">Portfolio</h3>
                <p className="text-[13px]">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="w-[40%] bg-white rounded p-4 flex flex-col gap-[10px] shadow-md">
                <img src={Google} alt="logo" className="h-[40px] w-[40px]" />
                <h3 className="text-black font-medium text-2xl">Portfolio</h3>
                <p className="text-[13px]">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          {/* Right Side (NO Shadow) */}
          <div className="modules-main-part_two flex-1 bg-white rounded-2xl flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-3xl">Cfuwse Nejamfisa</h2>
              <p className="text-base  pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2 ">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="flex items-start gap-2 ">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="flex items-start gap-2 ">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================================== */}
      <div className="h-[80vh] w-[100%] flex px-[5%] py-[1%] main-module-2">
        <div className="h-[100%] w-[50%] ">
          <h2 className="text-[black] font-[500]  text-3xl">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <div className="h-[auto] w-[100%] p-4 rounded flex items-center justify-center gap-[20px] ">
            <img src={Google} alt="" className="h-[30px] w-[30px]" />
            <div>
              <h3 className="text-[black] font-[500] text-xl">
                Portfolio Websites
              </h3>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur rerum cupiditate quaerat, libero deleniti ipsum a
                quidem sint, minima accusamus cum illo
              </p>
            </div>
          </div>
          <div className="h-[auto] w-[100%] p-4 rounded flex items-center justify-center gap-[20px] ">
            <img src={Google} alt="" className="h-[30px] w-[30px]" />
            <div>
              <h3 className="text-[black] font-[500] text-xl">
                Portfolio Websites
              </h3>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur rerum cupiditate quaerat, libero deleniti ipsum a
                quidem sint, minima accusamus cum illo
              </p>
            </div>
          </div>
          <div className="h-[auto] w-[100%] p-4 rounded flex items-center justify-center gap-[20px] ">
            <img src={Google} alt="" className="h-[30px] w-[30px]" />
            <div>
              <h3 className="text-[black] font-[500] text-xl">
                Portfolio Websites
              </h3>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur rerum cupiditate quaerat, libero deleniti ipsum a
                quidem sint, minima accusamus cum illo
              </p>
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[50%] ">
          <img src={Mdo} alt="" className="h-[80%] w-[100%]" />
          <div className="h-[20%] w-[100%]  flex justify-around items-center">
            <div className="h-[80%] w-[30%] rounded shadow-md flex flex-col items-center justify-around">
              <p>10000+</p>
              <p>Placed Mobilesor</p>
            </div>
            <div className="h-[80%] w-[30%] rounded shadow-md flex flex-col items-center justify-around">
              <p>10000+</p>
              <p>Placed Mobilesor</p>
            </div>
          </div>
        </div>
      </div>
      {/* ==================================================================================================================== */}
      <div className="h-[80vh] w-[100%]  px-[5%] py-[1%] flex">
        <div className="h-[100%] w-[50%] bg-[#0A3A5E] relative flex items-center justify-center">
          <img src={Mdo} alt="" className="h-[90%] w-[90%]" />
          <button
            className="btn text-white text-s bg-[black] px-4 py-2 rounded
 active:scale-95  transition-all duration-100 ease-in-out absolute bottom-[20px]"
            onClick={() => setShowImage(true)}
          >
            view
          </button>
        </div>
        <div>
          <div className="modules-main-part_two flex-1 bg-white rounded-2xl flex flex-col justify-between p-4">
            <div>
              <h2 className="font-semibold text-3xl">Cfuwse Nejamfisa</h2>
              <p className="text-base  pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2 ">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="flex items-start gap-2 ">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="flex items-start gap-2 ">
                  <span>–</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {showImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50">
            <span
              onClick={() => setShowImage(false)}
              className="absolute top-5 right-6 text-white text-4xl cursor-pointer"
            >
              &times;
            </span>
            <img
              src={Mdo}
              alt="Fullscreen"
              className="max-w-[90%] max-h-[90%] border-4 border-white"
            />
          </div>
        )}
      </div>
      <div className="content-companies h-[auto] w-[100%] px-[5%] py-[1%]">
        <h2 className="font-semibold text-3xl">Cfuwse Nejamfisa</h2>
        <p className="text-base pb-2 text-justify pt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          exercitationem adipisci placeat? Pariatur deserunt ratione, quae,
          accusamus exercitationem quisquam deleniti libero in assumenda
          incidunt soluta obcaecati perferendis mollitia. Nemo!Lorem Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Repudiandae dicta debitis
          vitae ipsa aperiam reprehenderit officiis nesciunt, eaque ullam
          reiciendis ad magni. Reiciendis ut tempora impedit dolor veniam
          dolores adipisci.
        </p>
      </div>
      <div className="flex py-[1%] px-[5%] items-center justify-between">
        <div className="flex items-center justify-center flex-col ">
          <h2 className="font-500 text-2xl p-2">Cfuwse Nejamfisa</h2>
          <img src={Mdo} alt="" className="h-[80%] w-[80%]" />
        </div>
        <div className="flex items-center justify-center flex-col p-2">
          <h2 className="font-500 text-2xl p-2">Cfuwse Nejamfisa</h2>
          <img src={Mdo} alt="" className="h-[80%] w-[80%]" />
        </div>
      </div>
    </section>
  );
};

export default Carsedf;
