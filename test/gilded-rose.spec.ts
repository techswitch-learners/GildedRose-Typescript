import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    // ARRANGE 
    it('should correspond to the golden record', function() {
       const inputItems = [
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

       const gildedRose = new GildedRose(inputItems);


    //    ACT

    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();

    // ASSERT

    const expectedOutput = [
        new Item ('Item1', 1, 0) ,
        new Item ('Item2', -4, 0),
        new Item ('Item3', -3, 1),
        new Item ('Aged Brie', 6, 7),
        new Item ('Aged Brie', -3, 15),
        new Item ('Aged Brie', 3, 50),
        new Item ('Backstage passes to a TAFKAL80ETC concert', 11, 14),
        new Item ('Backstage passes to a TAFKAL80ETC concert', 6, 19),
        new Item ('Backstage passes to a TAFKAL80ETC concert', 3, 50),
        new Item ('Backstage passes to a TAFKAL80ETC concert', -2, 0),
        new Item ('Sulfuras, Hand of Ragnaros', 0, 80),
        new Item ('Sulfuras, Hand of Ragnaros', 8, 50),  
       ];

       expect(gildedRose.items).to.deep.equal(expectedOutput);
    //    const gildedRose = new GildedRose(inputItems);
        // gildedRose.updateQuality();
        // gildedRose.updateQuality();
        // gildedRose.updateQuality();
        // gildedRose.updateQuality();
        
        console.log(gildedRose.items);
    });

});
// import { expect } from 'chai';
// import { Item, GildedRose } from '../app/gilded-rose';

// describe('Gilded Rose', function () {

//     it('should return items as previous', function() {

//         //Arrange
//         const items: Array<Item> = [
//             new Item("Thing1", 50, 49),
//             new Item("Thing2", 1, 1),
//             new Item("Thing3", 4, 10),
//             new Item("Aged Brie", 50, 49),
//             new Item("Aged Brie", 1, 4),
//             new Item("Aged Brie", 3, 49),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 11, 4),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 6, 4),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50),
//             new Item("Sulfuras, Hand of Ragnaros", 1, 80),
//             new Item("Sulfuras, Hand of Ragnaros", 50, 1)
//             ];
//         const gildedRose = new GildedRose(items);
        
//         //Act
//         gildedRose.updateQuality();
//         gildedRose.updateQuality();
//         gildedRose.updateQuality();
//         gildedRose.updateQuality();

//         //Assert
//         const expectedOutput = [
//             new Item('Thing1', 46, 45),
//             new Item('Thing2', -3, 0),
//             new Item('Thing3', 0, 6),
//             new Item('Aged Brie', 46, 50),
//             new Item('Aged Brie', -3, 11),
//             new Item('Aged Brie', -1, 50),
//             new Item('Backstage passes to a TAFKAL80ETC concert', 7, 11),
//             new Item('Backstage passes to a TAFKAL80ETC concert', 2, 15),
//             new Item('Backstage passes to a TAFKAL80ETC concert', -3, 0),
//             new Item('Sulfuras, Hand of Ragnaros', 1, 80),
//             new Item('Sulfuras, Hand of Ragnaros', 50, 1)
//         ];
//         expect(gildedRose.items).to.deep.equal(expectedOutput);
//     });

//     it('should decrease quality for all standard items', function() {

//         //Arrange
//         const items: Array<Item> = [
//             new Item("Thing1", 50, 49),
//             new Item("Thing2", 1, 7),
//             new Item("Thing3", 4, 10)
//         ];
//         const gildedRose = new GildedRose(items);
        
//         //Act
//         gildedRose.updateQuality();
        
//         //Assert
//         const expectedOutput = [
//             new Item('Thing1', 49, 48),
//             new Item('Thing2', 0, 6),
//             new Item('Thing3', 3, 9)
//             ];
//         expect(gildedRose.items).to.deep.equal(expectedOutput);
//     });

//     it('should increase quality for brie and passes', function() {

//         //Arrange
//         const items: Array<Item> = [
//             new Item("Aged Brie", 50, 49),
//             new Item("Aged Brie", 2, 50),
//             new Item("Aged Brie", 1, 49),
//             new Item("Aged Brie", 0, 47),
//             new Item("Aged Brie", 0, 10),
//             new Item("Aged Brie", 0, 50),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 0, 46),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 2, 50),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 2, 49),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 2, 46),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 6, 50),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 6, 46),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 5, 46),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 11, 46),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 10, 46),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
//             new Item("Sulfuras, Hand of Ragnaros", 1, 80),
//             new Item("Sulfuras, Hand of Ragnaros", 50, 1)
//             ];
//         const gildedRose = new GildedRose(items);
        
//         //Act
//         gildedRose.updateQuality();
        
//         //Assert
//         const expectedOutput = [
//             new Item('Aged Brie', 49, 50),
//             new Item('Aged Brie', 1, 50),
//             new Item('Aged Brie', 0, 50),
//             new Item('Aged Brie', -1, 49),
//             new Item('Aged Brie', -1, 12),
//             new Item('Aged Brie', -1, 50),
//             new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
//             new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
//             new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
//             new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50),
//             new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50),
//             new Item('Backstage passes to a TAFKAL80ETC concert', 1, 49),
//             new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50),
//             new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50),
//             new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 4, 49),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 10, 47),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 9, 48),
//             new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
//             new Item('Sulfuras, Hand of Ragnaros', 1, 80),
//             new Item('Sulfuras, Hand of Ragnaros', 50, 1)
//         ];
//         expect(gildedRose.items).to.deep.equal(expectedOutput);
//     });


// });

