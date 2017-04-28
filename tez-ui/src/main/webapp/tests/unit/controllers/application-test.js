/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('Basic creation test', function(assert) {
  let controller = this.subject();

  assert.ok(controller.prefixedBreadcrumbs);
});

test('prefixedBreadcrumbs test', function(assert) {
  let controller = this.subject(),
      prefixedBreadcrumbs,
      testText = "foo",
      testRouteName = "RouteName";

  controller.breadcrumbs = [{
    text: testText,
    routeName: testRouteName
  }];
  prefixedBreadcrumbs = controller.get("prefixedBreadcrumbs");

  assert.equal(prefixedBreadcrumbs.length, 2);
  assert.equal(prefixedBreadcrumbs[0].text, "Home");
  assert.equal(prefixedBreadcrumbs[0].routeName, "home.queries");
  assert.equal(prefixedBreadcrumbs[1].text, testText);
  assert.equal(prefixedBreadcrumbs[1].routeName, testRouteName);
});
