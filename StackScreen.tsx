import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import News from './screens/News'
import { Text } from "react-native";
import Dashboard from "./screens/Dashboard/Index";
import Editor from "./screens/Edit";
import NewArticle from "./screens/NewArticle";

export type NewsScreenList = {
    News: undefined,
    Dashboard: undefined,
    Editor: {article: number} | undefined,
    NewArticle: undefined
}


const Stack = createNativeStackNavigator<NewsScreenList>()



const StackNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='News' component={News} />
                <Stack.Screen name='Dashboard' component={Dashboard} />
                <Stack.Screen name='Editor' component={Editor} />
                <Stack.Screen name='NewArticle' component={NewArticle} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default StackNavigation;