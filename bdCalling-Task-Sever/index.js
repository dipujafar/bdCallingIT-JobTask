const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
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
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    // getting all products
    app.get("/products", async (req, res) => {
      try {
        const result = await productsCollection.find().toArray();
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
        console.log(id);
        const query = { _id: new ObjectId(id) };
        const result = await productsCollection.findOne(query);
        console.log(result);
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
