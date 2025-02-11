import "./DevThree.css";
import chillerTruck from "../../../assets/imges/chiller-truck1.webp";
import chillerVan from "../../../assets/imges/chiller-van1.webp";
import freezerTruck from "../../../assets/imges/freezer-truck1.webp";
import freezerVan from "../../../assets/imges/freezer-van1.webp";
import highRoofVan from "../../../assets/imges/high-roof-van1.webp";
import refrigeratedTruck from "../../../assets/imges/refrigerated-truck1.webp";

function DevThree() {
  let carDetail = [
    {
      img: chillerTruck,
      title: "Chiller Truck",
      desc: "Our chiller trucks are suitable to transport food products and other products that needs to be transported at certain temperature. As one of the most professional chiller truck rental companies in Dubai, we guarantee that our chiller trucks are fresh.",
    },
    {
      img: chillerVan,
      title: "Chiller Van",
      desc: "Al Taj Chiller Van is a services provider of chiller van services of high-quality that will suit the cooling needs of your products during transportation. Hire our effective and punctual chiller vans for your safe and efficient deliveries.",
    },
    {
      img: freezerTruck,
      title: "Freezer Truck",
      desc: "Store your products in our Freezer Trucks which are superior in their performance. If you are in need of a freezer for food transportations over long distances then the freezer trucks for rent in Dubai are perfect for you.",
    },
    {
      img: freezerVan,
      title: "Freezer Van",
      desc: "Bring the ultimate convenience to transport your bulk of frozen foods with our modern freezer vans for hire. Our freezer van rentals in Dubai may help you organize and store your perishables for the best temperature.",
    },
    {
      img: highRoofVan,
      title: "High Roof Van",
      desc: "High roof vans are also – these are our large vans with additional height for oversized or bulky conveyances. High roof vans in Dubai for safe transporting of goods; hire ours today.",
    },
    {
      img: refrigeratedTruck,
      title: "Refrigerated Truck",
      desc: "The refrigerated trucks that belong to Al Taj enables the transfer of perishable food and other products at ideal temperatures. Our refrigerated truck rentals in Dubai are meant for clients that require secure cold storage transport solutions.",
    },
  ];
  return (
    <div classNameName="mainDevThree">
      <h2 style={{textAlign:'center'}}>Years Of Experience in Rental Vehicle</h2>
      <p style={{textAlign:'center'}}>
        We are an experienced family owned business that genuinely cares for
        their customers & their cargo. Our <br />
        knowledge and experience with technology allows us to provide best
        chiller, freezer on wheels solutions.
      </p>
      <div className="carsCardDetail">
      {carDetail.map((card) => (
        <div className="card" style={{ width: "20rem", margin:'10px 15px' }}>
          <img src={card.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.desc}</p>
            <hr />
            <a href="#">
              <button className="callNow">Read More</button>
            </a>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default DevThree;
