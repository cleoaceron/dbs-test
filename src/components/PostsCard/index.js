import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './style';

const PostsCard = ({postID, title, body}) => {
  const createRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <>
      <Card>
        <Card.Title>{`${postID}: ${title}`}</Card.Title>
        <View>
          <Text style={styles.description}>{body}</Text>
          <Text style={[styles.randomStyle]}>
            - {createRandomNumber(1000000000, 9000000000)}
          </Text>
        </View>
      </Card>
    </>
  );
};

export default PostsCard;
