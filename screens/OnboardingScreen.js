import React from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
	let backgroundColor;

	backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

	return (
		<View
			style={{
				width: 5,
				height: 5,
				marginHorizontal: 3,
				backgroundColor
			}}
		/>
	);	
}

const Skip = ({...props}) => (
	<TouchableOpacity
		style={{marginHorizontal:10}}
		{...props}
	>
		<Text style={{fontSize:16, fontFamily: 'Lato-Bold', marginLeft: 5}}>Skip</Text>
	</TouchableOpacity>
);

const Next = ({...props}) => (
	<TouchableOpacity
		style={{marginHorizontal:10}}
		{...props}
	>
		<Text style={{fontSize:16, fontFamily: 'Lato-Bold', marginRight: 5}}>Next</Text>
	</TouchableOpacity>
);

const Done = ({...props}) => (
	<TouchableOpacity
		style={{marginHorizontal:10}}
		{...props}
	>
		<Text style={{fontSize:16, fontFamily: 'Lato-Bold', marginRight: 5}}>Done</Text>
	</TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
	return (
		<Onboarding
		SkipButtonComponent={Skip}
		NextButtonComponent={Next}
		DoneButtonComponent={Done}
		DotComponent={Dots}
		onSkip={() => navigation.replace("Login")}
		onDone={() => navigation.navigate("Login")}
		pages={[
			{
				backgroundColor: '#FFB8BF',
				image: <Image source={require('../assets/discuss.png')} />,
				title: 'A Platform for Healthy Discussions',
				titleStyles: {fontSize: 22, fontFamily: 'Lato-Bold', color: '#2e64e5', marginTop: -70,},
				subtitle: 'Ask parenting related questions',
				subTitleStyles: {fontSize: 16, fontFamily: 'Lato-Regular', marginTop: -40,},
			},
			{
				backgroundColor: '#FFB8BF',
				image: <Image source={require('../assets/family.png')}/>,
				title: 'Share the Fun with Others',
				titleStyles: {fontSize: 22, fontFamily: 'Lato-Bold', color: '#2e64e5', marginTop: -100,},
				subtitle: 'Share family memories through posts',
				subTitleStyles: {fontSize: 16, fontFamily: 'Lato-Regular', marginTop: -70,},
			},
			{
				backgroundColor: '#FFB8BF',
				image: <Image source={require('../assets/reward.png')} style={{marginTop: -50, width: 400, height: 400}}/>,
				title: 'Get In-App Rewards',
				titleStyles: {fontSize: 22, fontFamily: 'Lato-Bold', color: '#2e64e5', marginTop: -80,},
				subtitle: 'Earn points through likes',
				subTitleStyles: {fontSize: 16, fontFamily: 'Lato-Regular', marginTop: -50,},
			},
		]}
		/>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
});