import { Component, AfterContentInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { take } from 'rxjs/operators';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Microfrontend } from '../microfrontends/microfrontend';

@Component({
  selector: 'app-react-wrapper',
  template: '',
})
export class ReactWrapperComponent implements AfterContentInit {
  constructor(private hostRef: ElementRef, private route: ActivatedRoute) { }

  async ngAfterContentInit(): Promise<void> {
    this.route.data.pipe(take(1)).subscribe(async (data: Data) => {
      const configuration: Microfrontend = data.configuration;
      const component = await loadRemoteModule(configuration);

      const root = createRoot(this.hostRef.nativeElement);
      root.render(createElement(component.default, {}, null));
    });
  }
}
