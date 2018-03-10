import {Component, OnInit} from '@angular/core';

import {Item} from '../types/item';
import {ItemService} from '../services/item.service';

@Component({
    selector: 'ns-items',
    moduleId: module.id,
    templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) {
    }

    async ngOnInit() {
        this.itemService.updateItems();
        this.itemService.itemsChange.subscribe(items => {
            this.items = items;
        });
    }
}