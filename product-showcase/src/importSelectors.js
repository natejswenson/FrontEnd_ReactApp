import ReactSelector from 'testcafe-react-selectors';

export default class TestBlenderPage {
    constructor () {
        this.textInput = ReactSelector('Header TodoTextInput');
        this.items     = ReactSelector('TodoItem');
    }
};