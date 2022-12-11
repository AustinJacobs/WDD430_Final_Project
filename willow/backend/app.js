const express = require("express");
const bodyParser = require("body-parser");

const House = require("../backend/models/house");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

app.post("/houses", (req, res, next) => {
  const house = new House({
    // id: req.body.id,
    // price: req.body.price,
    // listDate: req.body.listDate,
    // address: req.body.address,
    // residenceType: req.body.residenceType,
    // yearBuilt: req.body.yearBuilt,
    // sqFeet: req.body.sqFeet,
    // pricePerSqFeet: req.body.pricePerSqFeet,
    // availability: req.body.availability,
    // propertyDescription: req.body.propertyDescription,
    // lengthTimeListed: req.body.lengthTimeListed,
    // url: req.body.url,

    id: "sdfa324ewfg",
    price: "$100,000",
    listDate: "11-25-1997",
    address: "6339 N 2nd St Tetonia, Idaho 83452",
    residenceType: "Single Family Dwelling",
    yearBuilt: "1997",
    sqFeet: "3,097",
    pricePerSqFeet: "$188",
    availability: "Yes",
    propertyDescription: "This is a really nice house.",
    lengthTimeListed: "200",
    url: "https://www.zillow.com/homedetails/4415-Greenwillow-Ln-Idaho-Falls-ID-83401/2140366302_zpid/",
  });
  console.log(house);
  res.status(201).json({
    message: "House added!",
  });

  // const maxHouseId = sequenceGenerator.nextId("houses");

  // const house = new House({
  //   id: maxHouseId,
  //   name: req.body.name,
  //   description: req.body.description,
  //   url: req.body.url,
  // });
  // house
  //   .save()
  //   .then((createdHouse) => {
  //     res.status(201).json({
  //       message: "House added successfully.",
  //       house: createdHouse,
  //     });
  //   })
  //   .catch((err) => {
  //     res.status(500).json({
  //       message: "There was a problem creating the document.",
  //       error: err,
  //     });
  //   });
});

app.get("/houses", (req, res, next) => {
  const houses = [
    {
      id: "sdfaerf786",
      price: "$500,000",
      listDate: "11-25-1997",
      address: "6339 N 2nd St Tetonia, Idaho 83452",
      residenceType: "Single Family Dwelling",
      yearBuilt: "1997",
      sqFeet: "3,097",
      pricePerSqFeet: "$188",
      availability: "Yes",
      propertyDescription: "This is a really nice house.",
      lengthTimeListed: "200",
      url: "https://www.zillow.com/homedetails/4415-Greenwillow-Ln-Idaho-Falls-ID-83401/2140366302_zpid/",
    },
    {
      id: "sdfa2342",
      price: "$800,000",
      listDate: "11-25-1997",
      address: "6339 N 2nd St Tetonia, Idaho 83452",
      residenceType: "Single Family Dwelling",
      yearBuilt: "1997",
      sqFeet: "3,097",
      pricePerSqFeet: "$188",
      availability: "Yes",
      propertyDescription: "I love this place.",
      lengthTimeListed: "200",
      url: "https://www.zillow.com/homedetails/4415-Greenwillow-Ln-Idaho-Falls-ID-83401/2140366302_zpid/",
    },
  ];
  res.status(200).json({
    message: "Houses fetched successfully!",
    houses: houses,
  });
});

module.exports = app;
