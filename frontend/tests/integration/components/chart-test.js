import { module, test } from 'qunit';
import { setupRenderingTest } from 'student-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | chart', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Chart />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Chart>
        template block text
      </Chart>
    `);

    assert.dom().hasText('template block text');
  });
});
