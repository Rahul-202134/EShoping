const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/ecommerce';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    const collectionName = "sample";
    const sampleCollection = mongoose.connection.db.collection(collectionName);

    try {
      const data = await sampleCollection.find({}).toArray();
      const categoryCollection = mongoose.connection.db.collection('category');
      const prodata= await categoryCollection.find({}).toArray();
      global.sample=data;
      global.category=prodata;
      
    } catch (err) {
      console.error(`Error fetching data from "${collectionName}" collection:`, err);
    } 
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

// Invoke the connectToMongoDB function to establish the connection and fetch data
connectToMongoDB();

// Export the function if you want to use it in other modules
module.exports = connectToMongoDB;
