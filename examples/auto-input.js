var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get('file:///E:/github/input.js/examples/inputTest.html');
driver.actions()
.mouseMove(driver.findElement(By.id('inputs')), {x: 100, y: 100})
.mouseDown()
.perform();

driver.sleep(1000);

driver.actions()
.mouseUp()
.perform();

driver.sleep(1000);

driver.actions()
.keyDown('\uE008')
.perform();

driver.sleep(500);
driver.actions()
.keyUp('\uE008')
.perform();

// driver.sleep(500);
// driver.actions()
// .keyUp(Keys.SHIFT)
// .perform();
