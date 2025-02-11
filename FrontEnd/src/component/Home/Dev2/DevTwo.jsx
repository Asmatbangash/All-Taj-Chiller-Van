import "./DevTwo.css";
import aboutPic from '../../../assets/imges/about-us.webp'
import foodDelivery from '../../../assets/imges/food-delivery.png'
import flowerDelivery from '../../../assets/imges/flowers-delivery.png'
import specailEvent from '../../../assets/imges/special-events.png'
import airFreight from '../../../assets/imges/air-freight.png'
import railFright from '../../../assets/imges/rail-freight.png'
import dairyProducts from '../../../assets/imges/dairy-products.png'
import PoultryProducts from '../../../assets/imges/poultry-products.png'
import goodsTransport from '../../../assets/imges/goods-transport.png'

function DevTwo() {
  let cardArr = [
  {
    icon: foodDelivery,
    title: 'Food Delivery',
    desc: 'We are an experienced family owned business that genuinely cares for their customers and their cargo. We are an experienced family owned business that genuinely cares for their customers and their cargo.',
  },
  {
    icon: flowerDelivery,
    title: 'Flowers Delivery',
    desc: 'We are an experienced family owned business that genuinely cares for their customers and their cargo. We are an experienced family owned business that genuinely cares for their customers and their cargo.',
  },
  {
    icon: specailEvent,
    title: 'Special Events',
    desc: 'We are an experienced family owned business that genuinely cares for their customers and their cargo. We are an experienced family owned business that genuinely cares for their customers and their cargo.',
  },
  {
    icon: airFreight,
    title: 'Air Freight',
    desc: 'We are an experienced family owned business that genuinely cares for their customers and their cargo. We are an experienced family owned business that genuinely cares for their customers and their cargo.',
  },
  {
    icon: railFright,
    title: 'Rail Freight',
    desc: 'We are an experienced family owned business that genuinely cares for their customers and their cargo. We are an experienced family owned business that genuinely cares for their customers and their cargo.',
  },
  {
    icon: dairyProducts,
    title: 'Dairy Products',
    desc: 'We are an experienced family owned business that genuinely cares for their customers and their cargo. We are an experienced family owned business that genuinely cares for their customers and their cargo.',
  },
  {
    icon: PoultryProducts,
    title: 'Poultry Products',
    desc: 'We are an experienced family owned business that genuinely cares for their customers and their cargo. We are an experienced family owned business that genuinely cares for their customers and their cargo.',
  },
  {
    icon: goodsTransport,
    title: 'Goods Transport',
    desc: 'We are an experienced family owned business that genuinely cares for their customers and their cargo. We are an experienced family owned business that genuinely cares for their customers and their cargo.',
  }
  ]
  return (
    <div className="mainDevTwo">
      <h2 className="Fleet">Fleet Truck And van Services</h2>
      <p className="p1">If you are interested in working with us, please get in touch</p>
      <div className="DevTwoCards">
        {cardArr.map((data) => (
      <div className="card" style={{width: '18rem', margin: '5px'}}>
        <div className="card-body">
          <h5 className="card-title text-left fw-bold"><img src={data.icon} alt="delivery picture" width='40' height='40' className="m-1" />{data.title}</h5>
          <p className="card-text text-left">
           {data.desc}
          </p>
          <hr />
          <a href="#" >
            <button className="callNow">Call Now</button>
          </a>
        </div>
      </div>
        ))}
        </div>

        <div className="about-us">
          <div className="left">
            <img src={aboutPic} alt="" width='500vw' height='400vh'/>
          </div>
          <div className="right">
            <h1>About-Us</h1>
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
    </div>
  );
}

export default DevTwo;
