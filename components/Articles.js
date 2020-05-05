

import React from 'react';
import { FlatList } from 'react-native';

import ArticleCard from './ArticleCard';
export default function Articles(props) {

    //console.log("Articles.js props.articles", props.articles);
    
    const renderItem = (data) => {
        return <ArticleCard 
        article={data.item} 
        index={data.index}
        onPress={props.onArticleCardPress}/>
    };

    const keyExtractor = (item, index) => index.toString();


    return (
        <FlatList
            data={props.articles}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );


}