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

class TextBlog extends React.Component {
  static navigationOptions = {
    header: null,
  };
  showImage = () => {
    var img = this.state.showBookmark ? bookmark : bookmarkTag;
    return <Image source={img} style={styles.icon} />;
  };
  constructor() {
    super();
    this.state = {
      showBookmark: true,
    };
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: '#FCFAFA'}}>
        <Image
          source={this.props.navigation.state.params.image}
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
            {this.props.navigation.state.params.title}
          </Text>
          <View style={{flexDirection: 'row-reverse', paddingRight: 20}}>
            <TouchableOpacity
              onPress={() =>
                this.setState({showBookmark: !this.state.showBookmark})
              }>
              {this.showImage()}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <Text style={styles.txt}>
            {this.props.navigation.state.params.text}
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
          <TouchableOpacity>
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
