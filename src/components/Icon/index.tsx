import React from 'react';
import { Platform, StyleProp, ViewStyle } from 'react-native';
import Image from 'react-native-fast-image';
import { SvgProps } from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon as IconI, IconProps as IconPropsI } from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type IconConfig =
  | ({
    component: typeof IconI;
  } & IconPropsI)
  | {
    component: typeof Image;
    source: Function;
  }
  | {
    component: React.FC<SvgProps>;
  };

const iconMap: {
  [index: string]: IconConfig;
} = {
  bouy: {
    component: FontAwesome,
    name: 'life-bouy',
  },
  settingsBackupRestore: {
    component: MaterialIcons,
    name: 'settings-backup-restore',
  },
  warning: {
    component: MaterialCommunityIcons,
    name: 'alert-circle-outline',
  },
  info: {
    name: 'information-outline',
    component: MaterialCommunityIcons,
  },
  wrench: {
    component: FontAwesome,
    name: 'wrench',
  },
  policy: {
    component: MaterialIcons,
    name: 'policy',
  },
  privacyTip: {
    component: MaterialIcons,
    name: 'privacy-tip',
  },
  exit: {
    component: MaterialIcons,
    name: 'exit-to-app',
  },
  carousel: {
    component: MaterialCommunityIcons,
    name: 'animation',
  },
  video: {
    component: MaterialCommunityIcons,
    name: 'play',
  },
  locked: {
    component: MaterialCommunityIcons,
    name: 'lock',
  },
  playArrow: {
    name: 'play-arrow',
    component: MaterialIcons,
  },
  customTime: {
    component: MaterialCommunityIcons,
    name: 'clock',
  },
  add: {
    component: MaterialIcons,
    name: 'add',
  },
  'chevron-right': {
    component: MaterialIcons,
    name: 'chevron-right',
  },
  'chevron-left': {
    component: MaterialIcons,
    name: 'chevron-left',
  },
  'chevron-down': {
    component: MaterialCommunityIcons,
    name: 'chevron-down',
  },
  'arrow-up': {
    component: MaterialCommunityIcons,
    name: 'arrow-up',
  },
  'arrow-down': {
    component: MaterialCommunityIcons,
    name: 'arrow-down',
  },
  'arrow-bottom-right': {
    component: MaterialCommunityIcons,
    name: 'arrow-bottom-right',
  },
  'arrow-right': {
    component: MaterialCommunityIcons,
    name: 'arrow-right',
  },
  calendar: {
    component: MaterialCommunityIcons,
    name: 'calendar-text',
  },
  desktop: {
    component: MaterialIcons,
    name: 'desktop-mac',
  },
  check: {
    component: MaterialIcons,
    name: 'check',
  },
  'circle-check': {
    component: MaterialCommunityIcons,
    name: 'check-circle-outline',
  },
  clipboard: {
    component: MaterialCommunityIcons,
    name: 'clipboard-outline',
  },
  close: {
    component: MaterialIcons,
    name: 'close',
  },
  edit: {
    component: MaterialIcons,
    name: 'edit',
  },
  eventNote: {
    component: MaterialIcons,
    name: 'event-note',
  },
  preview: {
    component: MaterialIcons,
    name: 'remove-red-eye',
  },
  refresh: {
    component: MaterialCommunityIcons,
    name: 'refresh',
  },
  delete: {
    component: MaterialCommunityIcons,
    name: 'delete',
  },
  restore: {
    component: MaterialIcons,
    name: 'restore',
  },
  visibilityOff: {
    component: MaterialIcons,
    name: 'visibility-off',
  },
  visibility: {
    component: MaterialIcons,
    name: 'visibility',
  },
  upgrade: {
    component: MaterialIcons,
    name: 'attach-money',
  },
  autoPost: {
    component: FontAwesome,
    name: 'paper-plane',
  },
  errorOutline: {
    name: 'error-outline',
    component: MaterialIcons,
  },
  aspectRatio: {
    name: 'aspect-ratio',
    component: MaterialIcons,
  },
  notification: {
    component: MaterialCommunityIcons,
    name: 'cellphone-iphone',
  },
  sms: {
    component: MaterialIcons,
    name: 'sms',
  },
  bellRing: {
    component: MaterialCommunityIcons,
    name: 'bell-ring',
  },
  missed: {
    component: MaterialCommunityIcons,
    name: 'bell-off',
  },
  failed: {
    component: FontAwesome,
    name: 'exclamation-triangle',
  },
  uploadMedia: {
    component: MaterialCommunityIcons,
    name: 'image-multiple',
  },
  takePicture: {
    component: MaterialCommunityIcons,
    name: 'camera',
  },
  takeVideo: {
    component: MaterialCommunityIcons,
    name: 'video',
  },
  calendarMonthOutline: {
    name: 'calendar-month-outline',
    component: MaterialCommunityIcons,
  },
  clockOutline: {
    name: 'clock-outline',
    component: MaterialCommunityIcons,
  },
  ellipsis: {
    component: MaterialCommunityIcons,
    name: 'dots-vertical',
  },
  unschedule: {
    component: MaterialCommunityIcons,
    name: 'update',
  },
  expandMore: {
    name: 'expand-more',
    component: MaterialIcons,
  },
  moreHorizontal: {
    name: 'more-horiz',
    component: MaterialIcons,
  },
  expandLess: {
    name: 'expand-less',
    component: MaterialIcons,
  },
  clear: {
    name: 'clear',
    component: MaterialIcons,
  },
  attachment: {
    name: 'attachment',
    component: MaterialCommunityIcons,
  },
  ondemandVideo: {
    name: 'ondemand-video',
    component: MaterialIcons,
  },
  timer: {
    name: 'timer',
    component: MaterialIcons,
  },
  lightbulbOn: {
    component: MaterialCommunityIcons,
    name: 'lightbulb-on',
  },
  accountMultiple: {
    component: MaterialCommunityIcons,
    name: 'account-multiple',
  },
  heart: {
    component: MaterialCommunityIcons,
    name: 'heart',
  },
  bug: {
    component: MaterialCommunityIcons,
    name: 'bug',
  },
  campaign: {
    component: MaterialIcons,
    name: 'campaign',
  },
  image: {
    component: MaterialCommunityIcons,
    name: 'image',
  },
  helpCircleOutline: {
    component: MaterialCommunityIcons,
    name: 'help-circle-outline',
  },
  linkOff: {
    name: 'link-off',
    component: MaterialCommunityIcons,
  },
  bookmark: {
    component: MaterialIcons,
    name: 'bookmark',
  },
  arrowDropDown: {
    component: MaterialIcons,
    name: 'arrow-drop-down',
  },
  plus: {
    name: 'plus',
    component: MaterialCommunityIcons,
  },
  ...Platform.select({
    ios: {},
    android: {
      'chevron-right': {
        component: MaterialCommunityIcons,
        name: 'arrow-right',
      },
      'chevron-left': {
        component: MaterialCommunityIcons,
        name: 'arrow-left',
      },
    },
  }),
};

export type IconTypes = keyof typeof iconMap;

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: ViewStyle;

  /**
   * The name of the icon
   */
  name: IconTypes;

  /**
   * Prop for style.fontSize
   */
  size?: number;

  /**
   * Prop for style.color
   */
  color?: string;
}

/**
 * Platform agnostic Icon
 *
 * @param props
 */
export function Icon(props: IconProps): React.ReactElement {
  const { name, ...rest } = props;
  const { component: Component, ...iconConfig } = iconMap[name];
  // @ts-ignore
  return <Component {...iconConfig} {...rest} />;
}
