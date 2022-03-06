import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import Form from '../../components/Editor/Form';
import { addNew } from '../../config/slice/news.slice';
import { NewStatus } from '../../interfaces/New';
import { NewsScreenList } from '../../StackScreen';

type newArticleNavigation = StackNavigationProp<NewsScreenList, 'NewArticle'>

const NewArticle = () => {
    
    const dispatch = useDispatch()
    const navigation = useNavigation<newArticleNavigation>();

    const onSave = (title: string, content: string)=>{
            dispatch(addNew({
                id: 0,
                name: title,
                status: NewStatus.unpublished,
                text: content
            }))
            navigation.goBack()
    }

    return (
        <>
            <Text>Demo</Text>
            <Form  OnSave={onSave} />
        </>
    )
}

export default NewArticle;