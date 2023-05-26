import * as components from './components';

const componentsList = components?.default;

const VueSetComponents = {
    install: (app, options) => {
        Object.keys(componentsList).forEach(name => {
            app.component(name, componentsList[name]);
        })
    },
};

export default VueSetComponents;