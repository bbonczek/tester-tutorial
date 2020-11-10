import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`

test.skip('After confirming that TestCafe was used, scale and what-do-you-think section become enabled', async t => {
    await t
        .expect(Selector('#tried-test-cafe').checked).eql(false)
        .expect(Selector('#slider.ui-state-disabled').exists).eql(true)
        .click('#tried-test-cafe')
        .expect(Selector('#tried-test-cafe').checked).eql(true)
        .expect(Selector('#slider.ui-state-disabled').exists).eql(false)
    });

    test('verify form submition', async t => {
        await t
            .typeText("#developer-name", "Filip")
            .click(Selector('#submit-button'))
            .expect(Selector('#article-header').textContent).eql("Thank you, Filip!")
        });