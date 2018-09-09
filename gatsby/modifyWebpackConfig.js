/**
 * Copyright (c) 2015-present, Aviabird
 *
 * @emails avia-core
 */

'use strict';

const {resolve} = require('path');
const webpack = require('webpack');

module.exports = ({config, stage}) => {
  // See https://github.com/FormidableLabs/react-live/issues/5
  config.plugin('ignore', () => new webpack.IgnorePlugin(/^(xor|props)$/));

  config.merge({
    resolve: {
      root: resolve(__dirname, '../src'),
      extensions: ['', '.js', '.jsx', '.json'],
    },
  });
  return config;
};