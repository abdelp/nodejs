# Easy profiling for Node.js Applications

**What does the built-in profiler?**

It records the results of stack samples, along with important optimization events such as jit compiles, as a series of ticks:

### Apache Benchmark

```
NODE_ENV=production node --prof app.js
```

```
ab -k -c 20 -n 250 "http://localhost:8080/auth?username=matt&password=password"
```

In order to make sense of this file, we need to use the tick processor bundled with the Node.js binary.

```
node --prof-process > process.txt
```