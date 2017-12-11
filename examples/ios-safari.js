"use strict";

require("../helpers/setup");
var async=require("async");

// var test = require('tape');

var wd = require("wd"),
  _ = require('underscore'),
  serverConfigs = require('../helpers/appium-servers'),
  actions = require("../helpers/actions");

wd.addPromiseChainMethod('swipe', actions.swipe);
wd.addPromiseChainMethod('pinch', actions.pinch);
wd.addPromiseChainMethod('zoom', actions.zoom);

describe("ios safari", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = process.env.npm_package_config_sauce ?
      serverConfigs.sauce : serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("../helpers/logging").configure(driver);

    var desired = _.clone(require("../helpers/caps").ios81);
    desired.browserName = 'safari';
    if (process.env.npm_package_config_sauce) {
      desired.name = 'ios - safari';
      desired.tags = ['sample'];
    }
    // wd.addPromiseChainMethod("swipe",actions.swipe);
    return driver.init(desired);
  });

  it("should get the url", function () {
    console.log('获取网页')
    return driver
      .get('http://192.168.52.67:8880/examples/inputTest.html')
      .sleep(5000)
  });

  it("touchInput", function () { 
    return driver
      .elementById('inputs')

      .swipe({ startX: 100, startY: 100, endX: 200, endY: 200, duration: 800 })

      .sleep(500)
  });

  
  // it("pinch", function () {
  //   return driver
  //     .elementById('view')
  //     .then(function (el) {
  //       return driver.pinch(el);
  //     });
  // });

  // it("multiactions", function () {
  //   return driver.chain()
  //     .then(function () {
  //       return driver
  //         .elementById('view')
  //         .then(function (el) {
  //           var a1 = new wd.TouchAction();
  //           a1
  //             .tap({ el: el, x: 100, y: 100 });
  //           var a2 = new wd.TouchAction();
  //           a2
  //             .tap({ el: el });
  //           var m = new wd.MultiAction();
  //           m.add(a1, a2);
  //           return driver.performMultiAction(m);
  //         });
  //     })
  //     .then(function () {
  //       return driver
  //         .elementById('View')
  //         .then(function (el) {
  //           var a1 = new wd.TouchAction();
  //           a1
  //             .tap({ el: el, x: 100, y: 100 });
  //           var a2 = new wd.TouchAction();
  //           a2
  //             .tap({ el: el });
  //           var m = new wd.MultiAction(driver);
  //           m.add(a1, a2);
  //           return m.perform();
  //         });
  //     });
  // });

  // test('one', function (t) {
  //   t.equal(1 + 3, 4);
  //   t.end();
  // });
});


