import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');
const IMAGE_HEIGHT = height * 0.45;

const App = () => {
  const sharedValue = useSharedValue(0);
  const animatedScrollViewRef = useAnimatedRef(null);
  const scrollViewOffset = useScrollViewOffset(animatedScrollViewRef);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      sharedValue.value = e.contentOffset.y;
    },
    onEndDrag: e => {
      if (sharedValue.value <= 100) {
        sharedValue.value = withTiming(0, {duration: 200}, finished => {
          if (finished) {
            scrollViewOffset.value = 0;
          }
        });
      } else sharedValue.value = withTiming(IMAGE_HEIGHT, {duration: 200});
    },
  });

  const uas = useAnimatedStyle(() => {
    console.log(sharedValue.value, scrollViewOffset.value);
    return {
      opacity: interpolate(sharedValue.value, [0, 200], [1, 0], {
        extrapolateLeft: Extrapolate.CLAMP,
        extrapolateRight: Extrapolate.CLAMP,
      }),
      height: interpolate(
        sharedValue.value,
        [0, 100],
        [IMAGE_HEIGHT, height * 0.25],
        {
          extrapolateLeft: Extrapolate.CLAMP,
          extrapolateRight: Extrapolate.CLAMP,
        },
      ),
    };
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.ScrollView
        ref={animatedScrollViewRef}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {/* Image and Text */}
        <View>
          <Animated.Image
            source={{
              uri: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
            }}
            style={[{width, resizeMode: 'cover'}, uas]}
          />
          <View
            style={{
              position: 'absolute',
              top: 12,
              right: 15,
              backgroundColor: '#FFF',
              borderRadius: 15,
            }}>
            <Icon name="close-outline" size={30} />
          </View>

          <LinearGradient
            colors={[
              'rgba(0,0,0,.003)',
              'rgba(0,0,0,.3)',
              'rgba(0,0,0,.3)',
              'rgba(0,0,0,.3)',
              'rgba(0,0,0,.4)',
              'rgba(0,0,0,.5)',
              'rgba(0,0,0,.6)',
              'rgba(0,0,0,.7)',
              'rgba(0,0,0,.8)',
            ]}
            style={{
              position: 'absolute',
              bottom: 0,
              paddingHorizontal: 10,
              height: 100,
              justifyContent: 'flex-end',
              width,
              paddingBottom: 14,
              gap: 2,
            }}>
            <Text style={{color: '#FFF', fontSize: 22, fontWeight: '600'}}>
              Peppy Panner
            </Text>
            <Text style={{color: '#FFF', fontSize: 14, fontWeight: '400'}}>
              Flavorful trio of juicy paneer, crisp capsicum with spicy red
              paprika
            </Text>
          </LinearGradient>
        </View>

        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingBottom: 30,
            paddingTop: 10,
          }}>
          <View>
            <Text>Change Size</Text>
            {Array.from({length: 30}, (_, idx) => (
              <View
                key={idx}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <View
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: '#444',
                    }}
                  />
                  <Text style={{fontSize: 16}}>Regular Services - 01</Text>
                </View>
                <Text>₹ 290</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </Animated.ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 120,
          backgroundColor: '#FFF',
          width,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 10},
          shadowOpacity: 1,
          shadowRadius: 8,
          paddingHorizontal: 20,
          paddingVertical: 5,
          justifyContent: 'center',
          gap: 8,
        }}>
        <Text style={{fontSize: 16}}>Medium | Cheese Burst</Text>
        <TouchableOpacity
          style={{
            width: '95%',
            height: 40,
            borderRadius: 6,
            backgroundColor: '#ef4444',
            paddingVertical: 4,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          activeOpacity={0.7}>
          <Text style={{color: '#FFF', fontSize: 14, fontWeight: '600'}}>
            ₹558 | Add +
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
