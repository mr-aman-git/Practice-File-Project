import express from "express";
const app = express();
app.get("/stations", (req, res) => {
  const stations = [
    { id: 1, name: "Rajiv Chowk" },
    { id: 4, name: "RK Ashram" },
    { id: 4, name: "Jhandewalan" },
    { id: 2, name: "Karol Bagh" },
    { id: 3, name: "Rajendra Place" },
    { id: 3, name: "Patel Nagar" },
    { id: 4, name: "Ramesh Nagar" },
  ];
  res.send(stations);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server at  http://localhost:${port}`);
});
