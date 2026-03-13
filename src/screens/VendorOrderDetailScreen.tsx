import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    VendorSplashScreen: undefined;
    VendorRegisterScreen: undefined;
    VendorLogin: undefined;
    VendorDashboard: undefined;
    VendorOrders: undefined;
    VendorOrderDetail: { orderId: string };
};

type VendorOrderDetailNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'VendorOrderDetail'
>;

interface Props {
    navigation: VendorOrderDetailNavigationProp;
}

const { width } = Dimensions.get('window');

const VendorOrderDetailScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.root}>
            {/* Top Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Order Details</Text>
                <View style={{ width: 40 }} /> {/* Spacer for centering */}
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Order ID Card */}
                <View style={styles.orderIdCard}>
                    <Text style={styles.orderIdText}>Order ID : #1234</Text>
                    <View style={styles.newBadge}>
                        <Text style={styles.newBadgeText}>New</Text>
                    </View>
                </View>

                {/* Customer Info Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Customer Info</Text>
                </View>
                <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                    <View style={styles.horizontalRow}>
                        <View style={styles.avatarBox}>
                            <Text style={styles.avatarText}>R</Text>
                        </View>
                        <View style={styles.customerDetails}>
                            <Text style={styles.customerName}>Rohit Kumar</Text>
                            <View style={styles.infoRow}>
                                <Text style={styles.iconPlaceholder}>📞</Text>
                                <Text style={styles.infoText}>+91 1234567891</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <Text style={styles.iconPlaceholder}>📍</Text>
                                <Text style={styles.infoText}>123 ------------</Text>
                            </View>
                        </View>
                        <Text style={styles.chevron}>{'>'}</Text>
                    </View>
                </TouchableOpacity>

                {/* Product Summary Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Product Summary</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.horizontalRow}>
                        <Image
                            source={{ uri: 'https://res.cloudinary.com/ddirrlngo/image/upload/v1772698012/logo_ws8i3j.png' }}
                            style={styles.productImage}
                        />
                        <View style={styles.productInfo}>
                            <View style={styles.placeholderLineLarge} />
                            <View style={styles.placeholderLineSmall} />

                            <View style={styles.priceBox}>
                                <View style={styles.priceRow}>
                                    <Text style={styles.priceLabel}>Amount</Text>
                                    <View style={styles.placeholderPriceLine} />
                                </View>
                                <View style={[styles.priceRow, { marginTop: 8 }]}>
                                    <Text style={styles.priceLabel}>Discount</Text>
                                    <View style={styles.progressBarContainer}>
                                        <View style={styles.progressBarFill} />
                                    </View>
                                </View>
                                <View style={[styles.priceRow, { marginTop: 8 }]}>
                                    <Text style={[styles.priceLabel, { fontWeight: '600' }]}>Total</Text>
                                    <View style={styles.placeholderPriceLine} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Order Status Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Order Status</Text>
                </View>
                <View style={styles.card}>
                    {/* Status Step 1 */}
                    <View style={styles.statusRow}>
                        <View style={styles.timelineContainer}>
                            <View style={styles.circleActive} />
                            <View style={styles.verticalLineActive} />
                        </View>
                        <View style={styles.statusContent}>
                            <View style={styles.statusHeaderRow}>
                                <Text style={styles.statusTitle}>Order Placed</Text>
                                <View style={styles.statusBadgeSmall}>
                                    <Text style={styles.statusBadgeTextSmall}>New</Text>
                                </View>
                            </View>
                            <Text style={styles.statusDate}>Apr 24, 2026</Text>
                        </View>
                    </View>

                    {/* Status Step 2 */}
                    <View style={styles.statusRow}>
                        <View style={styles.timelineContainer}>
                            <View style={styles.circleInactive} />
                            <View style={styles.verticalLineInactive} />
                        </View>
                        <View style={styles.statusContent}>
                            <Text style={styles.statusTitleInactive}>Processing</Text>
                        </View>
                    </View>

                    {/* Status Step 3 */}
                    <View style={styles.statusRow}>
                        <View style={styles.timelineContainer}>
                            <View style={styles.circleInactive} />
                            <View style={styles.verticalLineInactive} />
                        </View>
                        <View style={styles.statusContent}>
                            <Text style={styles.statusTitleInactive}>Shipped</Text>
                        </View>
                    </View>

                    {/* Status Step 4 */}
                    <View style={[styles.statusRow, { marginBottom: 0 }]}>
                        <View style={styles.timelineContainer}>
                            <View style={styles.circleInactive} />
                        </View>
                        <View style={styles.statusContent}>
                            <Text style={styles.statusTitleInactive}>Delivered</Text>
                        </View>
                    </View>
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.actionButtonsRow}>
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Cancel Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>Update Status</Text>
                    </TouchableOpacity>
                </View>

                {/* Safe space for navigation bar */}
                <View style={{ height: 80 }} />
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navIcon}>🏠</Text>
                    <Text style={styles.navLabelInactive}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navIcon}>📁</Text>
                    <Text style={styles.navLabelInactive}>Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navIcon}>📦</Text>
                    <Text style={styles.navLabelInactive}>Products</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={[styles.navIcon, { color: '#F59E0B' }]}>📜</Text>
                    <Text style={styles.navLabelActive}>Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navIcon}>👤</Text>
                    <Text style={styles.navLabelInactive}>Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    backButtonText: {
        fontSize: 24,
        color: '#000000',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
        fontFamily: Platform.OS === 'ios' ? 'Inter' : 'Inter-Bold',
    },
    scrollContent: {
        padding: 16,
    },
    orderIdCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 20,
    },
    orderIdText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
    },
    newBadge: {
        backgroundColor: '#F59E0B',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    newBadgeText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
    },
    sectionHeader: {
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginTop: 4,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 14,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },
    horizontalRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarBox: {
        width: 50,
        height: 50,
        backgroundColor: '#F59E0B',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    customerDetails: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    customerName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 2,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    iconPlaceholder: {
        fontSize: 12,
        marginRight: 6,
    },
    infoText: {
        fontSize: 13,
        color: '#777777',
    },
    chevron: {
        fontSize: 20,
        color: '#CCCCCC',
        marginLeft: 8,
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
    },
    productInfo: {
        flex: 1,
        marginLeft: 12,
    },
    placeholderLineLarge: {
        height: 12,
        width: '80%',
        backgroundColor: '#E5E5E5',
        borderRadius: 6,
        marginBottom: 6,
    },
    placeholderLineSmall: {
        height: 10,
        width: '50%',
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        marginBottom: 12,
    },
    priceBox: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 10,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceLabel: {
        fontSize: 13,
        color: '#555555',
    },
    placeholderPriceLine: {
        height: 8,
        width: 40,
        backgroundColor: '#E0E0E0',
        borderRadius: 4,
    },
    progressBarContainer: {
        height: 8,
        width: 50,
        backgroundColor: '#E0E0E0',
        borderRadius: 4,
    },
    progressBarFill: {
        height: '100%',
        width: '70%',
        backgroundColor: '#22C55E',
        borderRadius: 4,
    },
    statusRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    timelineContainer: {
        alignItems: 'center',
        width: 20,
        marginRight: 12,
    },
    circleActive: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#F59E0B',
        zIndex: 1,
    },
    circleInactive: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        zIndex: 1,
    },
    verticalLineActive: {
        width: 2,
        flex: 1,
        backgroundColor: '#EEEEEE',
        marginTop: -2,
    },
    verticalLineInactive: {
        width: 2,
        flex: 1,
        backgroundColor: '#EEEEEE',
        marginTop: -2,
    },
    statusContent: {
        flex: 1,
        paddingBottom: 20,
    },
    statusHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000000',
    },
    statusTitleInactive: {
        fontSize: 15,
        color: '#888888',
        fontWeight: '500',
    },
    statusBadgeSmall: {
        backgroundColor: '#FEF3C7',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    statusBadgeTextSmall: {
        fontSize: 11,
        color: '#D97706',
        fontWeight: '600',
    },
    statusDate: {
        fontSize: 12,
        color: '#888888',
        marginTop: 2,
    },
    actionButtonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    cancelButton: {
        flex: 1,
        height: 48,
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    cancelButtonText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#555555',
    },
    updateButton: {
        flex: 1,
        height: 48,
        backgroundColor: '#F59E0B',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    updateButtonText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 10,
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    navIcon: {
        fontSize: 22,
        color: '#444444',
    },
    navLabelInactive: {
        fontSize: 10,
        color: '#666666',
        marginTop: 4,
    },
    navLabelActive: {
        fontSize: 10,
        color: '#F59E0B',
        fontWeight: '600',
        marginTop: 4,
    },
});

export default VendorOrderDetailScreen;
