import React, { useState } from "react";
import { Country, State } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Shipping = () => {

  const {shippingInfo}=useSelector(state=>state.cart)
  const [hno, setHno] = useState(shippingInfo.hno);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const [phoneno, setPhoneno] = useState(shippingInfo.phoneno);
  const [pincode, setPincode] = useState(shippingInfo.pincode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "addShippingInfo",
      payload: {
        hno,
        city,
        country,
        state,
        phoneno,
        pincode,
      },
    });

    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        hno,
        city,
        country,
        state,
        phoneno,
        pincode,
      })
    );

    navigate("/confirm");
  };
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>H.No.</label>
            <input
              type="text"
              placeholder="Enter House No."
              value={hno}
              onChange={(e) => setHno(e.target.value)}
              required
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option value={item.isoCode} key={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          {country && (
            <div>
              <label>State</label>

              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((item) => (
                    <option value={item.isoCode} key={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
          <div>
            <label>Pin Code</label>
            <input
              type="number"
              placeholder="Enter Pin Code."
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone No.</label>
            <input
              type="number"
              placeholder="Enter Phone No."
              value={phoneno}
              onChange={(e) => setPhoneno(e.target.value)}
              required
            />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
