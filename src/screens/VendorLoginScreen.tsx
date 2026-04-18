import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/FontAwesome';

import { RootStackParamList } from '../navigation/types';

type VendorLoginNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'VendorLogin'
>;

interface Props {
    navigation: VendorLoginNavigationProp;
}

const VendorLoginScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login attempt:', { email, password });
        navigation.navigate('MainApp');
    };

    const handleResetPassword = () => {
        console.log('Reset Password requested');
        // navigation.navigate('ResetPassword');
    };

    const handleGoogleLogin = () => {
        console.log('Google login requested');
    };

    const handleFacebookLogin = () => {
        console.log('Facebook login requested');
    };

    return (
        <SafeAreaView style={styles.root}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, width: '100%' }}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.cardContainer}>
                        {/* Logo */}
                        <Image
                            source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772698012/logo_ws8i3j.png' }} // Using dummy URI to prevent 500 error
                            style={styles.logo}
                        />

                        {/* Title & Subtitle */}
                        <Text style={styles.mainTitle}>Login to your account</Text>
                        <Text style={styles.subtitle}>it's great to see you again</Text>

                        {/* Email Input Section */}
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter Your Email Address"
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />

                        {/* Password Input Section */}
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter Your Password"
                            placeholderTextColor="#888"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />

                        {/* Forgot Password */}
                        <TouchableOpacity onPress={handleResetPassword} activeOpacity={0.6}>
                            <Text style={styles.forgotPasswordText}>
                                Forgot your password ?{' '}
                                <Text style={styles.resetPasswordHighlight}>
                                    Reset Your Password
                                </Text>
                            </Text>
                        </TouchableOpacity>

                        {/* Login Button */}
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={handleLogin}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>

                        {/* OR Divider */}
                        <View style={styles.dividerContainer}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>OR</Text>
                            <View style={styles.dividerLine} />
                        </View>

                        {/* Social Login Buttons */}
                        <TouchableOpacity
                            style={styles.socialButton}
                            onPress={handleGoogleLogin}
                            activeOpacity={0.8}
                        >
                            <Text style={{ fontSize: 18, color: '#DB4437' }}>G</Text>
                            <Text style={styles.socialButtonText}>Login with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.socialButton}
                            onPress={handleFacebookLogin}
                            activeOpacity={0.8}
                        >
                            <Text style={{ fontSize: 18, color: '#4267B2' }}>f</Text>
                            <Text style={styles.socialButtonText}>Login with Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContent: {
        flexGrow: 1,
        width: '100%',
        paddingBottom: 30, // Extra padding for scrolling
    },
    cardContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 22,
        flex: 1,
    },
    logo: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff7a00',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: '#555555',
        marginBottom: 24,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 6,
    },
    inputField: {
        height: 50,
        borderRadius: 12,
        backgroundColor: '#f3ede3',
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginBottom: 18,
        color: '#000',
        fontSize: 15,
    },
    forgotPasswordText: {
        fontSize: 13,
        color: '#555555',
        marginTop: 8,
        marginBottom: 18,
        textAlign: 'center',
    },
    resetPasswordHighlight: {
        color: '#ff7a00',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#000000',
        height: 50,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    dividerLine: {
        height: 1,
        backgroundColor: '#cccccc',
        flex: 1,
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#555555',
        fontSize: 14,
        fontWeight: '500',
    },
    socialButton: {
        height: 50,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#cccccc',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        elevation: 2,
    },
    socialButtonText: {
        fontSize: 15,
        marginLeft: 8,
        color: '#000',
        fontWeight: '500',
    },
});

export default VendorLoginScreen;
