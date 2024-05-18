import mongoose from 'mongoose'

export const connectDb = async () => {
  const uri = 'mongodb://localhost:27017'
  const options = {
    //option to maintain stable connection
    useNewUrlParser: true,
    useUnifiedTopology: true,

    dbName: 'jwtDb',
  }

  try {
    await mongoose.connect(uri, options)
    console.log('Connection successfull')
  } catch (error) {
    console.log(error)
  }
}
