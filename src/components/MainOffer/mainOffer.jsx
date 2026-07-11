import { useTranslation } from "react-i18next";

const MainOffer = () => {
  const { t } = useTranslation();
  return (
    <section id="pages" className="py-[70px] lg:py-[140px]">
      <div className="container">
        <div className="flex flex-col items-center text-center px-4">
          <img src="/Frame (10).png" alt="" className="w-[40px] lg:w-auto" />

          <h1 className="mt-5 text-[28px] sm:text-[34px] lg:text-[40px] font-['Cormorant_Infant'] text-[#292E36]">
            {t("offer.title")}
          </h1>

          <p className="mt-4 max-w-[700px] text-[16px] lg:text-[20px] leading-[26px] lg:leading-[32px] text-[#555555] font-['Josefin_Sans']">
            {t("offer.subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-[30px] mt-[40px] lg:mt-[60px]">
          <div className="relative w-full lg:w-1/2 h-[220px] sm:h-[380px] lg:h-[409px] bg-[#DDEFF6] overflow-hidden">
            <img
              src="/Frame (12).png"
              alt=""
              className="absolute left-[16px] top-[14px] sm:left-[35px] sm:top-[35px] z-20 w-[72px] "
            />
            <img
              src="/Frame (13).png"
              alt=""
              className="absolute left-[16px] top-[48px] sm:left-[35px] sm:top-[145px] w-[130px] mt-[50px]"
            />
            <div className="absolute left-[16px] bottom-[14px] sm:left-[35px] sm:bottom-[45px] z-20">
              <h1 className="text-[20px] sm:text-[32px] lg:text-[40px] text-[#292E36] font-['Cormorant_Infant']">
                {t("offer.item1Title")}
              </h1>
              <p className="mt-1 sm:mt-3 w-[150px] sm:w-[220px] lg:w-[250px] text-[12px] sm:text-[17px] lg:text-[20px] leading-[16px] sm:leading-[26px] lg:leading-[30px] text-[#555555] font-['Josefin_Sans']">
                {t("offer.item1Text")}
              </p>
            </div>
            <img
              src="/IMAGE (16).png"
              alt=""
              className="absolute right-[10px] sm:right-[20px] bottom-0 w-[48%] sm:w-[300px] lg:w-[360px]"
            />
          </div>

          {/*----*/}
          <div className="relative w-full lg:w-1/2 h-[220px] sm:h-[380px] lg:h-[409px] bg-[#F3F3F3] overflow-hidden">
            <img
              src="/Frame (14).png"
              alt=""
              className="absolute left-[16px] top-[14px] sm:left-[35px] sm:top-[35px] z-20 w-[72px]"
            />
            <img
              src="/Frame (13).png"
              alt=""
              className="absolute left-[16px] top-[48px] sm:left-[35px] sm:top-[145px] w-[130px] mt-[50px]"
            />
            <div className="absolute left-[16px] bottom-[14px] sm:left-[35px] sm:bottom-[45px] z-20">
              <h1 className="text-[20px] sm:text-[32px] lg:text-[40px] text-[#292E36] font-['Cormorant_Infant']">
                {t("offer.item2Title")}
              </h1>
              <p className="mt-1 sm:mt-3 w-[150px] sm:w-[220px] lg:w-[250px] text-[12px] sm:text-[17px] lg:text-[20px] leading-[16px] sm:leading-[26px] lg:leading-[30px] text-[#555555] font-['Josefin_Sans']">
                {t("offer.item2Text")}
              </p>
            </div>
            <img
              src="/IMAGE (17).png"
              alt=""
              className="absolute right-[10px] sm:right-[20px] bottom-0 w-[47%] sm:w-[290px] lg:w-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainOffer;
