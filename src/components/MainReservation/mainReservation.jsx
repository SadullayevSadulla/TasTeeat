function MainReservation() {
  return (
    <section
      id="contact"
      className="relative mt-[60px] lg:mt-[100px] bg-cover bg-center py-[60px] sm:py-[100px] lg:py-[150px]"
      style={{ backgroundImage: "url('/IMAGE@2x.png')" }}
    >
      <div className="absolute inset-0 bg-[#292E36]/55"></div>

      <div className="relative container flex justify-center px-4">
        <div className="w-full max-w-[970px] bg-[#292E36]/80 px-[24px] sm:px-[50px] lg:px-[95px] py-[40px] sm:py-[70px] lg:py-[110px]">
          <div className="flex justify-center">
            <img
              src="/qwerty.png"
              alt=""
              className="w-[36px] sm:w-auto filter invert brightness-200"
            />
          </div>

          <h1 className="text-center text-white text-[28px] sm:text-[36px] lg:text-[45px] font-['Cormorant_Infant'] mt-5 mb-8 lg:mb-12">
            Book Your Table
          </h1>

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-5 sm:mb-8">
              <input
                type="text"
                placeholder="Name"
                required
                className="h-[56px] sm:h-[64px] lg:h-[72px] bg-transparent border border-[#6B6F76] px-5 lg:px-7 text-[16px] lg:text-[22px] text-white placeholder:text-white outline-none w-full"
              />

              <input
                type="email"
                placeholder="Email"
                required
                className="h-[56px] sm:h-[64px] lg:h-[72px] bg-transparent border border-[#6B6F76] px-5 lg:px-7 text-[16px] lg:text-[22px] text-white placeholder:text-white outline-none w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              <input
                type="number"
                placeholder="Persons"
                required
                min="1"
                className="h-[56px] sm:h-[64px] lg:h-[72px] bg-transparent border border-[#6B6F76] px-5 lg:px-7 text-[16px] lg:text-[22px] text-white placeholder:text-white outline-none w-full"
              />

              <input
                type="text"
                placeholder="Timing"
                required
                className="h-[56px] sm:h-[64px] lg:h-[72px] bg-transparent border border-[#6B6F76] px-5 lg:px-7 text-[16px] lg:text-[22px] text-white placeholder:text-white outline-none w-full"
              />

              <input
                type="date"
                required
                className="h-[56px] sm:h-[64px] lg:h-[72px] bg-transparent border border-[#6B6F76] px-5 lg:px-7 text-[16px] lg:text-[22px] text-white outline-none w-full"
              />
            </div>

            <div className="flex justify-center mt-8 lg:mt-12">
              <button
                type="submit"
                className="w-full sm:w-[250px] h-[56px] sm:h-[64px] lg:h-[68px] bg-white text-[#292E36] text-[16px] lg:text-[22px] font-['Josefin_Sans'] hover:bg-[#E1B168] hover:text-white duration-300"
              >
                Book A Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MainReservation;