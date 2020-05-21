### Default button

```js
<Button>Click</Button>
```

### Disabled

```js
<Button disabled>Disabled</Button>
```

### Extended

```js
<Button extend="shadow-lg">With shadow</Button>
```

### Customizing base styles

```js
<Button text="red-100" bg="red-600" hover="bg-red-700">
  Delete
</Button>
```

### Block

```js
<Button extend="w-full">Delete</Button>
```

### Reset

This clears all default styles so you have to provide your own.

```js
<Button
  reset
  extend="border-2 border-blue-600 text-blue-600 rounded-full h-8 px-4 font-bold text-sm"
>
  Read more
</Button>
```

### Link (a)

```js
<Button tag="a" href="#">
  I'm a link
</Button>
```
