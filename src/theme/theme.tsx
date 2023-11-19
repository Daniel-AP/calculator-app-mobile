import { StyleSheet } from "react-native";

export const theme = StyleSheet.create({
    app: {
        backgroundColor: "black",
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: "flex-end"
    },
    result: {
        color: "white",
        fontSize: 60,
        textAlign: "right"
    },
    subresult: {
        color: "gray",
        fontSize: 20,
        textAlign: "right"
    },
    grid: {
        gap: 10,
        marginVertical: 20
    },
    row: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        height: 80,
        borderRadius: 9999,
        justifyContent: "center"
    },
    text: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "400"
    }
});