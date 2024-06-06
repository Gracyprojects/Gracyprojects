const router = require("express").Router();
const { readFileSync } = require("fs");
const fs = require("fs");


router.post("/test", function (req, res) {
  return res.json({ message: "success" });
});

router.get("/read/destinations", function (req, res) {
  const data = readFileSync(
    "C:/Users/Grace/Desktop/travel_agency/routes/test.json"
  );
  return res.json({ message: "success", data: JSON.parse(data).destinations });
});

router.get("/get/searched_destinations/:id", function (req, res) {
  const data = readFileSync(
    "C:/Users/Grace/Desktop/travel_agency/routes/test.json"
  );

  let processed_data = JSON.parse(data).destinations.filter((d) => {
    return (
      d.destination_city.includes(req.params.id) ||
      d.origin_city.includes(req.params.id) ||
      d.airline.includes(req.params.id) ||
      d.ticket_price.includes(req.params.id)
    );
  });

  return res.json({
    message: "success",
    data: processed_data,
  });
});

router.get("/book_destination/:id", function (req, res) {
  const data = readFileSync(
    "C:/Users/Grace/Desktop/travel_agency/routes/test.json"
  );

  let processed_data = JSON.parse(data).destinations.filter((d) => {
    return (
      d.destination_city.includes(req.params.id) ||
      d.origin_city.includes(req.params.id) ||
      d.airline.includes(req.params.id) ||
      d.ticket_price.includes(req.params.id)
    );
  });

  processed_data[0].available_seats = processed_data[0].available_seats - 1;

  let compiled_data = JSON.parse(data).destinations.filter((d) => {
    return d.destination_city != processed_data[0].destination_city;
  });

  let final = compiled_data.concat(processed_data);

  const jsonData = JSON.stringify({ destinations: final }, null, 2);
  fs.writeFileSync(
    "C:/Users/Grace/Desktop/travel_agency/routes/test.json",
    jsonData
  );
  return res.json({
    message: "success",

    data: final,
  });
});

// get map

router.get("/callmap", function (req, res) {});

module.exports = router;
