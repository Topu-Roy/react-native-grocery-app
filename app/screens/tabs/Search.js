import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

import search from "../../images/search.png";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Search = () => {
  const navigation = useNavigation();
  const data = useSelector((state) => {
    return state.products.data;
  });

  const [inputText, setInputText] = useState("");
  const [oldData, setOldData] = useState(data);
  const [searchedData, setSearchedData] = useState("");

  const filteredData = (data) => {
    let newData = oldData.filter((item) => {
      return item.title.toLowerCase().match(data.toLowerCase());
    });
    setSearchedData(newData);
  };

  return (
    <View style={styles.container}>
      {/*------------------------- Header -----------------------*/}
      <Header title={"Search Products"} />

      {/* ------------------------ Search Box ------------------- */}
      <View style={styles.paddingContainer}>
        <View style={styles.searchBox}>
          <Image source={search} style={styles.searchIcon} />
          <TextInput
            onChangeText={(text) => {
              setInputText(text);
              filteredData(text);
            }}
            placeholder="Search Here..."
            style={[styles.inputText]}
            placeholderTextColor="#ffffff"
          />
          {inputText !== "" && (
            <TouchableOpacity onPress={() => setInputText("")}>
              <Text style={styles.closeBtn}>X</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* ------------------------ Products List -------------------- */}

      <FlatList
        data={searchedData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetails", { data: item })
            }
            style={styles.productItem}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productOuterContainer}>
              <View style={styles.productDetailsWrapper}>
                <Text style={styles.productTitle}>
                  {item.title.length > 30
                    ? item.title.substring(0, 30) + "..."
                    : item.title}
                </Text>
                <Text>
                  {item.description.length > 50
                    ? item.description.substring(0, 60) + "..."
                    : item.description}
                </Text>
              </View>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08256e",
  },
  paddingContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchBox: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: 15,

    paddingRight: 10,
    paddingLeft: 5,
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  searchIcon: {
    height: 35,
    width: 35,
    tintColor: "#ffffff",
  },
  inputText: {
    flex: 1,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#ffffff",
  },
  closeBtn: {
    fontSize: 30,
    fontWeight: "500",
    color: "#ffffff",
  },
  productItem: {
    justifyContent: "center",
    flexDirection: "row",
    width: Dimensions.get("window").width - 20,
    height: 120,
    paddingTop: 10,
    backgroundColor: "#ffffff",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  productImage: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,
    marginLeft: 5,
  },
  productOuterContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingBottom: 5,
  },
  productDetailsWrapper: {
    flex: 1,
    gap: 5,
    flexDirection: "column",
  },
  productTitle: {
    fontSize: 15,
    fontWeight: "500",
  },
  productPrice: {
    color: "#20a200",
    fontWeight: "bold",
    fontSize: 15,
  },
});
