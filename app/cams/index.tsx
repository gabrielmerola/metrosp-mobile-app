import { NavBar } from "@/components/NavBar";
import { useTheme } from "@/components/ThemeProvider";
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { faCaretLeft, faCaretRight, faExpand, faVideo, faSpinner, faCompress } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Easing } from "react-native"; // Importação do Easing
import * as ScreenOrientation from 'expo-screen-orientation';

const logoBlue = require('@/assets/images/logoBlue.png');
const logoWhite = require('@/assets/images/logoWhite.png');

export default function Cams() {
    const { theme, toggleTheme, isDarkMode } = useTheme();
    // const { height, width } = Dimensions.get("window");
    const [height, setHeight] = useState(Dimensions.get("window").height);
    const [width, setWidth] = useState(Dimensions.get("window").width);
    const [cams, setCams] = useState([
        { id: 1, name: "Câmera 01" },
        { id: 2, name: "Câmera 02" },
        { id: 3, name: "Câmera 03" },
        { id: 4, name: "Câmera 04" },
        { id: 5, name: "Câmera 05" },
        { id: 6, name: "Câmera 06" },
        { id: 7, name: "Câmera 07" },
        { id: 8, name: "Câmera 08" },
        { id: 9, name: "Câmera 09" },
        { id: 10, name: "Câmera 10" },
        { id: 11, name: "Câmera 11" },
        { id: 12, name: "Câmera 12" },
        { id: 13, name: "Câmera 13" },
        { id: 14, name: "Câmera 14" },
        { id: 15, name: "Câmera 15" },
        { id: 16, name: "Câmera 16" },
        { id: 17, name: "Câmera 17" },
        { id: 18, name: "Câmera 18" },
        { id: 19, name: "Câmera 19" },
        { id: 20, name: "Câmera 20" },
    ]);
    const [selectedCamId, setSelectedCamId] = useState(1);
    const [selectedCam, setSelectedCam] = useState('01');
    const [sinal, setSinal] = useState();
    const [expanded, setExpanded] = useState(false);

    const spinValue = useRef(new Animated.Value(0)).current;

    function nextCam() {
        for (let i = 0; i < cams.length; i++) {
            if (cams[i].id === selectedCamId) {
                if (i === cams.length - 1) {
                    setSelectedCamId(cams[0].id);
                    setSelectedCam(cams[0].name.split(' ')[1]);
                    return;
                }
                setSelectedCamId(cams[i + 1].id);
                setSelectedCam(cams[i + 1].name.split(' ')[1]);
                return;
            }
        }
    }

    function prevCam() {
        for (let i = 0; i < cams.length; i++) {
            if (cams[i].id === selectedCamId) {
                if (i === 0) {
                    setSelectedCamId(cams[cams.length - 1].id);
                    setSelectedCam(cams[cams.length - 1].name.split(' ')[1]);
                    return;
                }
                setSelectedCamId(cams[i - 1].id);
                setSelectedCam(cams[i - 1].name.split(' ')[1]);
                return;
            }
        }
    }

    const updateDimensions = () => {
        setHeight(Dimensions.get("window").height);
        setWidth(Dimensions.get("window").width);
    };

    useEffect(() => {
        const subscription = Dimensions.addEventListener("change", updateDimensions);

        // Cleanup para remover o listener quando o componente for desmontado
        return () => subscription?.remove();
    }, []);

    // Expand and collapse the camera view
    useEffect(() => {
        if (expanded) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
        } else {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        }
        updateDimensions(); // Atualizar dimensões ao mudar estado de `expanded`
    }, [expanded]);

    // Recalculate the screen dimensions when the orientation changes
    // useEffect(() => {
    //     setHeight(Dimensions.get("window").height);
    //     setWidth(Dimensions.get("window").width);
    // }, [expanded]);

    // Spin animation
    useEffect(() => {
        const spinAnimation = Animated.loop(
          Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000, // duração de uma rotação em milissegundos
            easing: Easing.linear, // Adiciona easing linear para suavidade contínua
            useNativeDriver: true, // Melhor desempenho
          })
        );

        spinAnimation.start();

        return () => spinAnimation.stop();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <>
            {expanded ?
                <TouchableOpacity style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: 0, 
                    height: '100%', 
                    width: width * 0.05, 
                    backgroundColor: theme.COLORS.MAIN_BLUE, 
                    zIndex: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25
                }}
                    onPress={() => setExpanded(!expanded)}
                >
                    <FontAwesomeIcon
                        icon={faCaretRight}
                        size={32}
                        style={{ color: theme.COLORS.WHITE }}
                    />
                </TouchableOpacity>
                
            :
                <NavBar where="Cams" />
            }
            <SafeAreaView style={{ 
                flexDirection: expanded ? 'row' : 'column', 
                gap: 4, 
                backgroundColor: theme.COLORS.BACKGROUND, 
                width: '100%', 
                height: '100%' 
            }}>
                <View style={{ marginStart: expanded ? width * 0.10 : width * 0.15, marginTop: expanded ? 0 : height * 0.05, width: expanded ? '78%' : '80%', height: '100%'}}>
                    {!expanded && (  <Text style={{ fontSize: 32, marginBottom: 25, color: theme.COLORS.BLACK_WHITE }}>Câmeras</Text> )}
                    <View style={{ padding: 3, backgroundColor: theme.COLORS.MAIN_BLUE, flexDirection: expanded ? 'row' : 'column', width: '100%' }}>
                        <View style={{position: 'absolute', zIndex: 10, padding: 6}}>
                            <Text style={{ color: theme.COLORS.BLACK, fontSize: 16 }}>
                                Câmera {selectedCam}/{cams.length}
                            </Text>
                        </View>
                        <View style={{ width: '100%', height: expanded ? height * 0.85 : width * 0.8, backgroundColor: theme.COLORS.GRAY, justifyContent: 'center', alignItems: 'center' }}>
                            {sinal ? (
                                <Text style={{ color: theme.COLORS.WHITE, fontSize: 24, textAlign: 'center' }}>Sinal: {sinal}</Text>
                            ) : (
                                <Animated.View style={[{ transform: [{ rotate: spin }] }]}>
                                    <FontAwesomeIcon icon={faSpinner} size={64} style={{ color: theme.COLORS.BLACK }} />
                                </Animated.View>
                            )}
                        </View>
                        {!expanded && (
                            <View style={{ width: '100%', backgroundColor: theme.COLORS.MAIN_BLUE, flexDirection: expanded ? 'column' : 'row', justifyContent: 'space-between', paddingVertical: 8 }}>
                                <TouchableOpacity style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start' }}
                                    onPress={prevCam}
                                >
                                    <FontAwesomeIcon icon={faCaretLeft} size={32} style={{ color: theme.COLORS.WHITE }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => setExpanded(!expanded)}
                                >
                                    <FontAwesomeIcon icon={expanded ? faCompress : faExpand} size={32} style={{ color: theme.COLORS.WHITE }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-end' }}
                                    onPress={nextCam}
                                >
                                    <FontAwesomeIcon icon={faCaretRight} size={32} style={{ color: theme.COLORS.WHITE }} />
                                </TouchableOpacity>
                            </View>    
                        )}
                    </View>
                    {!expanded && (
                        <View style={{ height: height * 0.35, paddingTop: 14 }}>
                            <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, paddingBottom: 20 }}>
                                {cams.map((cam) => (
                                    <TouchableOpacity
                                        key={cam.id}
                                        style={{
                                            backgroundColor: theme.COLORS.MAIN_BLUE,
                                            padding: 4,
                                            borderRadius: 5,
                                            width: '22%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginBottom: 12,
                                        }}
                                        onPress={() => {
                                            setSelectedCamId(cam.id)
                                            setSelectedCam(cam.name.split(' ')[1])
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faVideo} size={32} style={{ color: theme.COLORS.WHITE }} />
                                        <Text style={{ color: theme.COLORS.WHITE, fontSize: 24 }}>{cam.name.split(' ')[1]}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    )}
                </View>
                {expanded && (
                    <View style={{width: '10%', height: height * 0.85, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 30}}>
                        <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: theme.COLORS.MAIN_BLUE, justifyContent: 'center', 
                            alignItems: 'center', borderRadius: 10}}
                            onPress={prevCam}
                        >
                            <FontAwesomeIcon icon={faCaretLeft} size={32} style={{ color: theme.COLORS.WHITE }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: theme.COLORS.MAIN_BLUE, justifyContent: 'center', 
                            alignItems: 'center', borderRadius: 10, marginTop: 10}}
                            onPress={() => setExpanded(!expanded)}
                        >
                            <FontAwesomeIcon icon={faCompress} size={32} style={{ color: theme.COLORS.WHITE }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: theme.COLORS.MAIN_BLUE, justifyContent: 'center', 
                            alignItems: 'center', borderRadius: 10}}
                            onPress={nextCam}
                        >
                            <FontAwesomeIcon icon={faCaretRight} size={32} style={{ color: theme.COLORS.WHITE }} />
                        </TouchableOpacity>
                    </View>
                )}
            </SafeAreaView>
            <View style={{ position: 'absolute', right: 10, bottom: 10 }}>
                <Image source={isDarkMode ? logoBlue : logoWhite} style={{ width: 32, height: 32 }} />
            </View>
        </>
    );
}
