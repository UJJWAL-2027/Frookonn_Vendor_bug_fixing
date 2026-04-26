import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'VendorRegisterOTP'>;

const VendorRegisterOTPScreen: React.FC<Props> = ({ route, navigation }) => {
    const { mobileNumber } = route.params;
    const [otp, setOtp] = useState(['', '', '', '']);
    const [ownerName, setOwnerName] = useState('');
    const [timer, setTimer] = useState(28);
    
    const otpRefs = useRef<(TextInput | null)[]>([]);

    useEffect(() => {
        let interval: any;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleOtpChange = (value: string, index: number) => {
        if (value.length > 1) {
            value = value.slice(-1);
        }
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleBackPress = (index: number, e: any) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-[#f5f5f5]">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1 justify-center items-center p-4"
            >
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                    showsVerticalScrollIndicator={false}
                    className="w-full"
                >
                    <View className="bg-white rounded-[25px] w-full max-w-[350px] p-6 shadow-lg">
                        {/* Top Section */}
                        <View className="flex-row items-center mb-6">
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772698012/logo_ws8i3j.png' }}
                                className="w-10 h-10 rounded-full"
                                resizeMode="contain"
                            />
                        </View>

                        <View className="flex-row mb-8">
                            <Text className="text-2xl font-black text-[#f97316]">VENDOR </Text>
                            <Text className="text-2xl font-black text-[#064e3b]">REGISTRATION</Text>
                        </View>

                        {/* Mobile Input Section */}
                        <View className="flex-row items-center bg-[#f5e6c8] border border-[#eab308] rounded-full px-4 h-12 mb-4">
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772697939/india_flag_bifvus.png' }}
                                className="w-6 h-4 mr-2"
                            />
                            <Text className="text-base font-bold mr-2">+91</Text>
                            <View className="w-[1px] h-6 bg-gray-400 mr-3" />
                            <Text className="text-gray-600 text-sm flex-1">{mobileNumber || 'Enter the Mobile Number'}</Text>
                        </View>

                        {/* SEND OTP Button */}
                        <TouchableOpacity 
                            activeOpacity={0.7}
                            className="bg-[#fcd9b6] rounded-[12px] h-10 justify-center items-center shadow-sm w-32 self-center mb-6"
                        >
                            <Text className="text-white font-bold text-sm tracking-widest">SEND OTP</Text>
                        </TouchableOpacity>

                        {/* OTP Section */}
                        <View className="flex-row justify-between mb-6 px-2">
                             {otp.map((digit, index) => (
                                <View key={index} className="relative">
                                    <TextInput
                                        ref={(el) => { otpRefs.current[index] = el; }}
                                        value={digit}
                                        onChangeText={(val) => handleOtpChange(val, index)}
                                        onKeyPress={(e) => handleBackPress(index, e)}
                                        keyboardType="numeric"
                                        maxLength={1}
                                        className="w-12 h-12 border border-gray-300 rounded-[10px] bg-[#f9f9f9] text-center text-transparent"
                                    />
                                    {digit ? (
                                        <View className="absolute inset-0 pointer-events-none justify-center items-center">
                                            <View className="w-2 h-2 rounded-full bg-black" />
                                        </View>
                                    ) : null}
                                </View>
                            ))}
                        </View>

                        {/* Resend Text */}
                        <Text className="text-center text-gray-700 font-medium mb-8">
                            Resend OTP in <Text className="text-[#f97316]">{formatTime(timer)}</Text>
                        </Text>

                        {/* Owner Name Section */}
                        <Text className="text-base font-bold text-gray-900 mb-2">Owner Name</Text>
                        <TextInput
                            placeholder="Enter Your Full Name"
                            placeholderTextColor="#888"
                            value={ownerName}
                            onChangeText={setOwnerName}
                            className="bg-[#f5e6c8] border border-[#eab308] rounded-full px-4 h-12 mb-4 text-gray-800"
                        />

                        {/* Agreement Section */}
                        <TouchableOpacity activeOpacity={0.6} className="mb-4">
                            <Text className="text-[11px] text-gray-500 text-center">
                                By Signing Up, You Agree to the{' '}
                                <Text className="text-[#f97316] font-semibold">Term & Condition</Text>
                            </Text>
                        </TouchableOpacity>

                        <View className="h-[1px] bg-gray-200 w-full mb-4" />

                        {/* Login Section */}
                        <View className="flex-row justify-center">
                            <Text className="text-sm text-gray-600">Already have an account ? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('VendorLogin')}>
                                <Text className="text-sm text-[#f97316] font-bold underline">Login Here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default VendorRegisterOTPScreen;
