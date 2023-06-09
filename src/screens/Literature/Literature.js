import * as React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import { useNavigation } from '@react-navigation/native';

export default function Literature() {
  const [books, setBooks] = React.useState([
    {
      id: 1,
      bookName: "Other Words For Home",
      bookCover: images.otherWordsForHome,
      rating: 4.5,
      language: "Eng",
      pageNo: 341,
      author: "Jasmine Warga",
      genre: [
        "Romance", "Adventure", "Drama"
      ],
      readed: "12k",
      description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is."
    },
    {
      id: 2,
      bookName: "The Metropolis",
      bookCover: images.theMetropolist,
      rating: 4.1,
      language: "Eng",
      pageNo: 272,
      author: "Seith Fried",
      genre: [
        "Adventure", "Drama"
      ],
      readed: "13k",
      description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future."
    },
    {
      id: 3,
      bookName: "The Tiny Dragon",
      bookCover: images.theTinyDragon,
      rating: 3.5,
      language: "Eng",
      pageNo: 110,
      author: "Ana C Bouvier",
      genre: [
        "Drama", "Adventure", "Romance"
      ],
      readed: "13k",
      description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!"
    },
    {
      id: 4,
      bookName: "Other Words For Home",
      bookCover: images.otherWordsForHome,
      rating: 4.5,
      language: "Eng",
      pageNo: 341,
      author: "Jasmine Warga",
      genre: [
        "Romance", "Adventure", "Drama"
      ],
      readed: "12k",
      description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is."
    },
    {
      id: 5,
      bookName: "The Metropolis",
      bookCover: images.theMetropolist,
      rating: 4.1,
      language: "Eng",
      pageNo: 272,
      author: "Seith Fried",
      genre: [
        "Adventure", "Drama"
      ],
      readed: "13k",
      description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future."
    },
    {
      id: 6,
      bookName: "The Tiny Dragon",
      bookCover: images.theTinyDragon,
      rating: 3.5,
      language: "Eng",
      pageNo: 110,
      author: "Ana C Bouvier",
      genre: [
        "Drama", "Adventure", "Romance"
      ],
      readed: "13k",
      description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!"
    }
  ]);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginVertical: SIZES.base }}>
        <TouchableOpacity
          style={{ flex: 1, flexDirection: 'row' }}
          onPress={() => navigation.navigate("BookDetail", {
            book: item
          })}
        >
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
          <View style={{ flex: 1, marginLeft: SIZES.radius }}>
            {/* Book name and author */}
            <View>
              <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.lightGray }}>{item.bookName}</Text>
              <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>
            </View>
            {/* Book Info */}
            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
              <Image
                source={icons.page_filled_icon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.lightGray
                }}
              />
              <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo}</Text>

              <Image
                source={icons.read_icon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.lightGray
                }}
              />
              <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text>
            </View>
            {/* Genre */}
            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
              {
                item.genre.includes("Adventure") &&
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.lightGreen, height: 40, borderRadius: SIZES.radius }}>
                  <Text style={{ ...FONTS.body3, color: COLORS.darkGreen }}>Adventure</Text>
                </View>
              }
              {
                item.genre.includes("Romance") &&
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.lightRed, height: 40, borderRadius: SIZES.radius }}>
                  <Text style={{ ...FONTS.body3, color: COLORS.darkRed }}>Romance</Text>
                </View>
              }
              {
                item.genre.includes("Drama") &&
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.lightBlue, height: 40, borderRadius: SIZES.radius }}>
                  <Text style={{ ...FONTS.body3, color: COLORS.darkBlue }}>Drama</Text>
                </View>
              }
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
