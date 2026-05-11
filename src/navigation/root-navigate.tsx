

import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { LoginScreen } from "../Pages/loginpage/login";
import { DashboardScreen } from "../Pages/dashboard/Dashboard";
import GeminiLiveInterview from "../Pages/interviewScreen/interviewChat";
import { NavigationContainer } from "@react-navigation/native";
// import { GeminiLiveInterview } from "../Pages/interviewScreen/interviewChat";



const Stack = createNativeStackNavigator();

export function RootNavigater(){
    return ( 
        <NavigationContainer>
    <Stack.Navigator screenOptions={{ 
        headerShown: false,

    }} >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        {/* <Stack.Screen name="InterviewChat" component={InterviewApp} /> */}
        <Stack.Screen name="live" component={GeminiLiveInterview} />
        
    </Stack.Navigator>
    </NavigationContainer>
)}