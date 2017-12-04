import React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { 
    thumbnailStyle, headerContentsStyle,
     thumbnailContainerStyle, headerTextStyle,
     albumArt
  } = styles;
  const openLink = () => {
    Linking.openURL(url);
  }; 
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={headerContentsStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View> 
      </CardSection>
      <CardSection>
          <Image source={{ uri: image }} style={albumArt} />
      </CardSection>
      <CardSection>
        <Button onPress={openLink}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );  
};

const styles = StyleSheet.create(
  {
  headerContentsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }, 
  thumbnailStyle: {
    height: 50,
    width: 50
  },
    albumArt: {
      height: 300,
      flex: 1,
      width: null
    },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
}
);


export default AlbumDetails;
