

import React from 'react';
import { FlatList } from 'react-native';

import ArticleCard from './ArticleCard';
export default function Articles(props) {

    //console.log("Articles.js props.articles", props.articles);
    
    return (
        <FlatList
            data={props.articles}
            renderItem={(data) => {
                //console.log("Flatlist renderItem index", data.index, " : ", data.item)
                return <ArticleCard article={data.item} onPress={props.onArticleCardPress} />
            }}
            keyExtractor={item => item.id}
        />
    );


}