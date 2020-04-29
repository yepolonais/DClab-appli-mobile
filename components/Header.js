import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Header() {

    return (
        <View style={[styles.header]}>
            <Text> LE HEADER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    defaultPolice: {
        color: "#00263E",
    },
    header:{

    }
    
});