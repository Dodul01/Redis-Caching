import { Server } from "http";
import app from "./app";
import getUser from "./redis/User/getUsers";
import createUser from "./redis/User/createUser";
import cashLimit from "./redis/User/limit";

let server: Server;
const port = 5001;

async function main() {
    try {
        server = app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
        // getUser();
        // createUser();
        
        cashLimit();
    } catch (error) {
        console.error(`Error starting server: ${error}`);
    }
}

main();
