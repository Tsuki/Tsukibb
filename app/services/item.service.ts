import {EventEmitter, Injectable, Output} from '@angular/core';

import {Item} from '../types/item';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Hpdata} from '../types/hpdata';
import LZstring = require('lz-string');


@Injectable()
export class ItemService {

  @Output() itemsChange = new EventEmitter();
  private hpUrl = 'https://ebb.io/_/hpdata';
  private animeUrl = 'https://ebb.io/_/anime_list';
  private items: Item[];
  private hpdata: Hpdata;

  constructor(private http: HttpClient) {
  }

  updateItems() {
    this.http.get(this.animeUrl, {responseType: 'text'})
      .map(this.decompressFromUTF16)
      .subscribe(
        next => {
          console.log('Anime list load complete');
          this.items = next;
          this.itemsChange.emit(this.items);
        }, error => {
          console.log(error);
        }
      );
  }

  updateHpdata() {
    this.http.get(this.hpUrl, {responseType: 'text'})
      .map(this.decompressFromUTF16)
      .subscribe(
        next => {
          this.hpdata = next;
        }
      );
  }

  decompressFromUTF16(val: string) {
    return JSON.parse(LZstring.decompressFromUTF16(val));
  }

  getItem(id: number): Item {
    return this.items.filter(item => item.anime_id === id)[0];
  }
}
