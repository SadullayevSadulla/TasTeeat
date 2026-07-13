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

  <div className="flex flex-col items-center lg:flex-row gap-[24px] lg:gap-[30px] mt-[40px] lg:mt-[60px]">

  {/* Card 1 */}
  <div className="relative flex-1 h-[430px] sm:h-[380px] lg:h-[409px] bg-[#DDEFF6] overflow-hidden px-5 sm:px-[35px] pt-9 sm:pt-[30px] pb-6 sm:pb-[30px]">

    <div className="relative z-20 w-full max-w-[260px]">
      <img
        src="/Frame (12).png"
        alt=""
        className="w-[110px] sm:w-[130px] lg:w-[150px] object-contain"
      />

      <p className="mt-5 sm:mt-[35px] text-[12px] sm:text-[14px] lg:text-[15px] tracking-[3px] sm:tracking-[4px] lg:tracking-[5px] uppercase pt-2 sm:pt-[10px] font-['Josefin_Sans'] text-[#292E36]">
        50% Offer Going
      </p>

      <h2 className="mt-3 sm:mt-[18px] text-[26px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[40px] lg:leading-[48px] font-['Cormorant_Infant'] text-[#292E36]">
        {t("offer.item1Title")}
      </h2>

      <p className="mt-3 sm:mt-[15px] text-[14px] sm:text-[17px] lg:text-[20px] leading-[22px] sm:leading-[28px] lg:leading-[32px] text-[#555555] font-['Josefin_Sans']">
        {t("offer.item1Text")}
      </p>
    </div>

    <img
      src="/IMAGE (16).png"
      alt=""
      className="absolute right-2.5 sm:right-[20px] bottom-0 w-[150px] sm:w-[220px] md:w-[280px] lg:w-[360px]"
    />
  </div>

  {/* Card 2 */}
  <div className="relative flex-1 h-[430px] sm:h-[380px] lg:h-[409px] bg-[#F3F3F3] overflow-hidden px-5 sm:px-[35px] pt-9 sm:pt-[30px] pb-6 sm:pb-[30px]">

    <div className="relative z-20 w-full max-w-[260px]">
      <img
        src="/Frame (14).png"
        alt=""
        className="w-[105px] sm:w-[125px] lg:w-[145px] object-contain"
      />

      <p className="mt-5 sm:mt-[35px] text-[12px] sm:text-[14px] lg:text-[15px] tracking-[3px] sm:tracking-[4px] lg:tracking-[5px] uppercase pt-2 sm:pt-[10px] font-['Josefin_Sans'] text-[#292E36]">
        50% Offer Going
      </p>

      <h2 className="mt-3 sm:mt-[18px] text-[26px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[40px] lg:leading-[48px] font-['Cormorant_Infant'] text-[#292E36]">
        {t("offer.item2Title")}
      </h2>

      <p className="mt-3 sm:mt-[15px] text-[14px] sm:text-[17px] lg:text-[20px] leading-[22px] sm:leading-[28px] lg:leading-[32px] text-[#555555] font-['Josefin_Sans']">
        {t("offer.item2Text")}
      </p>
    </div>

    <img
      src="/IMAGE (17).png"
      alt=""
      className="absolute right-2.5 sm:right-[20px] bottom-0 w-[140px] sm:w-[210px] md:w-[270px] lg:w-[340px]"
    />
  </div>

</div>
      </div>
    </section>
  );
};

export default MainOffer;
