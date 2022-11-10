import { StyleSheet } from "react-native";

export default StyleSheet.create({
  center: {
    justifyContent: 'center',
    backgroundColor: '#EEEEEE' + 'f6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8
  },
  innerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#E0E0E0' + '7f',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#696974',
    letterSpacing: 1
  }
});