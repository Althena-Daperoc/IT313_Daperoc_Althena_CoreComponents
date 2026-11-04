import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import StudentCard from './StudentCard';

const initialStudents = [
  { id: "s1", name: "Jeo Cruz", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=1" },
  { id: "s2", name: "Bea Santos", year: "2nd Year", photoUrl: "https://i.pravatar.cc/100?img=2" },
  { id: "s3", name: "Cid Ramos", year: "4th Year", photoUrl: "https://i.pravatar.cc/100?img=3" },
  { id: "s4", name: "Dex Alonzo", year: "1st Year", photoUrl: "https://i.pravatar.cc/100?img=4" },
  { id: "s5", name: "Eli Tan", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=5" },
];

export default function StudentDirectory() {
  const [students, setStudents] = useState(
    initialStudents.map((student) => ({ ...student, flagged: student.id === 's1' }))
  );
  const [query, setQuery] = useState('');

  const toggleFlag = (id) => {
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
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
              photoUrl={student.photoUrl}
              flagged={student.flagged}
              onToggleFlag={toggleFlag}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#1E1B4B',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#1E1B4B',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#A5B4FC',
    marginTop: 4,
  },
  body: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  scrollList: {
    paddingBottom: 20,
  },
});