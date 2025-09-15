import mongoose from "mongoose";
const connec = () => mongoose.connect('mongodb+srv://navjeet24bcs10281_db_user:YurGQmGj2IqpgOtw@cluster0.xnqv89o.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("connected to db")).catch((err) => console.log(err));
export default connec;