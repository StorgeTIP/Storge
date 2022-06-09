import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const RewardGuideScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>My Points </Text>
            </View>
            <View style={styles.guideWrapper}>
                    <View style={styles.guideContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name="heart-outline" size={100} color="#FF7F7F" />
                            <Ionicons name="ios-thumbs-up-outline" size={100} color="#FF7F7F"/>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={styles.guideText}>1 point </Text>
                            <Text style={styles.guideSubtext}>is awarded for every </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.guideText}>100 upvotes </Text>
                            <Text style={styles.guideSubtext}>on your </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.guideText}>comments</Text>
                            <Text style={styles.guideSubtext}> or </Text>
                            <Text style={styles.guideText}>posts</Text>
                        </View>
                    </View>
                    <View style={styles.guideContainer}>
                        <Image source={require('../assets/stethoscope.png')} style={styles.image}/>
                        <View style={{flexDirection: 'row',  marginTop: 10}}>
                            <Text style={styles.guideSubtext}>You can get </Text>
                            <Text style={styles.guideText}>rewards</Text>
                            <Text style={styles.guideSubtext}> by</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.guideSubtext}>exchanging your accumulated </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.guideText}>points</Text>
                        </View>
                    </View>
                </View>
            
        </View>
    );
};

export default RewardGuideScreen;

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
        marginBottom: 10,
    },
    guideWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    guideContainer: {
        backgroundColor: '#f8f8f8',
        borderColor: '#DFDFDF',
        borderWidth: 2,
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: 325,
        height: 225,
        marginHorizontal: 5,
        alignItems: 'center',
        marginTop: 30,
    },
    image: {
        width: 110,
        height: 110,
        marginTop: 10,
    },
    guideText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e64e5',
        // fontStyle: 'italic',
    },
    guideSubtext: {
        fontSize: 16,
        // fontStyle: 'italic',
        // color: 'gray',
        marginTop: 2,
    },
    rewardButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2e64e5',
        marginTop: 5
    },
    historyWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: 5,
    },
    historyContainer: {
        backgroundColor: '#f8f8f8',
        borderColor: '#DFDFDF',
        borderWidth: 2,
        borderRadius: 6,
        paddingVertical: 5,
        paddingHorizontal: 8,
        width: 350,
        height: 95,
        marginHorizontal: 5,
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    historyHeaderText: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    historyTimeText: {
        fontSize: 8,
        marginBottom: 7,
    },
    historySubText: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 7,
    },
    historyDivider: {
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#dddddd',
        width: '100%',
        marginBottom: 3,
    },
    historyInteractionWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
    },
    historyInteraction: {
        flexDirection: 'row',
    },
    historyInteractionText: {
        flexDirection: 'row',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 1,
        marginLeft: 3,
    }

});