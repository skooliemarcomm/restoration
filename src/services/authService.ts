// Simple auth service - in production, use a proper authentication system
const ADMIN_CREDENTIALS = {
  email: 'contact@skoolierestoration.com',
  password: 'admin123'
};

export const login = async (email: string, password: string): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password;
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem('isAdmin') === 'true';
};

export const setAuthenticated = (value: boolean): void => {
  localStorage.setItem('isAdmin', String(value));
};