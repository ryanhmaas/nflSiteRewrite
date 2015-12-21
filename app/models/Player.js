//Player Model
var playerSchema = new mongoose.Schema({
    name: {
      first: String,
      last: String
    },
    //team id
    team: id,
    position: String,
    years_pro: Number
    /*
    < Maybe add stats here?
    */
});
