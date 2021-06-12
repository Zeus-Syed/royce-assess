process.env.NODE_ENV = 'test';

import { expect } from "chai";
import * as request from "supertest";

import app from "../../../index";
import { dbConnect, dbClose } from "../../../db/index";


describe('PUT /users/:userId', async () => {
   before(async () => {
     try {
       await dbConnect();
     } catch (err) {
       console.log("catch block", err);
     }
   });

   after(async () => {
     try {
       await dbClose();
     } catch (err) {
       console.log("catch block", err);
     }
   });

  it("ok, user updated", () => {
    request(app)
      .post("/users")
      .send({
        name: "test2",
        dobDate: "09",
        dobMonth: "05",
        dobYear: "1996",
        address: "test add 2",
        description: "test2 des 2",
      })
      .then((res) => {
        console.log("creta", res.body)
        console.log("creta", res.body.data._id)
        request(app)
        .put(`/users/${res.body.data._id}`)
        .send({
            name: "updatedTest",
            description: "updated test1 description",
          })
        .then((res) => {
            console.log("update", res.body)
          expect(res.body.success).to.equal(false);
        })
        .catch((err) => console.log("catch block this", err));
      })
      .catch((err) => console.log("catch block this", err));
  });

})



