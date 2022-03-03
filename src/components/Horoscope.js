import React, { useEffect, useState } from "react";
import "../css/horoscope.css";

const signs = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];

function Horoscope() {
  const [horoscopeData, setHoroscopeData] = useState({});

  function onSignSelected(sign) {
    fetch(
      `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`,
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "79e70be431mshf3e34fa2175c3fbp19ffbejsne84d8c803af4",
        },
      }
    )
      .then(async (response) => {
        let horoscopeSign = await response.json();
        console.log(horoscopeSign);
        setHoroscopeData(horoscopeSign);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="grid">
      {signs.map((sign) => (
        <button
          className="sign"
          key={sign}
          onClick={() => onSignSelected(sign)}
        >
          {sign}
        </button>
      ))}

      <div>
        Mood:
        {horoscopeData.mood}
      </div>
      <div>
        Color:
        {horoscopeData.color}
      </div>
      <div>
        Comp:
        {horoscopeData.compatibility}
      </div>
      <div>
        Description:
        {horoscopeData.description}
      </div>
    </div>
  );
}

export default Horoscope;


// client side routing react-router-dom tag the v5 or v6 on end on google search this goes in app.js