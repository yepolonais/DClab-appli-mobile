import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';



export default function ArticleCard(props) {


    const onPress = () => {
        console.log('ArticleCard', props.index);
        props.onPress(props.index)
    };

    return (
        <TouchableHighlight 
            onPress={onPress}
            underlayColor="white"
        >
            <View style={styles.container}>
                <Text>{props.article.titre}</Text>
            </View>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 15,
        padding: 10,
        borderRadius:10,
        elevation: 20,
        shadowColor: "#00263E",
        shadowOpacity: 5,
        shadowRadius: 10,
    },

})