import Note from "../models/note.model.js";

const createnote=(req,res)=>{
    const note=req.body;
    const newNote = new Note(note);
    Note.create(newNote).then((data)=>{
        res.status(201).json(data);
    }).catch((err)=>{
        res.status(409).json({message:err.message});
    })
}
export default createnote;