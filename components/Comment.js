import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function Comment(props) {

  let itemComponent = (data)=>{
    return <View>
      <Text> {data.item.content} </Text>
    </View>
  };

  const keyExtractor = (item, index) => index.toString()

  let [currentInput, setCurrentinput] = useState("")
  const handleChangeText = (texte) => {
    setCurrentinput(texte)
  }

  const addComment = ()=>{
    console.log('addComment', currentInput);
    props.onAddComment({content:currentInput});
  };

  return (
    <View>
      <View>
        <TextInput style={styles.input} onChangeText={handleChangeText} />
        <Button onPress={addComment} title="Ajouter un commentaire" />
      </View>
      <View>
        <FlatList
          data={props.comments}
          renderItem={itemComponent}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
  },
})