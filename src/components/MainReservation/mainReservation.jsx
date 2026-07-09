function MainReservation() {
  return (
    <section className="relative mt-[100px] bg-cover bg-center py-[150px]" style={{ backgroundImage: "url('/IMAGE@2x.png')" }}>
      <div className="absolute inset-0 bg-[#292E36]/55"></div>
      <div className="relative container flex justify-center">
        <div className="w-[970px] bg-[#292E36]/80 px-[95px] py-[110px]">
          <div className="flex justify-center">
            <img src="/qwerty.png" alt="" />
          </div>
          <h1 className="text-center text-white text-[45px] font-['Cormorant_Infant'] mt-5 mb-12">Book Your Table</h1>
          <form>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <input type="text" placeholder="Name" className="h-[72px] bg-transparent border border-[#6B6F76] px-7 text-[22px] text-white placeholder:text-white outline-none"/>
              <input type="email" placeholder="Email" className="h-[72px] bg-transparent border border-[#6B6F76] px-7 text-[22px] text-white placeholder:text-white outline-none"/>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <input type="number" placeholder="Persons" className="h-[72px] bg-transparent border border-[#6B6F76] px-7 text-[22px] text-white placeholder:text-white outline-none"/>
              <input type="text" placeholder="Timing" className="h-[72px] bg-transparent border border-[#6B6F76] px-7 text-[22px] text-white placeholder:text-white outline-none"/>
              <input type="text" placeholder="Date" className="h-[72px] bg-transparent border border-[#6B6F76] px-7 text-[22px] text-white placeholder:text-white outline-none"/>
            </div>
            <div className="flex justify-center mt-12">
              <button className="w-[250px] h-[68px] bg-white text-[#292E36] text-[22px] font-['Josefin_Sans'] hover:bg-[#E1B168] hover:text-white duration-300"> Book A Table</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MainReservation;
