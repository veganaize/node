// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function provoke_scaling_prefix() {
  var a = [0];
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++; a[0]++;
  return a;
}

Debug = debug.Debug;

function success(expectation, source) {
  const result = Debug.evaluateGlobal(source, true).value();
  assertEquals(expectation, result);
}

success([216], "provoke_scaling_prefix()");
