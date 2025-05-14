# Havok-N NPM Package

## What is Havok-N?

A modified version of Fletcher & Adler checksums plus an optional iterative hash function, by Lucy Havok.

Fletcher's Checksum algorithm is way overengineered. Adler had the right idea 
with many of the tweaks he made to simplify and solidify the algorithm. 
However, I liked the idea of having a user-defined arbitrary checksum bitdepth, 
but also make sure that the modulo is always prime so as to reduce checksum 
collision.

### Table comparison

<table>
  <tr>
    <th></th>
    <th>Fletcher</th>
    <th>Adler</th>
    <th>Havok</th>
  </tr>
  <tr>
    <th align=right>Word Size</th>
    <td align=center>8b | 16b | 32b</td>
    <td align=center>8b</td>
    <td align=center>8b</td>
  </tr>
  <tr>
    <th align=right>Bits</th>
    <td align=center>16 | 32 | 64</td>
    <td align=center>32</td>
    <td align=center>arbitrary</td>
  </tr>
  <tr>
    <th align=right>Modulo</th>
    <td align=center>2<sup>8</sup> | 2<sup>16</sup> | 2<sup>32</sup></td>
    <td align=center>65,521</td>
    <td align=center>nearest prime under 2<sup>Bits</sup></td>
  </tr>
  <tr>
    <th align=right>Shift</th>
    <td align=center>8 | 16 | 32</td>
    <td align=center>16</td>
    <td align=center>Bits/2</td>
  </tr>
  <tr>
    <th align=right>Iterative Hash</th>
    <td align=center>no</td>
    <td align=center>no</td>
    <td align=center>optional, arbitrary</td>
  </tr>
</table>

## Usage

```sh
npm install havok-n
```

```js
const HavokN = require('havok-n');

var data       = "Toast"; // This is the data you want a sum of. Can be of any type.
var bitdepth   = 16;      // This is sort of like the length of the checksum, but it's not directly proportionate. If you wanted to pretend this is Adler-32, you would put 32 here. Should be an integer.
var iterations = 0;       // Optional. This is the number of iterations over the iterative hash function (defaults to 0).
HavokN(data, bitdepth, iterations);
```

## Upstream

Havok-N is part of the [EmojiHash](https://fossil.peepee.party/emojihash/) 
project at [Peepee Party](https://peepee.party/), of which I am the creator, 
maintainer, and current sole contributor. The upstream version of havokn.js can 
be seen at https://fossil.peepee.party/emojihash/file?name=js/havokn.js.

## License
Havok-N is licensed under The 3-Clause BSD License with the explicit military 
disclaimer (SPDX: BSD-3-Clause-No-Military-License). See [LICENSE](LICENSE) for 
the full text.
