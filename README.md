# README #

cordova-phaser is a cordova-cli template aimed to help create [Phaser.io](http://www.phaser.io/) games.


 This README assumes that you are already familiar with [cordova-cli](https://cordova.apache.org/docs/en/latest/guide/cli/) and [Phaser.io](http://www.phaser.io/)


## STEPS ##
```
cordova create hello com.example.hello HelloWorld --template cordova-phaser-babel

cd hello

npm install

cordova run

```

A cordova hook 'before_prepare' is used to run webpack build on 'cordova run'.

# NOTES #

This template is based on the *Responsive* template of Phaser project, and I recommend to use crosswalk webview plugin.
Includes a .gitignore file.

This template works with iOS, if the requirements for cordova-cli are previously fulfilled, and iOS platform is added. Optionally you could remove android platform and crosswalk plugin.

 *Seems to be a bug with the ios simulator, check this [Stackflow question](https://stackoverflow.com/questions/42350505/error-cannot-read-property-replace-of-undefined-when-building-ios-cordova).*
