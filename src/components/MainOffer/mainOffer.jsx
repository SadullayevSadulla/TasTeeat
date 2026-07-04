const MainOffer = () => {
    return (
        <section>
            <div className="mainOffer container">
                <div className="mainOffer_t">
                    <div className="mainOffer_img">
                        <img src="/Frame (10).png" alt="" className="flex align-center mt-[140px]" />
                    </div>
                    <h1>Our Offer dishes</h1>
                    <p>Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now the dishes are in offers use it based on hunger.</p>
                </div>
                <div className="mainOffer_b">
                    <div className="mainOffer_card">
                        <div className="card_img">
                            <img src="/Frame (12).png" alt="" />
                        </div>
                        <img src="/Frame (13).png" alt="" />
                        <div className="mainOffer_text">
                            <h1>Chicken Burger</h1>
                            <p>Chicken burger with the tasty toppings and leaves.</p>
                        </div>
                        <div className="mainOffer_right_im">
                            <img src="/IMAGE (16).png" alt="" />
                        </div>
                    </div>
                    {/* ----- */}
                    <div className="mainOffer_card">
                        <div className="card_img">
                            <img src="/Frame (14).png" alt="" />
                        </div>
                        <img src="/Frame (13).png" alt="" />
                        <div className="mainOffer_text">
                            <h1>Chicken Pizza</h1>
                            <p>Pizza with multiple flavor and the toping are mixed.</p>
                        </div>
                        <div className="mainOffer_right_im">
                            <img src="/IMAGE (17).png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainOffer;