
# A high level explaination of how pnpm work:

```

 1-npm-before-v3/
 ├── node_modules/
 │   └── a/
 │       ├── node_modules/
 │       │   └── b/
 │       │       ├── node_modules/
 │       │       │   └── c/
 │       │       │       ├── node_modules/
 │       │       │       └── package.json
 │       │       └── package.json
 │       └── package.json
 │
 └── package.json



 2-npm-after-v3/
 ├── node_modules/
 │   ├── a/
 │   │   ├── node_modules/
 │   │   └── package.json
 │   ├── c/
 │   │   ├── node_modules/
 │   │   └── package.json
 │   └── b/
 │       ├── node_modules/
 │       └── package.json
 │
 └── package.json



 3-pnpm/
 ├── pnpm-store/
 │   ├── a/
 │   │   ├── node_modules/
 │   │   │   └── b-(hardlink-to-pnpm-store)/
 │   │   │       └── package.json
 │   │   └── package.json
 │   ├── b/
 │   │   ├── node_modules/
 │   │   │   └── c-(hardlink-to-pnpm-store)/
 │   │   │       └── package.json
 │   │   └── package.json
 │   └── c/
 │       ├── node_modules/
 │       └── package.json
 │
 ├── node_modules/
 │   └── a-(hardlink-to-pnpm-store)/
 │       └── package.json
 │
 └── package.json


```