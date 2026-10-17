import { Stack, type ErrorBoundaryProps } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function RootLayout() {
  return <Stack />;
}

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <Text>Something went wrong: {error.message}</Text>
      <Button title="Try again" onPress={retry} />
    </View>
  );
}
