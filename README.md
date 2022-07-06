# next-image-no-width-and-height

[![NPM](https://badgen.net/npm/v/next-image-no-width-and-height)](https://www.npmjs.com/package/next-image-no-width-and-height)

The next image component, but you don't need to specify a width or height

## Install

```
npm i next-image-no-width-and-height
```

## Simple Usage

Import the component and pass the mandatory src prop.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nextjs-yqcfaz?file=pages/index.js)

**Example.js**

```javascript
import Image from 'next-image-no-width-and-height'

export default function ExampleComponent() {
  return (
    <Image
      src="https://images.dog.ceo/breeds/newfoundland/n02111277_13670.jpg"
      alt="Newfoundland dog"
    />
  );
}
```
