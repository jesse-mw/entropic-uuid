<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />
<div align="center">
  <a href="https://github.com/jessewarren-aa/entropic-uuid">
    <img src="entropic-uuid-logo.PNG" alt="Logo" height="120">
  </a>

<h3 align="center">Entropic UUID</h3>

  <p align="center">
    Generate word-based UUIDs<br />
    Currently uses the 2,700 most common English words, so... no promises for the content
    <br />
    <a href="https://github.com/jessewarren-aa/entropic-uuid/issues">Report Bug</a>
  </p>
</div>

### Prerequisites

```sh
npm install npm@latest -g
```

### Installation

```sh
npm install entropic-uuid
```

```js
import generateUUID from "entropic-uuid";
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

- Generate Entropic Phrase

```js
import generateEntropicPhrase from "entropic-uuid";

// default phrase length is 4
const defaultPhrase = generateEntropicPhrase();
// 'etc-ignore-field-invite'

const customLengthPhrase = generateEntropicPhrase(7);
// 'criticism-mental-practical-thing-member-architect-promote'
```

- Generate UUID4 & Entropic Phrase

```js
import { generateUUIDPhrase } from "entropic-uuid";

// default phrase length for UUID phrases is 3
const defaultUUIDPhrase = generateUUIDPhrase();
// '42b3b726-3a70-4493-92d7-d670d89a5538-absolutely-silver-last'

const customLengthUUIDPhrase = generateUUIDPhrase(5);
// '5db647a2-d8f5-43fb-a3a4-709969e49c35-campaign-terms-yet-model-championship'
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/jessewarren-aa/entropic-uuid.svg?style=for-the-badge
[stars-url]: https://github.com/jessewarren-aa/entropic-uuid/stargazers
[issues-shield]: https://img.shields.io/github/issues/jessewarren-aa/entropic-uuid.svg?style=for-the-badge
[issues-url]: https://github.com/jessewarren-aa/entropic-uuid/issues
