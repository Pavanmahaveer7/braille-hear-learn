// Voice Learning Service - Backend API Integration with VAPI and Letta
const API_BASE_URL = "http://localhost:3001/api";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface StartCallResponse {
  callId: string;
  status: string;
}

interface TranscriptData {
  text: string;
  timestamp: string;
}

interface StatefulResponse {
  response: string;
  context: any;
}

const getAuthHeader = (): HeadersInit => {
  const token = localStorage.getItem("auth_token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const voiceLearningService = {
  async startTeacherCall(sessionId: string, phoneNumber: string): Promise<StartCallResponse> {
    const response = await fetch(`${API_BASE_URL}/voice-learning/start-teacher-call`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify({ sessionId, phoneNumber }),
    });

    const data: ApiResponse<StartCallResponse> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to start teacher call");
    }

    if (!data.data) {
      throw new Error("Invalid response from server");
    }

    return data.data;
  },

  async endTeacherCall(callId: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/voice-learning/end-teacher-call`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify({ callId }),
    });

    const data: ApiResponse<void> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to end teacher call");
    }
  },

  async processTranscript(transcript: TranscriptData): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/vapi-webhook/process-transcript`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify(transcript),
    });

    const data: ApiResponse<void> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to process transcript");
    }
  },

  async getStatefulResponse(
    userId: string,
    message: string,
    context?: any
  ): Promise<StatefulResponse> {
    const response = await fetch(`${API_BASE_URL}/stateful-vapi/response`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify({ userId, message, context }),
    });

    const data: ApiResponse<StatefulResponse> = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to get stateful response");
    }

    if (!data.data) {
      throw new Error("Invalid response from server");
    }

    return data.data;
  },
};
