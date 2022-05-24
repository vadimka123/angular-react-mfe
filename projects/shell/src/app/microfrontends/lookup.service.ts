import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                library: 'angular',
                displayName: 'Flights',
                routePath: 'flights',
                ngModuleName: 'FlightsModule'
            },
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                library: 'angular',
                displayName: 'Bookings',
                routePath: 'bookings',
                ngModuleName: 'BookingsModule'
            },
            {
              // For Loading
              type: 'module',
              remoteEntry: 'http://localhost:3002/remoteEntry.js',
              exposedModule: './Module',

              // For Routing
              library: 'react',
              displayName: 'Hotels',
              routePath: 'hotels',
              ngModuleName: 'HotelsModule'
            }
        ] as Microfrontend[]);
    }
}
