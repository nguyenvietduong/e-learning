import UserRepository from "../repositories/AuthRepository";

class AuthService {
    constructor() {
        this.userRepo = new UserRepository();
    }

    async login(email, password) {
        const user = await this.userRepo.findByEmail(email);
        if (!user) throw new Error("Email không tồn tại");
        if (user.password !== password) throw new Error("Sai mật khẩu");

        return {
            user
        };
    }
}

export default AuthService;