import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { LogBox } from "react-native";

LogBox.ignoreAllLogs(); // Desativa todos os warnings
export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
          animation: "slide_from_right",
          header: () => null,
          navigationBarHidden: true,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="medications/add" />
        <Stack.Screen name="refills" />
        <Stack.Screen name="calendar" />
        <Stack.Screen name="history" />
      </Stack>
    </>
  );
}
