import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #fff;
    padding: 20px;
`;

export const Card = styled.View`
    background-color: #f8f8f8;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    border: #DFDFDF;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const UserInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    font-family: 'Lato-Regular';
`;

export const PostTime = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    color: #666;
`;

export const PostText = styled.Text`
    font-size: 14px;
    font-family: 'Lato-Regular';
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
`;

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    /* margin-top: 15px; */
`;

export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 92%;
    align-self: center;
    margin-top: 15px;
`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding-top: 15px;
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? '#2e64e515' : 'transparent'}
`;

export const InteractionText = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    font-weight: bold;
    color: ${props => props.active ? '#2e64e5' : '#333'};
    margin-top: 5px;
    margin-left: 5px;
`;

export const CommentCard = styled.View`
    background-color: #f8f8f8;
    width: 100%;
    /* margin-bottom: 20px; */
    border-radius: 10px;
`;

export const CommentContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    /* background-color: khaki; */
`;

export const CommentUserImgWrapper = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
`;

export const CommentUserImg = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 20px;
`;

export const CommentWrapper = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #f8f8f8;
    border: 0.8px;
    border: #DFDFDF;
    border-radius: 10px;
`;

export const CommentText = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    padding-left: 5px;
    padding-right: 5px;
`;

export const CommentTextInput = styled.TextInput`
    font-size: 12px;
    font-family: 'Lato-Regular';
    padding-left: 5px;
    padding-right: 5px;
`;

export const CommentInteraction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-around;
    border-radius: 5px;
    padding-left: 10px;
    padding-top: 20px;
    padding-bottom: 10px;
`;
