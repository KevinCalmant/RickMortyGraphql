import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Apollo, gql} from "apollo-angular";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListComponent implements OnInit {
  private readonly apollo = inject(Apollo);

  ngOnInit() {
    this.apollo.query({
      query: gql(`
        query {
          characters(page: 1) {
             info {
              count
            }
            results {
              name
            }
          }
          location(id: 1) {
            id
          }
          episodesByIds(ids: [1, 2]) {
            id
          }
        }
      `)
    }).subscribe(result => {
      console.log(result);
    });
  }
}
