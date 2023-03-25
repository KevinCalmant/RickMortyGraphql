import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full",
      },
      {
        path: "list",
        component: CharactersListComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    CharactersListComponent
  ]
})
export class CharactersRoutingModule {
}
