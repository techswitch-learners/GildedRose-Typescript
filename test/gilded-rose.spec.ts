import {expect} from 'chai';
import {Item, GildedRose} from '../app/gilded-rose';

describe('Gilded Rose', function () {

    // it('should foo', function() {
    //     const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].name).to.equal('fixme');
    // });

    it('should decrease the sellIn and quality by 1 of a basic item', function () {
        const gildedRose = new GildedRose([new Item('cricket bat', 5, 50)]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('cricket bat');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(49);
    });

    it('Once the sell by date has passed, Quality degrades twice as fast for a basic item', function () {
        const gildedRose = new GildedRose([new Item('tennis racket', 0, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(48);
    });

    it('The Quality of an item is never negative', function () {
        const gildedRose = new GildedRose([new Item('tennis racket', 20, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('"Aged Brie" actually increases in Quality the older it gets', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 5, 25)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(26);
    });

    it('"Aged Brie" actually increases in Quality twice as fast after its sell by date', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 25)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(27);
    });

    it('The Quality of Aged Brie is never more than 50', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it('The Quality of "Backstage passes" is never more than 50', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50)]);
        // console.log(gildedRose);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50); //but WHY?!
    });

    it('"Sulfuras", being a legendary item, never has to be sold or decreases in Quality', function() {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
        // console.log(gildedRose);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
        expect(items[0].sellIn).to.equal(5);
    });

    // it('"Backstage passes", like aged brie, increases in Quality as its SellIn value approaches', function() {
    //
    // });

    // it('"Conjured" items degrade in Quality twice as fast as normal items', function() {

    // });
});
