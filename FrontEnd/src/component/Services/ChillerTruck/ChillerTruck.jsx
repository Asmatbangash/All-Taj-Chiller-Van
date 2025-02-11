import chillerTruck from "../../../assets/imges/chiller-truck1.webp";
import ContectUs from "../../Home/Dev5/ContectUs";
import ServiceCard from "../Services Cards/ServiceCard";
import '../Services.css'

function ChillerTruck() {
  return (
    <div>
      <div className="top">
      <h1 style={{ textAlign: "center" }}>
        Need Chiller Truck Rental for Frozen Food?
      </h1>
      <p style={{ textAlign: "center" }}>
        Cool Freights Transport is a leading quality refrigerated Transportation
        company in Dubai, United Arab Emirates and giving <br /> chiller truck rental
        for frozen or other delivery.
      </p>
      <p style={{ textAlign: "center" }}>
        The perishable variety of things requires special treatment, warehouse,
        and freight methods, and we manage a team of <br /> professionals to take
        charge of a comprehensive manner.
      </p>
      </div>
       <ServiceCard />
      <div className="about-us">
        <div className="left">
          <img src={chillerTruck} alt="" width="500vw" height="400vh" />
        </div>
        <div className="right">
          <h1>Chiller-Truck</h1>
          <p>
            We are an experienced family owned business that genuinely cares for
            their customers and their cargo. Our knowledge and experience with
            technology allows us to provide best chiller, freezer on wheels
            solutions.
          </p>
          <div className="box1">
            <b>Hygienic</b>
            <p>
              Delivered in the most hygienic way from whole sellers, super
              markets, kitchen and catering, events and schools.
            </p>
          </div>
          <div className="box2">
            <b>Customer Satisfaction Guaranteed</b>
            <p>
              We don’t believe in one time business. We take care of our
              customers and make sure their satisfaction is guaranteed.
            </p>
          </div>
          <button className="callNow">Read More</button>
        </div>
      </div>
      <ContectUs />
    </div>
  );
}

export default ChillerTruck;
