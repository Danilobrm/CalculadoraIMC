import { TextInput, TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function BMIForm({ form, setForm, onCalculate, onClear }) {
  return (
    <View style={styles.form}>
      <TextInput
        onChangeText={(text) => setForm({ ...form, weight: text })}
        value={form.weight}
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        placeholderTextColor="#999"
      />
      <TextInput
        onChangeText={(text) => setForm({ ...form, height: text })}
        value={form.height}
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        placeholderTextColor="#999"
      />
      <TouchableOpacity onPress={onCalculate} style={styles.button}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClear} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: 15 },
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
