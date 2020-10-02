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

router.get("/home", auth, (req, res) => {

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
  req.body.user = req.session.username
  if(req.body.forumType == "comingOut") {
      comingOut.create(req.body, (error, newForum) => {
      res.redirect("/forum"); })} 
  else {
      closetedIn.create(req.body, (error, newForum) => {
      res.redirect("/forum"); })}
  
})
//---------------
//Show coming out Forum Page

router.get("/forum/co/:id", auth, (req, res) => {
  comingOut.findById(req.params.id, (error, individual) => {
  res.render("signedin/forumPostco.jsx", { 
      aPost: individual,
      index: req.params.id}
      )
  })
})

//posting comment on coming out page
router.post("/forum/co/:id", auth, (req, res) => {
  comingOut.findByIdAndUpdate(req.params.id, {$push: {comments: { body: req.body.body, user: req.session.username, commentDate: Date()}}}, (error, individual) => {
      res.redirect(`/forum/co/${req.params.id}`)
  })
})
//-------------------------------
//Show closeted in Forum Page

router.get("/forum/ci/:id", auth, (req, res) => {
  closetedIn.findById(req.params.id, (error, individual) => {
  res.render("signedin/forumPostci.jsx", { 
      aPost: individual,
      index: req.params.id}
      )
  })
})

//posting comment on coming out page
router.post("/forum/ci/:id", auth, (req, res) => {
  closetedIn.findByIdAndUpdate(req.params.id, {$push: {comments: { body: req.body.body, user: req.session.username, commentDate: Date()}}}, (error, individual) => {
      res.redirect(`/forum/ci/${req.params.id}`)
  })
})


///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
