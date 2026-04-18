import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Dimensions,
    Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/types';

type VendorSplashScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'VendorSplash'
>;

interface Props {
    navigation: VendorSplashScreenNavigationProp;
}

const { height } = Dimensions.get('window');

const VendorSplashScreen: React.FC<Props> = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    const handleGetStarted = () => {
        navigation.navigate('VendorRegister');
    };

    return (
        <View style={styles.root}>
            <Animated.View style={[styles.cardContainer, { opacity: fadeAnim }]}>

                {/* Top left Logo Placeholder */}
                <View style={styles.logoContainer}>
                    <Image
                        source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772698012/logo_ws8i3j.png' }}
                        style={styles.logoIcon}
                    />
                </View>

                {/* Title Text Section */}
                <View style={styles.titleContainer}>
                    <Text style={styles.titleLine1}>Your Products.</Text>
                    <Text style={styles.titleLine2}>Delivered</Text>
                </View>

                {/* Delivery Rider Illustration Placeholder */}
                <Image
                    source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772697728/delivery_rider_flgswq.png' }}
                    style={styles.riderImage}
                    resizeMode="contain"
                />

                {/* Get Started Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleGetStarted}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    cardContainer: {
        flex: 1,
        backgroundColor: '#E5C06A', // Mustard yellow
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        paddingTop: 60, // Avoid status bar overlap
        paddingBottom: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoContainer: {
        alignSelf: 'flex-start',
    },
    logoIcon: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#FFFFFF',
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    titleLine1: {
        fontSize: 32,
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    titleLine2: {
        fontSize: 38,
        fontWeight: '900',
        color: '#0B3D1E', // Dark green
        textAlign: 'center',
        marginTop: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    riderImage: {
        width: '100%',
        height: height * 0.45,
        backgroundColor: 'transparent',
    },
    button: {
        backgroundColor: '#000000',
        height: 60,
        width: '85%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default VendorSplashScreen;
