import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export type Microfrontend = LoadRemoteModuleOptions & {
    library: 'angular' | 'react';
    displayName: string;
    routePath: string;
    ngModuleName: string;
};
