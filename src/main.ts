import {Aurelia} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

import '../css/styles.css';

export function configure(aurelia: Aurelia) {
    aurelia.use.basicConfiguration();
    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}