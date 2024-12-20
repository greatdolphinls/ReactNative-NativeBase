# Packages Used

_package.json_

<pre class="line-numbers"><code class="language-json">{
  "main": "node_modules/expo/AppEntry.js",
  "name": "FoodOrderingApp",
  "version": "9.2.1",
  "private": true,
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  },
  "dependencies": {
    "@react-native-community/masked-view": "0.1.10",
    "color": "^3.1.2",
    "expo": "~38.0.8",
    "expo-font": "~8.2.1",
    "expo-status-bar": "^1.0.2",
    "jest-cli": "^26.4.2",
    "lodash": "^4.17.20",
    "moment": "^2.27.0",
    "native-base": "^2.13.14",
    "prop-types": "^15.7.2",
    "react": "~16.11.0",
    "react-dom": "~16.11.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-38.0.2.tar.gz",
    "react-native-gesture-handler": "~1.6.0",
    "react-native-maps": "0.27.1",
    "react-native-reanimated": "~1.9.0",
    "react-native-safe-area-context": "~3.0.7",
    "react-native-screens": "~2.9.0",
    "react-native-web": "~0.11.7",
    "react-navigation": "^4.4.0",
    "react-navigation-stack": "^2.8.2",
    "react-navigation-tabs": "^2.9.0",
    "react-redux": "^7.2.1",
    "redux": "^4.0.5",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.3.0",
    "remotedev-rn-debugger": "^0.8.4",
    "whatwg-fetch": "^3.4.1"
  },
  "devDependencies": {
    "@babel/core": "^7.8.6",
    "babel-eslint": "10.1.0",
    "babel-plugin-transform-react-jsx-source": "^6.22.0",
    "babel-preset-expo": "^8.1.0",
    "eslint": "6.8.0",
    "eslint-plugin-flowtype": "4.6.0",
    "eslint-plugin-import": "2.20.1",
    "eslint-plugin-jsx-a11y": "6.2.3",
    "eslint-plugin-prettier": "^3.1.2",
    "eslint-plugin-react": "7.19.0",
    "eslint-plugin-react-native": "3.8.1",
    "flow-bin": "0.120.1",
    "flow-typed": "3.0.0",
    "husky": "4.2.3",
    "jest": "25.1.0",
    "jest-expo": "^36.0.0",
    "prettier": "1.19.1",
    "react-native-scripts": "2.0.1",
    "react-test-renderer": "16.13.0"
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm test"
    }
  },
  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!(react-native|lottie-react-native|expo|react-native-maps|react-native-svg|react-native-branch|native-base-shoutem-theme|react-native-easy-grid|react-native-drawer|react-native-vector-icons|react-native-keyboard-aware-scroll-view|react-native-swiper|react-navigation|native-base|@expo|react-native-scrollable-tab-view|react-native-simple-modal|react-native-iphone-x-helper)/)"
    ]
  }
}


</code></pre>
