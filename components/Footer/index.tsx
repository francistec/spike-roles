import { StackNavigationProp } from "@react-navigation/stack";
import React  from "react";
import { Button, StyleSheet, View} from "react-native";
import { NewsScreenList } from "../../StackScreen";

interface FooterProps {
    navigation: any
}

const Footer = ({ navigation }: FooterProps) => {

    const goToDashboard = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <>
            <View style={styles.container}>
                <Button onPress={goToDashboard} title="Join as Admin" />
                <Button onPress={goToDashboard} title="Join as Writer" />
                <Button onPress={goToDashboard} title="Join as Editor" />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Footer;