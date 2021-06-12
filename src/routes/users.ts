import * as express from "express";
import User from "../models/User";
import { requestBuilder } from "../utils/utils";
let router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      let users = await User.find({});
      if (!users) {
        res.status(401).send(requestBuilder([], "users not found", false));
      } else {
        res
          .status(200)
          .send(
            requestBuilder(users, "users list retrieved successfully", true)
          );
      }
    } catch (err) {
      res.status(401).end(requestBuilder([], err.message, false));
    }
  })
  .post(async (req, res) => {
    try {
      let userObject = req.body;
      userObject.dob = new Date(
        `${req.body.dobYear}-${req.body.dobMonth}-${req.body.dobDate}`
      );
      delete userObject.dobYear;
      delete userObject.dobMonth;
      delete userObject.dobDate;

      let user = await new User(userObject).save();
      if (!user) {
        res.status(401).send(requestBuilder([], "user not created", false));
      } else {
        res
          .status(200)
          .send(requestBuilder(user, "user created succesfully!", true));
      }
    } catch (err) {
      res.status(401).send(requestBuilder([], err.message, false));
    }
  });

router
  .route("/:userId")
  .get(async (req, res) => {
    try {
      let user = await User.findById(req.params.userId);
      if (!user) {
        res.status(401).send(requestBuilder([], "user not found", false));
      } else {
        res
          .status(200)
          .send(requestBuilder(user, "user retrieved successfully", true));
      }
    } catch (err) {
      res.status(401).send(requestBuilder([], err.message, false));
    }
  })
  .post(async (req, res) => {
    try {
      // hard delete
      let user = await User.findByIdAndRemove(req.params.userId);

      if (!user) {
        res.status(401).send(requestBuilder([], "user not deleted", false));
      } else {
        res
          .status(200)
          .send(requestBuilder(user, "user deleted successfully", true));
      }
    } catch (err) {
      res.status(401).send(requestBuilder([], err.message, false));
    }
  })
  .put(async (req, res) => {
    try {
      let userObject = req.body;

      if (
        userObject.hasOwnProperty("dobYear") ||
        userObject.hasOwnProperty("dobMonth") ||
        userObject.hasOwnProperty("dobDate")
      ) {
        userObject.dob = new Date(
          `${req.body.dobYear}-${req.body.dobMonth}-${req.body.dobDate}`
        );
        if (userObject.hasOwnProperty("dobYear")) {
          delete userObject.dobYear;
        }
        if (userObject.hasOwnProperty("dobMonth")) {
          delete userObject.dobMonth;
        }
        if (userObject.hasOwnProperty("dobDate")) {
          delete userObject.dobDate;
        }
      }

      let user = await User.findByIdAndUpdate(req.params.userId, userObject);

      if (!user) {
        res.status(401).send(requestBuilder([], "user not updated", false));
      } else {
        res
          .status(200)
          .send(requestBuilder(user, "users updated successfully", true));
      }
    } catch (err) {
      res.status(401).send(requestBuilder([], err.message, false));
    }
  });

router.route("/delete/:userId").put(async (req, res) => {
  try {
    // soft delete
    let user = await User.findByIdAndUpdate(req.params.userId, {
      active: false,
    });

    if (!user) {
      res.status(401).send(requestBuilder([], "no user to delete", false));
    } else {
      res
        .status(200)
        .send(requestBuilder(user, "users deleted successfully", true));
    }
  } catch (err) {
    res.status(401).send(requestBuilder([], err.message, false));
  }
});

router.route("/location/:userId").get(async (req, res) => {
  try {
    // soft delete
    let user = await User.findById(req.params.userId, { location: 1 });
    console.log("user loaction");
    if (!user) {
      res.status(401).send(requestBuilder([], "no user to fetch", false));
    } else {
      res
        .status(200)
        .send(requestBuilder(user, "users deleted successfully", true));
    }
  } catch (err) {
    res.status(401).send(requestBuilder([], err.message, false));
  }
});

export default router;
