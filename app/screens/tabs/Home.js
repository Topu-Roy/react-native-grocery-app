import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import menu from "../../images/menu.png";
import shop from "../../images/shop.png";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  //! Fake Store Api

  const getProducts = () => {
    const products = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  // ! UseEffects

  useEffect(() => {
    getProducts();
  }, []);

  // ! FlatList Rendering Items

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate("ProductDetails", { data: item })}
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
  );

  return (
    <View>
      <Header
        leftIcon={menu}
        RightIcon={shop}
        onClickLeftIcon={() => navigation.openDrawer()}
        title={"Grocery App"}
      />

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
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
