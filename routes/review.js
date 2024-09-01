const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const reviwController = require("../controller/reviews.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

// review create route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviwController.createReview)
);

// review destroy route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviwController.destroyReview)
);

module.exports = router;
