//Game Model
var gameSchema = new mongoose.Schema({
    week: Number,
    winner: String, //or team id
    loser: String,
    winner_score: Number,
    loser_score: Number,
    day_of_week: Date
});
