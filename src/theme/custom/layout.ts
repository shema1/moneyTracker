const bottomBarHeight = 70;

export default {
  backgroundColor: 'background.900',
  paddingX: 3,
  header: {
    backgroundColor: 'background.800',
    borderBottomWidth: 1,
    borderBottomColor: 'gray.500',
    menuElementActiveColor: 'gray.100',
    menuElementColor: 'gray.400',
    color: 'gray.100',
  },
  topBar: {
    height: 100,
    backgroundColor: 'background.800',
    textColor: 'gray.600',
    textActiveColor: 'gray.100',
  },
  bottomBar: {
    height: bottomBarHeight,
    borderTopColor: 'gray.200',
    backgroundColor: 'background.800',
  },
  container: {
    backgroundColor: 'background.800',
    paddingX: 3,
    paddingBottom: bottomBarHeight,
  },
  containerBottom: {
    height: 150,
  },
};
