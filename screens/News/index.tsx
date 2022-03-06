import React from "react";
import { ScrollView, StyleSheet, useColorScheme, View } from "react-native";
import Header from "../../components/Header";
import Post from "../../components/Post";
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { StackNavigationProp } from "@react-navigation/stack";
import { NewsScreenList } from "../../StackScreen";
import Footer from "../../components/Footer";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { NewStatus } from "../../interfaces/New";

type footerNavigation = StackNavigationProp<NewsScreenList, 'News'>

const News = () => {

    const navigation = useNavigation<footerNavigation>();
    const isDarkMode = useColorScheme() === 'dark';
    const news = useSelector((state: RootState) => state.news.filter(article=>article.status === NewStatus.published))

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (<>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <Header />
            <View
                style={styles.sectionContainer}>
                {news.map( i => <Post key={i.id} name={i.name} text={i.text} /> )}  
            </View>
        </ScrollView>
        <Footer navigation={navigation} />
    </>)
}

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: '#f1f1f1',
        marginTop: 30,

        alignItems: 'center'
    }
})

export default News;