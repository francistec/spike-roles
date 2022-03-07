import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Editor/Form";
import { NewsScreenList } from "../../StackScreen";
import { RootState } from "../../store";
import { RouteProp, useRoute } from "@react-navigation/native";
import { editArticle } from "../../config/slice/news.slice";

type editArticleRoute = RouteProp<NewsScreenList, 'Editor'>

const Editor = () => {

    const { params } = useRoute<editArticleRoute>();
    const [ article ] = useSelector((state: RootState)=>state.news.filter(i=>i.id === params?.article))
    const dispatch = useDispatch()

    const onSave = (title: string, content: string) => {

        dispatch(editArticle({
            id: article.id,
            name: title,
            text: content,
            status: article.status
        }))
        

    }

    return (
        <>
            <Form Title={article.name} Content={article.text} OnSave={onSave} />
        </>
    )
}

export default Editor;