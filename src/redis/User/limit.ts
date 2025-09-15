import client from "../redis"

const cashLimit = async () => {
    await client.expire("user:4", 10);
    const user = await client.get("user:4");
    console.log("from redis limit", user);
}

export default cashLimit;