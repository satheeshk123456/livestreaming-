import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "../live/HomePage";
import HostPage from "../live/HostPage";
import AudiencePage from "../live/AudiencePage";
import CallPage from "./group/callg";
import HomePage3 from "./group/homeg";


const Stack = createNativeStackNavigator();

export default function AppNavigation(props) {
    return (
        <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen options={{headerShown: false}} headerMode="none" name="HomePage" component={HomePage} />
            <Stack.Screen options={{headerShown: false}} name="HostPage" component={HostPage} />
            <Stack.Screen options={{headerShown: false}} name="AudiencePage" component={AudiencePage} />
            <Stack.Screen options={{headerShown: false}} name="CallPage" component={CallPage}/>
            <Stack.Screen name="HomePage3" component={HomePage3}/>
         </Stack.Navigator>
    );
}