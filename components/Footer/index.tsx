import React  from "react";
import { Button, StyleSheet, View} from "react-native";
import { User } from "../../auth/models/User";

interface FooterProps {
    navigation: any
}

const Footer = ({ navigation }: FooterProps) => {

    const goToDashboard = (role: string) => {
        User.setRole(role)
        navigation.navigate('Dashboard')
    }

    return (
        <>
            <View style={styles.container}>
                <Button onPress={()=>goToDashboard('Admin')} title="Join as Admin" />
                <Button onPress={()=>goToDashboard('Writer')} title="Join as Writer" />
                <Button onPress={()=>goToDashboard('Editor')} title="Join as Editor" />
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