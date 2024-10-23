import { Input } from "@/components/input";
import { NavBar } from "@/components/NavBar";
import { useTheme } from "@/components/ThemeProvider";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Shadow } from "react-native-shadow-2";
import RNPickerSelect from 'react-native-picker-select';
import { useState } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const logoBlue = require("@/assets/images/logoBlue.png");
const logoWhite = require("@/assets/images/logoWhite.png");

export default function CitizenCreation() {
    const { height, width } = Dimensions.get("window");
    const { theme, toggleTheme, isDarkMode } = useTheme();
    const [selectedValue, setSelectedValue] = useState("opcao1");

    return (
        <>
            <NavBar where="Notifications" />
            <SafeAreaView style={{flexDirection: 'row', gap:4, backgroundColor: theme.COLORS.BACKGROUND, width: '100%', height: '100%'}}>
                <View style={{marginStart: width * 0.15, marginTop: height * 0.05, width: '80%', height: '100%', gap: 35}}>
                    <Text style={{fontSize: 32, color: theme.COLORS.BLACK_WHITE}}>Cadastro</Text>
                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Shadow distance={12} startColor={theme.COLORS.BLACK + "60"} offset={[0, 0]}>
                            <View style={{width: width * 0.5, height: height * 0.35, backgroundColor: theme.COLORS.GRAY, borderRadius: 5}}>

                            </View>
                        </Shadow>
                        <View style={{flexDirection: 'row', gap: 8, marginTop: 12}}>
                            <TouchableOpacity style={{backgroundColor: theme.COLORS.MAIN_BLUE, padding: 10, borderRadius: 9999}}>
                                <Text style={{color: theme.COLORS.WHITE}}>Tirar Foto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: theme.COLORS.MAIN_BLUE, padding: 10, borderRadius: 9999}}>
                                <Text style={{color: theme.COLORS.WHITE}}>Enviar Foto</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'column', gap: 12, marginTop: 24, paddingHorizontal: 24}}>
                            <Input type="Nome" placeholder="Digite o nome do Cidadão" />
                            <Input type="CPF" placeholder="Digite o CPF do Cidadão" />
                            <Input type="RG" placeholder="Digite o RG do Cidadão" />
                            <View style={{ paddingHorizontal: 0, marginTop: 0 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: theme.COLORS.BLACK_WHITE, marginBottom: 0 }}>
                                    Ocupação
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 6,
                                    borderBottomColor: theme.COLORS.BLACK_WHITE, borderBottomWidth: 4,
                                 }}>
                                    <FontAwesomeIcon icon={faBriefcase} size={32} style={{ color: theme.COLORS.BLACK_WHITE, marginRight: 10 }} />
                                    <RNPickerSelect
                                        onValueChange={(value) => setSelectedValue(value)}
                                        items={[
                                            { label: 'Opção 1', value: 'opcao1' },
                                            { label: 'Opção 2', value: 'opcao2' },
                                            { label: 'Opção 3', value: 'opcao3' },
                                        ]}
                                        placeholder={{ label: 'Selecione a Ocupação', value: null }}
                                        style={{
                                            inputIOS: {
                                                color: theme.COLORS.BLACK_WHITE,
                                                paddingVertical: 12,
                                                paddingHorizontal: 10,
                                                borderWidth: 1,
                                                borderColor: theme.COLORS.GRAY,
                                                borderRadius: 5,
                                                backgroundColor: theme.COLORS.BACKGROUND,
                                                width: 200,
                                            },
                                            inputAndroid: {
                                                color: theme.COLORS.BLACK_WHITE,
                                                paddingVertical: 8,
                                                paddingHorizontal: 10,
                                                borderWidth: 1,
                                                borderColor: theme.COLORS.GRAY,
                                                borderRadius: 5,
                                                backgroundColor: theme.COLORS.BACKGROUND,
                                                width: 200,
                                            },
                                        }}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity style={{backgroundColor: theme.COLORS.MAIN_BLUE, padding: 10, borderRadius: 9999, marginTop: 0, width: '60%', marginHorizontal: 'auto'}}>
                                <Text style={{color: theme.COLORS.WHITE, textAlign: "center"}}>Finalizar Registro</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <View style={{position: 'absolute', right: 10, bottom: 10}}>
                <Image source={isDarkMode ? logoBlue : logoWhite} style={{width: 32, height: 32}} />
            </View>
        </>
    );
}