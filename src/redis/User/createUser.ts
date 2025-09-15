import client from "../redis"

const createUser = async () => {
    const user = await client.set("user:4", "Mozammel Hoque Dodul");
    console.log("user created", user);
}

export default createUser;