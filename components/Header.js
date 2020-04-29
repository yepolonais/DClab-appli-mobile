import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Header() {

    return (
        <View style={[styles.header]}>
            <Text style={[styles.defaultPolice]}> LE HEADER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    defaultPolice: {
        color: "#00263E",
    },
    header:{
        flex:1,
        borderTopWidth:1,
        borderBottomWidth: 1,
        borderColor:"#00263E",
    }
    
});