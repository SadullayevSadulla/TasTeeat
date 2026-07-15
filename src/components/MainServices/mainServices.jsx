import { useTranslation } from "react-i18next";

const MainServices = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#292E36] py-[60px] lg:py-[120px]">
      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:items-center justify-between gap-[50px] xl:gap-[80px]">
        <div className="max-w-[360px] text-center xl:text-left flex flex-col items-center xl:items-start">
          <img src="/Frame (15).png" alt="" className="w-[36px]" />
          <h1 className="mt-6 text-[30px] sm:text-[34px] lg:text-[40px] font-['Cormorant_Infant'] font-normal text-white">
            {t("services.title")}
          </h1>
          <p className="mt-5 text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-white font-['Josefin_Sans'] max-w-[438px]">
            {t("services.text")}
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-[20px] xl:flex-row xl:flex-wrap xl:w-auto xl:items-start xl:justify-start">
          <div className="aspect-square w-full sm:w-[180px] lg:w-[255px] border border-[#4A4F57] flex items-center justify-center p-[8px] sm:p-[10px] ">
            <div className="w-full h-full border border-[#4A4F57]  flex flex-col items-center justify-center px-[4px] xl:w-full">
              <img src="/Vector (2).png" alt="" className="mb-2 sm:mb-4 lg:mb-6 w-[20px] sm:w-[26px] lg:w-auto" />
              <h1 className="text-white text-[13px] sm:text-[17px] lg:text-[25px] font-[400] font-normal font-['Cormorant_Infant'] text-center">
                {t("services.service1")}
              </h1>
            </div>
          </div>

          <div className="aspect-square w-full sm:w-[180px] lg:w-[255px] border border-[#4A4F57] flex items-center justify-center p-[8px] sm:p-[10px]">
            <div className="w-full h-full border border-[#4A4F57] flex flex-col items-center justify-center px-[4px]">
              <img src="/IMAGE (22).png" alt="" className="mb-2 sm:mb-4 lg:mb-6 w-[20px] sm:w-[26px] lg:w-auto" />
              <h1 className="text-white text-[13px] sm:text-[17px] lg:text-[25px] font-[400] font-normal font-['Cormorant_Infant'] text-center">
                {t("services.service2")}
              </h1>
            </div>
          </div>

          <div className="aspect-square w-full sm:w-[180px] lg:w-[255px] border border-[#4A4F57] flex items-center justify-center p-[8px] sm:p-[10px]">
            <div className="w-full h-full border border-[#4A4F57] flex flex-col items-center justify-center px-[4px]">
              <img src="/Vector (3).png" alt="" className="mb-2 sm:mb-4 lg:mb-6 w-[20px] sm:w-[26px] lg:w-auto" />
              <h1 className="text-white text-[13px] sm:text-[17px] lg:text-[25px] font-[400] font-normal font-['Cormorant_Infant'] text-center">
                {t("services.service3")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServices;