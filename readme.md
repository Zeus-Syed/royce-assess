## command to execute

    - clone the repo (or) unzip the file
    - npm i 
    - npm start

## unit test cases

     folder  /test

        GET -   fetch users
        POST -  create user
        PUT  -  update user

    - command "npm run test"    


### REST APIs

# GET

- http://localhost:4000/users

      Fetch all available users from DB.

        - response format

                    {
                       "data": [
                               {
                               "location": {
                                   "type": "Point",
                                   "coordinates": [
                                       -80.0792,
                                       26.46168
                                   ],
                                   "formattedAddress": "West Atlantic Avenue, Delray Beach, FL 33444, US"
                               },
                               "active": true,
                               "_id": "60c46bf511751d0505ab4e86",
                               "name": "new guy",
                               "address": "Atlantis The Palm - Crescent Rd - Dubai",
                               "description": "i am new guy",
                               "dob": "1994-03-12T00:00:00.000Z",
                               "createdAt": "2021-06-12T08:10:29.664Z",
                               "updatedAt": "2021-06-12T08:10:29.664Z",
                               "__v": 0
                           },
                           {
                               "location": {
                                   "type": "Point",
                                   "coordinates": [
                                       55.296196,
                                       25.268352
                                   ],
                                   "formattedAddress": ", Dubai, Dubai 24976, AE"
                               },
                               "active": true,
                               "_id": "60c46d5111751d0505ab4e87",
                               "name": "second guy",
                               "address": "Financial Center Street, Along Sheikh Zayed Road, Next to Burj Khalifa - Dubai",
                               "description": "i am second",
                               "dob": "1995-03-10T00:00:00.000Z",
                               "createdAt": "2021-06-12T08:16:17.739Z",
                               "updatedAt": "2021-06-12T08:16:17.739Z",
                               "__v": 0
                           }
                       ],
                       "message": "users list retrieved successfully",
                       "success": true
                   }

- http://localhost:4000/users/:userId

        Fetch a single user record from the database

        - url format

        sample url : "http://localhost:4000/users/${value}"

            - value     // type-> String
              (eg. "60c258c0e93c5607d092aad1")

        - response

            {
                "data": {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            -80.0792,
                            26.46168
                        ],
                        "formattedAddress": "West Atlantic Avenue, Delray Beach, FL 33444, US"
                    },
                    "active": true,
                    "_id": "60c46bf511751d0505ab4e86",
                    "name": "new guy",
                    "address": "Atlantis The Palm - Crescent Rd - Dubai",
                    "description": "i am new guy",
                    "dob": "1994-03-12T00:00:00.000Z",
                    "createdAt": "2021-06-12T08:10:29.664Z",
                    "updatedAt": "2021-06-12T08:10:29.664Z",
                    "__v": 0
                },
                "message": "user retrieved successfully",
                "success": true
            }

- http://localhost:4000/users/location/:userId

      Fetch the location details of a user

      - url format

      sample url : "http://localhost:4000/users/location/${value}"

          - value     // type-> String
            (eg. "60c258c0e93c5607d092aad1")

      - response

            {
                "data": {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            55.296196,
                            25.268352
                        ],
                        "formattedAddress": ", Dubai, Dubai 24976, AE"
                    },
                    "_id": "60c46d5111751d0505ab4e87"
                },
                "message": "users deleted successfully",
                "success": true
            }

# POST

- http://localhost:4000/users

        Create a new user and store in database.

        - request parameters

           {
               "name": "desired name",      // type-> String
               "address": "actual address",     // type-> String
               "description": "actual description",    // type-> String
               "dobDate": "DD",     // type-> String
               "dobMonth": "MM",    // type-> String
               "dobYear": "YYYY"    // type-> String
           }

        - response

            {
                "data": {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            55.296196,
                            25.268352
                        ],
                        "formattedAddress": ", Dubai, Dubai 24976, AE"
                    },
                    "active": true,
                    "_id": "60c46d5111751d0505ab4e87",
                    "name": "second guy",
                    "address": "Financial Center Street, Along Sheikh Zayed Road, Next to Burj Khalifa - Dubai",
                    "description": "i am second",
                    "dob": "1995-03-10T00:00:00.000Z",
                    "createdAt": "2021-06-12T08:16:17.739Z",
                    "updatedAt": "2021-06-12T08:16:17.739Z",
                    "__v": 0
                },
                "message": "user created succesfully!",
                "success": true

            }

- http://localhost:4000/users/:userId

        Hard delete(removing) a user record in the database

        - url format

       sample url : "http://localhost:4000/users/${value}"

          - value     // type-> String
            (eg. "60c258c0e93c5607d092aad1")

       - response

        {
            "data": {
                "active": true,
                "_id": "60c319c8968f050771daddae",
                "name": "Agent J",
                "address": "Sheikh Zayed Rd - Al BarshaAl Barsha 1 - Dubai",
                "description": "i am jim",
                "dob": "1957-12-17T00:00:00.000Z",
                "createdAt": "2021-06-11T08:07:36.991Z",
                "updatedAt": "2021-06-11T08:07:36.991Z",
                "__v": 0
            },
            "message": "user deleted successfully",
            "success": true
        }

# PUT

- http://localhost:4000/users/:userId

         Update user record in database.

         - sample url : "http://localhost:4000/users/${value}"

            - value     // type-> String
              (eg. "60c258c0e93c5607d092aad1")


         - request parameters

             {
                 "name": "desired name",      // type-> String
                 "address": "actual address",     // type-> String
                 "description": "actual description",    // type-> String
                 "dobDate": "DD",     // type-> String
                 "dobMonth": "MM",    // type-> String
                 "dobYear": "YYYY"    // type-> String
             }

         - response

            {
                    "data": {
                        "location": {
                            "type": "Point",
                            "coordinates": [
                                -80.0792,
                                26.46168
                            ],
                            "formattedAddress": "West Atlantic Avenue, Delray Beach, FL 33444, US"
                        },
                        "active": true,
                        "_id": "60c46bf511751d0505ab4e86",
                        "name": "new guy",
                        "address": "Atlantis The Palm - Crescent Rd - Dubai",
                        "description": "i am new guy",
                        "dob": "1994-03-12T00:00:00.000Z",
                        "createdAt": "2021-06-12T08:10:29.664Z",
                        "updatedAt": "2021-06-12T08:10:29.664Z",
                        "__v": 0
                    },
                    "message": "users updated successfully",
                    "success": true
            }  


- http://localhost:4000/users/delete/:userId

          Soft delete(updating active status to false) a record in the database

          - sample url : "http://localhost:4000/users/delete/${value}"

            - value     // type-> String
              (eg. "60c258c0e93c5607d092aad1")

          - response

            {
                "data": {
                    "active": false,
                    "_id": "60c27494196e4b09583bb59e",
                    "name": "updated agent K",
                    "address": "Sheikh Zayed Rd - Al BarshaAl Barsha 1 - Dubai",
                    "description": "updated agent k desc",
                    "dob": "1893-09-23T00:00:00.000Z",
                    "createdAt": "2021-06-10T20:22:44.251Z",
                    "updatedAt": "2021-06-11T10:25:56.174Z",
                    "__v": 0
                },
                "message": "users deleted successfully",
                "success": true
            }

## docker commands

     - command to build image

         - docker build -t royce-assess

     - command to run the image 

         - docker run -it -p 9000:9000 royce-assess


## library to fetch location details of a user

    - node-geocoder

    - provider --> mapquest
 
