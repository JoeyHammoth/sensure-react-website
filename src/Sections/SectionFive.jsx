import "./SectionFive.css";

const SectionFive = function () {
    return (
        <div className="section-five">
            <div className="section-five-title">
                Join in - subscribe to receive updates
            </div>
            <div className="section-five-subtitle">
                We want to hear from you! If you’re wanting to know more just fill in the form.
            </div>
            <div className="section-five-content">
                <div className="section-five-left">
                    <div className="section-five-name">
                        Name:
                        <input type={"text"} placeholder={"John Smith"} />
                    </div>
                    <div className="section-five-org">
                        Organisation:
                        <input type={"text"} placeholder={"ABC Inc."} />
                    </div>
                    <div className="section-five-email">
                        Email:
                        <input type={"text"} placeholder={"Jsmith@example.com"} />
                    </div>
                    <div className="section-five-phone">
                        Phone:
                        <input type={"text"} placeholder={"+6123456789"} />
                    </div>
                    <div className="section-five-comm">
                        Comments:
                        <input type={"text"} placeholder={"I love sensure!"} />
                    </div>
                </div>
                <div className="section-five-right">
                    <img src="/public/Images/img2.jpg" alt="books" />
                </div>
            </div>
        </div>
    );
}

export default SectionFive;