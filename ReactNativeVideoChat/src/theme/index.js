import { Platform } from 'react-native'

const HORIZONTAL_SPACING_BASE = Platform.OS === 'web' ? 4 : 2
const VERTICAL_SPACING_BASE = 4

const icons = {
  logo: require('../assets/icons/photo-camera.png'),
  menuHamburger: require('../assets/icons/hamburger-menu-icon.png'),
  playButton: require('../assets/icons/play-button.png'),
  home: require('../assets/icons/home-icon.png'),
  home_android: require('../assets/icons/home-icon-24.png'),
  add_user: require('../assets/icons/add-user-icon.png'),
  add_user_filled: require('../assets/icons/add-user-icon-filled.png'),
  cameraFilled: require('../assets/icons/camera-filled-icon.png'),
  camera: require('../assets/icons/camera-icon.png'),
  chat: require('../assets/icons/chat-icon.png'),
  close: require('../assets/icons/close-x-icon.png'),
  checked: require('../assets/icons/checked-icon.png'),
  delete: require('../assets/icons/delete.png'),
  friends: require('../assets/icons/friends-icon.png'),
  inscription: require('../assets/icons/inscription-icon.png'),
  menu: require('../assets/icons/menu.png'),
  private_chat: require('../assets/icons/private-chat-icon.png'),
  search: require('../assets/icons/search-icon.png'),
  profile: require('../assets/icons/profile.png'),
  users: require('../assets/icons/users.png'),
  users_android: require('../assets/icons/users-icon-48.png'),
  user: require('../assets/icons/user.png'),
  user_android: require('../assets/icons/account-detail.png'),
  share: require('../assets/icons/share-icon.png'),
  mail: require('../assets/icons/mail.png'),
  lock: require('../assets/icons/lock.png'),
  edit: require('../assets/icons/edit.png'),
  accountDetail: require('../assets/icons/account-detail.png'),
  settings: require('../assets/icons/settings.png'),
  contactUs: require('../assets/icons/contact-us.png'),
  logout: require('../assets/icons/shutdown.png'),
  userAvatar: require('../assets/icons/default-avatar.jpg'),
  addCamera: require('../assets/icons/add-camera.png'),
  backArrow: require('../assets/icons/backArrow.png'),
}

const lightColors = {
  primaryBackground: '#ffffff',
  secondaryBackground: '#ffffff',
  primaryForeground: '#704BFF',
  secondaryForeground: '#8442bd',
  foregroundContrast: 'white',
  primaryText: '#000000',
  secondaryText: '#7e7e7e',
  hairline: '#dfdfdf',
  grey0: '#fafafa',
  grey3: '#f5f5f5',
  grey6: '#d6d6d6',
  grey9: '#939393',
  red: '#ea0606',
}

const InstamobileTheme = {
  colors: {
    light: lightColors,
    'no-preference': lightColors,
    dark: {
      primaryBackground: '#000000',
      secondaryBackground: '#000000',
      primaryForeground: '#704BFF',
      secondaryForeground: '#8442bd',
      foregroundContrast: 'white',
      primaryText: 'white',
      secondaryText: '#dddddd',
      hairline: '#303030',
      grey0: '#0a0a0a',
      grey3: '#2a2a2a',
      grey6: '#f5f5f5',
      grey9: '#eaeaea',
      red: '#ea0606',
    },
  },
  spaces: {
    horizontal: {
      s: 2 * HORIZONTAL_SPACING_BASE,
      m: 4 * HORIZONTAL_SPACING_BASE,
      l: 6 * HORIZONTAL_SPACING_BASE,
      xl: 8 * HORIZONTAL_SPACING_BASE,
    },
    vertical: {
      s: 2 * VERTICAL_SPACING_BASE,
      m: 4 * VERTICAL_SPACING_BASE,
      l: 6 * VERTICAL_SPACING_BASE,
      xl: 8 * VERTICAL_SPACING_BASE,
    },
  },
  fontSizes: {
    xxs: 8,
    xs: 12,
    s: 14,
    m: 16,
    l: 18,
    xl: 24,
    xxl: 32,
  },
  fontWeights: {
    s: '400',
    m: '600',
    l: '800',
  },
  icons: icons,
  // color, font size, space / margin / padding, vstack / hstack
  button: {
    borderRadius: 8,
  },
}

export default InstamobileTheme
