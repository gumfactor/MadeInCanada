const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const products = require("./TheCanadaList.json");  // ✅ This loads once, at startup

exports.getProducts = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      try {
        const search = (req.query.search || "").trim().toLowerCase();
        const category = (req.query.category || "").trim().toLowerCase();
  
        if (!search || search.length < 3) {
          return res.status(400).json({ error: "Search term must be at least 3 characters." });
        }
  
        const results = products.filter(p => {
          const matchesKeyword = [
            p["Product Name"],
            p["Product Category"],
            p["Ownership (Company)"],
            p["Ownership (Country)"],
            p["Manufacturing (Countries)"],
            p["Notes"]
          ].some(field => String(field || "").toLowerCase().includes(search));
  
          const matchesCategory = category
            ? (p["Product Category"] || "").toLowerCase() === category
            : true;
  
          return matchesKeyword && matchesCategory;
        });
  
        res.json(results);
      } catch (err) {
        console.error("🔥 Error fetching products:", err);
        res.status(500).json({ error: "Could not process request." });
      }
    });
  });
  
  