import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { New, NewStatus } from "../../interfaces/New";
import { RootState } from "../../store";
import { changeStatus } from '../../config/slice/news.slice'
import { StackNavigationProp } from "@react-navigation/stack";
import { NewsScreenList } from "../../StackScreen";
import { useNavigation } from "@react-navigation/native";
import { User } from '../../auth/models/User'
import { Actions } from "../../auth/actions";

interface NewIemProp {
    newItem: New
}

type editorNavigation = StackNavigationProp<NewsScreenList, 'Dashboard'>

const Dashboard = () => {

    const dispatch = useDispatch();
    const news = useSelector((state: RootState) => state.news)
    const navigation = useNavigation<editorNavigation>();





    const NewItem = ({ newItem }: NewIemProp) => {
        return (
            <>

                <Text style={styles.title}>{newItem.name}</Text>
                <View style={styles.buttonsSection}>
                    {User.can(Actions.Edit) &&
                        <TouchableOpacity onPress={() => navigation.navigate('Editor', { article: newItem.id })}>
                            <Text style={styles.button}>✏️ Edit</Text>
                        </TouchableOpacity>
                    }

                    <TouchableOpacity onPress={() => dispatch(changeStatus(newItem.id))}>
                        <Text style={styles.button}>
                            {newItem.status === NewStatus.published ? (User.can(Actions.Unpublish) ? '⛔ Unpublish' : '') :  (User.can(Actions.Publish) ? '✅ Publish' : '')}
                        </Text>
                    </TouchableOpacity>
                </View>



            </>
        )
    }

    return (
        <>
            {User.can(Actions.Read) ?
                <>
                    {news.map(i => <NewItem key={i.id} newItem={i} />)}
                </> :
                <>
                    <Text> Hold down cowboy</Text>
                </>
            }

            <View>
                {User.can(Actions.Write) && <Button onPress={() => navigation.navigate('NewArticle')} title="Add fake new" />} 
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        marginLeft: 30,
        marginVertical: 8,
    },
    buttonsSection: {
        flexDirection: 'row',
        marginLeft: 30
    },
    button: {
        marginRight: 16,
        color: '#377bb6',
        fontWeight: 'bold'
    }
})

export default Dashboard;