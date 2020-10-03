//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const session = require("express-session");
const comingOut = require("../../models/schemas/comingOut.js");
const closetedIn = require("../../models/schemas/closetedIn.js");
const User = require("../../models/auth/index.js");
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
    User.find({username: individual.user}, (err, forumCreator) => {
      console.log(individual)
      console.log(forumCreator)
      res.render("signedin/forumPostco.jsx", { 
        aPost: individual,
        index: req.params.id,
        forumCreator: forumCreator
      }
      )}
  )})
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
    User.find({username: individual.user}, (err, forumCreator) => {
      console.log(individual)
      console.log(forumCreator)
      res.render("signedin/forumPostci.jsx", { 
        aPost: individual,
        index: req.params.id,
        forumCreator: forumCreator
      }
      )}
  )})
})

//posting comment on coming out page
router.post("/forum/ci/:id", auth, (req, res) => {
  closetedIn.findByIdAndUpdate(req.params.id, {$push: {comments: { body: req.body.body, user: req.session.username, commentDate: Date()}}}, (error, individual) => {
      res.redirect(`/forum/ci/${req.params.id}`)
  })
})


///////////////////////////////////////
// My Account Page Routers
///////////////////////////////////////

router.get("/account", auth, (req, res) => {
  comingOut.find({user: req.session.username}, (error, usersComingOut) => {
    closetedIn.find({user: req.session.username}, (error, usersClosetedIn) => {
      User.find({ username: req.session.username }, (err, userInfo) => {
      console.log(userInfo);
      res.render("signedin/account.jsx", {usersComingOut,usersClosetedIn, userInfo});
    })})
});

//Delete Coming out//
//////////
router.get("/account/co/:id/delete", (req, res) => {
  comingOut.findByIdAndRemove(req.params.id, (error, data) => {
  res.redirect("/account");
  })
  });
})

//Delete Closeted In//
//////////
router.get("/account/ci/:id/delete", (req, res) => {
  closetedIn.findByIdAndRemove(req.params.id, (error, data) => {
  res.redirect("/account");
  })
  });

  // //Update//
router.put("/account/ci/:id/update", (req, res) => {
  closetedIn.findByIdAndUpdate(req.params.id, req.body, (error, updatedProduct) => {
  res.redirect(`/forum/ci/${req.params.id}`);
  })
  })

  router.put("/account/co/:id/update", (req, res) => {
    comingOut.findByIdAndUpdate(req.params.id, req.body, (error, updatedProduct) => {
    res.redirect(`/forum/co/${req.params.id}`);
    })
    })


///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
