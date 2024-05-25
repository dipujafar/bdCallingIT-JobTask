const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://bdcalling-task.web.app"],
    credentials: true,
  })
);
app.use(express.json());

const uri = process.env.DB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const productsCollection = client.db("greenmind").collection("products");
    const reviewsCollection = client.db("greenmind").collection("reviews");
    const userCollection = client.db("greenmind").collection("users");
    const productReviewsCollection = client
      .db("greenmind")
      .collection("productReviews");
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    //jwt related apis
    app.post("/jwt", async (req, res) => {
      try {
        console.log("he");
        const user = req?.body;
        console.log(user);
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRE, {
          expiresIn: "1h",
        });
        res.send({ token });
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // getting all products
    app.get("/products", async (req, res) => {
      try {
        const { sort } = req?.query;
        const { filter } = req?.query;
        const filterData = filter
          ? filter === "All"
            ? {}
            : {
                category: filter,
              }
          : {};

        const options = {
          sort: {
            price: sort === "High" ? -1 : 1,
          },
        };
        const result = await productsCollection
          .find(filterData, options)
          .toArray();
        res.send(result);
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Something went to wrong",
        });
      }
    });

    // getting Some products
    app.get("/displayProducts", async (req, res) => {
      try {
        const { search } = req?.query;
        const result = await productsCollection
          .find({ name: { $regex: search ? search : "", $options: "i" } })
          .limit(3)
          .toArray();
        res.send(result);
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Something went to wrong",
        });
      }
    });

    // getting single product
    app.get("/products/:id", async (req, res) => {
      try {
        const { id } = req?.params;
        const query = { _id: new ObjectId(id) };
        const result = await productsCollection.findOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Something went to wrong",
        });
      }
    });

    // getting reviews
    app.get("/reviews", async (req, res) => {
      try {
        const result = await reviewsCollection.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Something went to wrong",
        });
      }
    });

    // getting product reviews
    app.get("/productReviews", async (req, res) => {
      try {
        const result = await productReviewsCollection.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Something went to wrong",
        });
      }
    });

    //User related api
    app.post("/users", async (req, res) => {
      try {
        const user = req.body;

        user["password"] = await bcrypt.hash(
          user.password,
          parseInt(process.env.BCRYPT_SALT_ROUNDS)
        );

        const query = { email: user.email };
        const existingUser = await userCollection.findOne(query);
        if (existingUser) {
          return res.send("user already exist");
        }
        const result = await userCollection.insertOne(user);
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from GREENMIND!");
});

app.listen(port, () => {
  console.log(`GREENMIND app listening on port ${port}`);
});
