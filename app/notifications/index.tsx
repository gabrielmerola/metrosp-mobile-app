import { NavBar } from '@/components/NavBar';
import { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { faGlobe, faUser, faVideo, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useTheme } from '@/components/ThemeProvider';
import { Shadow } from 'react-native-shadow-2';

export default function Notifications() {
    const { height, width } = Dimensions.get("window");
    const { theme, toggleTheme, isDarkMode } = useTheme();
    const [selectedTab, setSelectedTab] = useState('Gerais');

    return (
        <>
            <NavBar where="Notifications" />
            <SafeAreaView style={{flexDirection: 'row', gap:4, backgroundColor: theme.COLORS.BACKGROUND, width: '100%', height: '100%' }}>
                <View style={{marginStart: width * 0.15, marginTop: height * 0.05, width: '80%', height: '100%', gap: 35}}>
                    <Text style={{fontSize: 32, color: theme.COLORS.BLACK_WHITE}}>Notificações</Text>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 8,
                            borderTopLeftRadius: selectedTab === 'Gerais' ? 15 : 0, borderTopRightRadius: selectedTab === 'Gerais' ? 15 : 0, 
                            borderTopWidth: selectedTab === 'Gerais' ? 2 : 0, 
                            borderLeftWidth: selectedTab === 'Gerais' ? 2 : 0, 
                            borderRightWidth: selectedTab === 'Gerais' ? 2 : 0, 
                            borderBottomWidth: selectedTab === 'Gerais' ? 0 : 2,
                            borderColor: theme.COLORS.BLACK_WHITE,
                            backgroundColor: selectedTab === 'Gerais' ? theme.COLORS.MAIN_BLUE : theme.COLORS.BACKGROUND,
                            gap: 4
                        }}
                            onPress={() => setSelectedTab('Gerais')}
                        >
                            <FontAwesomeIcon icon={faGlobe} size={32} color={selectedTab === 'Gerais' ? theme.COLORS.WHITE : theme.COLORS.BLACK_WHITE} />
                            <Text style={{color: selectedTab === 'Gerais' ? theme.COLORS.WHITE : theme.COLORS.BLACK_WHITE, fontSize: 24}}>Gerais</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 8,
                            borderTopLeftRadius: selectedTab === 'Gerais' ? 0 : 15, borderTopRightRadius: selectedTab === 'Gerais' ? 0 : 15, 
                            borderTopWidth: selectedTab === 'Gerais' ? 0 : 2, 
                            borderLeftWidth: selectedTab === 'Gerais' ? 0 : 2, 
                            borderRightWidth: selectedTab === 'Gerais' ? 0 : 2, 
                            borderBottomWidth: selectedTab === 'Gerais' ? 2 : 0,
                            borderColor: theme.COLORS.BLACK_WHITE,
                            backgroundColor: selectedTab === 'Gerais' ? theme.COLORS.BACKGROUND : theme.COLORS.MAIN_BLUE,
                            gap: 4
                        }}
                            onPress={() => setSelectedTab('Suas')}
                        >
                            <FontAwesomeIcon icon={faUser} size={32} color={selectedTab === 'Gerais' ? theme.COLORS.BLACK_WHITE : theme.COLORS.WHITE} />
                            <Text style={{color: selectedTab === 'Gerais' ? theme.COLORS.BLACK_WHITE : theme.COLORS.WHITE, fontSize: 24}}>Suas</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Shadow 
                            distance={4} 
                            startColor={!isDarkMode ? theme.COLORS.WHITE + "20" : theme.COLORS.BLACK + "40"} 
                            offset={[0, 4]}
                        >
                            <TouchableOpacity style={{width: width*0.8, height: height*0.1, backgroundColor: theme.COLORS.GRAY, borderRadius: 15, flexDirection: 'row', padding: 4}}>
                                <View style={{width: '80%', height: '100%', flexDirection: 'column'}}>
                                    <View style={{width: '100%', height: '40%', flexDirection: 'row', alignItems: 'center', gap: 4}}>
                                        <FontAwesomeIcon icon={faVideo} size={28} color={theme.COLORS.BLACK} />
                                        <Text style={{fontSize: 16}}>Câmera 06</Text>
                                    </View>
                                    <View style={{width: '100%', height: '60%', gap: 1}}>
                                        <View style={{width: '90%', height: '60%', alignSelf: 'flex-end'}}>
                                            <Text style={{fontSize: 10}}>Ocorreu um problema de reconhecimento da câmera 06 no bloco  Z</Text>
                                        </View>
                                        <View style={{width: '90%', height: '40%', alignSelf: 'flex-end', flexDirection: 'row', gap: 4}}>
                                            <TouchableOpacity style={{backgroundColor: theme.COLORS.MAIN_BLUE, width: '30%', justifyContent: 'center', 
                                                alignItems: 'center', borderRadius: 9999}}>
                                                <Text style={{color: theme.COLORS.WHITE, fontSize: 12, textAlign: 'center'}}>Resolver</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{backgroundColor: theme.COLORS.MAIN_BLUE, width: '30%', justifyContent: 'center', 
                                                alignItems: 'center', borderRadius: 9999}}>
                                                <Text style={{color: theme.COLORS.WHITE, fontSize: 12, textAlign: 'center'}}>Ampliar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{width: '20%', height: '100%', paddingTop: 4, alignItems: 'flex-end'}}>
                                    <FontAwesomeIcon icon={faTriangleExclamation} size={28} color={theme.COLORS.BLACK} />
                                </View>
                            </TouchableOpacity>
                        </Shadow>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}