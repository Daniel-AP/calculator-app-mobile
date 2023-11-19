import { Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme/theme";

interface Props {
    backgroundColor: string,
    color: string,
    title: string,
    span?: number,
    onPress: () => void
}

export const Button = ({ backgroundColor, color, title, span=1, onPress }: Props) => {

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <View style={[
                theme.button,
                {
                    backgroundColor,
                    width: (span*80)+(span-1)*10
                }
            ]}>
                <Text style={[
                    theme.text,
                    { color }
                ]}>
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    );
};
