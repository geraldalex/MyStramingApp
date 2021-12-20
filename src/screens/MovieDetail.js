import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image, 
    StyleSheet,
    ScrollView,
    Platform
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {COLORS, SIZES, FONTS, dummyData, icons, images} from "../constants"
import { ProgressBar } from '../components';

const MovieDetail = ({navigation, route}) => {

    const [selectedMovie, setSelectedMovie] = React.useState(null)

React.useEffect(() => {
let {selectedMovie} = route.params
setSelectedMovie(selectedMovie)
}, [])

function renderHeaderBar() {
    return(
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        paddingHorizontal:SIZES.padding
        }}>
{/* Back */}
<TouchableOpacity
style={{
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    borderRadius:20,
    backgroundColor: COLORS.transparentBlack

}}

onPress={() => navigation.goBack()}
>
<Image
source={icons.left_arrow}
style={{
    width:20,
    height:20,
    tintColor:COLORS.white
}}
/>
</TouchableOpacity>
{/* Share */}

<TouchableOpacity
style={{
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    borderRadius:20,
    backgroundColor: COLORS.transparentBlack

}}

onPress={() => console.log('Share')}
>
<Image
source={icons.upload}
style={{
    width:25,
    height:25,
    tintColor:COLORS.white
}}
/>
</TouchableOpacity>
        </View>
    )
}

function renderHeaderSection() {
    return(
        <ImageBackground
        source={selectedMovie?.details?.image}
        resizeMode='cover'
        style={{
            width:'100%',
            height: SIZES.height < 700 ? SIZES.height*0.6 : SIZES.height*0.7 
        }}
        > 
<View style={{
    flex:1
}}>
{renderHeaderBar()}
<View style={{
    flex:1,
    justifyContent:'flex-end'
}}>
<LinearGradient
start={{x:0, y:0}}
end={{x:0, y:1}}
colors={['transparent', '#000']}
style={{
    width:'100%',
    height:150,
    justifyContent:'flex-end',
    alignItems:'center'


}}
>
    {/* Season */}
<Text style={{
    color:COLORS.white,
    ...FONTS.body4
}}>{selectedMovie?.details.season}</Text>
   {/* Name */}

   <Text style={{marginTop:SIZES.base, color:COLORS.white, ...FONTS.h1}}>{selectedMovie?.name}</Text>
</LinearGradient>
</View>
</View>

        </ImageBackground>
    )
}


function renderCategoryAndRatings() {
    return(
        <View
        style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginTop:SIZES.base

        }}
        >
{/* Age */}
<View style={[styles.categoryContainer, {marginLeft:0}]}>
<Text style={{color:COLORS.white, ...FONTS.h4}}>{selectedMovie?.details?.age}</Text>
</View>
{/* Genre */}
<View
style={[styles.categoryContainer, {paddingHorizontal:SIZES.padding}]}
>
<Text style={{
    color:COLORS.white, ...FONTS.h4
}}>{selectedMovie?.details?.genre}</Text>
</View>
{/* Rating */}
<View style={styles.categoryContainer}>
<Image
source={icons.star}
resizeMode='contain'
style={{
    width:15,
    height:15
}}
/>
<Text style={{
    marginLeft:SIZES.base,
    color:COLORS.white,
    ...FONTS.h4
}}>{selectedMovie?.details?.ratings}</Text>
</View>
        </View>
    )
}

    return (
        <ScrollView 
        contentContainerStyle={{
            flex:1, backgroundColor:COLORS.black
        }}

        style={{backgroundColor:COLORS.black}}
        >

            {/* Header */}
{renderHeaderSection()}

{/* Category & Ratings */}
{renderCategoryAndRatings()}

{/* Movie Details */}
        </ScrollView>
    )
}

export default MovieDetail;

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:SIZES.base,
        paddingHorizontal:SIZES.base,
        paddingVertical:SIZES.base,
        backgroundColor:COLORS.gray1

    }
})