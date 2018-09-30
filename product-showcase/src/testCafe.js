import { Selector } from 'testcafe'; // first import testcafe selectors


fixture `Getting Started`
    // Given:
    .page `http://localhost:3000/`;  // specify the start page
    
    //Assert
    test('CorrectPrice', async t => {
        const nameInput = Selector('#title');
        const nameInputElement = await nameInput();
    });
 
    //Assert
    test('My test', async t => {
        await t.expect(Selector('#//*[@id="pickMEup"]/div/center/h4/i').exists).ok();
    });
    //stopping Point