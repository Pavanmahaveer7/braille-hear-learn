// Learning Service - Backend API Integration
import { LearningSession, StudentProgress, Test } from "@/types";

const API_BASE_URL = "http://localhost:3001/api";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

const getAuthHeader = (): HeadersInit => {
  const token = localStorage.getItem("auth_token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const learningService = {
  async getUserSessions(userId: string): Promise<LearningSession[]> {
    const response = await fetch(`${API_BASE_URL}/learning/sessions/${userId}`, {
      method: "GET",
      headers: getAuthHeader(),
    });

    const data: ApiResponse<LearningSession[]> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to fetch learning sessions");
    }

    return data.data || [];
  },

  async createSession(session: Partial<LearningSession>): Promise<LearningSession> {
    const response = await fetch(`${API_BASE_URL}/learning/sessions`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify(session),
    });

    const data: ApiResponse<LearningSession> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to create learning session");
    }

    if (!data.data) {
      throw new Error("Invalid response from server");
    }

    return data.data;
  },

  async submitTest(testData: Partial<Test>): Promise<Test> {
    const response = await fetch(`${API_BASE_URL}/learning/test`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify(testData),
    });

    const data: ApiResponse<Test> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to submit test");
    }

    if (!data.data) {
      throw new Error("Invalid response from server");
    }

    return data.data;
  },

  async getUserProgress(userId: string): Promise<StudentProgress> {
    const response = await fetch(`${API_BASE_URL}/learning/progress/${userId}`, {
      method: "GET",
      headers: getAuthHeader(),
    });

    const data: ApiResponse<StudentProgress> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to fetch learning progress");
    }

    if (!data.data) {
      throw new Error("Invalid response from server");
    }

    return data.data;
  },
};
