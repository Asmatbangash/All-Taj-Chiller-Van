import SafeParking from '../../../assets/imges/safe-parking.png'
import QualityService from '../../../assets/imges/quality-service.png'
import CleanVehicle from '../../../assets/imges/clean-vehicle.png'
import FastestDelivery from '../../../assets/imges/fastest-delivery.png'

function ServiceCard(){
    let cardArr = [
        {
          icon: SafeParking,
          title: "Safe Parking",
          desc: "We can deliver your products anywhere in Dubai, Sharjah, abu Dhabi, and A1 ain.",
        },
        {
          icon: QualityService,
          title: "Quality Service",
          desc: "Advanced cooling system, so it can keep any sort of foods, items, products.",
        },
        {
          icon: CleanVehicle,
          title: "Clearn Vehicle",
          desc: "Delivery requires a room at the cold feature while on the Movement.",
        },
        {
          icon: FastestDelivery,
          title: "Fastest Delivery",
          desc: "Our transport speedy and reliable delivery give them Best Possible service.",
        },
      ];
    return(
        <div className="DevTwoCards">
        {cardArr.map((data) => (
          <div className="card" style={{ width: "18rem", height:'12rem', margin: "5px" }}>
            <div className="card-body">
              <h5 className="card-title text-left fw-bold"><img src={data.icon} alt="" width='40' height='40' className='m-2' />{data.title}</h5>
              <hr />
              <p className="card-text text-left">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    )
}

export default ServiceCard;