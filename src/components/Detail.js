import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Detail({ type, info }) {
    return (
        <View style={styles.container} >
            <Text style={styles.typeText}>
                {`${type}: `}
            </Text>
            <Text style={styles.infoText}>{`${info}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    typeText:{
        fontFamily: "AppleSDGothicNeo-Thin",
        fontWeight: "bold",
    },
    infoText: {
        fontFamily: "AppleSDGothicNeo-SemiBold",
    }
});