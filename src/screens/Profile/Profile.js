import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

export default Profile = () => {
  const image = {
    uri:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/619150/3bb00cbe95127f2fe36c85a33cfe69f4e5911234.jpg',
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={5}
        source={image}
        resizeMode="cover"
        style={styles.image}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
        />
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.name}>Вовчок Сергей</Text>
        <Text style={styles.info}>Front`end разработчик</Text>
        <View style={styles.description}>
          <Text style={styles.about}>Обо мне:</Text>
          <Text style={styles.aboutDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi perferendis nostrum, expedita quaerat tempore architecto numquam neque blanditiis, dolore culpa, consequatur natus officiis. Voluptatem, accusamus! Incidunt at omnis quaerat iure!
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 100,
  },
  body: {
    marginTop: 40,
  },
  name: {
    fontSize: 22,
    color: '#696969',
    fontWeight: '600',
    textAlign: 'center'
  },
  info: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center'
  },
  about: {
    fontSize: 16,
    color: '#696969',
    fontWeight: '600',
  },
  aboutDescription: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10
  },
  description: {
    fontSize: 18,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
    margin: 50,
    marginTop: 75,
  }
})
