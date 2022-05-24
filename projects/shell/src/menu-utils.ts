import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { Microfrontend } from './app/microfrontends/microfrontend';
import { APP_ROUTES } from './app/app.routes';
import { ReactWrapperComponent } from './app/react/react.component';

export function buildRoutes(options: Microfrontend[]): Routes {

    const lazyRoutes: Routes = options.map(o => {
      console.log(o.library, o)
      switch (o.library) {
        case 'react':
          return {
            path: o.routePath,
            component: ReactWrapperComponent,
            data: { configuration: o },
          };
        default:
          return {
            path: o.routePath,
            loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
          };
      }
    });

    return [...APP_ROUTES, ...lazyRoutes];
}
