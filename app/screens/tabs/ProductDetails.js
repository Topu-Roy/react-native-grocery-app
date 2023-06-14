import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "../../components/Header";

import back from "../../images/back.png";
import shop from "../../images/shop.png";
import favorite from "../../images/love.png";
import favoriteFilled from "../../images/love-filled.png";
import Button from "../../components/Button";

const ProductDetails = ({ item }) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Header
        leftIcon={back}
        RightIcon={shop}
        onClickLeftIcon={() => navigation.goBack()}
        title={"Product Details"}
      />
      <View style={styles.marginWrapper}>
        <View style={styles.productContainer}>
          <Image
            source={{ uri: route.params.data.image }}
            style={styles.productImage}
          />
          <Text style={styles.ProductTitle}>{route.params.data.title}</Text>

          <View style={styles.middleWrapper}>
            <Text style={styles.price}>Price: ${route.params.data.price}</Text>
            <TouchableOpacity activeOpacity={1}>
              <Image source={favorite} style={styles.favoriteIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.productDescription}>
            {route.params.data.description}
          </Text>
          <View style={styles.btnContainer}>
            <Button title={"Back"} icon={back} width={"30%"} />
            <Button title={"Add To Cart"} icon={shop} width={"65%"} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginWrapper: {
    margin: 20,
  },
  ProductTitle: {
    fontSize: 25,
    fontWeight: "bold",

    marginTop: 20,
  },
  productImage: {
    height: "35%",
    resizeMode: "center",
    borderRadius: 20,
  },
  productContainer: {
    height: "100%",
  },
  middleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e4d0d0",
    marginTop: 20,
    marginBottom: 20,
    padding: 30,
    borderRadius: 15,
  },
  favoriteIcon: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 35,
    tintColor: "#cb2828",
  },
  price: {
    fontSize: 20,
    color: "#007904",
    fontWeight: "700",
  },
  productDescription: {},
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
