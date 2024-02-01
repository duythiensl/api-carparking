import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getMe(user: any): Promise<import("../auth/auth.dto").AuthRegisterResponse>;
}
