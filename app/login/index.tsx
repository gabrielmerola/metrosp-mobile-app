// Login.js
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { useTheme } from "@/components/ThemeProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@/components/input";
import { useState } from "react";
import { router } from "expo-router";

const logo = require('@/assets/images/logoWhite.png');

export default function Login() {
    const { theme, toggleTheme, isDarkMode } = useTheme();
    const [stillLoged, setStillLoged] = useState(false);

    async function handleLogin() {
        // Implementar lógica de login
        router.replace('/notifications');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: theme.COLORS.MAIN_BLUE, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={toggleTheme} style={{position: "absolute", top: 10, right: 10}}>
                    <FontAwesomeIcon 
                        icon={isDarkMode ? faSun : faMoon} 
                        size={24} 
                        style={{ color: theme.COLORS.WHITE }}
                    />
                </TouchableOpacity>
                <View style={{flexDirection: 'column', justifyContent: "center", alignItems: "center", height: '40%'}}>
                    <View>
                        <Image source={logo} style={{ width: 160, height: 160 }} />
                    </View>
                    <Text style={{ color: theme.COLORS.WHITE, fontSize: 40, textDecorationLine: "underline" }}>Entrar</Text>
                </View>
                <View style={{height: '60.5%', width: '100%', backgroundColor: 'rgba(0,0,0,0.35)', alignItems: 'baseline', justifyContent: "flex-end",
                    borderTopEndRadius: 25, borderTopStartRadius: 25,
                }}>
                    <View style={{
                        height: '98.5%', 
                        width: '100%', 
                        backgroundColor: theme.COLORS.BACKGROUND, 
                        borderTopLeftRadius: 25, 
                        borderTopRightRadius: 25,
                        shadowColor: theme.COLORS.BLACK, 
                        shadowOffset: { width: 0, height: -6 }, // Sombra para cima com altura 6
                        shadowOpacity: 0.5, 
                        shadowRadius: 3.84, 
                        elevation: 5, 
                        paddingTop: 75,
                        paddingHorizontal: 50,
                        gap: 20,
                    }}>
                        <View>
                            <Input type="E-mail" placeholder="Digite o seu E-mail ou ID" />
                        </View>
                        <View>
                            <Input type="Senha" placeholder="Digite o seu E-mail ou ID" />
                            <TouchableOpacity style={{alignSelf: 'flex-start', flexDirection: 'row', gap: 2}}>
                                <Text style={{color: theme.COLORS.BLACK_WHITE, fontSize: 12}}>Esqueceu sua Senha?</Text>
                                <Text style={{color: theme.COLORS.MAIN_BLUE, textDecorationLine: "underline", fontSize: 12}}>Recupera Aqui!</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => setStillLoged(!stillLoged)} style={{flexDirection: 'row', gap: 4, alignItems: "center"}}>
                                <FontAwesomeIcon 
                                    icon={stillLoged ? faSquareCheck : faSquare} 
                                    size={24} 
                                    style={{ color: stillLoged ? theme.COLORS.MAIN_BLUE : theme.COLORS.BLACK_WHITE }} 
                                />
                                <Text style={{ color: theme.COLORS.BLACK_WHITE }}>Manter Login</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{backgroundColor: theme.COLORS.MAIN_BLUE, padding: 10, borderRadius: 9999, marginTop: 36}}
                            onPress={handleLogin}
                        >
                            <Text style={{color: theme.COLORS.WHITE, fontSize: 20, textAlign: 'center'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
