//Team Model
var teamSchema = new mongoose.Schema({
    name: String,
    city: String,
    stadium: String,
    stadium_seating: Number,
    //temp
    logo_img: { data: Buffer, contentType: String }
});
