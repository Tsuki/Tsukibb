import {EventEmitter, Injectable, Output} from "@angular/core";

import {Item} from "./item";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import lzstring = require("lz-string");


@Injectable()
export class ItemService {

    private hpUrl = "https://ebb.io/_/hpdata";
    private animeUrl = "https://ebb.io/_/anime_list";
    private items: Item[];
    @Output() itemsChange = new EventEmitter();

    constructor(private http: HttpClient) {
    }

    updateItems() {
        this.http.get(this.animeUrl, {responseType: 'text'}).subscribe(
            next => {
                this.items = JSON.parse(this.decompressFromUTF16(next));
                this.itemsChange.emit(this.items);
            }
        );
    }

    decompressFromUTF16(val: string) {
        return lzstring.decompressFromUTF16(val)
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.anime_id === id)[0];
    }
}
