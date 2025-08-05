import { User, UserFormData, ApiResponse } from '@/types/user';

const API_BASE_URL = 'http://localhost:8080/api';

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Get all users
  async getUsers(): Promise<User[]> {
    return this.request<User[]>('/users');
  }

  // Get user by ID
  async getUserById(id: number): Promise<User> {
    return this.request<User>(`/users/${id}`);
  }

  // Get user by email
  async getUserByEmail(email: string): Promise<User> {
    return this.request<User>(`/users/email/${email}`);
  }

  // Create new user
  async createUser(userData: UserFormData): Promise<User> {
    return this.request<User>('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // Update user
  async updateUser(id: number, userData: UserFormData): Promise<User> {
    return this.request<User>(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  // Delete user
  async deleteUser(id: number): Promise<void> {
    return this.request<void>(`/users/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService(); 