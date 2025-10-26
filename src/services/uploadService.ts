// Upload Service - Backend API Integration for PDF uploads
import { FlashcardSet } from "@/types";

const API_BASE_URL = "http://localhost:3001/api";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface UploadResponse {
  documentId: string;
  flashcards: FlashcardSet;
  lettaIntegration: boolean;
}

interface UserDocument {
  id: string;
  userId: string;
  originalName: string;
  uploadedAt: string;
  flashcardCount: number;
}

const getAuthHeader = (): HeadersInit => {
  const token = localStorage.getItem("auth_token");
  return {
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const uploadService = {
  async uploadPdf(file: File, userId: string): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("userId", userId);

    const response = await fetch(`${API_BASE_URL}/upload/pdf`, {
      method: "POST",
      headers: getAuthHeader(),
      body: formData,
    });

    const data: ApiResponse<UploadResponse> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to upload PDF");
    }

    if (!data.data) {
      throw new Error("Invalid response from server");
    }

    return data.data;
  },

  async getUserDocuments(userId: string): Promise<UserDocument[]> {
    const response = await fetch(`${API_BASE_URL}/upload/pdfs/${userId}`, {
      method: "GET",
      headers: {
        ...getAuthHeader(),
        "Content-Type": "application/json",
      },
    });

    const data: ApiResponse<UserDocument[]> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to fetch documents");
    }

    return data.data || [];
  },
};
