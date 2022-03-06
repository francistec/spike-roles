import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { New, NewStatus } from "../../interfaces/New";
import { RootState } from "../../store";
import { changeStatus } from '../../config/slice/news.slice'


interface NewIemProp {
    newItem: New
}


const Dashboard = () => {

    const dispatch = useDispatch();
    const news = useSelector((state: RootState) => state.news)

    const NewItem = ({ newItem }: NewIemProp) => {
        return (
            <>
                <Text style={styles.title}>{newItem.name}</Text>
                <View style={styles.buttonsSection}>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={styles.button}>✏️ Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>dispatch(changeStatus(newItem.id))}>
                        <Text style={styles.button}>
                            {newItem.status === NewStatus.published ? '⛔ Unpublish' : '✅ Publish' }
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    return (
        <>
            {news.map( i => <NewItem key={i.id} newItem={i} /> )}
            <View>
                <Button title="Add fake new"></Button>
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