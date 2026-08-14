# @paprika/tokens

## 3.2.0

### Minor Changes

- 9705d99: Packages are now compiled with swc instead of babel. The published output targets ES2022 rather than ES5, so it keeps `const`, arrow functions, class fields and optional chaining, and no longer pulls in `@babel/runtime` helpers. Consumers need an environment that understands ES2022 (Chrome 94+, Safari 15.4+, Firefox 93+, Edge 94+, Node 16.11+) or a build step that transpiles `node_modules`.

  `@paprika/mock-endpoints`, `@paprika/dynamic-hyperlink-transformer` and `@paprika/inline-editors` now ship the `lib/index.d.ts` their `types` field has always pointed at.

## 3.1.1

### Patch Changes

- 7a1f8db7b: Updated dependencies
- 659839d35: Test new publish
- 1cfbed3c3: Update dependencies from dependabot and test new publish hooks

## 3.1.1-next.1

### Patch Changes

- 7a1f8db7b: Updated dependencies
- 659839d35: Test new publish

## 3.1.1-next.0

### Patch Changes

- 1cfbed3: Update dependencies from dependabot and test new publish hooks

## 3.1.0

### Minor Changes

- 80fb5c0: migrate to sass and remove deprecated node-sass

## 3.1.0-next.0

### Minor Changes

- 80fb5c0: migrate to sass and remove deprecated node-sass

## 3.0.0

### Major Changes

- 5b6eb9d: Fix CVE vulnerabilities. Upgrade to Node 16.

## 3.0.0-next.0

### Major Changes

- 5b6eb9d: Fix CVE vulnerabilities. Upgrade to Node 16.

## 2.0.1

### Patch Changes

- d60fb99: peerDependencies now include react@17 and react@18

## 2.0.1-next.0

### Patch Changes

- d60fb99: peerDependencies now include react@17 and react@18

## 2.0.0

### Major Changes

- 9ac6aca: Removed `Pill` related tokens

  #### why the change was made:

  Removing the tokens related to `Pill` as the component was deprecated.

  #### 👷 Moving from 1.x.x to 2.x.x:

  `$pill--small-radius` and `$pill--medium-radius` are removed.

### Patch Changes

- 0bf34d9: panel and modal footer background color changes to #f0f0f0

## 2.0.0-next.1

### Major Changes

- 9ac6aca: Removed `Pill` related tokens

  #### why the change was made:

  Removing the tokens related to `Pill` as the component was deprecated.

  #### 👷 Moving from 1.x.x to 2.x.x:

  `$pill--small-radius` and `$pill--medium-radius` are removed.

## 1.1.5-next.0

### Patch Changes

- 0bf34d9: panel and modal footer background color changes to #f0f0f0

## 1.1.4

### Patch Changes

- 15b2a9a: replace / with div()

## 1.1.4-next.0

### Patch Changes

- 15b2a9a: replace / with div()

## 1.1.3

### Patch Changes

- 036fe83: change checkbox size/colour & label font size

## 1.1.3-next.0

### Patch Changes

- 036fe83: change checkbox size/colour & label font size

## 1.1.2

### Patch Changes

- fd24fbe: Fix declaration files.
- ab8d494: update panel header colour to diligent brand colour

## 1.1.2-next.1

### Patch Changes

- fd24fbe: Fix declaration files.

## 1.1.2-next.0

### Patch Changes

- ab8d494: update panel header colour to diligent brand colour

## 1.1.1

### Patch Changes

- 27e1439: updated icon template for icon size change

## 1.1.1-next.0

### Patch Changes

- 27e1439: updated icon template for icon size change

## 1.1.0

### Minor Changes

- 3385c1f: Add diligent brand colors hex code to tokens

### Patch Changes

- fd94ddb: Fixed typo for \$diligent--background-base

## 1.1.0-next.1

### Patch Changes

- fd94ddb: Fixed typo for \$diligent--background-base

## 1.1.0-next.0

### Minor Changes

- 3385c1f: Add diligent brand colors hex code to tokens
