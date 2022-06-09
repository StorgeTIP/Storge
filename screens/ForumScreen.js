import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text, TextInput, FlatList, ScrollView } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    CommentInteractionText
} from '../styles/ForumStyles';

const Posts = [
    {
        id: '1',
        userName: 'McCoy De Leon',
        userImg: require('../assets/users/mccoy.jpeg'),
        postTime: 'a day ago',
        postText: "Will I spoil my baby by comforting her every time she cries?",
        postImg: require('../assets/posts/mccoy-daughter.jpg'),

        comment: true,
        commentAvatar: require('../assets/users/coleen.jpg'),
        commentText: "Hi this is a very long test comment",

        commentNumber: 2,
        commentAvatar2: require('../assets/users/andi.jpg'),
        commentText2: "Hi this is a very long test comment",
    },
    {
        id: '2',
        userName: 'Andi Eigenmann',
        userImg: require('../assets/users/andi.jpg'),
        postTime: 'a day ago',
        postText: "How do you teach children simplicity?",
        postImg: require('../assets/posts/andi-family2.jpg'),

        comment: true,
        commentAvatar: require('../assets/users/pauleen.jpg'),
        commentText: "Hi this is a very long test comment",

        commentNumber: 2,
        commentAvatar2: require('../assets/users/slater.jpg'),
        commentText2: "Hi this is a very long test comment",
    },
    {
        id: '3',
        userName: 'Andi Eigenmann',
        userImg: require('../assets/users/andi.jpg'),
        postTime: 'a day ago',
        postText: "Can I reward my child with money to teach tem it's value?",
        postImg: require('../assets/posts/andi-family.jpg'),

        comment: true,
        commentAvatar: require('../assets/posts/slater-son.png'),
        commentText: "Hi this is a very long test comment",

        commentNumber: 1,
    },
    {
        id: '4',
        userName: 'Slater Young',
        userImg: require('../assets/users/slater.jpg'),
        postTime: 'a day ago',
        postText: "How will I balance work and supporting my family?",
        postImg: require('../assets/posts/slater-son.png'),

        comment: true,
        commentAvatar: require('../assets/users/andi.jpg'),
        commentText: "Hi this is a very long test comment",

        commentNumber: 1,
    },
    {
        id: '5',
        userName: 'Pauleen Sotto',
        userImg: require('../assets/users/pauleen.jpg'),
        postTime: 'a day ago',
        postText: "Sometimes, my children have violent outbursts. How can I stop it?",
        postImg: require('../assets/posts/pauleen-daughter.jpg'),

        comment: true,
        commentAvatar:  require('../assets/users/andi.jpg'),
        commentText: "Hi this is a very long test comment",

        commentNumber: 1,
    },
    {
        id: '6',
        userName: 'Coleen Crawford',
        userImg: require('../assets/users/coleen.jpg'),
        postTime: 'a day ago',
        postText: "Do I want what's good for my child or what's best?",
        postImg: require('../assets/posts/coleen-family.jpg'),

        comment: true,
        commentAvatar: require('../assets/posts/mccoy-daughter.jpg'),
        commentText: "Hi this is a very long test comment",

        commentNumber: 1,
    },
];

const ForumScreen = () => {
    
    // send button useState functions

    const [sent1, setSent1] = useState(false);
    const clickedSent1 = () => {
        setSent1(true)
    }

    const [sent2, setSent2] = useState(false);
    const clickedSent2 = () => {
        setSent2(true)
    }
    
    const [sent3, setSent3] = useState(false);
    const clickedSent3 = () => {
        setSent3(true)
    }

    const [sent4, setSent4] = useState(false);
    const clickedSent4 = () => {
        setSent4(true)
    }
    
    const [sent5, setSent5] = useState(false);
    const clickedSent5 = () => {
        setSent5(true)
    }

    const [sent6, setSent6] = useState(false);
    const clickedSent6 = () => {
        setSent6(true)
    }

    // like and unlike button useState functions

    const [likes_11, setLikes_11] = useState(5);
    const incrementLikes_11 = () => {
        setLikes_11(likes_11 + 1)
    }

    const [dislikes_11, setDislikes_11] = useState(0);
    const incrementDislikes_11 = () => {
        setDislikes_11(dislikes_11 + 1)
    }

    const [likes_12, setLikes_12] = useState(2);
    const incrementLikes_12 = () => {
        setLikes_12(likes_12 + 1)
    }

    const [dislikes_12, setDislikes_12] = useState(1);
    const incrementDislikes_12 = () => {
        setDislikes_12(dislikes_12 + 1)
    }

    const [likes_21, setLikes_21] = useState(3);
    const incrementLikes_21 = () => {
        setLikes_21(likes_21 + 1)
    }

    const [dislikes_21, setDislikes_21] = useState(0);
    const incrementDislikes_21 = () => {
        setDislikes_21(dislikes_21 + 1)
    }

    const [likes_22, setLikes_22] = useState(1);
    const incrementLikes_22 = () => {
        setLikes_22(likes_22 + 1)
    }

    const [dislikes_22, setDislikes_22] = useState(0);
    const incrementDislikes_22 = () => {
        setDislikes_22(dislikes_22 + 1)
    }

    const [likes_31, setLikes_31] = useState(5);
    const incrementLikes_31 = () => {
        setLikes_31(likes_31 + 1)
    }

    const [dislikes_31, setDislikes_31] = useState(1);
    const incrementDislikes_31 = () => {
        setDislikes_31(dislikes_31 + 1)
    }

    const [likes_41, setLikes_41] = useState(1);
    const incrementLikes_41 = () => {
        setLikes_41(likes_41 + 1)
    }

    const [dislikes_41, setDislikes_41] = useState(0);
    const incrementDislikes_41 = () => {
        setDislikes_41(dislikes_41 + 1)
    }

    const [likes_51, setLikes_51] = useState(4);
    const incrementLikes_51 = () => {
        setLikes_51(likes_51 + 1)
    }

    const [dislikes_51, setDislikes_51] = useState(1);
    const incrementDislikes_51 = () => {
        setDislikes_51(dislikes_51 + 1)
    }

    const [likes_61, setLikes_61] = useState(3);
    const incrementLikes_61 = () => {
        setLikes_61(likes_61 + 1)
    }

    const [dislikes_61, setDislikes_61] = useState(0);
    const incrementDislikes_61 = () => {
        setDislikes_61(dislikes_61 + 1)
    }

    return (
        <ScrollView>
        <Container>
            
            <Card>
                {/* User Details and Post Details */}
                <UserInfo>
                    <UserImg source={require('../assets/users/mccoy.jpeg')}/>
                    <UserInfoText>
                        <TouchableOpacity>
                            <UserName>McCoy De Leon</UserName>
                        </TouchableOpacity>
                        <PostTime>a day ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>Will I spoil my baby by comforting her every time she cries?</PostText>
                <PostImg source={require('../assets/posts/mccoy-daughter.jpg')}/> 
                {/* Previously Uploaded Comments */}
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/coleen.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentText>Hi this is a very long test comment</CommentText>
                        </CommentWrapper>
                        <CommentInteraction onPress={incrementLikes_11}>
                            {likes_11 > 5 ? 
                            <> 
                            <Ionicons name="ios-thumbs-up" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{likes_11}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-up" size={15} color='#333'/>
                            <CommentInteractionText>5</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                        <CommentInteraction onPress={incrementDislikes_11}>
                            {dislikes_11 > 0 ? 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{dislikes_11}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#333'/>
                            <CommentInteractionText>0</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/andi.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentText>Hi this is a very long test comment</CommentText>
                        </CommentWrapper>
                        <CommentInteraction onPress={incrementLikes_12}>
                            {likes_12 > 2 ? 
                            <> 
                            <Ionicons name="ios-thumbs-up" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{likes_12}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-up" size={15} color='#333'/>
                            <CommentInteractionText>2</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                        <CommentInteraction onPress={incrementDislikes_12}>
                            {dislikes_12 > 1 ? 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{dislikes_12}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#333'/>
                            <CommentInteractionText>1</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>   
                {/* Comment Box */}            
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/coleen.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentTextInput placeholder="Write a comment..." autoCorrect={false}/>
                        </CommentWrapper>
                        <CommentInteraction onPress={clickedSent1} >
                            {sent1 == false ? 
                            <Ionicons name="md-send" size={15} color='#333'/>
                            : null} 
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>
            </Card>

            <Card>
                {/* User Details and Post Details */}
                <UserInfo>
                    <UserImg source={require('../assets/users/andi.jpg')}/>
                    <UserInfoText>
                        <TouchableOpacity>
                            <UserName>Andi Eigenmann</UserName>
                        </TouchableOpacity>
                        <PostTime>a day ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>How do you teach children simplicity?</PostText>
                <PostImg source={require('../assets/posts/andi-family2.jpg')}/> 
                {/* Previously Uploaded Comments */}
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/pauleen.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentText>Hi this is a very long test comment</CommentText>
                        </CommentWrapper>
                        <CommentInteraction onPress={incrementLikes_21}>
                            {likes_21 > 3 ? 
                            <> 
                            <Ionicons name="ios-thumbs-up" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{likes_21}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-up" size={15} color='#333'/>
                            <CommentInteractionText>3</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                        <CommentInteraction onPress={incrementDislikes_21}>
                            {dislikes_21 > 0 ? 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{dislikes_21}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#333'/>
                            <CommentInteractionText>0</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/slater.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentText>Hi this is a very long test comment</CommentText>
                        </CommentWrapper>
                        <CommentInteraction onPress={incrementLikes_22}>
                            {likes_22 > 1 ? 
                            <> 
                            <Ionicons name="ios-thumbs-up" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{likes_22}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-up" size={15} color='#333'/>
                            <CommentInteractionText>1</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                        <CommentInteraction onPress={incrementDislikes_22}>
                            {dislikes_22 > 0 ? 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{dislikes_22}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#333'/>
                            <CommentInteractionText>0</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>               
                {/* Comment Box */}            
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/coleen.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentTextInput placeholder="Write a comment..." autoCorrect={false}/>
                        </CommentWrapper>
                        <CommentInteraction onPress={clickedSent2} >
                            {sent2 == false ? 
                            <Ionicons name="md-send" size={15} color='#333'/>
                            : null} 
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>
            </Card>

            <Card>
                {/* User Details and Post Details */}
                <UserInfo>
                    <UserImg source={require('../assets/users/andi.jpg')}/>
                    <UserInfoText>
                        <TouchableOpacity>
                            <UserName>Andi Eigenmann</UserName>
                        </TouchableOpacity>
                        <PostTime>a day ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>Can I reward my child with money to teach them it's value?</PostText>
                <PostImg source={require('../assets/posts/andi-family.jpg')}/> 
                {/* Previously Uploaded Comments */}
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/slater.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentText>Hi this is a very long test comment</CommentText>
                        </CommentWrapper>
                        <CommentInteraction onPress={incrementLikes_31}>
                            {likes_31 > 5 ? 
                            <> 
                            <Ionicons name="ios-thumbs-up" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{likes_31}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-up" size={15} color='#333'/>
                            <CommentInteractionText>5</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                        <CommentInteraction onPress={incrementDislikes_31}>
                            {dislikes_31 > 1 ? 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{dislikes_31}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#333'/>
                            <CommentInteractionText>1</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>                           
                {/* Comment Box */}            
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/coleen.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentTextInput placeholder="Write a comment..." autoCorrect={false}/>
                        </CommentWrapper>
                        <CommentInteraction onPress={clickedSent3} >
                            {sent3 == false ? 
                            <Ionicons name="md-send" size={15} color='#333'/>
                            : null} 
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>
            </Card>
            
            <Card>
                {/* User Details and Post Details */}
                <UserInfo>
                    <UserImg source={require('../assets/users/slater.jpg')}/>
                    <UserInfoText>
                        <TouchableOpacity>
                            <UserName>Slater Young</UserName>
                        </TouchableOpacity>
                        <PostTime>a day ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>Can I reward my child with money to teach tem it's value?</PostText>
                <PostImg source={require('../assets/posts/slater-son.png')}/> 
                {/* Previously Uploaded Comments */}
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/andi.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentText>Hi this is a very long test comment</CommentText>
                        </CommentWrapper>
                        <CommentInteraction onPress={incrementLikes_41}>
                            {likes_41 > 1 ? 
                            <> 
                            <Ionicons name="ios-thumbs-up" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{likes_41}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-up" size={15} color='#333'/>
                            <CommentInteractionText>1</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                        <CommentInteraction onPress={incrementDislikes_41}>
                            {dislikes_41 > 0 ? 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{dislikes_41}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#333'/>
                            <CommentInteractionText>0</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>                         
                {/* Comment Box */}            
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/coleen.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentTextInput placeholder="Write a comment..." autoCorrect={false}/>
                        </CommentWrapper>
                        <CommentInteraction onPress={clickedSent4} >
                            {sent4 == false ? 
                            <Ionicons name="md-send" size={15} color='#333'/>
                            : null} 
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>
            </Card>

            <Card>
                {/* User Details and Post Details */}
                <UserInfo>
                    <UserImg source={require('../assets/users/pauleen.jpg')}/>
                    <UserInfoText>
                        <TouchableOpacity>
                            <UserName>Pauleen Sotto</UserName>
                        </TouchableOpacity>
                        <PostTime>a day ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>Sometimes, my children have violent outbursts. How can I stop it?</PostText>
                <PostImg source={require('../assets/posts/pauleen-daughter.jpg')}/> 
                {/* Previously Uploaded Comments */}
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/andi.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentText>Hi this is a very long test comment</CommentText>
                        </CommentWrapper>
                        <CommentInteraction onPress={incrementLikes_51}>
                            {likes_51 > 4 ? 
                            <> 
                            <Ionicons name="ios-thumbs-up" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{likes_51}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-up" size={15} color='#333'/>
                            <CommentInteractionText>4</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                        <CommentInteraction onPress={incrementDislikes_51}>
                            {dislikes_51 > 1 ? 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{dislikes_51}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#333'/>
                            <CommentInteractionText>1</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>                           
                {/* Comment Box */}            
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/coleen.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentTextInput placeholder="Write a comment..." autoCorrect={false}/>
                        </CommentWrapper>
                        <CommentInteraction onPress={clickedSent5} >
                            {sent5 == false ? 
                            <Ionicons name="md-send" size={15} color='#333'/>
                            : null} 
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>
            </Card>

            <Card>
                {/* User Details and Post Details */}
                <UserInfo>
                    <UserImg source={require('../assets/users/coleen.jpg')}/>
                    <UserInfoText>
                        <TouchableOpacity>
                            <UserName>Coleen Crawford</UserName>
                        </TouchableOpacity>
                        <PostTime>a day ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>Can I reward my child with money to teach tem it's value?</PostText>
                <PostImg source={require('../assets/posts/coleen-family.jpg')}/> 
                {/* Previously Uploaded Comments */}
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/mccoy.jpeg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentText>Hi this is a very long test comment</CommentText>
                        </CommentWrapper>
                        <CommentInteraction onPress={incrementLikes_61}>
                            {likes_61 > 3 ? 
                            <> 
                            <Ionicons name="ios-thumbs-up" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{likes_61}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-up" size={15} color='#333'/>
                            <CommentInteractionText>3</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                        <CommentInteraction onPress={incrementDislikes_61}>
                            {dislikes_61 > 0 ? 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#2e64e5'/>
                            <CommentInteractionText>{dislikes_61}</CommentInteractionText>
                            </>
                            : 
                            <>
                            <Ionicons name="ios-thumbs-down" size={15} color='#333'/>
                            <CommentInteractionText>0</CommentInteractionText>
                            </>
                            }
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>                           
                {/* Comment Box */}            
                <CommentCard>
                    <CommentContainer>
                        <CommentUserImgWrapper>
                            <CommentUserImg source={require('../assets/users/coleen.jpg')}/>
                        </CommentUserImgWrapper>
                        <CommentWrapper>
                            <CommentTextInput placeholder="Write a comment..." autoCorrect={false}/>
                        </CommentWrapper>
                        <CommentInteraction onPress={clickedSent6} >
                            {sent6 == false ? 
                            <Ionicons name="md-send" size={15} color='#333'/>
                            : null} 
                        </CommentInteraction>
                    </CommentContainer>
                </CommentCard>
            </Card>

        </Container>
        </ScrollView>
    );
};

export default ForumScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});