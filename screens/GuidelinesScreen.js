import React from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';

const GuidelinesScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Storge </Text>
                <Text style={styles.subtitleText}>Community Guidelines</Text>
            </View>
            <View style={styles.rulesContainer}>
                <Text style={styles.rulesTextTitle}>Available to the public</Text>
                <Text style={styles.rulesTextContent}>The public is welcome to join Storge's online communities. Everyone can see and read anything placed on our application. Since it is open to the public, anyone can participate; therefore, we cannot be held liable for opinions expressed other than our own.</Text>
            </View>
            <View style={styles.rulesContainer}>
                <Text style={styles.rulesTextTitle}>Protect sensitive personal data</Text>
                <Text style={styles.rulesTextContent}>Do not post any personal or banking information in our online communities. For inquiries regarding customer service, please contact our customer support. Your account numbers, PINs, social security number, and passwords should not be disclosed.</Text>
            </View>
            <View style={styles.rulesContainer}>
                <Text style={styles.rulesTextTitle}>Remain on the topic</Text>
                <Text style={styles.rulesTextContent}>Please keep your remarks on-topic and relevant to the posts on our social media networks. Comments that differ from the issue will be deleted. We also retain the right to prohibit users who post spam or continually make comments that are deemed to be off topic.</Text>
            </View>
            <View style={styles.rulesContainer}>
                <Text style={styles.rulesTextTitle}>Guarantee that the content is original</Text>
                <Text style={styles.rulesTextContent}>Do not post content unless you have permission to do so from the content's original creators. Please don't upload it if it belongs to someone else. All intellectual property, including copyrighted and trademarked material, will be flagged for removal. </Text>
            </View>
            <View style={styles.rulesContainer}>
                <Text style={styles.rulesTextTitle}>Permission to use your content</Text>
                <Text style={styles.rulesTextContent}>By posting on Storge, you grant us the right to use or reproduce any content you post on the site. Furthermore, any ideas or suggestions you publish on our social media pages will become the property of Stroge without limitation, and we will not be obligated to pay you compensation.</Text>
            </View>
            <View style={styles.rulesContainer}>
                <Text style={styles.rulesTextTitle}>Be considerate and respectful to others</Text>
                <Text style={styles.rulesTextContent}>We believe you can contribute positively to our online communities. Harassment, abuse, or threats against others are not tolerated. Please be relevant and kind while posting questions and comments. We reserve the right to remove non-compliant posts and block repeat offenders.</Text>
            </View>
            {/* <View style={styles.rulesContainer}>
                <Text style={styles.rulesTextTitle}></Text>
                <Text style={styles.rulesTextContent}></Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
                <Text style={styles.rulesTextSubcontent}>{'\u2B24'} </Text>
            </View>
            <View style={styles.rulesContainer}>
                <Text style={styles.rulesTextTitle}></Text>
                <Text style={styles.rulesTextContent}></Text>
            </View> */}
        </ScrollView>
    );
};

export default GuidelinesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleContainer: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#f2f2f2',
    },
    titleText: {
        fontSize: 24,
        color: '#2e64e5',
        fontFamily: 'supergroteska-rg',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    subtitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 10,
    },
    rulesContainer: {
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    rulesTextTitle: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        marginTop: 20,
        paddingLeft: 15,
    },
    rulesTextContent: {
        fontSize: 12,
        marginTop: 10,
        paddingLeft: 35,
        paddingRight: 20,
    },
    rulesTextSubcontent: {
        fontSize: 11,
        marginTop: 10,
        paddingLeft: 45,
        paddingRight: 20,
    },
});