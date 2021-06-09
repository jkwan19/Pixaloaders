import React from "react";
import {
    FlatList,
    StyleSheet,
    SafeAreaView
} from "react-native";

import Item from "./Item";

export default function ImageList({ images, navigation }) {

    const renderImage = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => {
                    navigation.navigate("Details", { data: item });
                }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={images}
                renderItem={renderImage}
                keyExtractor={(image) => image.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        width: "100%",
        alignItems: "center"
    }
});
