import bcrypt from "bcrypt";

const saltRounds = 10;
const myPlaintextPassword = "02062001";

const hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

export default hashedPassword;
