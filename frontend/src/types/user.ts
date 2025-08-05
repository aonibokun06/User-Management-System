export interface User {
  id?: number;
  name: string;
  email: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserFormData {
  name: string;
  email: string;
  description: string;
}

export interface ApiResponse<T> {
  data?: T;
  message?: string;
  error?: string;
}

export interface UserListResponse {
  users: User[];
  total: number;
} 