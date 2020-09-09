import React from 'react';
import {StyleSheet} from 'react-native';
import IsMe from './IsMe';
import IsRomo from './IsRomo';

const ChatItem = ({isMe, text, date, photo}) => {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }
  return <IsRomo text={text} date={date} photo={photo} />;
};

export default ChatItem;

const styles = StyleSheet.create({});
