import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`

test('After confirming that TestCafe was used, scale and what-do-you-think section become enabled', async t => {
    await t
        .expect(Selector('#tried-test-cafe').checked).eql(false)
        .expect(Selector('#slider.ui-state-disabled').exists).eql(true)
        .click('#tried-test-cafe')
        .expect(Selector('#tried-test-cafe').checked).eql(true)
        .expect(Selector('#slider.ui-state-disabled').exists).eql(false)
    });