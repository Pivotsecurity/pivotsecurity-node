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

## Install Package

```bash
nom install pivotsecurity-node
```

## Setup Environment Variables

### Initial Setup

```bash
cp .env_sample .env
```

### Environment Variable

Update the development environment with your keys(https://api.pivotsecurity.com/settings/), for example:

```bash
echo "export PUBLIC_API_KEY='YOUR_PUBLIC_API_KEY'" > pivotsecurity.env
echo "export PRIVATE_API_KEY='YOUR_PRIVATE_API_KEY'" > pivotsecurity.env
echo "pivotsecurity.env" >> .gitignore
source ./pivotsecurity.env
```

<a name="quick-start"></a>
# Quick Start

`Info call` with user id (or email).

```node.js

var account = require('account');
account.env('<private_key>','<public_key>');

account.info( {
  data: { uid: '21123', 'email' : '' },
}).on('complete', function(data, response) {
	if (data){
	// use data..
	}
  }
});
```

<a name="license"></a>
# License
[The MIT License (MIT)](LICENSE)


