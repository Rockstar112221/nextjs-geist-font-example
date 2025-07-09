import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  // Placeholder data, to be replaced with API integration
  const zodiacSign = 'Aries';
  const todaysHoroscope = 'Today is a great day to start new ventures.';
  const luckyColor = 'Red';
  const luckyNumber = 9;
  const rahuKaal = '12:00 PM - 1:30 PM';
  const auspiciousTime = '3:00 PM - 4:00 PM';
  const tomorrowsForecast = 'Tomorrow will bring new opportunities.';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Zodiac Sign: {zodiacSign}</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Horoscope</Text>
        <Text style={styles.cardContent}>{todaysHoroscope}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Lucky Color & Number</Text>
        <Text style={styles.cardContent}>{luckyColor} & {luckyNumber}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Rahu Kaal</Text>
        <Text style={styles.cardContent}>{rahuKaal}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Auspicious Time</Text>
        <Text style={styles.cardContent}>{auspiciousTime}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tomorrow's Forecast (Optional)</Text>
        <Text style={styles.cardContent}>{tomorrowsForecast}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FDF6E3', // Astro Gold light
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#4B0082',
  },
  cardContent: {
    fontSize: 16,
    color: '#333',
  },
});
