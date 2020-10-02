//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const session = require("express-session");
const comingOut = require("../../models/schemas/comingOut.js");
const closetedIn = require("../../models/schemas/closetedIn.js");
const auth = require("../authmiddleware");
//const seed = require("../../models/seed/comingOut.js")
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

//Forum Page
router.get("/forum", auth, (req, res) => {
  comingOut.find({}, (error, comingout) => {
    closetedIn.find({}, (error, closetedin) => {
      res.render("signedin/forums.jsx", {comingout,closetedin});
    })
});
})

//Forum Create Page
router.get("/forum/new/", auth, (req, res) => {
  res.render("signedin/create.jsx");

});
router.post("/forum", auth, (req, res) => {
  if(req.body.forumType == "comingOut") {
      console.log(req.body)
      req.body.user = req.session.username
      comingOut.create(req.body, (error, newForum) => {
      res.redirect("/forum"); })} 
  else {
    res.redirect("/forum")
  }
})

//Show coming out Forum Page
router.get("/forum/co/:id", auth, (req, res) => {
  comingOut.findById(req.params.id, (error, individual) => {
  res.render("signedin/forumPostco.jsx", { 
      aPost: individual,
      index: req.params.id}
      )
  })
})



///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
