import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  // Placeholder user data and history
  const userDetails = {
    fullName: 'John Doe',
    phoneNumber: '+91 9876543210',
  };

  const purchasedReports = [
    { id: '1', title: 'Wealth Report', date: '2024-05-01' },
    { id: '2', title: 'Love Report', date: '2024-05-10' },
  ];

  const questionHistory = [
    { id: '1', question: 'Will I be rich?', date: '2024-05-15' },
    { id: '2', question: 'Is 2030 my lucky year?', date: '2024-05-20' },
  ];

  const handleLogout = () => {
    // TODO: Implement Firebase logout
    alert('Logout functionality to be implemented');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Personal Details</Text>
      <Text style={styles.detail}>Full Name: {userDetails.fullName}</Text>
      <Text style={styles.detail}>Phone Number: {userDetails.phoneNumber}</Text>

      <Text style={styles.sectionTitle}>Purchased Reports</Text>
      {purchasedReports.map((report) => (
        <Text key={report.id} style={styles.detail}>
          {report.title} - {report.date}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Question History</Text>
      {questionHistory.map((q) => (
        <Text key={q.id} style={styles.detail}>
          {q.question} - {q.date}
        </Text>
      ))}

      <Button title="Logout" onPress={handleLogout} color="#4B0082" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4B0082',
    marginTop: 20,
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 6,
  },
});
