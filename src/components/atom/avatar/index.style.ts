import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 20
  },
  wrapperHeader: {
    borderColor: '#36A388',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff'
  },
  wrapperCard: {
    borderColor: '#ffffff4d',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#CACACA'
  },
  text: {
    fontSize: 15,
    fontWeight: '600'
  },
  textHeader: {
    color: '#36A388'
  },
  textCard: {
    color: '#ffffff'
  }
});