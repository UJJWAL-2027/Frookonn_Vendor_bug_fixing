import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const VendorCategoriesScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Categories</Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.placeholderCard}>
                    <Text style={styles.placeholderEmoji}>📁</Text>
                    <Text style={styles.placeholderTitle}>Manage Categories</Text>
                    <Text style={styles.placeholderSubtitle}>
                        Organize your products into categories for better visibility.
                    </Text>
                </View>
                
                {/* Visual placeholders for categories */}
                {[1, 2, 3, 4].map((i) => (
                    <View key={i} style={styles.listItem}>
                        <View style={styles.itemIcon} />
                        <View style={styles.itemTextContainer}>
                            <View style={styles.titleLine} />
                            <View style={styles.subtitleLine} />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    header: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    content: {
        padding: 16,
    },
    placeholderCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    placeholderEmoji: {
        fontSize: 48,
        marginBottom: 12,
    },
    placeholderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    placeholderSubtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 12,
        alignItems: 'center',
    },
    itemIcon: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        marginRight: 15,
    },
    itemTextContainer: {
        flex: 1,
    },
    titleLine: {
        width: '60%',
        height: 12,
        backgroundColor: '#eee',
        borderRadius: 6,
        marginBottom: 8,
    },
    subtitleLine: {
        width: '40%',
        height: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 4,
    },
});

export default VendorCategoriesScreen;
