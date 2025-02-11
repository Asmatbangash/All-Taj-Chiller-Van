import chillerVan from '../../../assets/imges/chiller-van1.webp'
import ContectUs from '../../Home/Dev5/ContectUs';
import ServiceCard from '../Services Cards/ServiceCard';

function ChillerVan() {
  return (
    <div>
      <div className="top">
      <h1 style={{textAlign:'center'}}>
        Looking toward a valid Chiller Van for rent organization in Dubai?
      </h1>
      <p style={{textAlign:'center'}}>
        Cool Freights Transport is a leading quality refrigerated Transportation
        company in Dubai, United Arab Emirates and giving chiller truck rental
        for frozen or other delivery. The perishable variety of things requires
        special treatment, warehouse, and freight methods.
      </p>
      </div>
         <ServiceCard />
        <div className="about-us">
          <div className="left">
            <img src={chillerVan} alt="" width='500vw' height='400vh'/>
          </div>
          <div className="right">
            <h1>Chiller Van</h1>
            <p>We are an experienced family owned business that genuinely cares for their customers and their cargo. Our knowledge and experience with technology allows us to provide best chiller, freezer on wheels solutions.</p>
            <div className="box1">
                  <b>Hygienic</b>
                  <p>Delivered in the most hygienic way from whole sellers, super markets, kitchen and catering, events and schools.</p>
            </div>
            <div className="box2">
            <b>Customer Satisfaction Guaranteed</b>
            <p>We don’t believe in one time business. We take care of our customers and make sure their satisfaction is guaranteed.</p>
            </div>
            <button className="callNow">Read More</button>
          </div>
        </div> 
        <ContectUs />
    </div>
  );
}

export default ChillerVan;
