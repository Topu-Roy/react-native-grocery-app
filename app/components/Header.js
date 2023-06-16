import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import shop from "../images/shop.png";

const Header = ({
  title,
  leftIcon,
  onClickLeftIcon,
  onClickRightIconClick,
}) => {
  const products = useSelector((state) => state.cart);

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={onClickLeftIcon}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image source={shop} style={styles.icon} />
        <View style={styles.itemCounter}>
          <Text style={styles.itemCounterText}>{products.data.length}</Text>
        </View>
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
  itemCounter: {
    position: "absolute",
    height: 20,
    width: 20,
    top: 0,
    right: "-20%",
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 999,
  },
  itemCounterText: {
    fontSize: 10,
  },
});
