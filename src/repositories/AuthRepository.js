// import fs from "fs/promises";
// import path from "path";

// const dataPath = path.resolve("./data/accounts.json");

class UserRepository {
    // async getAllUsers() {
    //     const data = await fs.readFile(dataPath, "utf-8");
    //     return JSON.parse(data);
    // }

    // async findByEmail(email) {
    //     const users = await this.getAllUsers();
    //     return users.find(u => u.email === email);
    // }

    // async saveUser(user) {
    //     const users = await this.getAllUsers();
    //     users.push(user);
    //     await fs.writeFile(dataPath, JSON.stringify(users, null, 2), "utf-8");
    //     return user;
    // }
}

export default UserRepository;