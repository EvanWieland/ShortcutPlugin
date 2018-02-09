# 💭 Cordova Shorty Plugin
Cordova plugin for adding and deleting app shortcuts in Android.

## Purpose

Shorty allows the creation and deletion of app shortcuts in Android.

## Installation

    cordova plugin add cordova-shorty-plugin

## Supported Platforms

- Android
    
## Properties

- Shorty.create
- Shorty.delete

### Example

```js
Shorty.add(
    'My App',
    function(){
    	// Do something...
    },
    function(error){
        console.error(error); // Returns error
    }
);

Shorty.remove(
    'My App',
    function(){
    	// Do something...
    },
    function(error){
        console.error(error); // Returns error
    }
);
```
