import customThemeDark from 'prism-react-renderer/themes/nightOwl'
import customThemeLight from 'prism-react-renderer/themes/nightOwlLight'

import { transparentize } from 'polished'
import { css, th, defaultTheme, aliasColor, Props, Theme } from '@xstyled/styled-components'

export function primaryColor(color: string) {
  return aliasColor('primary', color)
}

export const theme = {
  initialColorModeName: 'light',
  ...defaultTheme,
  global: css`
    html,
    body {
      transition: 300ms ease-in color, 300ms ease-in background-color;
      margin: 0;
      font-family: base;
      background-color: background;
      color: on-background;
      line-height: base;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :focus {
      outline-color: primary-500;
    }
  `,
  'prism-theme-dark': customThemeDark,
  'prism-theme-light': customThemeLight,
  fonts: {
    base: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
  lineHeights: {
    base: 1.4,
    control: th.lineHeight('base'),
  },
  transitions: {
    base: '300ms ease all',
    fast: '150ms cubic-bezier(0.215, 0.61, 0.355, 1) all',
    control: th.transition('base'),
  },
  radii: {
    base: 4,
    control: th.radius('base'),
    editor: th.radius('base'),
    blockquote: th.radius('base'),
  },
  borderWidths: {
    base: 1,
    control: th.borderWidth('base'),
  },
  shadows: {
    focus: (p: Props<Theme>) => `0 0 0 ${th.px(2)(p)} ${th.color('primary-a500')(p)}`,
    'control-focus': th.shadow('focus'),
  },
  sizes: {
    screen: 1440,
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 48,
    6: 96,
    7: 144,
    8: 192,
    9: 240,
    'preview-padding-y': 16,
    'preview-padding-x': 24,
  },
  colors: {
    ...defaultTheme.colors,

    // Primary = indigo
    ...aliasColor('primary', 'cyan'),

    primary: th.color('primary-500'),
    'primary-a500': (p: Props<Theme>) => transparentize(0.5, th.color('primary-500')(p) as string),

    background: th.color('white'),
    'background-light': th.color('gray-100'),
    'background-primary': th.color('primary-100'),
    'background-mark': th.color('yellow-200'),
    'background-light-a50': (p: Props<Theme>) =>
      transparentize(0.05, th.color('background-light')(p) as string),
    'on-background': th.color('black'),
    'on-background-light': th.color('gray-700'),
    'on-background-primary': th.color('primary-700'),
    'on-background-primary-dark': th.color('primary-800'),

    'layout-border': th.color('gray-300'),

    'control-background': th.color('gray-100'),
    'control-placeholder': th.color('gray-600'),
    'control-on': th.color('gray-900'),
    'control-border': th.color('layout-border'),
    'control-border-hover': th.color('gray-500'),
    'control-border-active': th.color('primary-400'),

    'editor-background': th.color('gray-900'),
    'editor-on': th.color('gray-100'),
    'editor-border': th.color('layout-border'),

    'blockquote-link': th.color('yellow-800'),
    'blockquote-background': th.color('yellow-200'),
    'blockquote-border': th.color('yellow'),

    'doc-search-suggestion-highlight-background': th.color('primary-200'),
    'doc-search-suggestion-highlight-on-background': th.color('primary-800'),
    'doc-search-suggestion-content-background': th.color('primary-100'),
    'doc-search-suggestion-content-underline': th.color('primary-700'),

    modes: {
      dark: {
        background: th.color('black'),
        'editor-background': th.color('black'),
        'background-light': th.color('gray-800'),
        'background-primary': th.color('primary-900'),
        'background-mark': th.color('yellow-500'),
        'background-light-a50': (p: Props<Theme>) =>
          transparentize(0.05, th.color('background-light')(p) as string),
        'on-background': th.color('white'),
        'on-background-light': th.color('gray-300'),
        'on-background-primary': th.color('primary-300'),
        'on-background-primary-dark': th.color('primary-200'),

        'layout-border': th.color('gray-700'),

        'control-background': th.color('gray-800'),
        'control-placeholder': th.color('gray-400'),
        'control-on': th.color('gray-100'),
        'control-border': th.color('layout-border'),
        'control-border-hover': th.color('gray-500'),
        'control-border-active': th.color('primary-600'),

        'blockquote-link': th.color('yellow-200'),
        'blockquote-background': th.color('yellow-900'),
        'blockquote-border': th.color('yellow-300'),

        'doc-search-suggestion-highlight-background': th.color('primary-800'),
        'doc-search-suggestion-highlight-on-background': th.color(
          'primary-200',
        ),
        'doc-search-suggestion-content-background': th.color('primary-900'),
        'doc-search-suggestion-content-underline': th.color('primary-300'),
      },
    },
  },
}
