import freezerTruck from '../../../assets/imges/freezer-truck1.webp'
import ContectUs from '../../Home/Dev5/ContectUs';
import ServiceCard from '../Services Cards/ServiceCard';

function FreezerTruck() {
  return (
    <div>
      <div className="top">
      <h1 style={{textAlign:'center'}}>
      We Provide The Best Facilities Food Truck for Rent in Dubai
      </h1>
      <p style={{textAlign:'center'}}>
      While food trucks have traditionally been associated with simple fares like sandwiches, hot dogs, or ice cream, today’s food truck business has exploded into a cornucopia of gourmet treats.

While food trucks have traditionally been associated with simple fares like sandwiches, hot dogs, or ice cream, today’s food truck business has exploded into a cornucopia of gourmet treats.
      </p>
      </div>
         <ServiceCard />

        <div className="about-us">
          <div className="left">
            <img src={freezerTruck} alt="" width='500vw' height='400vh'/>
          </div>
          <div className="right">
            <h1>Freezer Truck</h1>
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

export default FreezerTruck;
