/**
 * Copyright (c) 2015-present, Aviabird
 *
 * @emails snitch-core
 *
 */

import {urlRoot} from 'site-constants';

export default (slug: string): string | null =>
  slug == null ? null : `${urlRoot}/${slug.replace(/^\//, '')}`;
