import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState<string | null>(null);
  const [code, setCode] = useState('');
  const [confirming, setConfirming] = useState(false);

  const auth = getAuth();

  const setupRecaptcha = () => {
    if (!auth.app) return;
    // Note: RecaptchaVerifier is web only, for React Native use Firebase Phone Auth differently
    // Placeholder for recaptcha setup if needed
  };

  const sendVerification = async () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }
    try {
      setConfirming(true);
      setupRecaptcha();
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber);
      setVerificationId(confirmationResult.verificationId);
      setConfirming(false);
    } catch (error: any) {
      Alert.alert('Error', error.message);
      setConfirming(false);
    }
  };

  const confirmCode = async () => {
    try {
      if (!verificationId) {
        Alert.alert('Error', 'No verification ID found');
        return;
      }
      const credential = auth.PhoneAuthProvider.credential(verificationId, code);
      await auth.signInWithCredential(credential);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {!verificationId ? (
        <>
          <Text style={styles.label}>Enter Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+91 98765 43210"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Button title={confirming ? "Sending..." : "Send OTP"} onPress={sendVerification} disabled={confirming} />
        </>
      ) : (
        <>
          <Text style={styles.label}>Enter OTP</Text>
          <TextInput
            style={styles.input}
            placeholder="123456"
            keyboardType="number-pad"
            value={code}
            onChangeText={setCode}
          />
          <Button title="Confirm OTP" onPress={confirmCode} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20 },
  label: { fontSize:18, marginBottom:10 },
  input: { borderWidth:1, borderColor:'#ccc', padding:10, marginBottom:20, borderRadius:5 }
});
