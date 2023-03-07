import React, { useState } from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2";
import person from "./images/person@2x.png";
import nametag from "./images/name_tag@2x.png";
import dob from "./images/cake@2x.png";
import above18 from "./images/18@2x.png";
import medication from "./images/current_medication@2x.png";
import reason from "./images/chief_complain@2x.png";
import allergy from "./images/allergy@2x.png";
import statei from "./images/state@2x.png";
import phone from "./images/phone_no@2x.png";
import upload from "./images/upload_photo@2x.png";
import add from "./images/Add@1x.png";

function App() {
  const [details, setDetails] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [date, setDate] = useState(Date.now());
  const [age, setAge] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const [grdfirstName, setGrdFirstName] = useState("");
  const [grdfirstNameError, setGrdFirstNameError] = useState("");

  const [grdlastName, setGrdLastName] = useState("");
  const [grdlastNameError, setGrdLastNameError] = useState("");

  const [visitreason, setVisitReason] = useState("");
  const [medications, setMedication] = useState("");
  const [allergies, setAllergies] = useState("");
  const [states, setStates] = useState("");
  const [image, setImage] = useState("");

  const [isDisable, setIsDisable] = useState(false);

  const firstnameValidator = (firstname) => {
    if (!firstname) {
      setFirstNameError("First name is required");
    } else if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(firstname)) {
      setFirstNameError(
        "Enter valid First name. Length must be in between 2-30 letter."
      );
    } else {
      setFirstNameError("");
    }
    return "";
  };
  const lastnameValidator = (lastname) => {
    if (!lastname) {
      setLastNameError("Last name is required");
    } else if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(lastname)) {
      setLastNameError(
        "Enter valid Last name. Length must be in between 2-30 letter."
      );
    } else {
      setLastNameError("");
    }
    return "";
  };
  const grdfirstnameValidator = (firstname) => {
    if (!firstname) {
      setGrdFirstNameError(" Gaurdian First name is required");
    } else if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(firstname)) {
      setGrdFirstNameError(
        "Enter valid First name. Length must be in between 2-30 letter."
      );
    } else {
      setGrdFirstNameError("");
    }
    return "";
  };
  const grdlastnameValidator = (lastname) => {
    if (!lastname) {
      setGrdLastNameError("Gaurdian Last name is required");
    } else if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(lastname)) {
      setGrdLastNameError(
        "Enter valid Last name. Length must be in between 2-30 letter."
      );
    } else {
      setGrdLastNameError("");
    }
    return "";
  };
  const mobileValidator = (mobilenumber) => {
    if (!mobilenumber) {
      setMobileNumberError("Mobile Number is required");
    } else if (
      !new RegExp(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/).test(
        mobilenumber
      )
    ) {
      setMobileNumberError(
        "Enter valid Mobile number. Must be of 10 digit and start with either 7 or 8 or 9."
      );
    } else {
      setMobileNumberError("");
    }
    return "";
  };
  const ageValidation = (age) => {};

  const submitHandler = async (event) => {
    console.log("event..", event);
    event.preventDefault();
    const data = [...details];
    data.push({
      firstName,
      lastName,
      mobileNumber,
      date,
      image,
      age,
      grdfirstName,
      grdlastName,
      allergies,
      states,
    });
    console.log("data..", data);
    setDetails(data);
  };
  console.log("details..", details);

  return (
    <>
      <div className="App">
        <div className="header">
          <h2> Patient Info</h2>
          <p>Waiting Room / Patient Info</p>
          <hr
            style={{
              backgroundColor: "gainsboro",
              marginBottom: "30px",
              height: "0.5px",
            }}
          />
        </div>
        <form onSubmit={submitHandler}>
          <div className="box">
            <Grid container spacing={4} columns={16}>
              <Grid xs={8}>
                <div className="inputdiv">
                  <div className="label">
                    <img src={person} alt=" " />
                    <h5>Patient First Name</h5>
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      className="input"
                      name="first_name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      onBlur={(e) => firstnameValidator(e.target.value)}
                    />
                  </div>
                  {firstNameError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {firstNameError}
                    </p>
                  )}
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv">
                  <div className="label">
                    <img src={person} alt=" " />
                    <h5>Patient Last Name</h5>
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      className="input"
                      name="last_name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      onBlur={(e) => lastnameValidator(e.target.value)}
                    />
                  </div>
                  {lastNameError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {lastNameError}
                    </p>
                  )}
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv">
                  <div className="label">
                    <img src={dob} alt=" " />
                    <h5>Patient DOB</h5>
                  </div>
                  <div className="field">
                    <input
                      type="date"
                      name="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      // onBlur={(e) => setFirstNameError(e.target.value)}
                    />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv2">
                  <div className="label2">
                    <img src={above18} alt=" " />
                    <h5>Above 18 </h5>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="yes"
                      name="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <label
                      htmlFor="yes"
                      style={{
                        marginLeft: "10px",
                        marginRight: "30px",
                        fontSize: "15px",
                      }}
                    >
                      Yes
                    </label>

                    <input
                      type="radio"
                      id="no"
                      name="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <label
                      htmlFor="no"
                      style={{
                        marginLeft: "10px",
                        marginRight: "30px",
                        fontSize: "15px",
                      }}
                    >
                      No
                    </label>
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv">
                  <div className="label">
                    <img src={nametag} alt=" " />
                    <h5>Gaurdian First Name</h5>
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      className="input"
                      name="grd_first_name"
                      value={grdfirstName}
                      onChange={(e) => setGrdFirstName(e.target.value)}
                      onBlur={(e) => grdfirstnameValidator(e.target.value)}
                    />
                  </div>
                  {grdfirstNameError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {grdfirstNameError}
                    </p>
                  )}
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv">
                  <div className="label">
                    <img src={nametag} alt=" " />
                    <h5>Gaurdian Last Name</h5>
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      className="input"
                      name="grd_last_name"
                      value={grdlastName}
                      onChange={(e) => setGrdLastName(e.target.value)}
                      onBlur={(e) => grdlastnameValidator(e.target.value)}
                    />
                  </div>
                  {grdlastNameError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {grdlastNameError}
                    </p>
                  )}
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv" style={{ height: "12vh" }}>
                  <div className="label">
                    <img src={reason} alt=" " />
                    <h5>Primary Reason For Visit</h5>
                  </div>
                  <div className="field" style={{ overflowY: "auto" }}>
                    <textarea
                      className="textarea"
                      name="reason"
                      rows="5"
                      cols="40"
                      value={visitreason}
                      onChange={(e) => setVisitReason(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv" style={{ height: "12vh" }}>
                  <div className="label">
                    <img src={medication} alt=" " />
                    <h5>Current Medications</h5>
                  </div>
                  <div className="field" style={{ overflowY: "auto" }}>
                    <textarea
                      className="textarea"
                      name="medication"
                      rows="5"
                      cols="40"
                      value={medications}
                      onChange={(e) => setMedication(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv" style={{ height: "12vh" }}>
                  <div className="label">
                    <img src={allergy} alt=" " />
                    <h5>Allergies</h5>
                  </div>
                  <div className="field" style={{ overflowY: "auto" }}>
                    <textarea
                      className="textarea"
                      name="allergies"
                      rows="5"
                      cols="36"
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv">
                  <div className="label">
                    <img src={statei} alt=" " />
                    <h5>State</h5>
                  </div>
                  <div className="field">
                    <select
                      className="select"
                      value={states}
                      onChange={(e) => {
                        console.log("ee", e.target.value);
                        setStates(e.target.value);
                      }}
                    >
                      <option key="1" value="MP" className="option">
                        Madhya Pradesh
                      </option>
                      <option key="2" value="GJ" className="option">
                        Gujarat
                      </option>
                      <option key="3" value="MU" className="option">
                        Mumbai
                      </option>
                      <option key="4" value="RJ" className="option">
                        Rajasthan
                      </option>
                    </select>
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv">
                  <div className="label">
                    <img src={phone} alt=" " />
                    <h5>Pharmacy Phone Number</h5>
                  </div>
                  <div className="field">
                    <input
                      type="number"
                      className="input"
                      name="mobile_number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      onBlur={(e) => mobileValidator(e.target.value)}
                    />
                  </div>
                  {mobileNumberError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {mobileNumberError}
                    </p>
                  )}
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="inputdiv" style={{ height: "15vh" }}>
                  <div className="label">
                    <img src={add} alt=" " />
                    <h5>Upload Photos {"(optional)"}</h5>
                  </div>
                  <div className="field">
                    <label class="custom-file-upload">
                      <input
                        type="file"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                      <img src={add} alt=" " width={30} />
                    </label>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="footer">
            <input type="submit" value="Next" className="next" />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
