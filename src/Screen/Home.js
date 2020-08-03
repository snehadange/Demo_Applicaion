import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { getArticles } from '../service/news'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: null
        }
    }

    async componentDidMount() {
        getArticles().then(data => {
            this.setState({
                isLoading: false,
                data: data
            })
        }, error => {
            alert('error', 'Something went wrong')
        }
        )
    }


    renderNews = (news_data) => {
        return (
            <View style={styles.newsItem}>
                <Image source={{ uri: news_data.urlToImage /*!= null ? this.news_data.urlToImage :''*/ }} style={styles.newsImg} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.heading}>{news_data.title}</Text>
                            </TouchableOpacity>


                        </View>

                        <Ionicons name="ios-more" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.body}>{news_data.description}</Text>
                </View>

            </View>
        )
    }

    render() {
        // console.log("______",this.state.data)
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>News</Text>
                </View>

                <FlatList
                    style={styles.news}
                    data={this.state.data}
                    renderItem={({ item }) => this.renderNews(item)}
                    keyExtractor={(item,index) =>item.index}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        paddingTop: 64,
        paddingBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#E8ECF4",
        backgroundColor: '#e91e63',
        shadowColor: '#ab1859',
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    news: {
        marginHorizontal: 16
    },
    newsItem: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 7
    },
    newsImg: {
        width: 80,
        height: 120,

        marginRight: 20
    },
    heading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    body: {
        fontSize: 15,
        color: "#838899",
        marginTop: 1
    }
})