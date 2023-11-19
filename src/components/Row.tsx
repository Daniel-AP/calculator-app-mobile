import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { theme } from "../theme/theme";

export const Row = ({ children }: PropsWithChildren) => {
    return (
        <View style={theme.row}>
            { children }
        </View>
    );
};
