import { Selector } from 'testcafe'; // first import testcafe selectors


fixture `Getting Started`
    // Given:
    .page `http://localhost:3000/`;  // specify the start page
    
    test('CorrectPrice', async t => {
        const nameInput = Selector('#price');
        const nameInputElement = await nameInput();
    });
