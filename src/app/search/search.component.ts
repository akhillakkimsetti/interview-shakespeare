import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchText: string;
  previousText: string;
  dataFetched: any;
  tableKeys: string[];
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  onClickSearch() {
    if (this.searchText !== this.previousText && this.searchText !== '') {
      this.searchService.getSearchResults(this.searchText).subscribe(
        (val) => {
          this.dataFetched = val['items'];
          if (this.dataFetched)
            this.tableKeys = Object.keys(this.dataFetched[0]);
          this.previousText = this.searchText;
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }
}
