import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Footer() {

    return (
        <View style={[styles.footer]}>
            <Text style={[styles.defaultPolice]}> LE FOOTER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    defaultPolice: {
        color: "white",
    },
    footer: {
        backgroundColor:"#00263E",
        flex: 1,
    }

});