import "./bannerContent.css";
const BannerContent = () => {
  return (
    <section className="h-[auto] w-[100%]  px-[5%] py-[2%] box-border web-content-banner mt-[70px]">
      <p className="web-content-banner__small-quote text-black font-thin text-2xl pl-2 m-0">
        Unlock Your Potential With OrcasIQ.
      </p>
      <p className="web-content-banner__large-quote text-9xl p-0 m-0">
        Learn. Apply. <br />
      </p>
      <div className="web-content-banner_quote-btn flex items-end">
        <p className="web-content-banner__large-quote text-9xl">Succeed.</p>
        {/* <button
          className="btn text-white text-s bg-[black] px-2 py-1
 active:scale-95  transition-all duration-100 ease-in-out"
        >
          Learn Now
        </button> */}
      </div>
    </section>
  );
};

export default BannerContent;
