import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Extend the Window interface to include nuiHandoverData
declare global {
  interface Window {
    nuiHandoverData?: SettingsProps;
  }
}


import { useNuiEvent } from '../../hooks/useNuiEvent';
import { defaultSettings } from './default_settings';
import { SettingsProps } from './settings_props';

// Create a context with default values
const SettingsContext = createContext<SettingsProps | undefined>(undefined);

// Create a provider component
export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SettingsProps>(defaultSettings);

  useEffect(() => {
    setSettings(window.nuiHandoverData ? window.nuiHandoverData : defaultSettings);
  }, []);
  
  useNuiEvent('UPDATE_SETTINGS', (data: SettingsProps) => {
    setSettings(data);
  });

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to use settings context
export const useSettings = (): SettingsProps => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

