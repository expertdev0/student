import { module, test } from 'qunit';
import { setupRenderingTest } from 'student-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | subject-grades-chart', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SubjectGradesChart />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <SubjectGradesChart>
        template block text
      </SubjectGradesChart>
    `);

    assert.dom().hasText('template block text');
  });
});
