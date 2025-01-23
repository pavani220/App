import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import from react-native-vector-icons

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navbarItem}>
        <Icon name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <Icon name="user" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <Icon name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    paddingBottom:20
  },
  navbarItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Navbar;
