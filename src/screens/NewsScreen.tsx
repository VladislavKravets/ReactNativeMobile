import React, {useEffect} from 'react';
import {FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchNewsSuccess} from '../redux/actions/newsActions';
import {fetchNews} from '../service/apiNews';

const NewsScreen = ({news, fetchNewsSuccess}) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const newsData = await fetchNews();
                fetchNewsSuccess(newsData);
            } catch (error) {
                console.error('Error in NewsScreen:', error);
            }
        };

        fetchData();
    }, [fetchNewsSuccess]);

    const renderNewsItem = ({item}) => (
        <TouchableOpacity style={styles.newsContainer} onPress={() => openNewsUrl(item.url)}>
            <Image source={{uri: item.urlToImage}} style={styles.newsImage}/>
            <View style={styles.newsContent}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    const openNewsUrl = (url) => {
        Linking.openURL(url)
            .then(() => console.log(`Opened URL: ${url}`))
            .catch((err) => console.error('Error opening URL:', err));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Latest News</Text>
            <FlatList
                data={news}
                keyExtractor={(item, index) => `${item.title}-${index}`}
                renderItem={renderNewsItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    newsContainer: {
        marginBottom: 16,
    },
    newsImage: {
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    },
    newsContent: {
        flex: 1,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    newsDescription: {
        fontSize: 16,
    },
});

const mapStateToProps = (state) => ({
    news: state.news.news,
});

export default connect(mapStateToProps, {fetchNewsSuccess})(NewsScreen);
