//const fetch = require("node-fetch");
module.exports = async (key, city) => {
  let url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${key}&locationName=${encodeURI(city)}`;
  let response = await fetch(url);
  let data = await response.json();
  let { weatherElement } = data.records.location[0];
  let [Wx, PoP, MinT, CI, MaxT] = weatherElement.map((i) => {
    return i.time[0].parameter.parameterName;
  });
  return {
    city,
    degree: {
      min: MinT,
      max: MaxT,
    },
    weather: Wx,
    feeling: CI,
    chance: PoP,
  };
};
