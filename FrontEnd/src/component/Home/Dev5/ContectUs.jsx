import './DevFive.css';

function ContectUs(){
    return(
        <div className="contact">
        <h1 style={{ textAlign: "center" }}> Contact us Today!</h1>
        <p style={{ textAlign: "center" }}>
          For the best chiller van rentals in Dubai, Abu Dhabi, and Sharjah,
          contact Al Taj Chiller Van today! Our team is ready to <br /> help you with
          all your cooling and transportation needs.
        </p>
        <form action="">
          <div className="formData">
            <div>
            <input type="text" placeholder="FirstName"/>
            <input type="text" placeholder="LastName"/>
            </div>
            <div>
            <input type="email" placeholder="email"/>
            <input type="number" placeholder="Number"/>
            </div>
            <div>
              <textarea name="" id="" placeholder="message" cols='30' rows='5'></textarea>
            </div>
            <button className="callNow">send message!</button>
          </div>
        </form>
      </div>
    )
}

export default ContectUs;