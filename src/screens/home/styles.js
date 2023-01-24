import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  textWelcome: { fontSize: 25, fontWeight: 'bold' },
  parent: {
    marginLeft: 25,
    marginRight: 25,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    width: '90%',
    textAlign: 'center',
  },
  closeButton: {
    height: 30,
    width: 30,
  },
  closeButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  logout: {
    top: 50,
    right: 15,
    position: 'absolute',
  },
});

export default styles;
