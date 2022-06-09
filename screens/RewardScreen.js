import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const RewardScreen = ({navigation}) => {
    const [clicked, setClicked] = useState(0);

    const incrementClicked = () => {
        setClicked(clicked + 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>My Points </Text>
            </View>
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={() => {navigation.navigate('RewardGuide')}} style={styles.circle}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.pointText}>20</Text>
                        <Text style={styles.pointSubtitleText}>points</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.divider}/>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={incrementClicked} style={styles.button}>
                    <Text style={styles.buttonText}>Rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={incrementClicked} style={styles.button}>
                    <Text style={styles.buttonText}>History</Text>
                </TouchableOpacity>
            </View>
            {clicked % 2 == 0 ? 
                <View style={styles.rewardWrapper}>
                    <View style={styles.rewardContainer}>
                        <Image source={require('../assets/stethoscope.png')} style={styles.image}/>
                        <Text style={styles.rewardText}>Free Consultation with a Pediatrician</Text>
                        <Text style={styles.rewardSubtext}>500 points</Text>
                        <TouchableOpacity>
                            <Text style={styles.rewardButtonText}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rewardContainer}>
                        <Image source={require('../assets/stethoscope.png')} style={styles.image}/>
                        <Text style={styles.rewardText}>Free Consultation with a Psychiatrist</Text>
                        <Text style={styles.rewardSubtext}>400 points</Text>
                        <TouchableOpacity>
                            <Text style={styles.rewardButtonText}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            : 
                <View style={styles.historyWrapper}>
                    <View style={styles.historyContainer}>
                        <Text style={styles.historyHeaderText}>McCoy De Leon Liked your comment</Text>
                        <Text style={styles.historyTimeText}>A while ago</Text>
                        <Text style={styles.historySubText}>This is a very long test comment.</Text>
                        <View style={styles.historyDivider}/>
                        <View style={styles.historyInteractionWrapper}>
                            <View style={styles.historyInteraction}>
                                <Ionicons name="heart-outline" size={20} color="#2e64e5"/>
                                <Text style={styles.historyInteractionText}>5 Likes</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.historyContainer}>
                    <Text style={styles.historyHeaderText}>Andi Eigenmann Liked your comment</Text>
                        <Text style={styles.historyTimeText}>A while ago</Text>
                        <Text style={styles.historySubText}>This is a very long test comment.</Text>
                        <View style={styles.historyDivider}/>
                        <View style={styles.historyInteractionWrapper}>
                            <View style={styles.historyInteraction}>
                                <Ionicons name="heart-outline" size={20} color="#2e64e5"/>
                                <Text style={styles.historyInteractionText}>4 Likes</Text>
                            </View>
                        </View>
                    </View>
                </View>
            }
            

            

        </View>
    );
};

export default RewardScreen;

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
    subtitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 10,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    circle: {
        borderColor: '#2e64e5',
        borderWidth: 15,
        borderRadius: 500,
        paddingVertical: 35,
        paddingHorizontal: 55,
        marginHorizontal: 5,
        marginTop: 50,
    },
    textWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    pointText: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#2e64e5',
    },
    pointSubtitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        // fontStyle: 'italic',
        color: '#89CFF0',
    },
    divider: {
        alignSelf: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#dddddd',
        width: '92%',
        marginTop: 20,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
    },
    button: {
        borderBottomWidth: 2,
        borderBottomColor: '#dddddd',
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FF7F7F',
    },
    rewardWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    rewardContainer: {
        backgroundColor: '#f8f8f8',
        borderColor: '#DFDFDF',
        borderWidth: 2,
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: 155,
        height: 165,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },
    rewardText: {
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    rewardSubtext: {
        fontSize: 12,
        fontStyle: 'italic',
        color: 'gray'
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