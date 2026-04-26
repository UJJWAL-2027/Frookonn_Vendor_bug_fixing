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

import { RootStackParamList } from '../navigation/types';

type VendorRegisterScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'VendorRegister'
>;

interface Props {
    navigation: VendorRegisterScreenNavigationProp;
}

const VendorRegisterScreen: React.FC<Props> = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [shopName, setShopName] = useState('');

    const navigateToLogin = () => {
        navigation.navigate('VendorLogin');
    };

    const handleSendOTP = () => {
        console.log('Send OTP to:', mobileNumber);
        navigation.navigate('VendorRegisterOTP', { mobileNumber });
    };

    const handleCreateAccount = () => {
        console.log('Create Account:', { mobileNumber, ownerName, shopName });
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
                            source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772698012/logo_ws8i3j.png' }}
                            style={styles.logo}
                        />

                        {/* Screen Title */}
                        <Text style={styles.titleContainer}>
                            <Text style={styles.titleOrange}>VENDOR </Text>
                            <Text style={styles.titleGreen}>REGISTRATION</Text>
                        </Text>

                        {/* Phone Input Section */}
                        <View style={styles.phoneInputContainer}>
                            <View style={styles.flagContainer}>
                                <Image
                                    source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772697939/india_flag_bifvus.png' }}
                                    style={styles.flagIcon}
                                />
                                <Text style={styles.countryCode}>+91</Text>
                            </View>
                            <View style={styles.verticalDivider} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter the Mobile Number"
                                placeholderTextColor="#888"
                                keyboardType="numeric"
                                value={mobileNumber}
                                onChangeText={setMobileNumber}
                                maxLength={10}
                            />
                        </View>

                        {/* Send OTP Button */}
                        <TouchableOpacity style={styles.sendOtpButton} onPress={handleSendOTP} activeOpacity={0.8}>
                            <Text style={styles.sendOtpText}>SEND OTP</Text>
                        </TouchableOpacity>

                        {/* Owner Name Input */}
                        <Text style={styles.inputLabel}>Owner Name</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInputFull}
                                placeholder="Enter Your Full Name"
                                placeholderTextColor="#888"
                                value={ownerName}
                                onChangeText={setOwnerName}
                            />
                        </View>

                        {/* Shop Name Input */}
                        <Text style={styles.inputLabel}>Shop Name</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInputFull}
                                placeholder="Enter Your shop Name"
                                placeholderTextColor="#888"
                                value={shopName}
                                onChangeText={setShopName}
                            />
                        </View>

                        {/* Create Account Button */}
                        <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount} activeOpacity={0.8}>
                            <Text style={styles.createAccountText}>Create an Account</Text>
                        </TouchableOpacity>

                        {/* Terms Text */}
                        <Text style={styles.termsText}>
                            By Signing Up , You Agree to the <Text style={styles.termsHighlight}>Term & Condition</Text>
                        </Text>

                        {/* Divider Line */}
                        <View style={styles.divider} />

                        {/* Login Text */}
                        <TouchableOpacity onPress={navigateToLogin} activeOpacity={0.6}>
                            <Text style={styles.loginTextContainer}>
                                Already have an account ? <Text style={styles.loginTextHighlight}>Login Here</Text>
                            </Text>
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
    },
    cardContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 20,
        flex: 1,
    },
    logo: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    titleContainer: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    titleOrange: {
        color: '#ff7a00',
    },
    titleGreen: {
        color: '#0c3b2e',
    },
    phoneInputContainer: {
        height: 55,
        borderRadius: 12,
        backgroundColor: '#f3e6c9',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e8d4a6',
    },
    flagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagIcon: {
        width: 24,
        height: 16,
        marginRight: 6,
        resizeMode: 'cover',
        borderRadius: 2,
    },
    countryCode: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        marginRight: 10,
    },
    verticalDivider: {
        width: 1,
        height: 30,
        backgroundColor: '#000',
        marginRight: 10,
        opacity: 0.8,
    },
    textInput: {
        flex: 1,
        fontSize: 15,
        color: '#000',
        padding: 0,
    },
    sendOtpButton: {
        backgroundColor: '#f28c28',
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
    },
    sendOtpText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputLabel: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 6,
        color: '#000',
    },
    inputContainer: {
        height: 50,
        borderRadius: 12,
        backgroundColor: '#f3e6c9',
        paddingHorizontal: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e8d4a6',
        justifyContent: 'center',
    },
    textInputFull: {
        flex: 1,
        fontSize: 15,
        color: '#000',
        padding: 0,
    },
    createAccountButton: {
        backgroundColor: '#000000',
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        marginBottom: 12,
    },
    createAccountText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    termsText: {
        fontSize: 12,
        color: '#777',
        textAlign: 'center',
        marginBottom: 5,
    },
    termsHighlight: {
        color: '#ff7a00',
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: '#dddddd',
        marginVertical: 10,
        width: '100%',
    },
    loginTextContainer: {
        fontSize: 13,
        textAlign: 'center',
        color: '#000',
        marginTop: 5,
    },
    loginTextHighlight: {
        color: '#ff7a00',
        fontWeight: 'bold',
    },
});

export default VendorRegisterScreen;
