import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

  container: {
    backgroundColor: "#f8f8f8",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2
  },

  headerText: {
    fontSize: 20
  },
  headerButtonIcon: {
    height: 20,
    width: 20
  }

})