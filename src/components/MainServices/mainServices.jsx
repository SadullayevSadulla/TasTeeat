const MainServices = () => {
  return (
    <section className="bg-[#292E36] py-[120px]">
      <div className="container mx-auto flex items-center justify-between gap-[80px]">
        <div className="max-w-[360px]">
          <img src="/Frame (15).png" alt="" />
          <h1 className="mt-6 text-[40px] font-['Cormorant_Infant'] font-normal text-white">
            Our Great Services
          </h1>
          <p className="mt-5 text-[20px] leading-[30px] text-white font-['Josefin_Sans'] max-w-[438px]">
            The atmosphere set the stage. It’s about more than just a dining
            room away from your home. food takes the spotlight as guests.
          </p>
        </div>
        <div className="flex gap-[30px]">
          <div className="w-[255px] h-[235px] border border-24  border-[#4A4F57] flex items-center justify-center">
            <div className="w-[210px] h-[190px] border border-[#4A4F57] flex flex-col items-center justify-center">
              <img src="/Vector (2).png" alt="" className="mb-6" />
              <h1 className="text-white text-[25px] font-[400] font-normal font-['Cormorant_Infant']">
                Opened 24/7
              </h1>
            </div>
          </div>
          <div className="w-[255px] h-[235px] border border-24 border-[#4A4F57] flex items-center justify-center">
            <div className="w-[210px] h-[190px] border border-[#4A4F57] flex flex-col items-center justify-center">
              <img src="/IMAGE (22).png" alt="" className="mb-6" />
              <h1 className="text-white text-[25px] font-[400] font-normal font-['Cormorant_Infant']">
                Special Menus
              </h1>
            </div>
          </div>
          <div className="w-[255px] h-[235px] border border-24 border-[#4A4F57] flex items-center justify-center">
            <div className="w-[210px] h-[190px] border border-[#4A4F57] flex flex-col items-center justify-center">
              <img src="/Vector (3).png" alt="" className="mb-6" />
              <h1 className="text-white text-[25px] font-[400] font-normal font-['Cormorant_Infant']">
                Home Delivery
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServices;