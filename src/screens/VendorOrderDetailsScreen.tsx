import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OrdersStackParamList } from '../navigation/types';

const { width } = Dimensions.get('window');

type VendorOrderDetailsNavigationProp = NativeStackNavigationProp<
    OrdersStackParamList,
    'VendorOrderDetail'
>;

interface Props {
    navigation: VendorOrderDetailsNavigationProp;
}

const VendorOrderDetailsScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.root}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainContainer}>
                    {/* HEADER SECTION */}
                    <View style={styles.headerContainer}>
                        <View style={styles.headerTitleRow}>
                            <TouchableOpacity 
                                style={styles.backButton}
                                onPress={() => navigation.goBack()}
                            >
                                <Image
                                    source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772698012/logo_ws8i3j.png' }}
                                    style={styles.headerLogoSmall}
                                />
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>Order Details</Text>
                        </View>
                    </View>

                    {/* ORDER ID BAR */}
                    <View style={styles.orderIdBar}>
                        <Text style={styles.orderIdText}>Order ID : #1234</Text>
                        <View style={styles.newBadge}>
                            <Text style={styles.newBadgeText}>New</Text>
                        </View>
                    </View>

                    {/* CUSTOMER INFO SECTION */}
                    <Text style={styles.sectionTitle}>Customer Info</Text>
                    <View style={styles.customerCard}>
                        <View style={styles.avatarBox}>
                            <Text style={styles.avatarLetter}>R</Text>
                        </View>
                        <View style={styles.customerDetails}>
                            <Text style={styles.customerName}>Rohit Kumar</Text>
                            <View style={styles.infoRow}>
                                <Feather name="phone" size={14} color="#444" />
                                <Text style={styles.infoText}>+91 1234567891</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <Feather name="map-pin" size={14} color="#444" />
                                <Text style={styles.infoText}>123 -------------</Text>
                            </View>
                        </View>
                        <Feather name="chevron-right" size={22} color="#777" />
                    </View>

                    {/* PRODUCT SUMMARY SECTION */}
                    <Text style={styles.sectionTitle}>Product Summary</Text>
                    <View style={styles.productCard}>
                        <View style={styles.productContentRow}>
                            <View style={styles.productImagePlaceholder}>
                                <Image
                                    source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772698012/logo_ws8i3j.png' }}
                                    style={styles.productImage}
                                />
                            </View>
                            <View style={styles.productPlaceholderLines}>
                                <View style={styles.placeholderLineLarge} />
                                <View style={styles.placeholderLineSmall} />
                            </View>
                        </View>

                        {/* PRICE BOX */}
                        <View style={styles.priceBox}>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceLabel}>Amount</Text>
                                <View style={styles.priceValueBar} />
                            </View>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceLabel}>Discount</Text>
                                <View style={[styles.priceValueBar, { backgroundColor: '#4CAF50', width: 40 }]} />
                            </View>
                            <View style={styles.priceRow}>
                                <Text style={[styles.priceLabel, { fontWeight: '700' }]}>Total</Text>
                                <View style={styles.priceValueBar} />
                            </View>
                        </View>
                    </View>

                    {/* ORDER STATUS SECTION */}
                    <Text style={styles.sectionTitle}>Order Status</Text>
                    <View style={styles.statusCard}>
                        {/* Timeline Step 1 */}
                        <View style={styles.timelineItem}>
                            <View style={styles.timelineLeft}>
                                <View style={styles.circleActive} />
                                <View style={styles.lineConnector} />
                            </View>
                            <View style={styles.timelineContent}>
                                <View style={styles.statusHeaderWithBadge}>
                                    <Text style={styles.statusLabelActive}>Order Placed</Text>
                                    <View style={styles.miniNewBadge}>
                                        <Text style={styles.miniNewBadgeText}>New</Text>
                                    </View>
                                </View>
                                <Text style={styles.statusDate}>Apr 24, 2026</Text>
                            </View>
                        </View>

                        {/* Timeline Step 2 */}
                        <View style={styles.timelineItem}>
                            <View style={styles.timelineLeft}>
                                <View style={styles.circleInactive} />
                                <View style={styles.lineConnector} />
                            </View>
                            <View style={styles.timelineContent}>
                                <Text style={styles.statusLabelInactive}>Processing</Text>
                            </View>
                        </View>

                        {/* Timeline Step 3 */}
                        <View style={styles.timelineItem}>
                            <View style={styles.timelineLeft}>
                                <View style={styles.circleInactive} />
                                <View style={styles.lineConnector} />
                            </View>
                            <View style={styles.timelineContent}>
                                <Text style={styles.statusLabelInactive}>Shipped</Text>
                            </View>
                        </View>

                        {/* Timeline Step 4 */}
                        <View style={[styles.timelineItem, { marginBottom: 0 }]}>
                            <View style={styles.timelineLeft}>
                                <View style={styles.circleInactive} />
                            </View>
                            <View style={styles.timelineContent}>
                                <Text style={styles.statusLabelInactive}>Delivered</Text>
                            </View>
                        </View>
                    </View>

                    {/* BOTTOM BUTTON ROW */}
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.cancelButton}>
                            <Text style={styles.cancelButtonText}>Cancel Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.updateButton}>
                            <Text style={styles.updateButtonText}>Update Status</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

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
        paddingBottom: 20,
    },
    headerContainer: {
        backgroundColor: '#f6f6f6',
        borderRadius: 16,
        padding: 16,
        marginTop: 10,
        marginBottom: 10,
    },
    headerTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLogoSmall: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
        marginRight: 8,
    },
    backButton: {
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    orderIdBar: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
    },
    orderIdText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
    },
    newBadge: {
        backgroundColor: '#ff9b3d',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
    },
    newBadgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color: '#000',
    },
    customerCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatarBox: {
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#f28c28',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarLetter: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
    },
    customerDetails: {
        flex: 1,
        marginLeft: 12,
    },
    customerName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 2,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    infoText: {
        fontSize: 13,
        color: '#444',
        marginLeft: 6,
    },
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 12,
        marginBottom: 12,
    },
    productContentRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productImagePlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 10,
        overflow: 'hidden',
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    productPlaceholderLines: {
        flex: 1,
    },
    placeholderLineLarge: {
        height: 6,
        width: 140,
        backgroundColor: '#ddd',
        borderRadius: 4,
    },
    placeholderLineSmall: {
        height: 6,
        width: 100,
        backgroundColor: '#ddd',
        borderRadius: 4,
        marginTop: 6,
    },
    priceBox: {
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    priceLabel: {
        fontSize: 13,
        color: '#555',
    },
    priceValueBar: {
        height: 8,
        width: 60,
        backgroundColor: '#ddd',
        borderRadius: 4,
    },
    statusCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 12,
        marginBottom: 14,
    },
    timelineItem: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    timelineLeft: {
        alignItems: 'center',
        width: 20,
    },
    circleActive: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#ff7a00',
    },
    circleInactive: {
        width: 12,
        height: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    lineConnector: {
        width: 1,
        flex: 1,
        backgroundColor: '#ddd',
        marginVertical: 2,
    },
    timelineContent: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    statusHeaderWithBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statusLabelActive: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },
    statusLabelInactive: {
        fontSize: 14,
        color: '#777',
    },
    miniNewBadge: {
        backgroundColor: '#ff9b3d',
        paddingHorizontal: 6,
        paddingVertical: 1,
        borderRadius: 4,
    },
    miniNewBadgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    statusDate: {
        fontSize: 11,
        color: '#777',
        marginTop: 2,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    cancelButton: {
        width: '48%',
        backgroundColor: '#eaeaea',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#333',
        fontWeight: '500',
        fontSize: 14,
    },
    updateButton: {
        width: '48%',
        backgroundColor: '#ff7a00',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    updateButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
    },

});

export default VendorOrderDetailsScreen;
