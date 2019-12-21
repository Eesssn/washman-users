import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import bookmark from '../../assets/images/bookmark.png';
import bookmarkTag from '../../assets/images/bookmark-tag.png';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class TextBlog extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      showBookmark: true,
      bookmark: [],
      blog: [],
      like: [],
    };
  }

  showBlog = async () => {
    var that = this;
    const token = await AsyncStorage.getItem('Token');
    const id = await AsyncStorage.getItem('ID');
    const idBlog = that.props.navigation.getParam('id');
    Axios.post('blog', {
      customer_id: id,
      token: token,
      id: idBlog,
    })
      .then(function(response) {
        if (response.data.is_successful) {
          that.setState({blog: response.data.data});
        } else {
          alert(response.data.message);
        }
      })
      .catch(function(e) {
        Console.warn(e);
      });
  };

  like = async () => {
    var that = this;
    const token = await AsyncStorage.getItem('Token');
    const id = await AsyncStorage.getItem('ID');
    const idBlog = that.props.navigation.getParam('id');
    Axios.post('blog/like', {
      customer_id: id,
      token: token,
      blog_id: idBlog,
    })
      .then(function(response) {
        if (response.data.is_successful) {
          that.setState({like: response.data.data});
        } else {
          alert(response.data.message);
        }
      })
      .catch(function(e) {
        Console.warn(e);
      });
  };

  componentDidMount() {
    this.showBlog();
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#FCFAFA'}}>
        <Image
          source={this.props.navigation.getParam('img')}
          style={styles.img}
        />
        <View
          style={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            paddingVertical: 17,
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text style={styles.title}>
            {this.props.navigation.getParam('title')}
          </Text>
          <View style={{flexDirection: 'row-reverse', paddingRight: 20}}>
            <TouchableOpacity onPress={() => this.setState({bookmark: 0})}>
              {this.state.blog.is_bookmarked === 1 ? (
                <Image source={bookmarkTag} style={styles.icon} />
              ) : (
                <Image source={bookmark} style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <Text style={styles.txt}>
            {this.props.navigation.getParam('txt')}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
            paddingVertical: 20,
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              color: '#323232',
              fontSize: 16,
              fontFamily: 'IRANSansWeb',
              marginLeft: 20,
            }}>
            مطلب بنظرتون مفید بود ؟
          </Text>
          <TouchableOpacity onPress={() => this.like()}>
            <Image
              source={require('../../assets/images/heart2.png')}
              style={{width: 20, height: 20, top: 5}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  img: {
    width,
    height: 200,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 25,
  },
  title: {
    fontSize: 16,
    color: '#858585',
    fontFamily: 'IRANSansWeb',

    paddingRight: 15,
  },
  txt: {
    color: '#323232',
    fontFamily: 'IRANSansWeb',
    fontSize: 14,
  },
});

export default TextBlog;
