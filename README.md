# build-template

### OS notes

If using Windows, need to ensure Visual C++ runtime libraries are installed for Browser-sync to work.  See docs [here](https://www.browsersync.io/docs#installation).  Scripts should still work with Git Bash, though I have not tested that environement.


### React Support

If using React, need to `npm i -D babel-preset-react` and modify `.babelrc` file per [this instruction](https://babeljs.io/blog/2015/10/31/setting-up-babel-6): 

```
{
  "presets": ["react"]
}
```

