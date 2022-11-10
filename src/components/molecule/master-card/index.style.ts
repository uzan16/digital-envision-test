import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButtonWrapper: {
    position: 'absolute',
    top: 18,
    left: 26
  },
  backButtonIcon: {
    fontSize: 24
  },
  text: {
    marginLeft: 16,
    fontSize: 14,
    color: '#404040',
    fontWeight: '500'
  }
});