import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout() {

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
        <Stack.Screen name="notifications/index" options={{ headerShown: false }} />
        <Stack.Screen name="citizenCreation/index" options={{ headerShown: false }} />
        <Stack.Screen name="cams/index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
