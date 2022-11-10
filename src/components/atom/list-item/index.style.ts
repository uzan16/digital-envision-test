import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    paddingHorizontal: 0
  },
  container: {
    borderBottomColor: 'rgba(0,0,0,.1)',
    borderBottomWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },

  theText: {
    fontSize: 14,
    flex: 1
  }
});