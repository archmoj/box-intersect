'use strict'

var tape = require('tape')
var genBoxes = require('./util/random-boxes')
var harness = require('./util/harness')

tape('full intersect', function(t) {
  harness.full(t, [
    [1,2],
    [2,3],
    [1,3]
    ], '1d example')

  //Random test cases
  ;[10, 100, 1000, 5000].forEach(function(count) {
    for(var d=1; d<=4; ++d) {
      for(var i=0; i<10; ++i) {
        var boxes = new Array(count)
        for(var j=0; j<count; ++j) {
          var box = new Array(2*d)
          for(var k=0; k<2*d; ++k) {
            box[k] = Math.random()
          }
          boxes[j] = box
        }
        
        harness.full(t, boxes, d + 'd full n=' + count)
      }
    }
  })

  harness.full(t, genBoxes.random(10,2))
  harness.full(t, genBoxes.diamonds(10, 2),   '2d diamond n=1000')
  harness.full(t, genBoxes.diamonds(1000, 2), '2d diamond n=1000')
  harness.full(t, genBoxes.diamonds(1000, 3), '3d diamond n=1000')
  harness.full(t, genBoxes.diamonds(1000, 4), '4d diamond n=1000')

  t.end()
})