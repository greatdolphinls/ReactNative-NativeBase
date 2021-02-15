import React from "react";
import { Image } from "react-native";
import { Footer, Text, FooterTab, Button } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../Home/";
import Cart from "../Cart/";
import Order from "../Order/";
import Account from "../Account/";
import styles from "./styles";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
const restaurant = require("../../../assets/footer-menu/restaurant-inactive.png");
const cart = require("../../../assets/footer-menu/cart-inactive.png");
const order = require("../../../assets/footer-menu/order-inactive.png");
const account = require("../../../assets/footer-menu/account-inactive.png");
const activeRestaurant = require("../../../assets/footer-menu/restaurant.png");
const activeCart = require("../../../assets/footer-menu/cart.png");
const activeOrder = require("../../../assets/footer-menu/order.png");
const activeAccount = require("../../../assets/footer-menu/account.png");

const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Restaurant",
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused ? activeRestaurant : restaurant}
            style={styles.footerImg}
          />
        ),
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarLabel: "Cart",
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused ? activeCart : cart}
            style={styles.footerImg}
          />
        ),
      },
    },
    Order: {
      screen: Order,
      navigationOptions: {
        tabBarLabel: "Order",
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused ? activeOrder : order}
            style={styles.footerImg}
          />
        ),
      },
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused ? activeAccount : account}
            style={styles.footerImg}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        height: 70,
        backgroundColor: "#0087FB",
        paddingTop: 10,
        paddingBottom: 10,
      },

      activeTintColor: "#fff",
      inactiveTintColor: "rgba(176,219,253,0.5)",
      labelStyle: {
        fontSize: 13,
        fontWeight: "700",
      },
    },
    initialRouteName: "Home",
  }
);
const Style = {
  footerIcon: {
    fontSize: 15,
    color: "#898C94",
    lineHeight: 20,
    fontWeight: "500",
  },
  footerIconActive: {
    fontSize: 15,
    color: "red",
    lineHeight: 20,
    fontWeight: "500",
  },
  footerIconTabText: {
    fontSize: 10,
    color: "red",
    lineHeight: 15,
    fontWeight: "100",
    textAlign: "center",
  },
  footerIconText: {
    fontSize: 10,
    color: "#000",
    lineHeight: 15,
    fontWeight: "100",
    textAlign: "center",
  },
};
export default TabNavigation;
