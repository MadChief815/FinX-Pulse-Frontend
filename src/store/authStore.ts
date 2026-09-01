import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthState = {
    token: string | null;
    setToken: (token: string | null) => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            setToken: (token) => set({ token }),
        }),
        { name: 'auth-storage', storage: createJSONStorage(() => AsyncStorage) }
    )
);