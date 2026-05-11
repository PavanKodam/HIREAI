import { useState } from "react"
import { Alert, Dimensions, ImageBackground, Platform, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet } from "react-native"
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";

const { width, height } = Dimensions.get('window');

export const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [signup, Setsignup] = useState(false)

    const navigation = useNavigation<any>();


    const handleAuth = async (): Promise<void> => {
        console.log("Handling authentication");
        const cleanEmail = email.trim();

        if (!cleanEmail || !password) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }

        if (signup && password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }



        try {
            if (signup) {
                //  SIGN UP FLOW
                const userCredential = await auth().createUserWithEmailAndPassword(cleanEmail, password);

                // Send email verification
                await userCredential.user.sendEmailVerification();
                await auth().signOut();

                Alert.alert("Verify Email", "Check your email before login");
                Setsignup(false); // switch to login after sign up
            } else {
                // LOGIN FLOW
                const userCredential = await auth().signInWithEmailAndPassword(cleanEmail, password);

                if (!userCredential.user.emailVerified) {
                    await auth().signOut();
                    Alert.alert("Verify Email", "Please verify your email before logging in.");
                    return;
                }

                Alert.alert("Success", "Login successful!");
                // navigation.navigate("Home"); // navigating to dashboard after successful login
                navigation.navigate("Dashboard");
            }
        } catch (error: any) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    Alert.alert("Error", "Email already in use");
                    break;
                case "auth/invalid-email":
                    Alert.alert("Error", "Invalid email");
                    break;
                case "auth/user-not-found":
                    Alert.alert("Error", "User not found");
                    break;
                case "auth/wrong-password":
                    Alert.alert("Error", "Wrong password");
                    break;
                case "auth/weak-password":
                    Alert.alert("Error", "Password must be at least 6 characters");
                    break;
                default:
                    Alert.alert("Error", error.message);
            }
        }
    };
    return (

        <ImageBackground
            source={require("../../assets/bgscreen.png")}
            style={styles.bg}
            resizeMode="stretch"
        >
            <SafeAreaView
                style={styles.safe}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? 'padding' : 'height'}
                    style={styles.kav}>
                    <ScrollView
                        contentContainerStyle={styles.scroll}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false} //this hides the sidebar 
                    >

                        <View style={styles.glassContainer}>
                                <Text style={styles.welcomeText}>
                                    {signup ? "Let's Get\nStarted!" : "Hey, \nWelcome Back!"}
                                </Text>
                        <View>
                                <TextInput style={styles.input}
                                    placeholder="Email Id"
                                    value={email}
                                    onChangeText={setEmail}

                                />

                                <TextInput style={styles.inputPassword}
                                    placeholder="Password"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry
                                />
                                {signup && (
                                    <TextInput style={styles.inputPassword}
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                        secureTextEntry
                                    />)}
                                <Text style={{ color: "#007AFF", textAlign: "right", marginBottom: 30, marginTop: -10 }}>
                                    Forget Password?
                                </Text>


                                <TouchableOpacity style={styles.loginButton} onPress={handleAuth}>
                                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>{signup ? "Sign Up" : "Login"}</Text>
                                </TouchableOpacity>

                                <View style={styles.signupContainer}>
                                    <Text style={{ color: "#fff", textAlign: "center", marginTop: 20 }}>
                                        {signup ? "Already have an account?" : "Don't have an account?"}
                                    </Text>

                                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => Setsignup(!signup)}>
                                        <Text style={{ color: "#007AFF", textAlign: "center" }} >
                                            {signup ? " Sign In" : " Sign Up"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>

        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    bg: {
        flex: 1,

    },
    safe: {
        flex: 1,
        //  marginHorizontal: 20, justifyContent: "flex-start", marginTop: 50     this is my style 
    },
    kav: {
        flex: 1 //keyboard Avioding View  new term hai
    },
    scroll: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,  // 5% of screen width
        paddingVertical: height * 0.06,

    },
    welcomeText: {
        fontSize: width * 0.18,
        fontWeight: '800',
        marginBottom: height * 0.05,
        color: "#fff",
        lineHeight: width * 0.20,
        letterSpacing: -0.5,

    },
    // ContainerWT: {
    //     flexDirection: "row",
    //     justifyContent: "flex-start",
    //     alignItems: "flex-start",

    // },
    glassContainer: {//chatbot
        width: '100%',
        padding: width * 0.06,           // 6% of screen width
        paddingBottom: height * 0.04,
        borderRadius: 22,
        // Semi-transparent background
        backgroundColor: 'rgba(177, 177, 177, 0.13)',
        // Thin border to mimic glass edge
        borderWidth: 1,
        borderColor: 'rgba(206, 202, 202, 0.15)',
        // Shadow for depth
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 8,

    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        color: "#fff",

    },
    inputPassword: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 20,
        color: "#fff",
    },
    loginButton: {
        backgroundColor: "#007AFF",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    signupContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    }

})

