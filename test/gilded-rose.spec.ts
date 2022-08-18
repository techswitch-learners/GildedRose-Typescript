import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    // it('should foo', function() {
    //     const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].name).to.equal('fixme');
    // });

    it('finding out basic expectations', function() {
        const gildedRose = new GildedRose([ new Item('cricket bat', 5, 100) ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('cricket bat');
        expect(items[0].sellIn).to.equal(4);
    });
});
