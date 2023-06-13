import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const TabIcons = ({ image, setSelectedTab, tabName }) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedTab(tabName)}
      style={styles.bottomTabs}
    >
      <Image source={image} style={styles.bottomTabsIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomTabs: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabsIcon: {
    width: 30,
    height: 30,
  },
});

export default TabIcons;
