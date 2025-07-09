import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AskQuestionScreen() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [asked, setAsked] = useState(false);

  const handleAsk = () => {
    if (!question.trim()) {
      Alert.alert('Please enter a question');
      return;
    }
    // Placeholder: Call backend API to get answer using Prokerala + OpenAI
    setAnswer("According to your Dasha and planetary position, your wealth phase improves after mid-2028...");
    setAsked(true);
  };

  return (
    <View style={styles.container}>
      {!asked ? (
        <>
          <Text style={styles.label}>Ask your question (one free question):</Text>
          <TextInput
            style={styles.input}
            placeholder="Will I be rich?"
            value={question}
            onChangeText={setQuestion}
            multiline
          />
          <Button title="Ask" onPress={handleAsk} />
        </>
      ) : (
        <>
          <Text style={styles.answerLabel}>Answer:</Text>
          <Text style={styles.answer}>{answer}</Text>
          <Button title="Ask Another (Buy 10 questions for ₹99)" onPress={() => Alert.alert('Paywall - Payment flow to be implemented')} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 16, backgroundColor: '#fff' },
  label: { fontSize: 18, marginBottom: 12, color: '#4B0082' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 12, marginBottom: 16, minHeight: 80, textAlignVertical: 'top' },
  answerLabel: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#4B0082' },
  answer: { fontSize: 16, color: '#333', marginBottom: 20 },
});
