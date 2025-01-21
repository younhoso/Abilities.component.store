'use client';

import React, { ReactNode, createContext, useCallback, useState } from 'react';

export type OpenNotificationParams = {
  id: string;
  message: string;
  type: 'success' | 'error' | 'progress';
  description?: string;
  cancelMutation?: () => void;
  undoableTimeout?: number;
};

export interface INotificationContext {
  notifications: OpenNotificationParams[];
  open?: (params: OpenNotificationParams) => void;
  close?: (id: string) => void;
}

export const NotificationContext = createContext<INotificationContext>({
  notifications: [],
  open: () => {},
  close: () => {},
});

export const NotificationContextProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<OpenNotificationParams[]>([]);

  const open = useCallback((params: OpenNotificationParams) => {
    setNotifications(prev => [...prev, params]);
  }, []);

  const close = useCallback((id: string) => {
    setNotifications(prev => prev.filter(data => data.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, open, close }}>
      {children}
    </NotificationContext.Provider>
  );
};
