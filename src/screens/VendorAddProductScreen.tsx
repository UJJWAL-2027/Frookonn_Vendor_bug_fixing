import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const { width } = Dimensions.get('window');

type VendorAddProductNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'VendorAddProduct'
>;

interface Props {
    navigation: VendorAddProductNavigationProp;
}

const VendorAddProductScreen: React.FC<Props> = ({ navigation }) => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [stock, setStock] = useState('');
    const [sku, setSku] = useState('');

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainContainer}>
                    {/* TOP HEADER CARD */}
                    <View style={styles.headerCard}>
                        <View style={styles.headerTopRow}>
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772698012/logo_ws8i3j.png' }}
                                style={styles.logo}
                            />
                            <TouchableOpacity style={styles.menuButton}>
                                <Feather name="menu" size={22} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.welcomeText}>Welcome to Frookoon Vendor Panel</Text>
                        <Text style={styles.vendorName}>AMIT PATEL</Text>
                        
                        {/* ILLUSTRATION AREA */}
                        <View style={styles.illustrationArea}>
                            {/* Placeholder for illustration */}
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Add Product</Text>

                    {/* INPUT FIELDS */}
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Product Name</Text>
                        <TextInput
                            style={styles.input}
                            value={productName}
                            onChangeText={setProductName}
                        />

                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={styles.input}
                            value={description}
                            onChangeText={setDescription}
                        />

                        <Text style={styles.label}>Price</Text>
                        <TextInput
                            style={styles.input}
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                        />

                        <View style={styles.rowInputs}>
                            <View style={styles.inputHalf}>
                                <Text style={styles.label}>Discount</Text>
                                <TextInput
                                    style={styles.input}
                                    value={discount}
                                    onChangeText={setDiscount}
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={styles.inputHalf}>
                                <Text style={styles.label}>Stack Quantity</Text>
                                <TextInput
                                    style={styles.input}
                                    value={stock}
                                    onChangeText={setStock}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>

                        <Text style={styles.label}>SKU/Product Code</Text>
                        <TextInput
                            style={styles.input}
                            value={sku}
                            onChangeText={setSku}
                        />

                        {/* UPLOAD IMAGE BOX */}
                        <TouchableOpacity style={styles.uploadBox}>
                            <Text style={styles.uploadTitle}>Upload Product Image</Text>
                            <Text style={styles.uploadSubtitle}>drag & drop or Click to Upload</Text>
                        </TouchableOpacity>

                        {/* BOTTOM BUTTON ROW */}
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.addProductBtn}>
                                <Text style={styles.addProductBtnText}>Add Product</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
                                <Text style={styles.cancelBtnText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* BOTTOM TAB NAVIGATION */}
            <View style={styles.bottomTabNav}>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('VendorDashboard')}>
                    <Text style={{ fontSize: 20 }}>🏠</Text>
                    <Text style={styles.tabText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('VendorProductList')}>
                    <Text style={{ fontSize: 20 }}>📦</Text>
                    <Text style={[styles.tabText, { color: '#ff7a00' }]}>Products</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Text style={{ fontSize: 20 }}>📁</Text>
                    <Text style={styles.tabText}>Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.tabItem}
                    onPress={() => navigation.navigate('VendorOrders')}
                >
                    <Text style={{ fontSize: 20 }}>📜</Text>
                    <Text style={styles.tabText}>Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Text style={{ fontSize: 20 }}>👤</Text>
                    <Text style={styles.tabText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    mainContainer: {
        paddingHorizontal: 16,
    },
    headerCard: {
        backgroundColor: '#f5f5f5',
        borderRadius: 16,
        padding: 16,
        marginTop: 10,
        marginBottom: 12,
    },
    headerTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    menuButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 14,
        color: '#2f5d50',
        marginTop: 10,
    },
    vendorName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    illustrationArea: {
        height: 120,
        marginTop: 10,
        borderRadius: 12,
        backgroundColor: '#eaf2ea',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginTop: 16,
        marginBottom: 10,
    },
    formContainer: {
        paddingBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginBottom: 4,
    },
    input: {
        height: 45,
        backgroundColor: '#efe4c9',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e5b567',
        paddingHorizontal: 10,
        marginBottom: 12,
        color: '#000',
    },
    rowInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputHalf: {
        width: '48%',
    },
    uploadBox: {
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e5b567',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        marginBottom: 14,
    },
    uploadTitle: {
        fontWeight: '600',
        color: '#000',
    },
    uploadSubtitle: {
        fontSize: 12,
        color: '#777',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    addProductBtn: {
        width: '48%',
        backgroundColor: '#000',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    addProductBtnText: {
        color: 'white',
        fontWeight: '600',
    },
    cancelBtn: {
        width: '48%',
        backgroundColor: '#f3f3f3',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    cancelBtnText: {
        color: '#000',
        fontWeight: '600',
    },
    bottomTabNav: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 5,
    },
    tabItem: {
        alignItems: 'center',
    },
    tabText: {
        fontSize: 10,
        fontWeight: '500',
        color: '#000',
        marginTop: 2,
    },
});

export default VendorAddProductScreen;
