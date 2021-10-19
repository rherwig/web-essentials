import { renderToString } from '@vue/server-renderer';

import createApp from '../shared';

const render = async () => {
    const { app } = createApp();
    const context = {};

    const markup = await renderToString(app, context);

    return {
        markup,
    };
};

export {
    render,
};
