import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { topSchools } from '../data/topSchools';

export default function SchoolScreen() {
  const { school: slug } = useLocalSearchParams();
  const schoolData = topSchools.find((s: any) => s.slug === slug);

  if (!schoolData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>School not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.school}>{schoolData.name}</Text>
      <Text style={styles.location}>{schoolData.location}</Text>
      <Text style={styles.rank}>Rank: {schoolData.rank}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  school: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  location: {
    fontSize: 18,
    marginTop: 10,
    color: '#555',
  },
  rank: {
    fontSize: 16,
    marginTop: 5,
    color: '#888',
  },
});
