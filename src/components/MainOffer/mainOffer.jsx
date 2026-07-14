import { useTranslation } from "react-i18next";

const MainOffer = () => {
  const { t } = useTranslation();
  return (
    <section id="pages" className="py-[70px] lg:py-[140px]">
      <div className="container">
        <div className="flex flex-col items-center text-center px-4">
          <h1 className="text-[15px] font-[400] font-['Josefin_Sans'] text-[#292E36]">{t("offer.bosh")}</h1>

          <h1 className="mt-5 text-[28px] sm:text-[34px] lg:text-[40px] font-['Cormorant_Infant'] text-[#292E36]">
            {t("offer.title")}
          </h1>

          <p className="mt-4 max-w-[700px] text-[16px] lg:text-[20px] leading-[26px] lg:leading-[32px] text-[#555555] font-['Josefin_Sans']">
            {t("offer.subtitle")}
          </p>
        </div>
        <div className="offer_card flex flex-col lg:flex-row flex-wrap gap-5 lg:gap-[30px] justify-center items-center mt-5 px-4 lg:px-0">
          {/* Card 1 - Chicken Burger */}
          <div className="card w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#C5EAF2] rounded-lg py-[26px] px-4">
            <div className="card_left flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="img flex justify-center">
                <img src="/Frame (12).png" alt="Chicken Burger" className="w-auto h-auto" />
              </div>
              <h2 className="text-[13px] sm:text-[15px] font-normal font-['Josefin_Sans'] text-[#292E36] mt-5 sm:mt-10 mb-[5px]">
                50% Offer Going
              </h2>
              <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-normal font-['Cormorant_Infant']">
                Chicken Burger
              </h1>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal font-['Josefin_Sans'] text-[#555555] max-w-full sm:max-w-[220px]">
                Chicken burger with the tasty toppings and leaves.
              </p>
            </div>
            <div className="card_right flex justify-center">
              <img
                src="/IMAGE (16).png"
                alt="Chicken Burger"
                className="w-full sm:w-[220px] lg:w-[307px] h-auto sm:h-[180px] lg:h-[232px] object-contain"
              />
            </div>
          </div>

          {/* Card 2 - Chicken Pizza */}
          <div className="card w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#E8E8E8] rounded-lg py-[26px] px-4">
            <div className="card_left flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="img flex justify-center">
                <img src="/Frame (14).png" alt="Chicken Pizza" className="w-auto h-auto" />
              </div>
              <h2 className="text-[13px] sm:text-[15px] font-normal font-['Josefin_Sans'] text-[#292E36] mt-5 sm:mt-10 mb-[5px]">
                50% Offer Going
              </h2>
              <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-normal font-['Cormorant_Infant']">
                Chicken Pizza
              </h1>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal font-['Josefin_Sans'] text-[#555555] max-w-full sm:max-w-[220px]">
                Pizza with multiple flavor and the toping are mixed.
              </p>
            </div>
            <div className="card_right flex justify-center">
              <img
                src="/IMAGE (17).png"
                alt="Chicken Pizza"
                className="w-full sm:w-[230px] lg:w-[325px] h-auto sm:h-[180px] lg:h-[232px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainOffer;
