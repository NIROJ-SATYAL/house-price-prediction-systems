import React, { useState } from "react";
import axios from "axios";
import "./search.css";
import validate from "utils/validate";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "store/context/UserContext";
import { FaInfoCircle } from "react-icons/fa";

function Predict() {
  const [tooltipMessage1, setTooltipMessage1] = useState("");
  const [tooltipMessage2, setTooltipMessage2] = useState("");
  const [tooltipMessage3, setTooltipMessage3] = useState("");
  const [tooltipMessage4, setTooltipMessage4] = useState("");
  const [tooltipMessage5, setTooltipMessage5] = useState("");
  const [tooltipMessage6, setTooltipMessage6] = useState("");
  const [tooltipMessage7, setTooltipMessage7] = useState("");
  const [tooltipMessage8, setTooltipMessage8] = useState("");
  const [tooltipMessage9, setTooltipMessage9] = useState("");
  const [tooltipMessage10, setTooltipMessage10] = useState("");
  const [tooltipMessage11, setTooltipMessage11] = useState("");
  const [tooltipMessage12, setTooltipMessage12] = useState("");
  const [tooltipMessage13, setTooltipMessage13] = useState("");

  const [formData, setFormData] = useState({
    // MSSubClass:"150",
    MSZoning: "",
    LotArea: "",
    Street: "",
    LandSlope: "",
    BldgType: "",
    OverallQual: "",
    OverallCond: "",
    RoofStyle: "",
    BedroomAbvGr: "",
    KitchenQual: "",
    TotRmsAbvGrd: "",
    SaleType: "",
  });
  const { user } = useContext(UserContext);
  const [predictedPrice, setPredictedPrice] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleHover = (field, message) => {
     if (field === "MSZoning") {
      setTooltipMessage2(message);
    } else if (field === "LotArea") {
      setTooltipMessage3(message);
    } else if (field === "Street") {
      setTooltipMessage4(message);
    } else if (field === "LandSlope") {
      setTooltipMessage5(message);
    } else if (field === "BldgType") {
      setTooltipMessage6(message);
    } else if (field === "OverallQual") {
      setTooltipMessage7(message);
    } else if (field === "OverallCond") {
      setTooltipMessage8(message);
    } else if (field === "RoofStyle") {
      setTooltipMessage9(message);
    } else if (field === "BedroomAbvGr") {
      setTooltipMessage10(message);
    } else if (field === "KitchenQual") {
      setTooltipMessage11(message);
    } else if (field === "TotRmsAbvGrd") {
      setTooltipMessage12(message);
    } else if (field === "SaleType") {
      setTooltipMessage13(message);
    }
  };
  const handleLeave = (field) => {
    if (field === "MSZoning") {
      setTooltipMessage2("");
    } else if (field === "LotArea") {
      setTooltipMessage3("");
    } else if (field === "Street") {
      setTooltipMessage4("");
    } else if (field === "LandSlope") {
      setTooltipMessage5("");
    } else if (field === "BldgType") {
      setTooltipMessage6("");
    } else if (field === "OverallQual") {
      setTooltipMessage7("");
    } else if (field === "OverallCond") {
      setTooltipMessage8("");
    } else if (field === "RoofStyle") {
      setTooltipMessage9("");
    } else if (field === "BedroomAbvGr") {
      setTooltipMessage10("");
    } else if (field === "KitchenQual") {
      setTooltipMessage11("");
    } else if (field === "TotRmsAbvGrd") {
      setTooltipMessage12("");
    } else if (field === "SaleType") {
      setTooltipMessage13("");
    }
  };

  const handleSubmit = async (e) => {
   
   
    e.preventDefault();
    // Validate the form data before submitting
    const errors = validate(formData);
    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        console.log("Sending data to backend:", formData);
        console.log("hi")
        const response = await axios.post(
          "http://localhost:3000/api/house/predict",
          formData
        );
        console.log(response.data)
        const predictedPrice = response.data.predictedPrice;
        setPredictedPrice(predictedPrice);
        console.log(predictedPrice)

        // Send predicted price and userId to backend
        const data = {
          predictedPrice,
          userId: user._id, // or user._id, depending on how you store the userId
        };
        await axios.post("http://localhost:3000/api/house/prediction", data);
      } catch (error) {
        console.error("Error making request to the backend:", error);
      }
    }
  };

  if (user?.role == "user") {
    return (
      <div className="card">
        <div className="card-body  d-flex justify-content-center">
          <div className="col-md-6 p_form">
            <form className="predict_form" >
              {/* <div className="form-group">
                <label>
                  MsSubClass
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "MSSubClass",
                        "The type of building (Enter value ranges from 1-200)"
                      )
                    }
                    onMouseLeave={() => handleLeave("MSSubClass")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage1 && (
                  <div className="description">{tooltipMessage1}</div>
                )}
               <select
                  name="MSSubClass"
                  value={formData.MSSubClass}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select</option>

                  <option value="20">One-story houses built in 1946 or later with various styles available.</option>
                  <option value="30">One-story houses built before 1945</option>
                  <option value="40">One-story houses with finished attic space, regardless of age.</option>
                  <option value="45">One-and-a-half-story houses with an unfinished upper level, regardless of age.</option>
                  <option value="50">One-and-a-half-story houses with a finished upper level, regardless of age.</option>





                  <option value="60">Two-story houses built in 1946 or later.</option>
                  <option value="70">Two-story houses built before 1945</option>
                  <option value="75">Two-and-a-half-story houses of any age</option>
                  <option value="80">Split or multi-level houses.</option>
                  <option value="85">Houses with a split foyer entrance.</option>



                  <option value="90">Duplexes, which are two-family homes of any style or age.</option>
                  <option value="120">One-story houses in planned unit developments (PUDs) built in 1946 or later.</option>
                  <option value="150">One-and-a-half-story houses in planned unit developments (PUDs) of any age</option>
                  <option value="160">Two-story houses in planned unit developments (PUDs) built in 1946 or later.</option>
                  <option value="180">Planned unit developments (PUDs) with multiple levels, including split-level or split-foyer designs</option>


                  <option value="190">Houses converted into two-family homes of any style or age</option>






                  
                </select>
                {validationErrors.MSSubClass && (
                  <div className="error">{validationErrors.MSSubClass}</div>
                )}
              </div> */}

              <div className="form-group">
                <label>
                  Zoning Classification
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "MSZoning",
                        "The type of zoning classification assigned to the property (e.g., residential, commercial, industrial, etc.)"
                      )
                    }
                    onMouseLeave={() => handleLeave("MSZoning")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage2 && (
                  <div className="description">{tooltipMessage2}</div>
                )}
                <select
                  name="MSZoning"
                  value={formData.MSZoning}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select</option>

                  <option value="0">C (Commercial and Residential)</option>
                  <option value="1">FV(Farm and Village)</option>
                  <option value="2">RH(High-Density Residential)</option>
                  <option value="3">RL(Low-Density Residential)</option>
                  <option value="4">RM(Medium-Density Residential)</option>
                </select>
                {validationErrors.MSZoning && (
                  <div className="error">{validationErrors.MSZoning}</div>
                )}
              </div>

              <div className="form-group">
                <label>
                  Lot Size:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "LotArea",
                        "The size of the lot on which the property is built, in square feet"
                      )
                    }
                    onMouseLeave={() => handleLeave("LotArea")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage3 && (
                  <div className="description">{tooltipMessage3}</div>
                )}

                <input
                  type="number"
                  name="LotArea"
                  value={formData.LotArea}
                  onChange={handleChange}
                  className="form-control"
                />
                {validationErrors.LotArea && (
                  <div className="error">{validationErrors.LotArea}</div>
                )}
              </div>

              <div className="form-group ">
                <label>
                  Type of Road Access:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "Street",
                        "The type of road that provides access to the property (e.g., paved, gravel)"
                      )
                    }
                    onMouseLeave={() => handleLeave("Street")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage4 && (
                  <div className="description">{tooltipMessage4}</div>
                )}

                <select
                  name="Street"
                  value={formData.Street}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select</option>
                  <option value="1">Pave</option>
                  <option value="0">Gravel</option>
                </select>
                {validationErrors.Street && (
                  <div className="error">{validationErrors.Street}</div>
                )}
              </div>

              <div className="form-group ">
                <label>
                  LandSlope:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "LandSlope",
                        "The steepness of the land on which the property is built (e.g.,gentle slope, Moderate slope)"
                      )
                    }
                    onMouseLeave={() => handleLeave("LandSlope")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage5 && (
                  <div className="description">{tooltipMessage5}</div>
                )}
                <select
                  name="LandSlope"
                  value={formData.LandSlope}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select</option>
                  <option value="0">Gentle Slope</option>
                  <option value="1">Moderate Slope</option>
                  <option value="2">Severe Slope</option>
                </select>
                {validationErrors.LandSlope && (
                  <div className="error">{validationErrors.LandSlope}</div>
                )}
              </div>
              <div className="form-group">
                <label>
                  Building Type:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "BldgType",
                        "The type of dwelling (e.g., single-family house, townhouse, duplex, etc.)"
                      )
                    }
                    onMouseLeave={() => handleLeave("BldgType")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage6 && (
                  <div className="description">{tooltipMessage6}</div>
                )}
                <select
                  name="BldgType"
                  value={formData.BldgType}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select</option>
                  <option value="0">Single-Family House</option>
                  <option value="1">Two-Family Conversion</option>
                  <option value="2">Duplex</option>
                  <option value="3">Townhouse End Unit</option>
                  <option value="4">Townhouse Inside Unit</option>
                </select>
                {validationErrors.BldgType && (
                  <div className="error">{validationErrors.BldgType}</div>
                )}
              </div>

              <div className="form-group ">
                <label>
                  Material and Finish Quality:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "OverallQual",
                        "An overall rating of the quality of the materials and finishes used in the construction of the property(1-10)"
                      )
                    }
                    onMouseLeave={() => handleLeave("OverallQual")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage7 && (
                  <div className="description">{tooltipMessage7}</div>
                )}

                <input
                  type="number"
                  name="OverallQual"
                  value={formData.OverallQual}
                  onChange={handleChange}
                  className="form-control"
                />
                {validationErrors.OverallQual && (
                  <div className="error">{validationErrors.OverallQual}</div>
                )}
              </div>

              <div className="form-group ">
                <label>
                  Property Condition:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "OverallCond",
                        "An overall rating of the condition of the property(1-9)"
                      )
                    }
                    onMouseLeave={() => handleLeave("OverallCond")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage8 && (
                  <div className="description">{tooltipMessage8}</div>
                )}
                <input
                  type="number"
                  name="OverallCond"
                  value={formData.OverallCond}
                  onChange={handleChange}
                  className="form-control"
                />
                {validationErrors.OverallCond && (
                  <div className="error">{validationErrors.OverallCond}</div>
                )}
              </div>

              <div className="form-group ">
                <label>
                  Roof Type:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "RoofStyle",
                        "The style of the roof (e.g., gable, hip, flat)"
                      )
                    }
                    onMouseLeave={() => handleLeave("RoofStyle")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage9 && (
                  <div className="description">{tooltipMessage9}</div>
                )}
                <select
                  name="RoofStyle"
                  value={formData.RoofStyle}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="0">Flat(Horizontal roof)</option>
                  <option value="1">Gable(Triangle roof)</option>
                  <option value="2">Gambrel(Curved roof)</option>
                  <option value="3">Hip(Four-sided roof)</option>
                  <option value="4">Mansard(Steep roof)</option>
                  <option value="5">Shed(Slanted roof)</option>
                </select>
                {validationErrors.RoofStyle && (
                  <div className="error">{validationErrors.RoofStyle}</div>
                )}
              </div>

              <div className="form-group ">
                <label>
                  Number of Bedrooms:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "BedroomAbvGr",
                        "The number of bedrooms located above the basement level"
                      )
                    }
                    onMouseLeave={() => handleLeave("BedroomAbvGr")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage10 && (
                  <div className="description">{tooltipMessage10}</div>
                )}
                <select
                  name="BedroomAbvGr"
                  value={formData.BedroomAbvGr}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">8</option>
                </select>
                {validationErrors.BedroomAbvGr && (
                  <div className="error">{validationErrors.BedroomAbvGr}</div>
                )}
              </div>

              <div className="form-group ">
                <label>
                  Kitchen Quality:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "KitchenQual",
                        "An overall rating of the quality of the kitchen"
                      )
                    }
                    onMouseLeave={() => handleLeave("KitchenQual")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage11 && (
                  <div className="description">{tooltipMessage11}</div>
                )}
                <select
                  name="KitchenQual"
                  value={formData.KitchenQual}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="0">Excellent</option>
                  <option value="1">Fair</option>
                  <option value="2">Good</option>
                  <option value="3">Typical/Average</option>
                </select>
                {validationErrors.KitchenQual && (
                  <div className="error">{validationErrors.KitchenQual}</div>
                )}
              </div>

              <div className="form-group ">
                <label>
                  Number of Rooms:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "TotRmsAbvGrd",
                        "The total number of rooms located above ground level, not including bathrooms"
                      )
                    }
                    onMouseLeave={() => handleLeave("TotRmsAbvGrd")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage12 && (
                  <div className="description">{tooltipMessage12}</div>
                )}
                <select
                  name="TotRmsAbvGrd"
                  value={formData.TotRmsAbvGrd}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">14</option>
                </select>
                {validationErrors.TotRmsAbvGrd && (
                  <div className="error">{validationErrors.TotRmsAbvGrd}</div>
                )}
              </div>

              <div className="form-group ">
                <label>
                  SaleType:
                  <span
                    className="info-icon"
                    onMouseEnter={() =>
                      handleHover(
                        "SaleType",
                        "The type of transaction or sale that was made for the property, such as a conventional sale, a foreclosure, a short sale, or a sale between family members."
                      )
                    }
                    onMouseLeave={() => handleLeave("SaleType")}
                  >
                    <FaInfoCircle />
                  </span>
                </label>
                {tooltipMessage13 && (
                  <div className="description">{tooltipMessage13}</div>
                )}
                <select
                  name="SaleType"
                  value={formData.SaleType}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="0">COD(Court Officer Deed/Estate)</option>
                  <option value="1">CWD(Warranty Deed - Cash)</option>
                  <option value="2">
                    Con(Contract 15% Down payment regular terms)
                  </option>
                  <option value="3">ConLD(Contract Low Down)</option>
                  <option value="4">ConLI(Contract Low Interest)</option>
                  <option value="5">
                    ConLW(Contract Low Down payment and low interest)
                  </option>
                  <option value="6">New(Home just constructed and sold)</option>
                  <option value="7">Oth(Other)</option>
                  <option value="8">WD(Warranty Deed - Conventional)</option>
                </select>
                {validationErrors.SaleType && (
                  <div className="error">{validationErrors.SaleType}</div>
                )}
              </div>
              <hr />
              <button type="submit " class="btn_predict " onClick={handleSubmit} name="submit ">
                Predict Price
              </button>
            </form>
            <br />{" "}
            {predictedPrice && (
              <div className="result">
                <h3>Predicted Price : ${predictedPrice}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
} // Add a closing curly brace for the App function here

export default Predict;