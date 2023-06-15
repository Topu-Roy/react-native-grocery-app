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

const ProductList = ({ data }) => {
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
  },
});
