'use strict';

import _debug   from 'debug';
const debug = _debug('lark-router');

export default async (ctx) => {
    debug("Example: GET /");
    ctx.body = 'GET /';
};
