import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
  },
  caption: {
    fontSize: 12,
    color: '#92929D',
  },
  value: {
    fontSize: 12,
    color: '#696974',
    marginRight: 8
  },
  icon: {
    color: '#92929D'
  },
  modalWrapper: {
    flex: 1,
    zIndex: 99,
    justifyContent: 'center',
    backgroundColor: '#212121BE'
  },
  modalContainer: {
    backgroundColor: 'white',
    elevation: 99,
    margin: 0,
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 18
  },
});