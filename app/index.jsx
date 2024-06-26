import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex flex-1 text-red-900 bg-[aliceblue] items-center justify-center">
      <Text className='text-red-900'>Ping!!!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color : 'blue'}}>Go to profile.</Link>
    </View>
  );
}
