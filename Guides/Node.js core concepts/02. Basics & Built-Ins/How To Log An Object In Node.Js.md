# How To Log An Object In Node.Js

***JSON.stringify***

```js
console.log(JSON.stringify(obj, null, 2));
```

***console.dir***

```js
console.dir(obj, {
  depth: null
});
```

***%o format specification***
```js
console.log('%o', obj);
```
