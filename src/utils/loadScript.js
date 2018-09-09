/**
 * Copyright (c) 2015-present, Aviabird
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails avia-core
 */

export default url =>
  new Promise((resolve, reject) =>
    document.head.appendChild(
      Object.assign(document.createElement('script'), {
        async: true,
        src: url,
        onload: resolve,
        onerror: reject,
      }),
    ),
  );
