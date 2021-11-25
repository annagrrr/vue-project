const mongoose = require("mongoose")

//connecting to database
mongoose.connect(
    "mongodb+srv://annagrete:<jussij2n3s>@cluster0.k0v5h.mongodb.net/todoapp?retryWrites=true&w=majority", 
{ useNewUrlParser: true}
);
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: { type: String }, 
    status: { type: String },
});

const Todos = mongoose.model("Todos", TodoSchema);

module.exports = {
    Todos,
};