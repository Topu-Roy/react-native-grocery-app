import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import TabIcons from "../components/TabIcons";

import Home from "../screens/tabs/Home";
import Search from "../screens/tabs/Search";
import Favorites from "../screens/tabs/Favorites";
import Notification from "../screens/tabs/Notification";
import Profile from "../screens/tabs/Profile";

import { TABS } from "../constants/constants";

import home from "../images/home.png";
import search from "../images/search.png";
import love from "../images/love.png";
import notification from "../images/notification.png";
import profile from "../images/profile.png";

import homeFilled from "../images/home-filled.png";
import searchFilled from "../images/search-filled.png";
import loveFilled from "../images/love-filled.png";
import notificationFilled from "../images/notification-filled.png";
import profileFilled from "../images/profile-filled.png";

const HomeScreen = () => {
  // ? For Navigation
  const [selectedTab, setSelectedTab] = useState(TABS.HOME);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {selectedTab == TABS.HOME ? (
        <Home />
      ) : selectedTab == TABS.SEARCH ? (
        <Search />
      ) : selectedTab == TABS.FAVORITE ? (
        <Favorites />
      ) : selectedTab == TABS.NOTIFICATION ? (
        <Notification />
      ) : (
        <Profile />
      )}
      <View style={styles.bottom}>
        <TabIcons
          image={selectedTab == TABS.HOME ? homeFilled : home}
          tabName={TABS.HOME}
          setSelectedTab={setSelectedTab}
        />
        <TabIcons
          image={selectedTab == TABS.SEARCH ? searchFilled : search}
          tabName={TABS.SEARCH}
          setSelectedTab={setSelectedTab}
        />
        <TabIcons
          image={selectedTab == TABS.FAVORITE ? loveFilled : love}
          tabName={TABS.FAVORITE}
          setSelectedTab={setSelectedTab}
        />
        <TabIcons
          image={
            selectedTab == TABS.NOTIFICATION ? notificationFilled : notification
          }
          tabName={TABS.NOTIFICATION}
          setSelectedTab={setSelectedTab}
        />
        <TabIcons
          image={selectedTab == TABS.PROFILE ? profileFilled : profile}
          tabName={TABS.PROFILE}
          setSelectedTab={setSelectedTab}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#7489ff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default HomeScreen;
