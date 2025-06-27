import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MenuPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Link href="/" style={styles.link}><Text style={styles.linkText}>Home (Welcome)</Text></Link>
      <Link href="/(tabs)" style={styles.link}><Text style={styles.linkText}>University List</Text></Link>
      <Link href="/university-of-california-berkeley" style={styles.link}><Text style={styles.linkText}>Sample University Page</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  link: {
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  linkText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
