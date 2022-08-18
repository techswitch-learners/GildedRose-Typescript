export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }


    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {

            let itemName =  this.items[i].name;
            let itemQuality =  this.items[i].quality;
            let itemSell_in =  this.items[i].sellIn;


            if (itemName != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && itemName != 'Sulfuras, Hand of Ragnaros') {
                itemQuality =  itemQuality == 0? 0:  itemQuality-1 ;

            } else {
                if (itemQuality < 50) {
                    itemQuality += 1
                    if (itemName == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            if (itemQuality < 50) {
                                itemQuality += 1;
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (itemQuality < 50) {
                                itemQuality += 1 ;
                            }
                        }
                    }
                }
            }
            if (itemName != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (itemName != 'Aged Brie') {
                    if (itemName != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (itemQuality> 0) {
                            if (itemName != 'Sulfuras, Hand of Ragnaros') {
                                itemQuality -= 1;
                            }
                        }
                    } else {
                        itemQuality = 0;
                    }
                } else {
                    if (itemQuality < 50) {
                        itemQuality += 1
                    }
                }
            }
            this.items[i].quality = itemQuality;
            this.items[i].sellIn = itemSell_in;
        }

        return this.items;
    }
}
