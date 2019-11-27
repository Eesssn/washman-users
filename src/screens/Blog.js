import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const Blog = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FCFAFA'}}>
      <View style={styles.tab}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>آخرین مطلب</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txt}>بهترینها</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txt}>نظرات شما</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Blog.navigationOptions = () => {
  return {
    tabBarIcon: ({tintColor}) => (
      <FontAwesome name="instagram" style={{color: tintColor}} size={28} />
    ),
    headerStyle: {
      backgroundColor: '#3498DB',
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
      height: 70,
      textAlign: 'center',
    },
    headerTintColor: 'white',
    headerLeft: null,
    title: 'بلاگ',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'FDK_aban{@fontbartar}',
    },
  };
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    height: 60,
    width,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.016,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  btn: {},
  txt: {
    fontSize: 16,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
  },
});

export default Blog;
