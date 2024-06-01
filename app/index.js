import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-green" >
      <Text className="text-3xl text-pink font-auto">index.js</Text>
      <StatusBar style="auto" />
    </View>
  );
}


