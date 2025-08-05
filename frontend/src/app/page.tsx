'use client';

import { useState, useEffect } from 'react';
import { User, UserFormData } from '@/types/user';
import { apiService } from '@/lib/api';
import UserForm from '@/components/UserForm';
import UserTable from '@/components/UserTable';
import Alert from '@/components/Alert';

interface AlertState {
  show: boolean;
  type: 'success' | 'error' | 'info';
  message: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>();
  const [formLoading, setFormLoading] = useState(false);
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    type: 'info',
    message: '',
  });

  // Load users on component mount
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await apiService.getUsers();
      setUsers(data);
    } catch (error) {
      showAlert('error', 'Failed to load users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (type: 'success' | 'error' | 'info', message: string) => {
    setAlert({ show: true, type, message });
  };

  const hideAlert = () => {
    setAlert({ show: false, type: 'info', message: '' });
  };

  const handleCreateUser = () => {
    setEditingUser(undefined);
    setShowForm(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingUser(undefined);
  };

  const handleSubmitForm = async (formData: UserFormData) => {
    try {
      setFormLoading(true);
      
      if (editingUser) {
        // Update existing user
        await apiService.updateUser(editingUser.id!, formData);
        showAlert('success', 'User updated successfully!');
      } else {
        // Create new user
        await apiService.createUser(formData);
        showAlert('success', 'User created successfully!');
      }
      
      // Reload users and close form
      await loadUsers();
      setShowForm(false);
      setEditingUser(undefined);
    } catch (error: any) {
      showAlert('error', error.message || 'An error occurred. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await apiService.deleteUser(id);
      showAlert('success', 'User deleted successfully!');
      await loadUsers();
    } catch (error: any) {
      showAlert('error', error.message || 'Failed to delete user. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">User Management System</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your users with ease
              </p>
            </div>
            <button
              onClick={handleCreateUser}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add User
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Table */}
          <div className="lg:col-span-2">
            <UserTable
              users={users}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
              isLoading={loading}
            />
          </div>

          {/* User Form */}
          <div className="lg:col-span-1">
            {showForm && (
              <UserForm
                user={editingUser}
                onSubmit={handleSubmitForm}
                onCancel={handleCancelForm}
                isLoading={formLoading}
              />
            )}
            
            {!showForm && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No user selected</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Click "Add User" to create a new user or select a user to edit.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={handleCreateUser}
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add User
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Alert */}
      {alert.show && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={hideAlert}
        />
      )}
    </div>
  );
}
