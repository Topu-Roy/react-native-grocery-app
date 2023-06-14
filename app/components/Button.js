import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Button = ({ title, width, icon, toNavigate }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        if (toNavigate == "BACK") {
          navigation.goBack();
        }
      }}
      activeOpacity={1}
      style={[styles.btn, { width: width }]}
    >
      <Image source={icon} style={styles.image} />
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#7489ff",
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
  image: {
    height: 30,
    width: 30,
    tintColor: "white",
  },
});
