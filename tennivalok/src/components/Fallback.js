import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View>
      <Text style={{ 
        marginHorizontal: 10,
        textAlign: "center",
        padding: 10,
        backgroundColor: "lightgray",
        borderRadius: 5,
        fontSize: 20,
        }}>
        Még nincs feladat létrehozva!
      </Text>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({});
