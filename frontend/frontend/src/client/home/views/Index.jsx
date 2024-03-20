import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import Slider from "./Slider";


function Index() {
  return (
    <div>
      <Slider/>
      <main className="mainPage">

       
        <div className="paragraph">
          <div className="WhyUs">Why Us?</div>
          <p className="para-content">
            You can get a quick and reliable estimate <br />
            of your home's worth in just a few clicks. Choose HomeWise for the
            wisdom and confidence you need when it comes to your home's value.
          </p>
          <br />
          <Link to="/predict" className="btn-predict">
            <div style={{ color: "aliceblue" }} className="text">
              Predict Now
            </div>
          </Link>
        </div>
      </main>

    

     
    </div>
  );
}

export default Index;
