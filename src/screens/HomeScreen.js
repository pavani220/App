import React, { useState, useEffect, useRef } from "react";
import { ScrollView, FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Button } from "react-native";

const { width, height } = Dimensions.get("window");
const HomeScreen = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [booked, setBooked] = useState(false);    
  const flatListRef = useRef(null);
  const HomeScreenData = [
    {
      id: "01",
      image: require("../asset/Images/drone3.jpg"),
    },
    {
      id: "02",
      image: require("../asset/Images/drone2.jpg"),
    },
    {
      id: "03",
      image: require("../asset/Images/drone1.jpg"),
    },
  ];

  const reviews = [
    { id: "1", reviewer: "John", rating: 5, comment: "Amazing Service!", profileImage: require("../asset/Images/drone1.jpg") },
    { id: "2", reviewer: "Alice", rating: 4, comment: "Worth every penny!", profileImage: require("../asset/Images/drone1.jpg") },
    { id: "3", reviewer: "Bob", rating: 4, comment: "Great quality and value.", profileImage: require("../asset/Images/drone1.jpg") },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % HomeScreenData.length);
    }, 5000);

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index: activeIndex });
    }

    return () => clearInterval(interval);
  }, [activeIndex]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {HomeScreenData.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.dot, activeIndex === index ? styles.activeDot : null]}
          onPress={() => setActiveIndex(index)}
        />
      ))}
    </View>
  );

  const toggleBooking = () => setBooked((prevState) => !prevState);

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.header}>HomeScreen</Text>

      {/* Image Slider */}
      <View style={styles.sliderContainer}>
        <FlatList
          ref={flatListRef}
          data={HomeScreenData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
        />
        {renderDots()}
      </View>

      {/* Product Section */}
      <View style={styles.productBlock}>
        <Image source={require("../asset/Images/drone3.jpg")} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Drone Spraying</Text>
          <Text style={styles.productPrice}>₹ 400</Text>
        </View>
      </View>

      {/* Book Slot Button */}
      <TouchableOpacity onPress={toggleBooking} style={styles.actionButton}>
        <Text style={styles.actionButtonText}>{booked ? "Slot Booked" : "Book Slot"}</Text>
      </TouchableOpacity>

      {/* Reviews Section */}
      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsHeader}>Reviews:</Text>
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewItem}>
            <View style={styles.reviewHeader}>
              <Image source={review.profileImage} style={styles.profileImage} />
              <View style={styles.reviewDetails}>
                <Text style={styles.reviewerName}>{review.reviewer}</Text>
                <Text style={styles.rating}>{'★'.repeat(review.rating)}</Text>
              </View>
            </View>
            <Text style={styles.reviewText}>{review.comment}</Text>
          </View>
        ))}
      </View>

      {/*Footer*/}
      <View style={{height: 150,float:'left',width:width,backgroundColor:'lightblue'}}>
        <Button title="Go to Profile " onPress={() => navigation.navigate('Details')}  />
        <Button title="CART" onPress={() => navigation.navigate('Cart')} />
        <Button title="HOME" onPress={()=>navigation.navigate('Home')} />
    
        
      </View>
      return(
        <View style={styles.container}>
      <Button 
        title="Go to Sign Up" 
        onPress={() => {
          return navigation.navigate('SignUp');
        }} 
      />
    </View>
      );
    </ScrollView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sliderContainer: {
    width: width,
    height: height * 0.4,
    justifyContent: "center",
    position: "relative",
  },
  slider: {
    width: width,
    height: height * 0.3,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: "cover",
  },
  dotsContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dot: {
    width: 10,
    height: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#bbb",
  },
  activeDot: {
    backgroundColor: "#fff",
  },
  productBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 20,
    width: width * 0.9,
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
  },
  productImage: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  productInfo: {
    marginLeft: 20,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#007BFF",
  },
  actionButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    width: width * 0.9,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  reviewsContainer: {
    marginTop: 20,
    padding: 10,
    width: width * 0.9,
  },
  reviewsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  reviewItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewDetails: {
    flexDirection: "column",
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 14,
    color: "#FFD700",
  },
  reviewText: {
    fontSize: 14,
    color: "#333",
  },
});
