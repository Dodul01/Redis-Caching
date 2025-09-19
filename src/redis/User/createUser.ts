import client from "../redis"

const createUser = async (no: number, name: string) => {
    const user = await client.set(`user:${no}`, name);
    console.log("user created", user);
}

export default createUser;