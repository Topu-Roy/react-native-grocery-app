import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Header = ({
  title,
  leftIcon,
  RightIcon,
  onClickLeftIcon,
  onClickRightIconClick,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={onClickLeftIcon}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image source={RightIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 60,
    backgroundColor: "#7489ff",
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 35,
    width: 35,
    tintColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});
