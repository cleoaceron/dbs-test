/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {connect} from 'react-redux';
import {actionCreator, types} from 'ducks';
import {Text, View} from 'react-native';
import {
  ScrollContainer,
  PostsCard,
  ImageLoader,
  SearchInput,
  Button,
} from 'components';

import styles from './style';

const HomeScreen = ({posts, ...props}) => {
  const [searchText, setSearchText] = React.useState('');
  console.log('searchText', searchText);
  const [sourceData, setSourceData] = React.useState([]);

  React.useEffect(() => {
    // Get all posts data
    !posts.data.length && props.actionCreator({type: types.GET_POSTS});
    // Set posts data in source data
    posts.data.length && setSourceData(posts.data);
  }, [posts]);

  React.useEffect(() => {
    // Filter data and then set in source data
    searchText &&
      setSourceData(
        posts.data.filter(item => item.body.includes(searchText.toLowerCase())),
      );
    // Reset source data
    !searchText && setSourceData(posts.data);
  }, [searchText]);

  const handleSubmit = () => {
    // Re-render the data
    if (searchText) {
      setSourceData(
        posts.data.filter(item => item.body.includes(searchText.toLowerCase())),
      );
    } else {
      setSourceData(posts.data);
    }
  };

  const onSearchClear = () => setSearchText('');

  return (
    <>
      <ScrollContainer>
        <ImageLoader />
        <SearchInput
          placeholder={"I'm looking for..."}
          onClear={onSearchClear}
          onChangeText={value => setSearchText(value)}
          containerStyle={styles.searchStyle}
        />
        <Button
          label="Re-render"
          onPress={handleSubmit}
          weight="bold"
          containerStyle={styles.buttonStyleContainer}
          textStyle={styles.buttonTextStyle}
        />

        <View style={[styles.container]}>
          <Text>Note: Please wait to render the data. Thank you!</Text>
          {sourceData.length > 0 &&
            sourceData.map((item, key) => (
              <PostsCard
                key={key}
                postID={item.id}
                title={item.title}
                body={item.body}
              />
            ))}
          {posts.loading && <Text>Loading, Please wait...</Text>}
        </View>
      </ScrollContainer>
    </>
  );
};

const mapStateToProps = ({posts}) => ({posts});

export default connect(mapStateToProps, {actionCreator})(HomeScreen);
