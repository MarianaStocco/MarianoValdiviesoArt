const { Router } = require("express");
const router = Router();

//IMPORTS
const createProduct = require("./routes/productRoutes")
const { filterProducts } = require("../config/filter.js");
const likeComments = require("./routes/likeCommentRoutes")
const userSign = require("./routes/userSignRoutes")
const adminActions = require("./routes/adminRoutes")
const users = require("./routes/userRoutes")
const artistActions = require("./routes/artistRoutes")

router.use("/paints", createProduct)

router.use("/searchFilters", filterProducts)

router.use("/userSign", userSign)

router.use("/likeComments", likeComments)

router.use("/adminActions", adminActions)

router.use("/users", users)

router.use("/artist", artistActions)

module.exports = router;