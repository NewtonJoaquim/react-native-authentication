//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) =>{
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:80,
        padding:20,
        shadowColor:'#000',
        elevation:3,
        position:'relative',
    },
};
//make the component available to other parts of the app
//export default Header;
export {Header};