import Note from "../models/note.model.js";

const getnotes = (req, res) => {
    const { userId } = req.query;
    Note.find({ userId })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};

export default getnotes;