import React, { useState } from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { theme } from "../theme/theme";
import { Row } from "../components/Row";
import { Button } from "../components/Button";
import { Operation } from "../types/types.d";
import { calculate } from "../helpers/calculate";
import { format } from "../helpers/format";

export const MainCalculatorScreen = () => {

    const [operation, setOperation] = useState<Operation>(Operation.NONE);
    const [subvalue, setSubvalue] = useState<string>("");
    const [value, setValue] = useState<string>("0");

    const decimalSeparator = (1.1).toLocaleString().at(1) as string;

    const handleClear = () => {

        if(value === "0" || isNaN(Number(value))) {

            setSubvalue("");
            setOperation(Operation.NONE);

        }

        setValue("0");

    };

    const handlePress = (generateValue: (value: string) => string) => {

        if(isNaN(Number(value))) return;
        if(value === "0") setValue("");

        setValue(generateValue);

    };

    const handleOperation = (o: Operation) => {

        const value1 = Number(subvalue);
        const value2 = Number(value);

        const subresult = calculate(value1, value2, operation);

        if(isNaN(Number(subresult))) {
            
            setValue("Error");
            setSubvalue("");

            return;
        }

        setSubvalue(subresult);
        setOperation(o);
        setValue("0");

    };

    const handleEqual = () => {

        const value1 = Number(subvalue);
        const value2 = Number(value);

        setValue(calculate(value1, value2, operation));
        setOperation(Operation.NONE);
        setSubvalue("");

    };

    return (
        <SafeAreaView style={theme.app}>
            <StatusBar
                backgroundColor="black"
                barStyle="light-content"
            />
            <View style={theme.container}>
                <Text numberOfLines={1} adjustsFontSizeToFit style={theme.subresult}>{ subvalue ? format(subvalue) : "" }</Text>
                <Text numberOfLines={1} adjustsFontSizeToFit style={theme.result}>
                    {
                        isNaN(Number(value))
                            ? "Error"
                            : format(value)
                    }
                </Text>
                <View style={theme.grid}>
                    <Row>
                        <Button
                            backgroundColor="#808080"
                            color="black"
                            title="C"
                            onPress={handleClear}
                        />
                        <Button
                            backgroundColor="#808080"
                            color="black"
                            title="+/-"
                            onPress={() => handlePress(value => `${-1*Number(value)}`)}
                        />
                        <Button
                            backgroundColor="#808080"
                            color="black"
                            title="del"
                            onPress={() => handlePress(value => !(["-","0", ""].includes(value.slice(0, -1))) ? value.slice(0, -1) : "0")}
                        />
                        <Button
                            backgroundColor="darkorange"
                            color="#cccccc"
                            title="/"
                            onPress={() => handleOperation(Operation.DIVISION)}
                        />
                    </Row>
                    <Row>
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title="7"
                            onPress={() => handlePress(value => value+"7")}
                        />
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title="8"
                            onPress={() => handlePress(value => value+"8")}
                        />
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title="9"
                            onPress={() => handlePress(value => value+"9")}
                        />
                        <Button
                            backgroundColor="darkorange"
                            color="#cccccc"
                            title="×"
                            onPress={() => handleOperation(Operation.MULTIPLICATION)}
                        />
                    </Row>
                    <Row>
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title="4"
                            onPress={() => handlePress(value => value+"4")}
                        />
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title="5"
                            onPress={() => handlePress(value => value+"5")}
                        />
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title="6"
                            onPress={() => handlePress(value => value+"6")}
                        />
                        <Button
                            backgroundColor="darkorange"
                            color="#cccccc"
                            title="—"
                            onPress={() => handleOperation(Operation.SUBSTRACTION)}
                        />
                    </Row>
                    <Row>
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title="1"
                            onPress={() => handlePress(value => value+"1")}
                        />
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title="2"
                            onPress={() => handlePress(value => value+"2")}
                        />
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title="3"
                            onPress={() => handlePress(value => value+"3")}
                        />
                        <Button
                            backgroundColor="darkorange"
                            color="#cccccc"
                            title="+"
                            onPress={() => handleOperation(Operation.ADDITION)}
                        />
                    </Row>
                    <Row>
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title="0"
                            span={2}
                            onPress={() => handlePress(value => value+"0")}
                        />
                        <Button
                            backgroundColor="#262626"
                            color="#cccccc"
                            title={decimalSeparator}
                            onPress={() => handlePress(value => (value === "" ? "0" : value)+(value.includes(".") ? "" : "."))}
                        />
                        <Button
                            backgroundColor="darkorange"
                            color="#cccccc"
                            title="="
                            onPress={() => handleEqual()}
                        />
                    </Row>
                </View>
            </View>
        </SafeAreaView>
    );
};
