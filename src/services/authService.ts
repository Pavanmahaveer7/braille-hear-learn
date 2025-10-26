// Authentication Service - Backend API Integration
import { User, UserRole } from "@/types";

const API_BASE_URL = "http://localhost:3001/api";

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupData extends LoginCredentials {
  name: string;
  role: UserRole;
  phone: string;
  institution?: string;
  department?: string;
}

interface ApiResponse<T> {
  success: boolean;
  token?: string;
  user?: T;
  error?: string;
  data?: T;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<{ user: User; token: string }> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data: ApiResponse<User> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Login failed");
    }

    if (!data.token || !data.user) {
      throw new Error("Invalid response from server");
    }

    return { user: data.user, token: data.token };
  },

  async signup(signupData: SignupData): Promise<{ user: User; token: string }> {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    const data: ApiResponse<User> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Registration failed");
    }

    if (!data.token || !data.user) {
      throw new Error("Invalid response from server");
    }

    return { user: data.user, token: data.token };
  },

  async logout(): Promise<void> {
    // JWT-based auth doesn't need server-side logout
    // Token removal is handled by AuthContext
    return Promise.resolve();
  },

  async verifyToken(token: string): Promise<User | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        return null;
      }

      const data: ApiResponse<User> = await response.json();
      return data.user || null;
    } catch (error) {
      console.error("Token verification failed:", error);
      return null;
    }
  },

  async resetPassword(email: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data: ApiResponse<void> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Password reset failed");
    }
  },
};
