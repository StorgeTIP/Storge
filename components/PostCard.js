import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
    Container, 
    Card, 
    UserInfo, 
    UserImg, 
    UserName, 
    UserInfoText, 
    PostTime, 
    PostText, 
    PostImg, 
    InteractionWrapper, 
    Interaction,
    InteractionText,
    Divider,
    CommentCard,
    CommentUserImg,
    CommentUserImgWrapper,
    CommentContainer,
    CommentWrapper,
    CommentText,
    CommentInteraction,
    CommentTextInput,
} from '../styles/FeedStyles';

import { AuthContext } from "../navigation/AuthProvider";

import moment from "moment";
import firestore from '@react-native-firebase/firestore';

const PostCard = ({item, onDelete, onPress}) => {
    const {user, logout} = useContext(AuthContext);
    const [userData, setUserData] = useState(null); 

    const [sent, setSent] = useState(false);

    const clickedSent = () => {
        setSent(true)
    }

    const [likes, setLikes] = useState(0);

    const incrementLikes = () => {
        setLikes(likes + 1)
    }

    let likeIcon;
    let likeIconColor; 

    let likeText;
    let commentText;

    if(likes % 2 == 0){    
        likeText = 'Like';
        console.log("Number of likes: ", likes)
        likeIcon = 'heart-outline';
        likeIconColor = '#333';
    } else {    
        console.log("Number of likes: ", likes)
        likeText = 'Liked';
        likeIcon = 'heart';
        likeIconColor = '#2e64e5'
    }

    if(item.comments == 1){
        let commentText = '1 Comment';
    } else if (item.comments > 1) {
        commentText = item.comments + ' Comments';
    } else {
        commentText = 'Comment';
    }

    const getUser = async() => {
        await firestore()
        .collection('users')
        .doc(item.userId)
        .get()
        .then((documentSnapshot) => {
            if( documentSnapshot.exists ) {
                console.log('User Data', documentSnapshot.data());
                setUserData(documentSnapshot.data());
            }
        })
    }

    useEffect(() => {
        getUser();
    }, []);

    return(
        <Card>
            <UserInfo>
                <UserImg source={{uri: userData ? userData.userImg || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}} />
                <UserInfoText>
                    <TouchableOpacity onPress={onPress}>
                        <UserName>{userData ? userData.fname || 'Test' : 'Test'} {userData ? userData.lname || 'User' : 'User'}</UserName>
                    </TouchableOpacity>
                    <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>
                </UserInfoText>
            </UserInfo>
            <PostText>{item.post}</PostText>
            {item.postImg !== null ? <PostImg source={{uri: item.postImg}} /> : <Divider/>}

            <InteractionWrapper>

                <Interaction onPress={incrementLikes} >
                    <Ionicons name={likeIcon} size={25} color={likeIconColor}/>
                    <InteractionText>{likeText}</InteractionText>
                </Interaction>

                <Interaction>
                    <Ionicons name="md-chatbubble-outline" size={25} />
                    <InteractionText>{commentText}</InteractionText>
                </Interaction>

                {user.uid === item.userId ?
                <Interaction onPress={() => onDelete(item.id)}>
                    <Ionicons name="md-trash-bin" size={25} />
                </Interaction>
                : null}

            </InteractionWrapper>
            
            <CommentCard>
                <CommentContainer>
                    <CommentUserImgWrapper>
                        <CommentUserImg source={require('../assets/users/coleen.jpg')}/>
                     </CommentUserImgWrapper>
                    <CommentWrapper>
                        <CommentTextInput placeholder="Write a comment..." autoCorrect={false}/>
                    </CommentWrapper>
                    <CommentInteraction onPress={clickedSent} >
                            {sent == false ? 
                            <Ionicons name="md-send" size={15} color='#333'/>
                            : null} 
                        </CommentInteraction>
                </CommentContainer>
            </CommentCard>

            {/* <View 
                style={{
                    flex: 1, 
                    flexDirection: 'row', 
                    backgroundColor: '#f8f8f8', 
                    borderBottomWidth: 1,
                    borderBottomColor: '#666',
                    marginBottom: 20,
                    width:"92%",
                    marginLeft: 13,
                }}
            >
                <TextInput 
                    placeholder="Write a comment"
                    placeholderTextColor="#666"
                    autoCorrect={false}
                    style={{
                        fontSize: 14,
                        fontStyle: 'italic',
                        fontFamily: 'Lato-Regular',   
                    }}
                />
            </View> */}

        </Card>
    );
};

export default PostCard;