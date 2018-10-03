import { Selector } from 'testcafe'; // first import testcafe selectors
import {ReactSelector} from 'testcafe-react-selectors';
import { waitForReact } from 'testcafe-react-selectors';

const tst1 = ReactSelector('ShopBtns')
const tst2 = ReactSelector('Title')
const tst3 = ReactSelector('Title')
const tst4 = ReactSelector('GF')
const tst5 = ReactSelector('ShopBtns')
const tst7 = ReactSelector('RegistryBTN')
const tst8 = ReactSelector('GF')
const tst9 = ReactSelector('Returns')
const tst10 = ReactSelector('Returns')
const tst12 = ReactSelector('Pro')
const tst15 = ReactSelector('BadReview')

const tst17 = ReactSelector('Stars')
fixture `Product Page Tests`
    // Given:
    .page `http://localhost:3000/`  // specify the start page
   
    //Assert
    test('ADD2Cart Component', async t => {
       await t
        .expect(Selector(tst1).innerText).eql('\nPICKUP IN STORE\nADD TO CART\n')
    });
    //Assert
    test('Page Title Component', async t => {
        await t
         .expect(Selector(tst2).innerText).eql('Ninja™ Professional Blender with Single Serve Blending Cups\n$139.99\nonline price\n')
     });
      //Assert
    test('Price Component', async t => {
        await t
         .expect(Selector(tst3).innerText).eql('Ninja™ Professional Blender with Single Serve Blending Cups\n$139.99\nonline price\n')
     });

     //assert
     test('Offer 1 Component', async t => {
        await t
         .expect(Selector(tst4).innerText).eql('SPEND $50, GET FREE SHIPPING\n$25 gift card with purchase of a select Ninja Blender\n')
     });


     //assert
     test('Offer 2 Component', async t => {
        await t
         .expect(Selector(tst4).innerText).eql('SPEND $50, GET FREE SHIPPING\n$25 gift card with purchase of a select Ninja Blender\n')
     });

     //assert
     test('Add2Registry Component', async t => {
        await t
         .expect(Selector(tst7).innerText).eql('\nADD TO REGISTRY\nADD TO LIST\nSHARE\n\nproduct highlights\nNumber of Speeds: 3\nCapacity (volume): 72.0 Oz.\nAppliance Capabilities: Blends\nIncludes: Travel Lid\nMaterial: Plastic\nFinish: Painted\nMetal Finish: Chrome\nSafety and Security Features: Non-Slip Base\nCare and Cleaning: Easy-To-Clean, Dishwasher Safe Parts\n')
     });

     //assert
     test('Return Policy Component', async t => {
        await t
         .expect(Selector(tst10).innerText).eql('\nreturns\nThis item must be returned within 30 days of the ship date. see returen policy for details.\n')
     });

     //assert
     test('ReturnText Componentt', async t => {
        await t
         .expect(Selector(tst9).innerText).eql('\nreturns\nThis item must be returned within 30 days of the ship date. see returen policy for details.\n')
     });

     //assert
     test('StarRating COmponent', async t => {
        await t
         .expect(Selector(tst17).innerText).eql('overall')
     });
      