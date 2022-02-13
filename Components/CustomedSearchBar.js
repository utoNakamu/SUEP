import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function CustomedSearchBar({ onChangeText, onEndEditing, value, placeholder, onTapIcon , style}) {
  return (
    < View style={[styles.textInputWrapper, style] }>
      <TextInput
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        value={value}
        placeholder={placeholder}
        autoCapitalize='none'
        style={styles.textInputDesign}
        textStyle={styles.textInpuText }
        maxLength={40}
      />
      <TouchableOpacity
        onPress={onTapIcon}>
        <Ionicons name="close-circle-sharp" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textInputWrapper: {
    backgroundColor: 'white',
    paddingVertical: 9,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 8,
  },
  textInputDesign: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInpuText: {
    color: 'black'
  },
})
