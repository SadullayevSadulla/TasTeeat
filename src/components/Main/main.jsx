import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  return (
    <main id="about" className="container">
      <div className="main_t flex flex-col sm:flex-row items-start sm:items-center justify-between mt-[60px] lg:mt-[100px] flex-wrap gap-[30px] sm:gap-[15px]">
        <div className="main_card flex items-center gap-[20px]">
          <div className="card_img">
            <img src="/Frame (1).png" alt="Locate Us" className="w-[50px] h-[50px] sm:w-auto sm:h-auto" />
          </div>

          <div className="card_t flex flex-col">
            <h1 className="font-['Cormorant_Infant'] text-[24px] lg:text-[30px] font-[400]">{t("main.locateUsTitle")}</h1>
            <p className="font-['Cormorant_Infant'] text-[15px] lg:text-[16px]">{t("main.locateUsText")}</p>
          </div>
        </div>

        <div className="main_card flex items-center gap-[20px]">
          <div className="card_img">
            <img src="/Frame (2).png" alt="Open Hours" className="w-[50px] h-[50px]" />
          </div>

          <div className="card_t flex flex-col">
            <h1 className="font-['Cormorant_Infant'] text-[24px] lg:text-[30px] font-[400]">{t("main.openHoursTitle")}</h1>
            <p className="font-['Cormorant_Infant'] text-[15px] lg:text-[16px]">{t("main.openHoursText")}</p>
          </div>
        </div>

        <div className="main_card flex items-center gap-[20px]">
          <div className="card_img">
            <img src="/Frame (3).png" alt="Reservation" className="w-[50px] h-[50px] sm:w-auto sm:h-auto" />
          </div>

          <div className="card_t flex flex-col">
            <h1 className="font-['Cormorant_Infant'] text-[24px] lg:text-[30px] font-[400]">{t("main.reservationTitle")}</h1>
            <p className="text-[16px] lg:text-[20px] font-[400] font-['Cormorant_Infant']">{t("main.reservationEmail")}</p>
          </div>
        </div>
      </div>

      <div className="main_b mt-[60px] lg:mt-[84px] flex flex-col xl:flex-row items-center justify-between gap-[30px] lg:gap-[50px]">
        <div className="main_img w-full xl:w-auto">
          <img
            src="/IMAGE (3).png"
            alt="Main Image"
            className="w-full xl:w-[743px] h-auto xl:h-[519px] object-cover rounded-[8px] xl:rounded-none"
          />
        </div>
        <div className="main_tt w-full">
          <div className="main_hp text-left">
            <h1 className="font-['Cormorant_Infant'] text-[28px] sm:text-[34px] lg:text-[40px] font-[400]">
              {t("main.storyTitle")}
            </h1>
            <p className="font-['Cormorant_Infant'] max-w-[559px] text-[15px] lg:text-[16px]">
              {t("main.storyText")}
            </p>
          </div>
          <div className="main_o flex flex-row items-start justify-start gap-[30px] sm:gap-[50px] mt-[30px] mb-[30px] text-left">
            <div className="main_u">
              <h1 className="font-['Cormorant_Infant'] text-[26px] lg:text-[30px] font-[400]">{t("main.year1")}</h1>
              <p className="font-['Cormorant_Infant'] text-[15px] lg:text-[16px]">{t("main.year1Text")}</p>
            </div>
            <div className="main_u">
              <h1 className="font-['Cormorant_Infant'] text-[26px] lg:text-[30px] font-[400]">{t("main.year2")}</h1>
              <p className="font-['Cormorant_Infant'] text-[15px] lg:text-[16px]">{t("main.year2Text")}</p>
            </div>
          </div>
          <div className="main_t flex justify-start">
            <img src="/Frame (4).png" alt="Signature" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
