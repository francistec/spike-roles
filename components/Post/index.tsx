import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface PostProp {
    name: string,
    text: string
}

const Post = ({name, text}: PostProp) => {
    return (
        <>
            <View style={styles.postCotainer}>
                <View style={styles.ImageHolder}>
                    <Text style={styles.unavailableImage}>No image available</Text>
                </View>
                <Text style={styles.postTitle}>{name}</Text>
                <Text>
                    {text}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    postCotainer: {
        width: '90%'
    },
    ImageHolder: {
        backgroundColor: '#ace89e',
        marginTop: 15,
        textAlign: 'center',
        alignItems: 'center',
        padding: 20,
        paddingVertical: 60,

    },
    unavailableImage: {
        fontWeight: 'bold',
        color: '#8abb7f',
    },
    postTitle: {
        textAlign: 'left',
        fontSize: 23,
        marginVertical: 8,
        color: '#000',
    }
})

export default Post;