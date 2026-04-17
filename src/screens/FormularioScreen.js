import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, StatusBar, KeyboardAvoidingView, Platform, Alert
} from 'react-native';

export default function FormularioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [nivelAtividade, setNivelAtividade] = useState('');
  const [restricoes, setRestricoes] = useState([]);
  const [diasTreino, setDiasTreino] = useState('');

  // Alterna uma restrição alimentar (marca/desmarca)
  const toggleRestricao = (restricao) => {
    if (restricoes.includes(restricao)) {
      setRestricoes(restricoes.filter(r => r !== restricao));
    } else {
      setRestricoes([...restricoes, restricao]);
    }
  };

  const gerarPlano = () => {
    // Validação simples
    if (!nome || !idade || !genero || !peso || !altura || !objetivo || !nivelAtividade || !diasTreino) {
      Alert.alert('Ops!', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    Alert.alert('Sucesso!', 'Seus dados foram enviados. Em breve seu plano estará pronto!');
    // Futuramente: navigation.navigate('Home', { dadosUsuario: {...} });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <Text style={styles.title}>Seus dados</Text>
          <Text style={styles.subtitle}>Vamos personalizar seu plano</Text>
        </View>

        <View style={styles.card}>

          {/* NOME */}
          <Text style={styles.sectionTitle}>👤 Informações básicas</Text>

          <Text style={styles.label}>Como podemos te chamar?</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            placeholderTextColor="#94A3B8"
            value={nome}
            onChangeText={setNome}
          />

          {/* IDADE */}
          <Text style={styles.label}>Idade</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 25"
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
            value={idade}
            onChangeText={setIdade}
          />

          {/* GÊNERO */}
          <Text style={styles.label}>Gênero</Text>
          <View style={styles.optionsRow}>
            {['Masculino', 'Feminino', 'Outro'].map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[styles.optionButton, genero === opt && styles.optionButtonSelected]}
                onPress={() => setGenero(opt)}
              >
                <Text style={[styles.optionText, genero === opt && styles.optionTextSelected]}>
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* PESO E ALTURA */}
          <View style={styles.row}>
            <View style={styles.halfColumn}>
              <Text style={styles.label}>Peso (kg)</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: 70"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
              />
            </View>
            <View style={styles.halfColumn}>
              <Text style={styles.label}>Altura (cm)</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: 175"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
              />
            </View>
          </View>

          {/* OBJETIVO */}
          <Text style={styles.sectionTitle}>🎯 Objetivo</Text>
          {[
            { id: 'perder', label: 'Perder peso' },
            { id: 'ganhar', label: 'Ganhar massa muscular' },
            { id: 'manter', label: 'Manter peso atual' },
            { id: 'condicionamento', label: 'Melhorar condicionamento' },
          ].map((opt) => (
            <TouchableOpacity
              key={opt.id}
              style={[styles.cardOption, objetivo === opt.id && styles.cardOptionSelected]}
              onPress={() => setObjetivo(opt.id)}
            >
              <Text style={[styles.cardOptionText, objetivo === opt.id && styles.cardOptionTextSelected]}>
                {opt.label}
              </Text>
            </TouchableOpacity>
          ))}

          {/* NÍVEL DE ATIVIDADE */}
          <Text style={styles.sectionTitle}>🏃 Nível de atividade atual</Text>
          {[
            { id: 'sedentario', label: 'Sedentário', desc: 'Pouco ou nenhum exercício' },
            { id: 'leve', label: 'Leve', desc: 'Exercícios 1-3x por semana' },
            { id: 'moderado', label: 'Moderado', desc: 'Exercícios 3-5x por semana' },
            { id: 'intenso', label: 'Intenso', desc: 'Exercícios 6-7x por semana' },
          ].map((opt) => (
            <TouchableOpacity
              key={opt.id}
              style={[styles.cardOption, nivelAtividade === opt.id && styles.cardOptionSelected]}
              onPress={() => setNivelAtividade(opt.id)}
            >
              <Text style={[styles.cardOptionText, nivelAtividade === opt.id && styles.cardOptionTextSelected]}>
                {opt.label}
              </Text>
              <Text style={[styles.cardOptionDesc, nivelAtividade === opt.id && styles.cardOptionDescSelected]}>
                {opt.desc}
              </Text>
            </TouchableOpacity>
          ))}

          {/* RESTRIÇÕES */}
          <Text style={styles.sectionTitle}>🥗 Restrições alimentares</Text>
          <Text style={styles.hint}>Pode marcar mais de uma</Text>
          <View style={styles.chipsContainer}>
            {['Vegetariano', 'Vegano', 'Sem lactose', 'Sem glúten', 'Nenhuma'].map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[styles.chip, restricoes.includes(opt) && styles.chipSelected]}
                onPress={() => toggleRestricao(opt)}
              >
                <Text style={[styles.chipText, restricoes.includes(opt) && styles.chipTextSelected]}>
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* DIAS DE TREINO */}
          <Text style={styles.sectionTitle}>📅 Quantos dias por semana pode treinar?</Text>
          <View style={styles.optionsRow}>
            {['3', '4', '5', '6'].map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[styles.dayButton, diasTreino === opt && styles.dayButtonSelected]}
                onPress={() => setDiasTreino(opt)}
              >
                <Text style={[styles.dayButtonText, diasTreino === opt && styles.dayButtonTextSelected]}>
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* BOTÃO GERAR */}
          <TouchableOpacity style={styles.submitButton} onPress={gerarPlano}>
            <Text style={styles.submitButtonText}>Gerar meu plano 🚀</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0EA5E9' },
  scroll: { flexGrow: 1, padding: 20, paddingTop: 70, paddingBottom: 40 },
  header: { marginBottom: 25 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 16, color: '#E0F2FE', marginTop: 5 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 22 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0EA5E9',
    marginTop: 20,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginTop: 12,
    marginBottom: 6,
  },
  hint: { fontSize: 13, color: '#64748B', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#1E293B',
    backgroundColor: '#F8FAFC',
  },
  row: { flexDirection: 'row', gap: 10 },
  halfColumn: { flex: 1 },
  optionsRow: { flexDirection: 'row', gap: 8, marginTop: 6 },
  optionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  optionButtonSelected: {
    backgroundColor: '#0EA5E9',
    borderColor: '#0EA5E9',
  },
  optionText: { color: '#64748B', fontWeight: '600', fontSize: 14 },
  optionTextSelected: { color: '#fff' },
  cardOption: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginTop: 8,
    backgroundColor: '#F8FAFC',
  },
  cardOptionSelected: {
    backgroundColor: '#0EA5E9',
    borderColor: '#0EA5E9',
  },
  cardOptionText: { color: '#334155', fontWeight: 'bold', fontSize: 15 },
  cardOptionTextSelected: { color: '#fff' },
  cardOptionDesc: { color: '#64748B', fontSize: 13, marginTop: 2 },
  cardOptionDescSelected: { color: '#E0F2FE' },
  chipsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 5 },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
  },
  chipSelected: {
    backgroundColor: '#00B894',
    borderColor: '#00B894',
  },
  chipText: { color: '#64748B', fontWeight: '600', fontSize: 13 },
  chipTextSelected: { color: '#fff' },
  dayButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  dayButtonSelected: {
    backgroundColor: '#0EA5E9',
    borderColor: '#0EA5E9',
  },
  dayButtonText: { color: '#64748B', fontWeight: 'bold', fontSize: 18 },
  dayButtonTextSelected: { color: '#fff' },
  submitButton: {
    backgroundColor: '#00B894',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
});