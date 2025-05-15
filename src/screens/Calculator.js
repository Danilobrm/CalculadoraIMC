import { useState } from "react";
import BMIForm from "../components/BMIForm";
import BMIResult from "../components/BMIResult";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { calculateBMI } from "../calculateBMI";

export default function BMICalculator() {
  const [form, setForm] = useState({ weight: "", height: "" });
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setError(null);
    setResult(null);

    const output = calculateBMI(form.weight, form.height);
    if (output.error) {
      setError(output.error);
    } else {
      setResult(output);
    }
  };

  const handleClear = () => {
    setForm({ weight: "", height: "" });
    setError(null);
    setResult(null);
  };

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <View style={styles.formContainer}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2919/2919600.png" }} style={styles.logo} />
        <Text style={styles.title}>Calculadora de IMC</Text>
        <BMIForm form={form} setForm={setForm} onCalculate={handleCalculate} onClear={handleClear} />
        <BMIResult result={result} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  formContainer: {
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
  errorContainer: {
    backgroundColor: "#f8d7da",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    position: "absolute",
    top: 100,
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
    zIndex: 999,
  },
  errorText: {
    color: "#721c24",
    fontSize: 14,
  },
});
