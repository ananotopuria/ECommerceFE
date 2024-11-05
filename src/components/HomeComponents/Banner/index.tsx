export default function Banner() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-between gap-2 p-2 md:px-[4rem] md:py-[2rem] lg:px-[6rem] lg:py-[3rem] sm:w-[100vw] md:w-[100vw] lg: xl:w-[200] 2xl:w-[150rem] bg-black text-white ">
        <h2 className="text-[1.2rem] mb-6 text-[#2CFF05]">Categories</h2>
        <div className="w-full h-full flex max-lg:flex-col-reverse items-center gap-8">
          <div className="w-1/2 max-lg:w-full flex flex-col gap-20 max-lg:items-center">
            <h3 className="text-[3rem] lg:w-3/4 max-lg:text-[2rem] font-bold max-lg:text-center">
              Enhance Your Music Experience
            </h3>
            <div className="flex gap-6">
              <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-black rounded-full bg-white w-[3.7rem] h-[3.7rem] items-center justify-center">
                <span></span>
                <span>Days</span>
              </div>
              <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-black rounded-full bg-white w-[3.7rem] h-[3.7rem] items-center justify-center">
                <span></span>
                <span>Hours</span>
              </div>
              <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-black rounded-full bg-white y w-[3.7rem] h-[3.7rem] items-center justify-center">
                <span></span>
                <span>Minutes</span>
              </div>
              <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-black rounded-full bg-white w-[3.7rem] h-[3.7rem] items-center justify-center">
                <span></span>
                <span>Seconds</span>
              </div>
            </div>
            <button className="w-[10rem] rounded-lg font-bold text-lg p-3 hover:translate-x-2 hover:-translate-y-1 transition-all bg-[#2CFF05]">
              Buy Now!
            </button>
          </div>
          <img
            className="w-1/2 max-lg:w-3/4 h-full"
            src="/img/music-box.png"
            alt="music box"
          />
        </div>
      </div>
    </section>
  );
}
