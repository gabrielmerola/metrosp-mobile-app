import { View, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { faUser, faKey, faEye, faEyeSlash, faBriefcase, faIdCard, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";

interface InputProps extends TextInputProps {
    type: string;
}

export const Input = ({ type, ...props }: InputProps) => {
    const { theme } = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={{
            flexDirection: 'row',
            width: '100%',
            borderBottomColor: theme.COLORS.BLACK_WHITE,
            borderBottomWidth: 4,
            paddingHorizontal: 4,
            paddingBottom: 4,
            justifyContent: type === "Senha" ? 'space-between' : 'flex-start', 
            alignItems: 'center',
            gap: 10,
        }}>
            <FontAwesomeIcon
                icon={
                    type === "E-mail" || type === 'Nome' ? faUser
                        : type === "Senha" ? faKey
                        : type === "Ocupação" ? faBriefcase
                        : type === "CPF" ? faAddressCard
                        : type === "RG" ? faIdCard
                        : faIdCard
                }
                size={32}
                style={{ color: theme.COLORS.BLACK_WHITE }}
            />
            <TextInput
                style={{ width: '74%', textAlign: "left", fontSize: 16 }}
                keyboardType={
                    type === "E-mail" ? "email-address"
                        : type === "Senha" ? "default"
                        : type === "Ocupação" ? "default"
                        : type === "CPF" ? "number-pad"
                        : type === "RG" ? "number-pad"
                        : "default"
                }
                secureTextEntry={type === "Senha" && !showPassword}
                placeholderTextColor={theme.COLORS.BLACK_WHITE_OPACITY_3}
                {...props}
            />
            {type === "Senha" && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        size={28}
                        style={{ color: theme.COLORS.BLACK_WHITE }}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}
