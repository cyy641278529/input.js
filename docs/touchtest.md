# Appium sample

Simulate touch input by appium

## Install

Install appium and carthage

```bash
npm install -g appium
brew install carthage
```

## Download appium-xcuitest-driver

https://github.com/facebook/WebDriverAgent

## Configure WDA

```bash
  cd /Users/yourname/WebDriverAgent
  mkdir -p Resources/WebDriverAgent.bundle
  sh ./Scripts/bootstrap.sh
```

then open  `WebDriverAgent.xcodeproj`

     WebDriverAgentLib->Build Setting->Runpath Search Paths->Add variable：

     `$(SRCROOT)/../Carthage/Build/iOS`
     `$(PROJECT)/Carthage/Build/iOS`

WebDriverAgentLib->Build Setting->Build Active Architecture Only->No build and test

Product -> Destination -> iphone6（choice simulator）

Scheme  -> WebDriverAgentRunner:  Product -> Scheme ->WebDriverAgentRunner

Product -> Test

## Run sample

```bash
npm server
npm touch-test
```