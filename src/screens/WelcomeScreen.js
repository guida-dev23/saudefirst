import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.content}>
                <Text style={styles.logo}>SaúdeFirst</Text>
                <Text style={styles.slogan}>Sua saúde em primeiro lugar</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={styles.primaryButtonText}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleButton}>
                    <Text style={styles.googleButtonText}>Continuar com Google</Text>
                </TouchableOpacity>

                <View style={styles.loginRow}>
                    <Text style={styles.loginText}>Já tem uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginLink}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.footer}>
                Ao continuar, você concorda com os Termos de Uso
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0EA5E9',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        paddingTop: 120,
        paddingBottom: 40,
    },
    content: { alignItems: 'center' },
    logo: { fontSize: 52, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
    slogan: { fontSize: 18, color: '#E0F2FE' },
    buttonContainer: { width: '100%', gap: 12, alignItems: 'center' },
    primaryButton: {
        backgroundColor: '#00B894',
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
        width: '100%',
    },
    primaryButtonText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
    googleButton: {
        backgroundColor: '#fff',
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
        width: '100%',
    },
    googleButtonText: { color: '#333', fontSize: 17, fontWeight: 'bold' },
    loginRow: { flexDirection: 'row', marginTop: 15, alignItems: 'center' },
    loginText: { color: '#E0F2FE', fontSize: 15 },
    loginLink: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    footer: {
        color: '#E0F2FE',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
    },
});