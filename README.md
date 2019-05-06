# Pivot Security - Node

Node.js API interface for Pivot Security API.

All updates to this library is documented in our [CHANGELOG](https://github.com/pivotsecurity/pivotsecurity-node/blob/master/CHANGELOG.md).

# Table of Contents
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [License](#license)

<a name="installation"></a>
# Installation

## Prerequisites

- Node.js version 1.x. 2.x

Read full docs: https://github.com/Pivotsecurity/pivotsecurity-node/tree/master/doc 

## Install Package

```bash
nom install pivotsecurity-node
```

<a name="quick-start"></a>
# Quick Start

`Info call` with user id (or email).

```node.js

var account = require('pivotsecurity-node');

// Ontain from www.pivotsecurity.com
account.env('Public_Key','Private_Key');

account.Info('AWQ13', '').on('complete',  function(data, response) {
	if (response.statusCode == 200){
	 console.log(data[0]);
	 }else{
	 	// error
	 }
});


account.Verify('AWQ13', '', '123456').on('complete',  function(data, response) {
	if (response.statusCode == 200){
	 console.log(data[0]);
	 }else{
	 	// error
	 }
});

account.Verify('', 'someon@somewhere.com', '123456').on('complete',  function(data, response) {
	if (response.statusCode == 200){
	 console.log(data[0]);
	 }else{
	 	// error
	 }
});
```

<a name="license"></a>
# License
[The MIT License (MIT)](LICENSE)


