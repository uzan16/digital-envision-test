import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#ffffff80',
    borderStyle: 'solid',
    borderWidth: 1,

    shadowColor: "#6e7191",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 8,

    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16
  },
  avatar: {
    marginRight: 16
  },
  content: {
    flex: 1
  },
  starIcon: {
    marginHorizontal: 12,
    fontSize: 24,
    color: "#DCDCDC"
  },
  actionIcon: {
    marginRight: 0,
    fontSize: 20,
    color: "#B2B2B2"
  },
  starIconSelected: {
    color: "#7C42FF"
  }
});