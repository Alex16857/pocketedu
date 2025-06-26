import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { topSchools } from '../../data/topSchools';

export default function UniversitiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top 20 U.S. Universities</Text>
      <FlatList
        data={topSchools}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Link
            href={`/${item.slug}` as any}
            asChild
          >
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && { backgroundColor: '#e0e0e0' }
              ]}
            >
              <Text style={styles.schoolName}>{item.rank}. {item.name}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
  },
  schoolName: {
    fontSize: 18,
    fontWeight: '600',
  },
  location: {
    fontSize: 14,
    color: '#555',
  },
}); 