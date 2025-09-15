import client from "../redis";

const getUser = async () => {
    const user = await client.get("user:4");
    console.log("from redis",user);
}

export default getUser;