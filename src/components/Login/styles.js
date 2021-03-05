import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },

  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 80,
    fontWeight: '500',
  },

  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '300',
  },
  form: {
    paddingTop: 20,
  },
  createSection: {
    flexDirection: 'row',
  },
  linkBtn: {
    paddingLeft: 5,
    color: colors.primary,
    fontSize: 14,
  },
  infoText: {
    fontSize: 14,
  },
});
