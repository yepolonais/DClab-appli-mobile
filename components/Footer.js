import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Footer() {

    return (
        <View style={[styles.header]}>
            <Text style={[styles.defaultPolice]}> LE FOOTER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    defaultPolice: {
        color: "white",
    },
    header: {
        backgroundColor:"#00263E",
        flex: 1,
    }

});