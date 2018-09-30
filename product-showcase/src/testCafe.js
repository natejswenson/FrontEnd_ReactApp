import { Selector } from 'testcafe'; // first import testcafe selectors
import {ReactSelector} from 'testcafe-react-selectors';
import { waitForReact } from 'testcafe-react-selectors';

const tst1 = ReactSelector('ADDbtn')
const tst2 = ReactSelector('Title')
const tst3 = ReactSelector('Price')
const tst4 = ReactSelector('GF')
const tst5 = ReactSelector('ShareBTN')
const tst6 = ReactSelector('ListBTN')
const tst7 = ReactSelector('RegistryBTN')
const tst8 = ReactSelector('GF1')
const tst9 = ReactSelector('Returns')
const tst10 = ReactSelector('ReturnPolicy')
const tst12 = ReactSelector('Pro')
const tst15 = ReactSelector('BadReview')

const tst17 = ReactSelector('Stars')
fixture `Product Page Tests`
    // Given:
    .page `http://localhost:3000/`  // specify the start page
   
    //Assert
    test('ADD2Cart Component', async t => {
       await t
        .expect(Selector(tst1).innerText).eql('ADD TO CART')
    });
    //Assert
    test('Page Title Component', async t => {
        await t
         .expect(Selector(tst2).innerText).eql('Ninja\u2122 Professional Blender with Single Serve Blending Cups\n')
     });
      //Assert
    test('Price Component', async t => {
        await t
         .expect(Selector(tst3).innerText).eql('$139.99\nonline price\n')
     });

     //assert
     test('Offer 1 Component', async t => {
        await t
         .expect(Selector(tst4).innerText).eql('SPEND $50, GET FREE SHIPPING\n')
     });

     //assert
     test('ShareBTN Component', async t => {
        await t
         .expect(Selector(tst5).innerText).eql('SHARE')
     });

     //assert
     test('Add2List Component', async t => {
        await t
         .expect(Selector(tst6).innerText).eql('ADD TO LIST')
     });

     //assert
     test('Offer 2 Component', async t => {
        await t
         .expect(Selector(tst8).innerText).eql('')
     });

     //assert
     test('Add2Registry Component', async t => {
        await t
         .expect(Selector(tst7).innerText).eql('ADD TO REGISTRY')
     });

     //assert
     test('Return Policy Component', async t => {
        await t
         .expect(Selector(tst10).innerText).eql('This item must be returned within 30 days of the ship date. see returen policy for details.\n')
     });

     //assert
     test('ReturnText Componentt', async t => {
        await t
         .expect(Selector(tst9).innerText).eql('returns\n')
     });


     //assert
     test('Pro Component', async t => {
        await t
         .expect(Selector(tst12).innerText).eql('')
     });
     

     //assert
     test('Top Good Review Component', async t => {
        await t
         .expect(Selector(tst15).innerText).eql('Fantastic Blender\nThis blender works amazingly, and blends within seconds. The single serve cups also work really well for smoothies or protein shakes!\n')
     });
     //assert
     test('StarRating COmponent', async t => {
        await t
         .expect(Selector(tst17).innerText).eql('overall')
     });
      