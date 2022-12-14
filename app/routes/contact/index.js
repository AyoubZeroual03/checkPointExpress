const express = require("express");
const router = express.Router();

module.exports = () => {

  router.get("/", (req, res) => {
    res.render("layouts", {
      pageTitle: "Contact page",
      title: "Contact",
      template: "contact",
    });
  });

  return router;
};
