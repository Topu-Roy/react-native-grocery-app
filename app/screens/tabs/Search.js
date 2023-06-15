import {
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
import { useState } from "react";
import ProductList from "../../components/ProductList";

const Search = () => {
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

      <ProductList data={searchedData} />
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
});
