'use strict';
import * as React from 'react';
import { type HeadFC } from 'gatsby';

import { NotFoundPage } from '@/components/pages';

export default NotFoundPage;

export const Head: HeadFC = () => (<title>Not found</title>);
