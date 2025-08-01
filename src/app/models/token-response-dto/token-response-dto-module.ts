// src/app/models/token-response.dto.ts

export interface TokenResponseDto {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    username: string;
    email?: string;
    phone?: string;
    role: string;
  };
}

