import { Item, GildedRose } from '../app/gilded-rose';

const items: Array<Item> = [
    new Item("Item1", 5 , 2),
    new Item("Item2", 0, 6),
    new Item("Item3", 1 , 8),
    new Item("Aged Brie", 10 , 3),
    new Item("Aged Brie", 1 , 8),
    new Item("Aged Brie", 7 , 48),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10),
    new Item('Backstage passes to a TAFKAL80ETC concert', 10, 11),
    new Item('Backstage passes to a TAFKAL80ETC concert', 7, 40),
    new Item('Backstage passes to a TAFKAL80ETC concert', 2, 40),
    new Item('Sulfuras, Hand of Ragnaros', 0 , 80),
    new Item('Sulfuras, Hand of Ragnaros', 8 , 50),
    
];
const gildedRose = new GildedRose(items);
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();
console.log(gildedRose.items)
// import { Item, GildedRose } from '../app/gilded-rose';

// const items: Array<Item> = [
//     new Item("Thing1", 50, 49),
//     new Item("Thing2", 1, 1),
//     new Item("Thing3", 4, 10),
//     new Item("Aged Brie", 50, 49),
//     new Item("Aged Brie", 1, 4),
//     new Item("Aged Brie", 3, 49),
//     new Item("Backstage passes to a TAFKAL80ETC concert", 11, 4),
//     new Item("Backstage passes to a TAFKAL80ETC concert", 6, 4),
//     new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50),
//     new Item("Sulfuras, Hand of Ragnaros", 1, 80),
//     new Item("Sulfuras, Hand of Ragnaros", 50, 1),
//     ];

// const gildedRose = new GildedRose(items);
// gildedRose.updateQuality();
// gildedRose.updateQuality();
// gildedRose.updateQuality();
// gildedRose.updateQuality();
// console.log(gildedRose.items);

