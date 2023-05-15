import { View, Text, StyleSheet, FlatList, Image, ScrollView } from "react-native";

import Logo from "../../assets/logo.svg";
import Stroke from "../../assets/stroke.svg";
import Message from "../../assets/message.svg";
import Points from "../../assets/points.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Heart from "../../assets/Heart.svg";
import Comment from "../../assets/Comment.svg";
import Share from "../../assets/Share.svg";
import foto from "../../assets/image1.jpg";
import foto2 from "../../assets/image2.jpg";
import foto3 from "../../assets/image3.jpg";
import foto4 from "../../assets/image4.jpg";
import gutsTest from "../../assets/FJTvX6tX0AQG-53.jpg";

const DATA = [
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto2
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto3
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto4
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto
    },
]

export function Home()
{
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Logo></Logo>
            <View style={styles.headerOptions}>
                <Stroke/>
                <Message/>
            </View>

        </View>
      <ScrollView style={{width: "100%"}}>
        <View style={styles.stories}>
                <FlatList horizontal={true} data={DATA} 
                keyExtractor={(item) => item.id}
                renderItem={(item) => (
                <View style={styles.storiesCard} key={item.item.id}>
                    <Image  resizeMode="cover" style={styles.storiesCardImage} source={item.item.photoURL}/>
                </View>
                )}/>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={foto} resizeMode="cover"/>
              <Text style={styles.contentHeaderLeftText}>Vinicius Soares</Text>
            </View>
            <Points/>
          </View>
          <View>
            <Image style={styles.contentImage} source={gutsTest} resizeMode="contain"/>
          </View>
        </View>

        <View style={styles.contentFooter}>
          <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
          
          <View style={styles.contentFooterLeft}>
            <Heart/>
            <Comment/>
            <Share/>
          </View>
          <Bookmark/>
          </View>
          <View style={{gap: 10, marginTop: 10, paddingLeft: 10}}>
            <Text style={{color: "#FFF"}}>vinicius soares Aqui vai a legenda da publicação.</Text>
            <Text style={{color: "#FFF"}}>Veja todos os comentários.</Text>
            <Text style={{color: "#FFF", fontSize: 10}}>1 hora atŕas Veja a tradução</Text>
          </View>
        </View>
      </ScrollView>  
    </View>
  )
}

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 40,
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerOptions: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row", 
    gap: 10
  },
  stories: {
    width: "100%",
    paddingVertical: 10,
    paddingLeft: 10,
    height: 104,
    alignItems: "center",
    flexDirection: "row"
  },
  storiesCard: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#F7B55A",
    borderRadius: 50,
    marginRight: 14,
    padding: 2
  },
  storiesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 100
  },
  content: {
    width: "100%",
    marginBottom: 10
  },
  contentHeader: {
    height: 52,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15
  },
  contentHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 25
  },
  contentHeaderLeftText: {
    color: "#FFF"
  },
  contentImage: {
    width: "100%",
    height: 500,
  },
  contentFooter: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10
  },
  contentFooterLeft: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  }
}
);