# Reproduction Repo for `prettier-eslint`

Just run below command:

```sh
pnpm start
```

or start **VSCode debugger**.

You can also check it via `prettier-eslint-cli` by running:

```sh
pnpm lint
```


## Expected Behavior

`text.js` should be fixed like following:

```js

const a = "Hello, world!";
const b = 42;
```

If you want, change `eslintConfig.reportUnusedDisableDirectives` to `error` and check again.
There will be no error but the fix would be incomplete.
