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

        // using redis wsl
        // getUser();
        // createUser();
        // cashLimit();

        // using redis cloud
        // testConnection();
        // createUser(1, "Mozammel Hoque Dodul");
        // createUser(2, "Md Tanvir Hossain");
        // createUser(3, "Srabon Barua");
        // createUser(4, "Pritom Barua");
        // createUser(5, "Rohit Poul");
        // createUser(6, "Nobo Mukshude");
        // createUser(7, "Kanchan Das");
        // createUser(8, "Iran Islam");
        // createUser(9, "Nusrat Jahan Ishat");
        // createUser(10, "Sadia islam");
        // createUser(11, "Jannatul Tasnim");
        // deleteUser();

        // getUser()
    } catch (error) {
        console.error(`Error starting server: ${error}`);
    }
}

main();
