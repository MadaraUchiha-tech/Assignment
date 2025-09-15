import Note from "../models/note.model.js";
const deletenote = (req, res) => {
    const { id } = req.params;
    Note.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Note not found" });
            }
            res.json({ message: "Note deleted successfully" });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};
export default deletenote;