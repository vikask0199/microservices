// Request body interface for signup
export interface SignupRequest {
    userName: string;
    email: string;
    password: string;
}

// Response body interface for signup/login
export interface AuthResponse {
    success: boolean;
    message: string;
    token?: string; // Optional token field for login
}

// User entity interface
export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}


export interface LoginRequest {
    email: string;
    password: string;
}


export interface AuthResponse {
    success: boolean;
    token?: string;
    // message?: string;
}