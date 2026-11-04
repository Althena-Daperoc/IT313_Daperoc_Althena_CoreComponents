import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, SafeAreaView, Pressable, Image } from 'react-native';

const initialStudents = [
  { id: "s1", name: "Ana Cruz", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=1" },
  { id: "s2", name: "Bea Santos", year: "2nd Year", photoUrl: "https://i.pravatar.cc/100?img=2" },
  { id: "s3", name: "Cid Ramos", year: "4th Year", photoUrl: "https://i.pravatar.cc/100?img=3" },
  { id: "s4", name: "Dex Alonzo", year: "1st Year", photoUrl: "https://i.pravatar.cc/100?img=4" },
  { id: "s5", name: "Eli Tan", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=5" },
];

export default function Index() {
  const [students, setStudents] = useState(
    initialStudents.map((student) => ({ ...student, flagged: student.id === 's1' }))
  );
  const [query, setQuery] = useState('');

  const toggleFlag = (id: string) => {
    setStudents((prevStudents) =>
      prevStudents.map((item) =>
        item.id === id ? { ...item, flagged: !item.flagged } : item
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Student Directory</Text>
        <Text style={styles.subtitle}>{students.length} students this term</Text>
      </View>

      <View style={styles.body}>
        <TextInput
          style={styles.searchBar}
          placeholder="🔍 Search students..."
          value={query}
          onChangeText={setQuery}
        />

        <ScrollView contentContainerStyle={styles.scrollList} showsVerticalScrollIndicator={false}>
          {filteredStudents.map((student) => (
            <View key={student.id} style={styles.cardContainer}>
              {/* Student Avatar Image with explicit dimensions and rounded corners */}
              <Image source={{ uri: student.photoUrl }} style={styles.avatar} />

              <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{student.name}</Text>
                <Text style={styles.yearText}>{student.year}</Text>
              </View>

              <Pressable
                onPress={() => toggleFlag(student.id)}
                style={[styles.flagButton, student.flagged ? styles.flaggedButton : styles.unflaggedButton]}
              >
                <Text style={student.flagged ? styles.flaggedText : styles.unflaggedText}>
                  {student.flagged ? '★ Flagged' : '☆ Flag'}
                </Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#1E1B4B' },
  header: { paddingHorizontal: 20, paddingTop: 40, paddingBottom: 20, backgroundColor: '#1E1B4B' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' },
  subtitle: { fontSize: 14, color: '#A5B4FC', marginTop: 4 },
  body: { flex: 1, backgroundColor: '#F3F4F6', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 16, paddingTop: 16 },
  searchBar: { backgroundColor: '#FFFFFF', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, fontSize: 15, marginBottom: 16, borderWidth: 1, borderColor: '#E5E7EB' },
  scrollList: { paddingBottom: 20 },
  cardContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 12, marginBottom: 10 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  infoContainer: { flex: 1 },
  nameText: { fontSize: 16, fontWeight: 'bold', color: '#1E1B4B' },
  yearText: { fontSize: 14, color: '#6B7280', marginTop: 2 },
  flagButton: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 20, borderWidth: 1 },
  unflaggedButton: { borderColor: '#D1D5DB', backgroundColor: '#FFFFFF' },
  flaggedButton: { borderColor: '#D97706', backgroundColor: '#D97706' },
  unflaggedText: { color: '#374151', fontSize: 13, fontWeight: '600' },
  flaggedText: { color: '#FFFFFF', fontSize: 13, fontWeight: '600' },
});