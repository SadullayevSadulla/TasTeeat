const Main = () => {
  return (
    <main className="container">
      <div className="main_t flex items-center justify-between mt-[100px]">
        <div className="main_card flex items-center gap-[20px]">
          <div className="card_img">
            <img src="/Frame (1).png" alt="Locate Us" />
          </div>

          <div className="card_t flex flex-col">
            <h1 className="font-['Cormorant_Infant'] text-[30px] font-[400]">Locate Us</h1>
            <p className="font-['Cormorant_Infant'] ">Riverside 25, San Diego, California</p>
          </div>
        </div>

        <div className="main_card flex items-center gap-[20px]">
          <div className="card_img">
            <img src="/Frame (2).png" alt="Open Hours" />
          </div>

          <div className="card_t flex flex-col">
            <h1 className="font-['Cormorant_Infant'] text-[30px] font-[400]">Open Hours</h1>
            <p className="font-['Cormorant_Infant'] ">Mon To Fri 9:00 AM - 9:00 PM</p>
          </div>
        </div>

        <div className="main_card flex items-center gap-[20px]">
          <div className="card_img">
            <img src="/Frame (3).png" alt="Reservation" />
          </div>

          <div className="card_t flex flex-col">
            <h1 className="font-['Cormorant_Infant'] text-[30px] font-[400]">Reservation</h1>
            <p className="text-[20px] font-[400]  font-['Cormorant_Infant']">restaurantate@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="main_b mt-[84px] flex items-center justify-between gap-[50px]">
        <div className="main_img">
            <img src="/IMAGE (3).png" alt="Main Image" className="w-[743px] h-[519px] object-cover" />
        </div>
        <div className="main_tt">
            <div className="main_hp">
                <h1 className="font-['Cormorant_Infant'] text-[40px] font-[400]">The Delicious Story</h1>
                <p className="font-['Cormorant_Infant'] max-w-[559px]">The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.</p>
            </div>
            <div className="main_o flex items-center gap-[50px] mt-[30px] mb-[30px]">
                <div className="main_u">
                    <h1 className="font-['Cormorant_Infant'] text-[30px] font-[400]">2018</h1>
                    <p className="font-['Cormorant_Infant'] ">Plan for this restaurant to deliver healthy food.</p>
                </div>
                <div className="main_u">
                    <h1 className="font-['Cormorant_Infant'] text-[30px] font-[400]">2022</h1>
                    <p className="font-['Cormorant_Infant'] ">Happily in the fourth year by fulfill the motto.</p>
                </div>
            </div>
            <div className="main_t">
                <img src="/Frame (4).png" alt="Signature" />
            </div>
        </div>
      </div>
    </main>
  );
};

export default Main;