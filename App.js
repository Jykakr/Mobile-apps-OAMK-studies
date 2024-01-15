import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState('');
  const [lower, setLower] = useState('');
  const [upper, setUpper] = useState('');

  function calculate() {
    setLower((220-age) * 0.65);
    setUpper((220-age) * 0.85);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Calculate heart rates.</Text>
      <Text style={styles.field}>Age</Text>
      <TextInput 
        keyboardType='decimal-pad' 
        value={age}
        onChangeText={text => setAge(text)}
        />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lower} - {upper}</Text>
      <Button onPress={calculate} title="Calculate"> </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
