import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
    UserTitle,
    OtherText,
  } from '../styles/ConsultStyles';

  import { Ionicons } from "@expo/vector-icons";

const Messages = [
    {
      id: '1',
      userName: 'Dr. Juan Dela Cruz',
      userImg: require('../assets/users/doc-1.jpg'),
      userDegree: 'Family Physician',
      userExperience: '3 Years Experience',
      userApproval: '91%'
    },
    {
        id: '2',
        userName: 'Dr. Carmelita Santos',
        userImg: require('../assets/users/doc-2.jpg'),
        userDegree: 'Obsetrician and Gynecologist',
        userExperience: '10 Years Experience',
        userApproval: '95%'
    },
    {
        id: '3',
        userName: 'Dr. Ella Lopez',
        userImg: require('../assets/users/doc-3.jpg'),
        userDegree: 'Pediatrician',
        userExperience: '3 Years Experience',
        userApproval: '100%'
    },
    {
        id: '4',
        userName: 'Dr. Richard Cruz',
        userImg: require('../assets/users/doc-4.jpg'),
        userDegree: 'Psychiatrist',
        userExperience: '4 Years Experience',
        userApproval: '92%'
    },
];

const ConsultScreen = ({navigation}) => {
    return(
        <Container>
            <FlatList 
                data={Messages}
                keyExtractor={item=>item.id}  
                renderItem={({item}) => (
                    <Card>
                      <UserInfo>
                        <UserImgWrapper>
                          <UserImg source={item.userImg} />
                        </UserImgWrapper>
                        <TextSection>
                          <UserInfoText>
                            <UserName>{item.userName}</UserName>
                          </UserInfoText>
                          <UserTitle>{item.userDegree}</UserTitle>
                          <UserTitle>{item.userExperience}</UserTitle>
                          <View style={{flexDirection:"row"}}>
                            <TouchableOpacity style={{flexDirection:"row"}}>
                                <Ionicons name="ios-thumbs-up-outline" size={20} color='#2e64e5'/>
                            </TouchableOpacity>
                            <OtherText>{item.userApproval}             </OtherText>
                            <TouchableOpacity style={{flexDirection:"row"}}>
                                <Ionicons name="ios-bookmarks-outline" size={20} color='#2e64e5'/>
                            </TouchableOpacity>
                            <OtherText>Book an Appointment</OtherText>
                          </View>                          
                        </TextSection>
                      </UserInfo>
                    </Card>
                )}
            />
        </Container>
    );
};

export default ConsultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});