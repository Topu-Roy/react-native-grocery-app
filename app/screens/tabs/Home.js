import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/ProductSlice";

import ProductList from "../../components/ProductList";
import Header from "../../components/Header";

import menu from "../../images/menu.png";

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  //! Redux Toolkit
  const dispatch = useDispatch();

  //! Fake Store Api

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        dispatch(addProduct(json));
      });
  };

  // ! UseEffects

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
      <Header
        leftIcon={menu}
        onClickLeftIcon={() => navigation.openDrawer()}
        title={"Grocery App"}
      />

      <ProductList data={products} />
    </View>
  );
};

export default Home;
