const MainOffer = () => {
  return (
    <section className="py-[140px]">
      <div className="container">

        {/* Top */}
        <div className="flex flex-col items-center text-center">
          <img src="/Frame (10).png" alt="" />

          <h1 className="mt-5 text-[40px] font-['Cormorant_Infant'] text-[#292E36]">
            Our Offer dishes
          </h1>

          <p className="mt-4 max-w-[700px] text-[20px] leading-[32px] text-[#555555] font-['Josefin_Sans']">
            Our chefs create melt-in-your-mouth dishes that'll satiate even
            the fussiest eaters now the dishes are in offers use it based on
            hunger.
          </p>
        </div>
        <div className="flex justify-between gap-[30px] mt-[60px]">
          <div className="relative w-[665px] h-[409px] bg-[#DDEFF6] overflow-hidden">
            <img
              src="/Frame (12).png"
              alt=""
              className="absolute left-[35px] top-[35px] z-20"
            />
            <img
              src="/Frame (13).png"
              alt=""
              className="absolute left-[35px] top-[145px]"
            />
            <div className="absolute left-[35px] bottom-[45px] z-20">
              <h1 className="text-[40px] text-[#292E36] font-['Cormorant_Infant']">
                Chicken Burger
              </h1>
              <p className="mt-3 w-[250px] text-[20px] leading-[30px] text-[#555555] font-['Josefin_Sans']">
                Chicken burger with the tasty toppings and leaves.
              </p>
            </div>
            <img
              src="/IMAGE (16).png"
              alt=""
              className="absolute right-[20px] bottom-0 w-[360px]"
            />
          </div>

          {/*----*/}
          <div className="relative w-[665px] h-[409px] bg-[#F3F3F3] overflow-hidden">
            <img
              src="/Frame (14).png"
              alt=""
              className="absolute left-[35px] top-[35px] z-20"
            />
            <img
              src="/Frame (13).png"
              alt=""
              className="absolute left-[35px] top-[145px]"
            />
            <div className="absolute left-[35px] bottom-[45px] z-20">
              <h1 className="text-[40px] text-[#292E36] font-['Cormorant_Infant']">
                Chicken Pizza
              </h1>
              <p className="mt-3 w-[250px] text-[20px] leading-[30px] text-[#555555] font-['Josefin_Sans']">
                Pizza with multiple flavor and the toping are mixed.
              </p>
            </div>
            <img
              src="/IMAGE (17).png"
              alt=""
              className="absolute right-[20px] bottom-0 w-[350px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default MainOffer;