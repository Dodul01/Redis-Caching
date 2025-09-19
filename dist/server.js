"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
let server;
const port = 5001;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            server = app_1.default.listen(port, () => {
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
        }
        catch (error) {
            console.error(`Error starting server: ${error}`);
        }
    });
}
main();
