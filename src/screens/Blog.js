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
import StarRating from 'react-native-star-rating';

class Blog extends React.Component {
  onStarRatingPress(rating) {
    this.setState({
      StarRating: rating,
    });
  }

  changeStatus = item => {
    switch (item.status) {
      case 0:
        return [styles.titleComments, {color: '#02B800'}];
        break;
      case 1:
        return [styles.titleComments, {color: '#FED03F'}];
        break;
      default:
        return [styles.titleComments, {color: '#ED1111'}];
    }
  };

  tabView = () => {
    switch (this.state.discription) {
      case 'lastSubject':
        return (
          <View>
            {Last.map((lst, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{backgroundColor: '#FCFAFA'}}
                  onPress={() => this.props.navigation.navigate('TextBlog')}>
                  <Image source={lst.image} style={styles.imgBlog} />
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                      justifyContent: 'flex-end',
                    }}>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/images/bookmark.png')}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/images/share.png')}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingHorizontal: 20}}>
                    <Text style={styles.txt}>{lst.title}</Text>
                    <View
                      style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        paddingTop: 5,
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(112, 112, 112, 0.5)',
                      }}>
                      <Text style={styles.txtDate}>{lst.date}</Text>
                      <Text style={styles.txtLike}>{lst.like}</Text>
                      <TouchableOpacity>
                        <Image
                          source={require('../../assets/images/heart.png')}
                          style={{
                            width: 15,
                            height: 15,
                            marginRight: 3,
                            marginBottom: 20,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        );

      case 'best':
        return (
          <View>
            {Best.map((bst, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{backgroundColor: '#FCFAFA'}}
                  onPress={() => this.props.navigation.navigate('TextBlog')}>
                  <Image source={bst.image} style={styles.imgBlog} />
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                      justifyContent: 'flex-end',
                    }}>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/images/bookmark.png')}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/images/share.png')}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingHorizontal: 20}}>
                    <Text style={styles.txt}>{bst.title}</Text>
                    <View
                      style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        paddingTop: 5,
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(112, 112, 112, 0.5)',
                      }}>
                      <Text style={styles.txtDate}>{bst.date}</Text>
                      <Text style={styles.txtLike}>{bst.like}</Text>
                      <TouchableOpacity>
                        <Image
                          source={require('../../assets/images/heart.png')}
                          style={{
                            width: 15,
                            height: 15,
                            marginRight: 3,
                            marginBottom: 20,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      case 'yourComment':
        return (
          <View style={{backgroundColor: '#FCFAFA', alignItems: 'center'}}>
            {Comments.map((item, i) => {
              return (
                <View key={i} style={[styles.viewComment, {marginTop: 30}]}>
                  <Text style={this.changeStatus(item)}>{item.title}</Text>
                  <Text style={styles.txtComments}>{item.text}</Text>

                  <View
                    style={{
                      width: width / 2,
                      flexDirection: 'row-reverse',
                      justifyContent: 'space-between',
                    }}>
                    <Text>{item.titleRating}</Text>
                    <StarRating
                      disabled={false}
                      emptyStar={'ios-star-outline'}
                      fullStar={'ios-star'}
                      halfStar={'ios-star-half'}
                      iconSet={'Ionicons'}
                      maxStars={5}
                      rating={item.rating}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={'#FAC917'}
                      starSize={20}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        );
        break;

      default:
        break;
    }
  };

  constructor() {
    super();
    this.state = {
      discription: 'lastSubject',
      underLine: null,
      rateChanged: 2,
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FCFAFA'}}>
        <View style={styles.tab}>
          <View>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => this.setState({discription: 'lastSubject'})}>
              <Text style={styles.txt}>آخرین مطلب</Text>
              <View
                style={
                  this.state.discription === 'lastSubject'
                    ? styles.underline
                    : null
                }
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => this.setState({discription: 'best'})}>
              <Text style={styles.txt}>بهترینها</Text>
              <View
                style={
                  this.state.discription === 'best' ? styles.underline : null
                }
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => this.setState({discription: 'yourComment'})}>
              <Text style={styles.txt}>نظرات شما</Text>
              <View
                style={
                  this.state.discription === 'yourComment'
                    ? styles.underline
                    : null
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>{this.tabView()}</ScrollView>
      </View>
    );
  }
}

Blog.navigationOptions = () => {
  return {
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
      fontFamily: 'IRANSansWeb',
    },
  };
};

const Comments = [
  {
    id: 1,
    title: 'تیم حرفه ای واش من',
    text:
      'من به تازگی با تیم واش من آشنا شدم و از خدماتی که ارائه میدن خیلی خیلی راضی هستم.حتما پیشنهاد میکنم ازشون استفاده کنید. تیمی حرفه ای و مجرب',
    titleRating: 'روشویی-سواری',
    status: 0,
    rating: 4.5,
  },
  {
    id: 2,
    title: 'می تونست بهتر از اینا باشه',
    text:
      'من به تازگی با تیم واش من آشنا شدم و از خدماتی که ارائه میدن خیلی خیلی راضی هستم.حتما پیشنهاد میکنم ازشون استفاده کنید. تیمی حرفه ای و مجرب',
    titleRating: 'روشویی-سواری',
    status: 1,
    rating: 2,
  },
  {
    id: 3,
    title: 'توصیه نمی کنم',
    text:
      'من به تازگی با تیم واش من آشنا شدم و از خدماتی که ارائه میدن خیلی خیلی راضی هستم.حتما پیشنهاد میکنم ازشون استفاده کنید. تیمی حرفه ای و مجرب',
    titleRating: 'روشویی-سواری',
    status: 2,
    rating: 5,
  },
];

const Best = [
  {
    image: require('../../assets/images/F1.png'),
    title: 'تجربه ای حرفه ای با واش من',
    date: 'دهم شهریور',
    like: 250,
  },
  {
    image: require('../../assets/images/F2.png'),
    title: 'چرا با واش من',
    date: 'دهم شهریور',
    like: 323,
  },
];

const Last = [
  {
    image: require('../../assets/images/Blog1.png'),
    title: 'تجربه ای حرفه ای با واش من',
    date: 'دهم شهریور',
    like: 250,
  },
  {
    image: require('../../assets/images/Blog2.png'),
    title: 'چرا با واش من',
    date: 'دهم شهریور',
    like: 323,
  },
];

const {width, height} = Dimensions.get('window');
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
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  underline: {
    borderBottomWidth: 3,
    borderBottomColor: '#FED03F',
    marginTop: 12,
    width: 70,
  },
  txt: {
    fontSize: 18,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
  },
  imgBlog: {
    height: (height / 10) * 2.5,
    width: (width / 5) * 5 - 30,
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  txt: {
    fontFamily: 20,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 15,
    marginTop: 20,
  },
  txtDate: {
    fontFamily: 12,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
    paddingLeft: 20,
    paddingBottom: 20,
  },
  txtLike: {
    fontFamily: 10,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
    paddingBottom: 20,
  },
  titleComments: {
    fontFamily: 'IRANSansWeb',
    fontSize: 16,
  },
  txtComments: {
    fontFamily: 'IRANSansWeb',
    fontSize: 14,
    color: '#858585',
  },
  viewComment: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    width: width - 20,
  },
});

export default Blog;
