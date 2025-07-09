import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function OnboardingScreen({ onComplete }: { onComplete: () => void }) {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showDobPicker, setShowDobPicker] = useState(false);
  const [tob, setTob] = useState(new Date());
  const [showTobPicker, setShowTobPicker] = useState(false);
  const [pob, setPob] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  const handleSubmit = () => {
    if (!fullName || !pob || !currentLocation) {
      Alert.alert('Please fill all fields');
      return;
    }
    // TODO: Save data to Firebase Firestore
    onComplete();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} value={fullName} onChangeText={setFullName} placeholder="John Doe" />

      <Text style={styles.label}>Date of Birth</Text>
      <Button title={dob.toDateString()} onPress={() => setShowDobPicker(true)} />
      {showDobPicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDobPicker(false);
            if (selectedDate) setDob(selectedDate);
          }}
        />
      )}

      <Text style={styles.label}>Time of Birth</Text>
      <Button title={tob.toLocaleTimeString()} onPress={() => setShowTobPicker(true)} />
      {showTobPicker && (
        <DateTimePicker
          value={tob}
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            setShowTobPicker(false);
            if (selectedTime) setTob(selectedTime);
          }}
        />
      )}

      <Text style={styles.label}>Place of Birth</Text>
      <TextInput style={styles.input} value={pob} onChangeText={setPob} placeholder="City, Country" />

      <Text style={styles.label}>Current Location</Text>
      <TextInput style={styles.input} value={currentLocation} onChangeText={setCurrentLocation} placeholder="City, Country" />

      <Button title="Complete Onboarding" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginTop: 12,
    marginBottom: 6,
    color: '#4B0082',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
  },
});
