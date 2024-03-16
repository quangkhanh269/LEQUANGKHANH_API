const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// Đối với cơ sở dữ liệu local (sử dụng Compass)
const local = "mongodb://127.0.0.1:27017/MyDatabase";

// Đối với cơ sở dữ liệu cloud (sử dụng Atlas)
const atlas = "mongodb+srv://khanhlqpd07021:<XwRC0hL43kUES9QW>@cluster0.h5qhmad.mongodb.net/";

const connect = async () => {
    try {
        await mongoose.connect(local, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Kết nối thành công');
    } catch (error) {
        console.log(error);
        console.log('Kết nối thất bại');
    }
};

module.exports = { connect };
