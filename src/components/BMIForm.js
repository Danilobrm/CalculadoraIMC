import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";

export default function BMIForm({ form, setForm, onCalculate, onClear }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2919/2919600.png" }} style={styles.logo} />
      <Text style={styles.title}>Calculadora de IMC</Text>
      <View style={styles.form}>
        <CalculatorInput
          placeholder="Peso (kg)"
          value={form.weight}
          onChangeText={(text) => setForm({ ...form, weight: text })}
        />
        <CalculatorInput
          placeholder="Altura (m)"
          value={form.height}
          onChangeText={(text) => setForm({ ...form, height: text })}
        />
        <TouchableOpacity onPress={onCalculate} style={styles.button}>
          <Text style={styles.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClear} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const CalculatorInput = ({ placeholder, value, onChangeText }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    keyboardType="numeric"
    placeholderTextColor="#999"
  />
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  form: {
    gap: 15,
  },
  input: {
    backgroundColor: "#f4f4f4",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0095f6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  clearButton: {
    backgroundColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  clearButtonText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
});
