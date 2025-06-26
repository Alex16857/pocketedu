import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../components/Logo';

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo size="large" color="#007AFF" />
      <Text style={styles.title}>Welcome to UniExplorer!</Text>
      <Text style={styles.subtitle}>Discover top U.S. universities and their stats.</Text>
      <Link href="/(tabs)" style={styles.link}>
        <Text style={styles.linkText}>Go to University List</Text>
      </Link>
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
    marginTop: 20,
    marginBottom: 16, 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18, 
    marginBottom: 32, 
    textAlign: 'center',
    color: '#666',
  },
  link: {
    backgroundColor: '#007AFF', 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 8,
  },
  linkText: {
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '600',
  },
}); 