import meat from "../../../assets/imges/meat.webp";
import vegetables from "../../../assets/imges/vegetables.webp";
import fruits from "../../../assets/imges/fruits.webp";
import "./DevFive.css";
import ContectUs from "./ContectUs";

function DevFive() {
  let eatProductDetail = [
    {
      img: meat,
      title: "Meat",
      desc: "We are an experienced family owned business that genuinely cares for their customers and their cargo.",
    },
    {
      img: vegetables,
      title: "Vegetables",
      desc: "We are an experienced family owned business that genuinely cares for their customers and their cargo.",
    },
    {
      img: fruits,
      title: "Fruits",
      desc: "We are an experienced family owned business that genuinely cares for their customers and their cargo.",
    },
  ];
  return (
    <div className="mainDevFive">
      <h2 style={{ textAlign: "center" }}>Best Chiller Transport Dubai</h2>
      <p style={{ textAlign: "center" }}>
        Top chiller trucks and vans on daily, weekly and monthly basis. trusted
        and best refrigerated truck service providers in Dubai & uae
      </p>
      <div className="eatProduct">
        {eatProductDetail.map((card) => (
          <div className="card" style={{ width: "20rem", margin: "10px 15px" }}>
            <img src={card.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.desc}</p>
              <hr />
              <a href="#">
                <button className="callNow">Call Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
     <ContectUs />
    </div>
  );
}

export default DevFive;
