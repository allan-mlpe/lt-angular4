import { DataBindingPage } from './app.po';

describe('data-binding App', () => {
  let page: DataBindingPage;

  beforeEach(() => {
    page = new DataBindingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
