import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { addToFavorites } from "../redux/slices/FavoritesSlice";
import { addToCart } from "../redux/slices/CartSlice";

import shop from "../images/shop.png";
import love from "../images/love.png";
import { useDispatch } from "react-redux";

const ProductList = ({ data }) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("ProductDetails", { data: item })}
          style={styles.productItem}
        >
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productOuterContainer}>
            <View style={styles.productDetailsWrapper}>
              <Text style={styles.productTitle}>
                {item.title.length > 30
                  ? item.title.substring(0, 25) + "..."
                  : item.title}
              </Text>
              <Text>
                {item.description.length > 50
                  ? item.description.substring(0, 60) + "..."
                  : item.description}
              </Text>
            </View>
            <View style={styles.priceAndIconsContainer}>
              <Text style={styles.productPrice}>${item.price}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(addToCart(item));
                }}
              >
                <Image source={shop} style={styles.btnImage} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(addToFavorites(item.data));
                }}
              >
                <Image source={love} style={styles.btnImage} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ProductList;

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
    flex: 1,
  },
  priceAndIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 5,
    paddingTop: 5,
  },
  btnImage: {
    height: 20,
    width: 20,
    marginRight: 20,
    tintColor: "#010101",
  },
});
