import Note from "../models/note.model.js";

const updatenote = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    Note.findByIdAndUpdate(id, updatedData, { new: true })
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Note not found" });
            }
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};

export default updatenote;
