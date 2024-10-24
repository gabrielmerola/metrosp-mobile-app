import { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions, Image, Text, TouchableWithoutFeedback, LayoutAnimation, UIManager, Platform } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretRight, faCaretLeft, faSun, faMoon, faBell, faVideo, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../ThemeProvider";
import { Shadow } from 'react-native-shadow-2';
import { router } from "expo-router";

interface NavBarProps {
    where: string;
}

const logo = require('@/assets/images/logoWhite.png');

// Habilitar animações de layout no Android
if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const NavBar = ({ where }: NavBarProps) => {
    const { theme, toggleTheme, isDarkMode } = useTheme();
    const [expanded, setExpanded] = useState(false);
    const { height, width } = Dimensions.get("window");

    const handleNavigation = (toWhere: string) => {
        router.replace('/' + toWhere as any);
    }

    const handleOutsideClick = () => {
        if (expanded) {
            toggleExpand();
        }
    }

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    }

    const NavBarContent = (
        <Shadow distance={12} startColor={theme.COLORS.BLACK + "60"} offset={[0, 5]}>
            <View
                style={[
                    styles.navBar,
                    {
                        width: expanded ? width * 0.6 : width * 0.1,
                        height: height,
                        backgroundColor: theme.COLORS.MAIN_BLUE,
                        borderTopEndRadius: 25,
                        borderBottomEndRadius: 25,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                    }
                ]}
            >
                {expanded && (
                    <View style={{ height: '100%', width: '85%', padding: 10, gap: 24 }}>
                        <View>
                            <Image source={logo} style={{ width: 40, height: 40 }} />
                            <TouchableOpacity onPress={toggleTheme} style={{ position: "absolute", top: 10, right: 10 }}>
                                <FontAwesomeIcon
                                    icon={isDarkMode ? faSun : faMoon}
                                    size={24}
                                    style={{ color: theme.COLORS.WHITE }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: 26 }}>
                            <Text style={{ color: theme.COLORS.WHITE, fontSize: 24, textDecorationLine: 'underline' }}>Estação da Luz</Text>
                            <Text style={{ color: theme.COLORS.WHITE, fontSize: 20 }}>Operador Isaías</Text>
                        </View>
                        <View style={{ flexDirection: 'column', gap: 40 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }} onPress={() => handleNavigation('notifications')}>
                                <View style={{ width: 70, height: 70, backgroundColor: theme.COLORS.WHITE, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                                    <FontAwesomeIcon icon={faBell} size={32} style={{ color: theme.COLORS.BLACK }} />
                                </View>
                                <Text style={{ color: theme.COLORS.WHITE, fontSize: 16 }}>Notificações</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }} onPress={() => handleNavigation('cams')}>
                                <View style={{ width: 70, height: 70, backgroundColor: theme.COLORS.WHITE, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                                    <FontAwesomeIcon icon={faVideo} size={32} style={{ color: theme.COLORS.BLACK }} />
                                </View>
                                <Text style={{ color: theme.COLORS.WHITE, fontSize: 16 }}>Câmeras</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }} onPress={() => handleNavigation('citizenCreation')}>
                                <View style={{ width: 70, height: 70, backgroundColor: theme.COLORS.WHITE, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                                    <FontAwesomeIcon icon={faUserPlus} size={32} style={{ color: theme.COLORS.BLACK }} />
                                </View>
                                <Text style={{ color: theme.COLORS.WHITE, fontSize: 16, flexWrap: 'wrap', width: '60%', textAlign: 'justify' }}>Cadastrar Cidadão</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                <TouchableOpacity
                    style={{
                        height: '98%', width: '15%', justifyContent: 'center', alignItems: 'center',
                        borderLeftWidth: expanded ? 2 : 0, borderColor: '#24249A',
                    }}
                    onPress={(e) => {
                        e.stopPropagation(); // Previne o clique fora de fechar o menu
                        toggleExpand();
                    }}
                >
                    <FontAwesomeIcon
                        icon={expanded ? faCaretLeft : faCaretRight}
                        size={32}
                        style={{ color: theme.COLORS.WHITE }}
                    />
                </TouchableOpacity>
            </View>
        </Shadow>
    );

    return expanded ? (
        <TouchableWithoutFeedback onPress={handleOutsideClick}>
            <View style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 10, height: height, width: width }}>
                {NavBarContent}
            </View>
        </TouchableWithoutFeedback>
    ) : (
        <View style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 10 }}>
            {NavBarContent}
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        bottom: 0,
        left: 0,
        zIndex: 10,
    },
});
