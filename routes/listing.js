const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");

const listingController= require("../controllers/listings.js");

const multer = require('multer')
const {storage}= require('../cloudConfig.js')
const upload = multer({storage})

router
    .route("/")
    .get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    validateListing,
    upload.single("listing[image]"),
    wrapAsync(listingController.createListing)
);


// // Index Route
// router.get("/", wrapAsync(listingController.index));

router.get("/doom", (req, res) => {
  res.render("listings/doom.ejs");
});

//New Route
router.get("/new", isLoggedIn,
  listingController.renderNewForm);


//Show Route
router.get(
  "/:id",
  wrapAsync(listingController.showListing) );

// // Create Route
// router.post("/", isLoggedIn,
//     validateListing,
//     wrapAsync(listingController.createListing)
// );


//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(isOwner),
  wrapAsync(listingController.renderEditForm)
);

//Update Route
router.put(
  "/:id",
  isLoggedIn,
  wrapAsync(isOwner),
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.updateListing)
);


//Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  wrapAsync(isOwner),
  wrapAsync(listingController.destroyListing)
);

module.exports =router;
