import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface FormProps {
    Title?: string,
    Content?: string,
    OnSave: Function
}

const Form = ({ Title, Content, OnSave }: FormProps) => {

    const [articleName, setArticleName] = useState("");
    const [articleContent, setArticleContent] = useState("")

    useEffect(() => {
        Content && setArticleContent(Content)
        Title && setArticleName(Title)
    }, [])

    return (
        <>  
            <View style={style.container}>
                <Text style={style.label}>Title</Text>
                <TextInput style={style.input} value={articleName} onChangeText={(text)=> setArticleName(text)} />
                <Text style={style.label}>Content</Text>
                <TextInput style={style.input} multiline value={articleContent} onChangeText={(content)=> setArticleContent(content)} />
                <Button title="Save" onPress={()=>OnSave(articleName, articleContent)} />
            </View>
        </>
    )

}

const style = StyleSheet.create({
    container: {
        width: '80%',
        justifyContent: "center",
        marginLeft: '10%',
    },
    label: {
        marginTop: 15,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input: {
        borderColor: '#000',
        borderWidth: 1
    }
})

export default Form;