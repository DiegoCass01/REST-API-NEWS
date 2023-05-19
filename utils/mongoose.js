import mongoose from 'mongoose'

export async function connectToDB() {
  try {
    await mongoose.connect("mongodb+srv://DiegoCass:diego123@cluster0.4oc98cj.mongodb.net/?retryWrites=true&w=majority")
    console.log('Mongodb connected')
  } catch (error) {
    console.error(error)
  }
  
}
