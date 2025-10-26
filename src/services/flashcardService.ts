// Flashcard Service - Backend API Integration
import { FlashcardSet } from "@/types";

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

export const flashcardService = {
  async getUserFlashcards(userId: string): Promise<FlashcardSet[]> {
    const response = await fetch(`${API_BASE_URL}/flashcards/${userId}`, {
      method: "GET",
      headers: getAuthHeader(),
    });

    const data: ApiResponse<FlashcardSet[]> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to fetch flashcards");
    }

    return data.data || [];
  },

  async createFlashcardSet(flashcardSet: Partial<FlashcardSet>): Promise<FlashcardSet> {
    const response = await fetch(`${API_BASE_URL}/flashcards`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify(flashcardSet),
    });

    const data: ApiResponse<FlashcardSet> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to create flashcard set");
    }

    if (!data.data) {
      throw new Error("Invalid response from server");
    }

    return data.data;
  },

  async updateFlashcardSet(id: string, updates: Partial<FlashcardSet>): Promise<FlashcardSet> {
    const response = await fetch(`${API_BASE_URL}/flashcards/${id}`, {
      method: "PUT",
      headers: getAuthHeader(),
      body: JSON.stringify(updates),
    });

    const data: ApiResponse<FlashcardSet> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to update flashcard set");
    }

    if (!data.data) {
      throw new Error("Invalid response from server");
    }

    return data.data;
  },

  async deleteFlashcardSet(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/flashcards/${id}`, {
      method: "DELETE",
      headers: getAuthHeader(),
    });

    const data: ApiResponse<void> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to delete flashcard set");
    }
  },
};
