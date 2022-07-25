# T4 R N: Turborepo, Typescript, Three.js, Tailwind CSS, React Three Fiber, Next.js

## **💡 Quick Tips**

|Usage   | Bash Script |
|:------|:------------|
|__Notation__|`<dep name>` denote `string` value<br/>`[<dep name>]` denote `list of string` value __separated by space__|
|__Install__ dependencies|`pnpm install`|
|__Install__ dependencies for app/package|`pnpm --filter <package/app name> add <de name>`<br/>or<br/>`pnpm --filter <package/app name> add -D <de name>`<br/>or<br/>`pnpm --filter <package/app name> add -D [<de name>]`|
|__Update__ dependencies|`pnpm --filter <package name> up <dep name>` <br/> `pnpm --filter <package name> up <dep name>@latest`|
|__Update__ dependencies for __all__ app/packages|`pnpm up -r <dep name>` <br/> `pnpm up -r <dep name>@latest`|
|__Build all__ apps and packages|`pnpm build`|
|Run __dev__ server for __all__ apps|`pnpm dev`|
|__Filter__ app/package|`pnpm --filter <app name> build`<br/>or `pnpm --filter <first app name> --filter <second app name> dev` <br/> i.e. run `pnpm --filter tour build` to build _`tour`_ app <br/> for more info, visit [pnpm](https://pnpm.io/filtering) or [turbo](https://turborepo.org/docs/core-concepts/filtering)|
| __Remove__ node_modules and built cache| `rm -rf ./**/**/{node_modules,dist,.next,.turbo} ./node_modules`|
|__Change/Switch__ branch| `git switch <branch name>`|
|__Checkout__ branch or commit| `git checkout <branch-name or commit-hash>`|
|__Delete__ local branch| `git branch -d <branch name>`|
|__Delete__ remote branch| `git push --delete <remote branch name>` <br/>i.e. `git push origin dev --delete origin feature1`|
## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
