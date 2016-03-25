'use strict'

var expect = require('chai').expect
var debug = require('../index')

/*globals describe, it*/

describe('debug', function() {
  it('log', function() {
    debug.log()
    expect(1).to.equal(1)
  })
  it('warn', function() {
    debug.warn()
    expect(1).to.equal(1)
  })
  it('error', function() {
    debug.error()
    expect(1).to.equal(1)
  })
  it('info', function() {
    debug.info()
    expect(1).to.equal(1)
  })
  it('success', function() {
    debug.success()
    expect(1).to.equal(1)
  })
})
