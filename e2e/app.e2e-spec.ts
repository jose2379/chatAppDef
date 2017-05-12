import { ChatAppDefPage } from './app.po';

describe('chat-app-def App', () => {
  let page: ChatAppDefPage;

  beforeEach(() => {
    page = new ChatAppDefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
