//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const comingOut = require("../../models/schemas/comingOut");
const auth = require("../authmiddleware");
// const seed = require("../../models/seed/comingOut.js")
///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////
// router.get("/seed", (req, res) => {
//    seed
//    res.redirect("/");
// });
//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.render("signedin/home.jsx");
});

router.get("/Forums", auth, (req, res) => {
  res.render("signedin/forums.jsx");
});


///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
