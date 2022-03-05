import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Header = () => {

    return (
        <>
            <ImageBackground
                source={require('./fake-new.jpg')}
                style={[
                    styles.background,
                    {
                        backgroundColor:  Colors.lighter,
                    },
                ]}
                imageStyle={styles.logo}>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
      paddingBottom: 60,
      paddingTop: 96,
      paddingHorizontal: 50,
    },
    logo: {
    
      overflow: 'visible',
      resizeMode: 'cover',
      /*
       * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
       *
       * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
       * source image's size.
       */
      marginLeft: 0,
      marginBottom: -180,
    },
    text: {
      fontSize: 40,
      fontWeight: '700',
      textAlign: 'center',
    },
  });
  
  export default Header;