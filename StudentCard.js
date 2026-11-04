import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function StudentCard({ id, name, year, photoUrl, flagged, onToggleFlag }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: photoUrl }} style={styles.avatar} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.yearText}>{year}</Text>
      </View>

      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged ? styles.flaggedButton : styles.unflaggedButton,
          pressed && styles.pressedState,
        ]}
      >
        <Text style={[styles.flagButtonText, flagged ? styles.flaggedText : styles.unflaggedText]}>
          {flagged ? '★ Flagged' : '☆ Flag'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1B4B',
  },
  yearText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  flagButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
  },
  unflaggedButton: {
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
  },
  flaggedButton: {
    borderColor: '#D97706',
    backgroundColor: '#D97706',
  },
  pressedState: {
    opacity: 0.7,
  },
  flagButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  unflaggedText: {
    color: '#374151',
  },
  flaggedText: {
    color: '#FFFFFF',
  },
});