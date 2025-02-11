import aboutPic from "../../assets/imges/aboutus-img.webp";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="right">
        <h1>Professional Rental Transport Company in Dubai</h1>
        <p>
          Cool Freights Rental Transport guarantees to be your cool train
          deliver & logistics business partner. Whether it’s fresh products,
          preserved food, seafood & seafood, dairy goods or refreshments, our
          state-of-the-art reefer vehicles including trailers are accessible
          24/7 to meet your requirements. Refrigerated van rental is here to
          preserve both somebody & businesses if they require support in moving
          frozen chain offerings pharmaceuticals cafe, hotel, catering, and
          specific events everywhere Dubai.
        </p>
        <ul>
          <li>
            Above all, we are affordable and quality conscious having a fleet of
            more than 250 vehicles.{" "}
          </li>
          <li>
            {" "}
            Moreover, we have served Dubai for more than 20 Years and will
            continue to serve with more zeal and dedication.{" "}
          </li>
          <li>
            We are trusted partners of many large and small organizations,
            helping them transport food on time and complete preservation.
          </li>
        </ul>
      </div>
      <div className="left">
        <img src={aboutPic} alt="" width="500vw" height="400vh" />
      </div>
    </div>
  );
}

export default AboutUs;
