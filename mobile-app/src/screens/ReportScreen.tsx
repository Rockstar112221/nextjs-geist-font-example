import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';

const reports = [
  { id: '1', title: 'Wealth Report', price: 199 },
  { id: '2', title: 'Love Report', price: 199 },
  { id: '3', title: 'Career Report', price: 199 },
  { id: '4', title: 'Full Life Profile', price: 199 },
];

export default function ReportScreen() {
  const handlePurchase = (report) => {
    Alert.alert('Purchase', `Purchase ${report.title} for ₹${report.price} - Payment flow to be implemented`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.reportCard}>
      <Text style={styles.reportTitle}>{item.title}</Text>
      <Text style={styles.reportPrice}>₹{item.price}</Text>
      <Button title="Buy" onPress={() => handlePurchase(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 16, backgroundColor: '#fff' },
  reportCard: {
    backgroundColor: '#FDF6E3',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4B0082',
    marginBottom: 8,
  },
  reportPrice: {
    fontSize: 16,
    marginBottom: 12,
  },
});
