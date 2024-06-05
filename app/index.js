import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-green" >
      <Text className="text-3xl text-pink font-auto">index.js</Text>
      <Link href="/home" style={{color:"blue"}}> Go to home </Link>
    </View>
  );
}


