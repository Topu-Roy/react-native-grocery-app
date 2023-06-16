import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList";
import Header from "../../components/Header";

const Favorites = () => {
  const favoriteProductsList = useSelector((state) => state.favorites);
  const products = favoriteProductsList.data;

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(products);
  }, []);

  return (
    <View style={styles.container}>
      {/*------------------------- Header -----------------------*/}
      <Header title={"My Favorite Products"} />

      {/* ------------------------ Products List -------------------- */}

      <ProductList data={favorites} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
