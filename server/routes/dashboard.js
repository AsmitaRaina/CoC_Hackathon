const router = require("express").Router();
const authorize = require("../middleware/authorization");
const pool = require("../db");

// router.get("/getstudents", async (req, res) => {
//   try {
//     const user = await pool.query(
//       'SELECT * FROM "student"'
//     ); 
//     console.log(user)
//     res.json(user.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

router.get("/getstudents", async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_name FROM student WHERE user_id = $1",
      [req.user.id] 
    ); 

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

// router.get("/getstudents", async (req, res) => {
//   try {
//     const user = await pool.query(
//       'SELECT * FROM "student"'
//     ); 
//     console.log(user)
//     res.json(user.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

router.post("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_name FROM users WHERE user_id = $1",
      [req.user.id] 
    ); 
    
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

