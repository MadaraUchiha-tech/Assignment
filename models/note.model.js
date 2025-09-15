import mongoose from "mongoose";
const noteSchema = new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,

  },
  content: {
    type: String,
  },
  tags: {
    type: [String],
    default: []
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
})
const Note = mongoose.model("Note", noteSchema);
export default Note;