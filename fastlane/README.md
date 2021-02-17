fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## iOS
### ios beta_build
```
fastlane ios beta_build
```
Build an .ipa for beta distribution
### ios beta_push
```
fastlane ios beta_push
```
Push a new beta build to TestFlight

----

## Android
### android beta_build
```
fastlane android beta_build
```
Build android for beta
### android beta_push
```
fastlane android beta_push
```
Submit a new Beta Build to App Center

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
