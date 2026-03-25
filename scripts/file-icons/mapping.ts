export interface FileIconEntry {
  iconRef: string;
  fileExtensions?: string[];
  fileNames?: string[];
  languageIds?: string[];
}

export interface FolderIconEntry {
  iconRef: string;
  iconRefOpen: string;
  folderNames: string[];
}

export const fileIconMapping: Record<string, FileIconEntry> = {
  '3d': {
    iconRef: 'catppuccin:3d',
    fileExtensions: ['fbx', 'glb', 'gltf', 'ma', 'mb', 'obj', 'prc', 'stl', 'u3d', 'usd'],
  },
  'adobe-ae': {
    iconRef: 'catppuccin:adobe-ae',
    fileExtensions: ['aep'],
  },
  'adobe-ai': {
    iconRef: 'catppuccin:adobe-ai',
    fileExtensions: ['ai'],
  },
  'adobe-id': {
    iconRef: 'catppuccin:adobe-id',
    fileExtensions: ['indd', 'indl', 'indb'],
  },
  'adobe-ps': {
    iconRef: 'catppuccin:adobe-ps',
    fileExtensions: ['psd', 'psb'],
  },
  'adobe-xd': {
    iconRef: 'catppuccin:adobe-xd',
    fileExtensions: ['xd'],
  },
  'adonis': {
    iconRef: 'catppuccin:adonis',
    fileNames: ['.adonisrc.json', 'ace'],
  },
  'alex': {
    iconRef: 'catppuccin:alex',
    fileNames: ['.alexrc', '.alexrc.yaml', '.alexrc.yml', '.alexrc.js'],
  },
  'amber': {
    iconRef: 'catppuccin:amber',
    fileExtensions: ['ab', 'amber'],
    languageIds: ['amber'],
  },
  'android': {
    iconRef: 'catppuccin:android',
    fileExtensions: ['apk', 'smali', 'dex'],
    fileNames: ['androidmanifest.xml'],
  },
  'angular': {
    iconRef: 'catppuccin:angular',
    fileExtensions: ['ng-template'],
    fileNames: ['angular-cli.json', '.angular-cli.json', 'angular.json', 'ng-package.json'],
  },
  'ansible-lint': {
    iconRef: 'catppuccin:ansible-lint',
    fileNames: ['.ansible-lint', 'ansible-lint.yml', 'ansible-lint.yaml'],
  },
  'antlr': {
    iconRef: 'catppuccin:antlr',
    fileExtensions: ['g4'],
  },
  'apache': {
    iconRef: 'catppuccin:apache',
    fileExtensions: ['thrift'],
    fileNames: ['maven.config', 'jvm.config', 'pom.xml'],
  },
  'api-blueprint': {
    iconRef: 'catppuccin:api-blueprint',
    fileExtensions: ['apib', 'apiblueprint'],
  },
  'apollo': {
    iconRef: 'catppuccin:apollo',
    fileNames: ['apollo.config.js', 'apollo.config.ts'],
  },
  'apple': {
    iconRef: 'catppuccin:apple',
    fileNames: ['apple-app-site-association', 'apple-developer-merchantid-domain-association'],
  },
  'arduino': {
    iconRef: 'catppuccin:arduino',
    fileExtensions: ['ino'],
    languageIds: ['arduino'],
  },
  'asciidoc': {
    iconRef: 'catppuccin:asciidoc',
    fileExtensions: ['adoc', 'asciidoc', 'asc'],
  },
  'assembly': {
    iconRef: 'catppuccin:assembly',
    fileExtensions: ['asm', 'a51', 'inc', 'nasm', 's', 'ms', 'agc', 'ags', 'aea', 'argus', 'mitigus', 'binsource'],
  },
  'astro-config': {
    iconRef: 'catppuccin:astro-config',
    fileNames: ['astro.config.js', 'astro.config.mjs', 'astro.config.cjs', 'astro.config.ts', 'astro.config.cts', 'astro.config.mts'],
  },
  'astro': {
    iconRef: 'catppuccin:astro',
    fileExtensions: ['astro'],
    languageIds: ['astro'],
  },
  'audio': {
    iconRef: 'catppuccin:audio',
    fileExtensions: ['aac', 'aiff', 'alac', 'flac', 'm4a', 'm4p', 'mogg', 'mp3', 'oga', 'opus', 'wav', 'wma', 'wv'],
  },
  'autohotkey': {
    iconRef: 'catppuccin:autohotkey',
    fileExtensions: ['ahk'],
    languageIds: ['ahk'],
  },
  'azure-pipelines': {
    iconRef: 'catppuccin:azure-pipelines',
    fileExtensions: ['azure-pipelines.yml', 'azure-pipelines.yaml', 'azure-pipelines-main.yml', 'azure-pipelines-main.yaml'],
    fileNames: ['azure-pipelines.yml', 'azure-pipelines.yaml', 'azure-pipelines-main.yml', 'azure-pipelines-main.yaml'],
  },
  'babel': {
    iconRef: 'catppuccin:babel',
    fileNames: ['.babelrc', '.babelrc.cjs', '.babelrc.js', '.babelrc.mjs', '.babelrc.json', 'babel.config.cjs', 'babel.config.js', 'babel.config.mjs', 'babel.config.json', 'babel-transform.js', '.babel-plugin-macrosrc', '.babel-plugin-macrosrc.json', '.babel-plugin-macrosrc.yaml', '.babel-plugin-macrosrc.yml', '.babel-plugin-macrosrc.js', 'babel-plugin-macros.config.js'],
  },
  'bash': {
    iconRef: 'catppuccin:bash',
    fileExtensions: ['sh', 'ksh', 'csh', 'tcsh', 'zsh', 'bash', 'awk', 'fish'],
    fileNames: ['applypatch-msg', 'pre-applypatch', 'post-applypatch', 'pre-commit', 'prepare-commit-message', 'commit-msg', 'post-commit', 'pre-rebase', 'post-checkout', 'post-merge', 'pre-receive', 'update', 'post-receive', 'post-update', 'pre-auto-gc', 'post-rewrite', 'pre-push'],
    languageIds: ['awk', 'shellscript'],
  },
  'batch': {
    iconRef: 'catppuccin:batch',
    fileExtensions: ['bat', 'cmd'],
    languageIds: ['bat'],
  },
  'bazel': {
    iconRef: 'catppuccin:bazel',
    fileExtensions: ['bzl', 'bazel'],
    fileNames: ['.bazelrc'],
  },
  'benchmark': {
    iconRef: 'catppuccin:benchmark',
    fileNames: ['benchmark.md', 'benchmark.rst', 'benchmark.txt', 'benchmarks.md', 'benchmarks.rst', 'benchmarks.txt'],
  },
  'bicep': {
    iconRef: 'catppuccin:bicep',
    fileExtensions: ['bicep', 'bicepparam'],
    fileNames: ['bicepconfig.json'],
    languageIds: ['bicep'],
  },
  'binary': {
    iconRef: 'catppuccin:binary',
    fileExtensions: ['bin'],
    languageIds: ['code-text-binary'],
  },
  'biome': {
    iconRef: 'catppuccin:biome',
    fileNames: ['biome.json', 'biome.jsonc'],
  },
  'bitbucket': {
    iconRef: 'catppuccin:bitbucket',
    fileNames: ['bitbucket-pipelines.yaml', 'bitbucket-pipelines.yml'],
  },
  'blink': {
    iconRef: 'catppuccin:blink',
    fileExtensions: ['blink'],
  },
  'blitz': {
    iconRef: 'catppuccin:blitz',
    fileNames: ['blitz.config.js', 'blitz.config.ts', '.blitz.config.compiled.js'],
  },
  'bower': {
    iconRef: 'catppuccin:bower',
    fileNames: ['.bowerrc', 'bower.json'],
  },
  'browserslist': {
    iconRef: 'catppuccin:browserslist',
    fileNames: ['browserslist', '.browserslistrc'],
  },
  'bun-lock': {
    iconRef: 'catppuccin:bun-lock',
    fileNames: ['bun.lock', 'bun.lockb'],
  },
  'bun': {
    iconRef: 'catppuccin:bun',
    fileNames: ['bunfig.toml'],
  },
  'c-header': {
    iconRef: 'catppuccin:c-header',
    fileExtensions: ['h'],
  },
  'c': {
    iconRef: 'catppuccin:c',
    fileExtensions: ['c', 'i', 'mi'],
    languageIds: ['c'],
  },
  'cabal': {
    iconRef: 'catppuccin:cabal',
    fileExtensions: ['cabal'],
    fileNames: ['cabal.project'],
  },
  'caddy': {
    iconRef: 'catppuccin:caddy',
    fileExtensions: ['caddyfile'],
    fileNames: ['caddyfile'],
  },
  'capacitor': {
    iconRef: 'catppuccin:capacitor',
    fileNames: ['capacitor.config.json', 'capacitor.config.ts'],
  },
  'cargo-lock': {
    iconRef: 'catppuccin:cargo-lock',
    fileNames: ['cargo.lock'],
  },
  'cargo': {
    iconRef: 'catppuccin:cargo',
    fileNames: ['cargo.toml'],
  },
  'certificate': {
    iconRef: 'catppuccin:certificate',
    fileExtensions: ['cer', 'cert', 'crt', 'pfx', 'entitlements'],
  },
  'changelog': {
    iconRef: 'catppuccin:changelog',
    fileNames: ['changelog', 'changelog.md', 'changelog.rst', 'changelog.txt', 'changes', 'changes.md', 'changes.rst', 'changes.txt'],
  },
  'circle-ci': {
    iconRef: 'catppuccin:circle-ci',
    fileNames: ['circle.yml'],
  },
  'clojure': {
    iconRef: 'catppuccin:clojure',
    fileExtensions: ['clj', 'cljs', 'cljc'],
    languageIds: ['clojure'],
  },
  'cmake': {
    iconRef: 'catppuccin:cmake',
    fileExtensions: ['cmake'],
    fileNames: ['cmakelists.txt', 'cmakecache.txt'],
  },
  'cobol': {
    iconRef: 'catppuccin:cobol',
    fileExtensions: ['cob', 'cbl'],
    languageIds: ['cobol'],
  },
  'code-climate': {
    iconRef: 'catppuccin:code-climate',
    fileNames: ['.codeclimate.yml'],
  },
  'code-of-conduct': {
    iconRef: 'catppuccin:code-of-conduct',
    fileNames: ['code_of_conduct.md', 'code_of_conduct.txt', 'code_of_conduct'],
  },
  'codeowners': {
    iconRef: 'catppuccin:codeowners',
    fileNames: ['codeowners', 'owners'],
  },
  'coffeescript': {
    iconRef: 'catppuccin:coffeescript',
    fileExtensions: ['coffee', 'cson', 'iced'],
    languageIds: ['coffeescript'],
  },
  'commitlint': {
    iconRef: 'catppuccin:commitlint',
    fileNames: ['.commitlintrc', '.commitlintrc.js', '.commitlintrc.cjs', '.commitlintrc.ts', '.commitlintrc.cts', '.commitlintrc.json', '.commitlintrc.yaml', '.commitlintrc.yml', '.commitlint.yaml', '.commitlint.yml', 'commitlint.config.js', 'commitlint.config.cjs', 'commitlint.config.ts', 'commitlint.config.cts'],
  },
  'contributing': {
    iconRef: 'catppuccin:contributing',
    fileNames: ['contributing.md', 'contributing.rst', 'contributing.txt', 'contributing'],
  },
  'cpp-header': {
    iconRef: 'catppuccin:cpp-header',
    fileExtensions: ['hh', 'hpp', 'hxx', 'h++', 'hp', 'tcc', 'inl'],
  },
  'cpp': {
    iconRef: 'catppuccin:cpp',
    fileExtensions: ['cc', 'cpp', 'cxx', 'c++', 'cp', 'mii', 'ii'],
    languageIds: ['cpp'],
  },
  'crystal': {
    iconRef: 'catppuccin:crystal',
    fileExtensions: ['cr', 'ecr'],
    languageIds: ['crystal', 'ecr'],
  },
  'csharp': {
    iconRef: 'catppuccin:csharp',
    fileExtensions: ['cs', 'csx', 'csharp'],
    languageIds: ['csharp'],
  },
  'cspell': {
    iconRef: 'catppuccin:cspell',
    fileNames: ['cspell.json', 'cspell.yml', 'cspell.yaml', '.cspell.json', '.cspell.yml', '.cspell.yaml', 'cspell.config.js', 'cspell.config.cjs', 'cspell.config.yml', 'cspell.config.yaml'],
  },
  'css-map': {
    iconRef: 'catppuccin:css-map',
    fileExtensions: ['css.map'],
  },
  'css': {
    iconRef: 'catppuccin:css',
    fileExtensions: ['css'],
    languageIds: ['css'],
  },
  'csv': {
    iconRef: 'catppuccin:csv',
    fileExtensions: ['csv', 'tsv', 'psv'],
    languageIds: ['csv', 'tsv', 'psv'],
  },
  'cucumber': {
    iconRef: 'catppuccin:cucumber',
    fileExtensions: ['feature', 'features'],
    languageIds: ['cucumber'],
  },
  'cuda': {
    iconRef: 'catppuccin:cuda',
    fileExtensions: ['cu', 'cuh'],
    languageIds: ['cuda-cpp'],
  },
  'cue': {
    iconRef: 'catppuccin:cue',
    fileExtensions: ['cue'],
    languageIds: ['cue'],
  },
  'cursor-ignore': {
    iconRef: 'catppuccin:cursor-ignore',
    fileNames: ['.cursorignore', '.cursorindexingignore'],
  },
  'cursor': {
    iconRef: 'catppuccin:cursor',
    fileNames: ['.cursorrules'],
  },
  'cypress': {
    iconRef: 'catppuccin:cypress',
    fileNames: ['cypress.json', 'cypress.env.json', 'cypress.config.ts', 'cypress.config.js', 'cypress.config.cjs', 'cypress.config.mjs'],
  },
  'd': {
    iconRef: 'catppuccin:d',
    fileExtensions: ['d', 'di'],
    languageIds: ['d'],
  },
  'darklua': {
    iconRef: 'catppuccin:darklua',
    fileExtensions: ['darklua.json', 'darklua.json5'],
  },
  'dart-generated': {
    iconRef: 'catppuccin:dart-generated',
    fileExtensions: ['config.dart', 'freezed.dart', 'gr.dart', 'g.dart'],
  },
  'dart': {
    iconRef: 'catppuccin:dart',
    fileExtensions: ['dart'],
    languageIds: ['dart'],
  },
  'database': {
    iconRef: 'catppuccin:database',
    fileExtensions: ['pdb', 'sql', 'pks', 'pkb', 'accdb', 'mdb', 'sqlite', 'sqlite3', 'pgsql', 'postgres', 'plpgsql', 'psql', 'db', 'db3', 'dat'],
    fileNames: ['deno.lock'],
    languageIds: ['sql'],
  },
  'deno': {
    iconRef: 'catppuccin:deno',
    fileNames: ['deno.json', 'deno.jsonc'],
  },
  'dependabot': {
    iconRef: 'catppuccin:dependabot',
    fileNames: ['dependabot.yml', 'dependabot.yaml'],
  },
  'devcontainer': {
    iconRef: 'catppuccin:devcontainer',
    fileNames: ['devcontainer.json', '.devcontainer.json'],
  },
  'dhall': {
    iconRef: 'catppuccin:dhall',
    fileExtensions: ['dhall', 'dhallb'],
    languageIds: ['dhall'],
  },
  'diff': {
    iconRef: 'catppuccin:diff',
    languageIds: ['diff'],
  },
  'django': {
    iconRef: 'catppuccin:django',
    fileExtensions: ['djt'],
    languageIds: ['django-html', 'django-txt'],
  },
  'docker-compose': {
    iconRef: 'catppuccin:docker-compose',
    fileExtensions: ['docker-compose.yml', 'docker-compose.yaml', 'compose.yaml', 'compose.yml'],
    fileNames: ['docker-compose.yml', 'docker-compose.override.yml', 'docker-compose.prod.yml', 'docker-compose.production.yml', 'docker-compose.alpha.yml', 'docker-compose.beta.yml', 'docker-compose.stage.yml', 'docker-compose.staging.yml', 'docker-compose.dev.yml', 'docker-compose.development.yml', 'docker-compose.local.yml', 'docker-compose.test.yml', 'docker-compose.testing.yml', 'docker-compose.ci.yml', 'docker-compose.web.yml', 'docker-compose.worker.yml', 'docker-compose.yaml', 'docker-compose.override.yaml', 'docker-compose.prod.yaml', 'docker-compose.production.yaml', 'docker-compose.alpha.yaml', 'docker-compose.beta.yaml', 'docker-compose.stage.yaml', 'docker-compose.staging.yaml', 'docker-compose.dev.yaml', 'docker-compose.development.yaml', 'docker-compose.local.yaml', 'docker-compose.test.yaml', 'docker-compose.testing.yaml', 'docker-compose.ci.yaml', 'docker-compose.web.yaml', 'docker-compose.worker.yaml', 'compose.yaml', 'compose.override.yaml', 'compose.prod.yaml', 'compose.production.yaml', 'compose.alpha.yaml', 'compose.beta.yaml', 'compose.stage.yaml', 'compose.staging.yaml', 'compose.dev.yaml', 'compose.development.yaml', 'compose.local.yaml', 'compose.test.yaml', 'compose.testing.yaml', 'compose.ci.yaml', 'compose.web.yaml', 'compose.worker.yaml', 'compose.yml', 'compose.override.yml', 'compose.prod.yml', 'compose.production.yml', 'compose.alpha.yml', 'compose.beta.yml', 'compose.stage.yml', 'compose.staging.yml', 'compose.dev.yml', 'compose.development.yml', 'compose.local.yml', 'compose.test.yml', 'compose.testing.yml', 'compose.ci.yml', 'compose.web.yml', 'compose.worker.yml'],
  },
  'docker-ignore': {
    iconRef: 'catppuccin:docker-ignore',
    fileExtensions: ['dockerignore', 'containerignore'],
  },
  'docker': {
    iconRef: 'catppuccin:docker',
    fileExtensions: ['dockerfile', 'containerfile'],
    fileNames: ['dockerfile', 'dockerfile.prod', 'dockerfile.production', 'dockerfile.alpha', 'dockerfile.beta', 'dockerfile.stage', 'dockerfile.staging', 'dockerfile.dev', 'dockerfile.development', 'dockerfile.local', 'dockerfile.test', 'dockerfile.testing', 'dockerfile.ci', 'dockerfile.web', 'dockerfile.worker', 'containerfile', 'containerfile.prod', 'containerfile.production', 'containerfile.alpha', 'containerfile.beta', 'containerfile.stage', 'containerfile.staging', 'containerfile.dev', 'containerfile.development', 'containerfile.local', 'containerfile.test', 'containerfile.testing', 'containerfile.ci', 'containerfile.web', 'containerfile.worker'],
  },
  'docusaurus': {
    iconRef: 'catppuccin:docusaurus',
    fileNames: ['docusaurus.config.js', 'docusaurus.config.mjs', 'docusaurus.config.cjs', 'docusaurus.config.ts'],
  },
  'drawio': {
    iconRef: 'catppuccin:drawio',
    fileExtensions: ['drawio', 'dio'],
  },
  'drizzle-orm': {
    iconRef: 'catppuccin:drizzle-orm',
    fileNames: ['drizzle.config.ts', 'drizzle.config.js'],
  },
  'dub-selections': {
    iconRef: 'catppuccin:dub-selections',
    fileNames: ['dub.selections.json'],
  },
  'dub': {
    iconRef: 'catppuccin:dub',
    fileNames: ['dub.json', 'dub.sdl'],
  },
  'editorconfig': {
    iconRef: 'catppuccin:editorconfig',
    fileNames: ['.editorconfig'],
    languageIds: ['editorconfig'],
  },
  'ejs': {
    iconRef: 'catppuccin:ejs',
    fileExtensions: ['ejs'],
  },
  'eleventy': {
    iconRef: 'catppuccin:eleventy',
    fileNames: ['.eleventy.js', 'eleventy.config.js', 'eleventy.config.mjs', 'eleventy.config.cjs', '.eleventyignore'],
  },
  'elixir': {
    iconRef: 'catppuccin:elixir',
    fileExtensions: ['ex', 'exs', 'eex', 'leex', 'heex'],
    languageIds: ['elixir'],
  },
  'elm': {
    iconRef: 'catppuccin:elm',
    fileExtensions: ['elm'],
    languageIds: ['elm'],
  },
  'ember': {
    iconRef: 'catppuccin:ember',
    fileNames: ['.ember-cli', '.ember-cli.js', 'ember-cli-builds.js'],
  },
  'env': {
    iconRef: 'catppuccin:env',
    fileExtensions: ['env'],
    fileNames: ['.env.defaults', '.env.example', '.env.sample', '.env.template', '.env.schema', '.env.local', '.env.dev', '.env.development', '.env.alpha', '.env.e2e', '.env.qa', '.env.dist', '.env.prod', '.env.production', '.env.stage', '.env.staging', '.env.preview', '.env.test', '.env.testing', '.env.dev.local', '.env.development.local', '.env.qa.local', '.env.prod.local', '.env.production.local', '.env.staging.local', '.env.test.local', '.env.uat', '.env.cat'],
  },
  'envrc': {
    iconRef: 'catppuccin:envrc',
    fileNames: ['.envrc'],
  },
  'erlang': {
    iconRef: 'catppuccin:erlang',
    fileExtensions: ['erl'],
    languageIds: ['erlang'],
  },
  'esbuild': {
    iconRef: 'catppuccin:esbuild',
    fileNames: ['esbuild.js', 'esbuild.ts', 'esbuild.cjs', 'esbuild.mjs', 'esbuild.config.js', 'esbuild.config.ts', 'esbuild.config.cjs', 'esbuild.config.mjs'],
  },
  'eslint-ignore': {
    iconRef: 'catppuccin:eslint-ignore',
    fileNames: ['.eslintignore', '.eslintcache,'],
  },
  'eslint': {
    iconRef: 'catppuccin:eslint',
    fileNames: ['.eslintrc.js', '.eslintrc.cjs', '.eslintrc.yaml', '.eslintrc.yml', '.eslintrc.json', '.eslintrc-md.js', '.eslintrc-jsdoc.js', '.eslintrc', 'eslint.config.js', 'eslint.config.cjs', 'eslint.config.mjs', 'eslint.config.ts', 'eslint.config.cts', 'eslint.config.mts'],
  },
  'exe': {
    iconRef: 'catppuccin:exe',
    fileExtensions: ['exe', 'msi'],
  },
  'fastlane': {
    iconRef: 'catppuccin:fastlane',
    fileNames: ['fastfile', 'appfile', 'snapfile', 'matchfile', 'deliverfile', 'scanfile', 'gymfile'],
  },
  'favicon': {
    iconRef: 'catppuccin:favicon',
    fileNames: ['favicon.ico'],
  },
  'figma': {
    iconRef: 'catppuccin:figma',
    fileExtensions: ['fig'],
  },
  'firebase': {
    iconRef: 'catppuccin:firebase',
    fileNames: ['firebase.json', '.firebaserc', 'firestore.rules', 'storage.rules', 'firestore.indexes.json'],
  },
  'flutter': {
    iconRef: 'catppuccin:flutter',
    fileNames: ['.flutter-plugins', '.flutter-plugins-dependencies', '.metadata'],
  },
  'font': {
    iconRef: 'catppuccin:font',
    fileExtensions: ['woff', 'woff2', 'ttf', 'eot', 'suit', 'otf', 'bmap', 'fnt', 'odttf', 'ttc', 'font', 'fonts', 'sui', 'ntf', 'mrf'],
  },
  'foreman': {
    iconRef: 'catppuccin:foreman',
    fileNames: ['foreman.toml', 'aftman.toml'],
  },
  'fortran': {
    iconRef: 'catppuccin:fortran',
    fileExtensions: ['f', 'f77', 'f90', 'f95', 'f03', 'f08', 'for'],
  },
  'fsharp': {
    iconRef: 'catppuccin:fsharp',
    fileExtensions: ['fs', 'fsx', 'fsi'],
    languageIds: ['fsharp'],
  },
  'fvm': {
    iconRef: 'catppuccin:fvm',
    fileNames: ['.fvmrc', 'fvm_config.json'],
  },
  'gatsby': {
    iconRef: 'catppuccin:gatsby',
    fileNames: ['gatsby-config.js', 'gatsby-config.mjs', 'gatsby-config.ts', 'gatsby-node.js', 'gatsby-node.mjs', 'gatsby-node.ts', 'gatsby-browser.js', 'gatsby-browser.tsx', 'gatsby-ssr.js', 'gatsby-ssr.tsx'],
  },
  'gcp': {
    iconRef: 'catppuccin:gcp',
    fileNames: ['release-please-config.json', '.release-please-manifest.json'],
  },
  'git-cliff': {
    iconRef: 'catppuccin:git-cliff',
    fileNames: ['cliff.toml'],
  },
  'git': {
    iconRef: 'catppuccin:git',
    fileExtensions: ['patch'],
    fileNames: ['.git', '.gitignore', '.gitmessage', '.gitignore-global', '.gitignore_global', '.gitattributes', '.gitattributes-global', '.gitattributes_global', '.gitconfig', '.gitmodules', '.gitkeep', '.keep', '.gitpreserve', '.gitinclude', '.git-blame-ignore', '.git-blame-ignore-revs', '.git-for-windows-updater', 'git-history'],
    languageIds: ['git', 'git-commit', 'git-rebase', 'ignore'],
  },
  'gitlab': {
    iconRef: 'catppuccin:gitlab',
    fileExtensions: ['gitlab-ci.yml', 'gitlab-ci.yaml'],
  },
  'gitpod': {
    iconRef: 'catppuccin:gitpod',
    fileNames: ['.gitpod.yml'],
  },
  'gleam-config': {
    iconRef: 'catppuccin:gleam-config',
    fileNames: ['gleam.toml'],
  },
  'gleam': {
    iconRef: 'catppuccin:gleam',
    fileExtensions: ['gleam'],
    languageIds: ['gleam'],
  },
  'go-mod': {
    iconRef: 'catppuccin:go-mod',
    fileNames: ['go.mod', 'go.sum', 'go.work', 'go.work.sum'],
  },
  'go-template': {
    iconRef: 'catppuccin:go-template',
    fileExtensions: ['tmpl', 'templ', 'gotmpl', 'gohtml', 'go.tmp', 'go.html'],
  },
  'go': {
    iconRef: 'catppuccin:go',
    fileExtensions: ['go'],
    languageIds: ['go'],
  },
  'godot-assets': {
    iconRef: 'catppuccin:godot-assets',
    fileExtensions: ['godot', 'tres', 'tscn', 'gdns', 'gdnlib', 'gdshader', 'gdshaderinc', 'gdextension', 'gd.uid'],
    fileNames: ['.gdignore', '._sc_', '_sc_'],
  },
  'godot': {
    iconRef: 'catppuccin:godot',
    fileExtensions: ['gd'],
    languageIds: ['gdscript'],
  },
  'gradle': {
    iconRef: 'catppuccin:gradle',
    fileExtensions: ['gradle'],
    fileNames: ['gradle.properties', 'gradlew', 'gradle-wrapper.properties'],
  },
  'graphql': {
    iconRef: 'catppuccin:graphql',
    fileExtensions: ['graphql', 'gql'],
    fileNames: ['.graphqlconfig', '.graphqlrc', '.graphqlrc.json', '.graphqlrc.js', '.graphqlrc.cjs', '.graphqlrc.ts', '.graphqlrc.toml', '.graphqlrc.yaml', '.graphqlrc.yml', 'graphql.config.json', 'graphql.config.js', 'graphql.config.cjs', 'graphql.config.ts', 'graphql.config.toml', 'graphql.config.yaml', 'graphql.config.yml'],
    languageIds: ['graphql'],
  },
  'groovy': {
    iconRef: 'catppuccin:groovy',
    fileExtensions: ['groovy'],
    languageIds: ['groovy'],
  },
  'gulp': {
    iconRef: 'catppuccin:gulp',
    fileNames: ['gulpfile.js', 'gulpfile.mjs', 'gulpfile.ts', 'gulpfile.cts', 'gulpfile.mts', 'gulpfile.babel.js'],
  },
  'hacking': {
    iconRef: 'catppuccin:hacking',
    fileNames: ['hacking.md', 'hacking.txt', 'hacking'],
  },
  'haml': {
    iconRef: 'catppuccin:haml',
    fileExtensions: ['haml'],
    languageIds: ['haml'],
  },
  'handlebars': {
    iconRef: 'catppuccin:handlebars',
    fileExtensions: ['hbs', 'mustache'],
    languageIds: ['handlebars'],
  },
  'hardhat': {
    iconRef: 'catppuccin:hardhat',
    fileNames: ['hardhat.config.js', 'hardhat.config.ts'],
  },
  'hare': {
    iconRef: 'catppuccin:hare',
    fileExtensions: ['ha'],
    languageIds: ['hare'],
  },
  'haskell': {
    iconRef: 'catppuccin:haskell',
    fileExtensions: ['hs'],
    languageIds: ['haskell'],
  },
  'haxe': {
    iconRef: 'catppuccin:haxe',
    fileExtensions: ['hx'],
    languageIds: ['haxe', 'hxml'],
  },
  'helm': {
    iconRef: 'catppuccin:helm',
    fileNames: ['.helmignore', 'chart.lock'],
  },
  'heroku': {
    iconRef: 'catppuccin:heroku',
    fileNames: ['procfile'],
  },
  'histoire': {
    iconRef: 'catppuccin:histoire',
    fileNames: ['histoire.config.ts', 'histoire.config.js', '.histoire.js', '.histoire.ts'],
  },
  'html': {
    iconRef: 'catppuccin:html',
    fileExtensions: ['htm', 'html', 'xhtml', 'html_vm', 'asp'],
    languageIds: ['html'],
  },
  'http': {
    iconRef: 'catppuccin:http',
    fileExtensions: ['http', 'rest'],
    fileNames: ['CNAME'],
  },
  'huff': {
    iconRef: 'catppuccin:huff',
    fileExtensions: ['huff'],
  },
  'hugo': {
    iconRef: 'catppuccin:hugo',
    fileNames: ['hugo.toml', 'hugo.yaml', 'hugo.json'],
  },
  'humans': {
    iconRef: 'catppuccin:humans',
    fileNames: ['humans.txt'],
  },
  'husky': {
    iconRef: 'catppuccin:husky',
    fileNames: ['.huskyrc', 'husky.config.js', '.huskyrc.json', '.huskyrc.js', '.huskyrc.yaml', '.huskyrc.yml'],
  },
  'image': {
    iconRef: 'catppuccin:image',
    fileExtensions: ['png', 'jpeg', 'jpg', 'gif', 'ico', 'tif', 'tiff', 'psb', 'ami', 'apx', 'avif', 'bmp', 'bpg', 'brk', 'cur', 'dds', 'dng', 'exr', 'fpx', 'gbr', 'img', 'jbig2', 'jb2', 'jng', 'jxr', 'pgf', 'pic', 'raw', 'webp', 'eps', 'afphoto', 'ase', 'aseprite', 'clip', 'cpt', 'heif', 'heic', 'kra', 'mdp', 'ora', 'pdn', 'reb', 'sai', 'tga', 'xcf', 'jfif', 'ppm', 'pbm', 'pgm', 'pnm', 'icns'],
  },
  'ionic': {
    iconRef: 'catppuccin:ionic',
    fileNames: ['ionic.config.json', '.io-config.json'],
  },
  'java-class': {
    iconRef: 'catppuccin:java-class',
    fileExtensions: ['class'],
  },
  'java-jar': {
    iconRef: 'catppuccin:java-jar',
    fileExtensions: ['jar'],
  },
  'java': {
    iconRef: 'catppuccin:java',
    fileExtensions: ['java', 'jsp'],
    languageIds: ['java'],
  },
  'javascript-config': {
    iconRef: 'catppuccin:javascript-config',
    fileExtensions: ['jsconfig.json'],
    fileNames: ['jsconfig.json'],
  },
  'javascript-map': {
    iconRef: 'catppuccin:javascript-map',
    fileExtensions: ['js.map', 'mjs.map', 'cjs.map'],
  },
  'javascript-react': {
    iconRef: 'catppuccin:javascript-react',
    fileExtensions: ['jsx'],
    languageIds: ['javascriptreact'],
  },
  'javascript-test': {
    iconRef: 'catppuccin:javascript-test',
    fileExtensions: ['spec.js', 'spec.cjs', 'spec.mjs', 'e2e-spec.js', 'e2e-spec.cjs', 'e2e-spec.mjs', 'test.js', 'test.cjs', 'test.mjs', 'js.snap', 'cy.js', 'spec.jsx', 'test.jsx', 'jsx.snap', 'cy.jsx'],
  },
  'javascript': {
    iconRef: 'catppuccin:javascript',
    fileExtensions: ['esx', 'js', 'cjs', 'mjs'],
    languageIds: ['javascript'],
  },
  'jest': {
    iconRef: 'catppuccin:jest',
    fileNames: ['jest.config.js', 'jest.config.cjs', 'jest.config.mjs', 'jest.config.ts', 'jest.config.cts', 'jest.config.mts', 'jest.config.json', 'jest.e2e.config.js', 'jest.e2e.config.cjs', 'jest.e2e.config.mjs', 'jest.e2e.config.ts', 'jest.e2e.config.cts', 'jest.e2e.config.mts', 'jest.e2e.config.json', 'jest.e2e.json', 'jest-unit.config.js', 'jest-e2e.config.js', 'jest-e2e.config.cjs', 'jest-e2e.config.mjs', 'jest-e2e.config.ts', 'jest-e2e.config.cts', 'jest-e2e.config.mts', 'jest-e2e.config.json', 'jest-e2e.json', 'jest-github-actions-reporter.js', 'jest.setup.js', 'jest.setup.ts', 'jest.json', '.jestrc', '.jestrc.js', '.jestrc.json', 'jest.teardown.js', 'jest-preset.json', 'jest-preset.js', 'jest-preset.cjs', 'jest-preset.mjs', 'jest.preset.js', 'jest.preset.mjs', 'jest.preset.cjs', 'jest.preset.json'],
  },
  'jinja': {
    iconRef: 'catppuccin:jinja',
    fileExtensions: ['jinja', 'jinja2', 'j2', 'jinja-html'],
    languageIds: ['jinja'],
  },
  'json-schema': {
    iconRef: 'catppuccin:json-schema',
    fileExtensions: ['schema.json'],
  },
  'json': {
    iconRef: 'catppuccin:json',
    fileExtensions: ['json', 'jsonc', 'tsbuildinfo', 'json5', 'jsonl', 'ndjson', 'hjson', 'webmanifest'],
    fileNames: ['.jscsrc', '.jshintrc', 'composer.lock', '.jsbeautifyrc', '.esformatter', 'cdp.pid', '.lintstagedrc', '.whitesource'],
    languageIds: ['hjson'],
  },
  'juce': {
    iconRef: 'catppuccin:juce',
    fileExtensions: ['jucer'],
  },
  'jule': {
    iconRef: 'catppuccin:jule',
    fileExtensions: ['jule'],
    fileNames: ['jule.mod'],
    languageIds: ['jule'],
  },
  'julia': {
    iconRef: 'catppuccin:julia',
    fileExtensions: ['jl'],
    languageIds: ['julia'],
  },
  'jupyter': {
    iconRef: 'catppuccin:jupyter',
    fileExtensions: ['ipynb'],
    languageIds: ['jupyter'],
  },
  'just': {
    iconRef: 'catppuccin:just',
    fileExtensions: ['just'],
    fileNames: ['justfile', '.justfile'],
  },
  'kdl': {
    iconRef: 'catppuccin:kdl',
    fileExtensions: ['kdl'],
    languageIds: ['kdl'],
  },
  'key': {
    iconRef: 'catppuccin:key',
    fileExtensions: ['pub', 'key', 'pem', 'asc', 'gpg', 'passwd', 'keystore'],
    fileNames: ['.htpasswd'],
  },
  'knip': {
    iconRef: 'catppuccin:knip',
    fileNames: ['knip.json', 'knip.jsonc', '.knip.jsonc', '.knip.jsonc', 'knip.ts', 'knip.js', 'knip.config.ts', 'knip.config.js'],
  },
  'kotlin': {
    iconRef: 'catppuccin:kotlin',
    fileExtensions: ['kt', 'kts'],
  },
  'laravel': {
    iconRef: 'catppuccin:laravel',
    fileExtensions: ['blade.php', 'inky.php'],
    fileNames: ['artisan'],
  },
  'latex': {
    iconRef: 'catppuccin:latex',
    fileExtensions: ['tex', 'sty', 'dtx', 'ltx'],
    languageIds: ['tex', 'doctex', 'latex', 'latex-expl3'],
  },
  'latte': {
    iconRef: 'catppuccin:latte',
    fileExtensions: ['latte'],
  },
  'lerna': {
    iconRef: 'catppuccin:lerna',
    fileNames: ['lerna.json'],
  },
  'less': {
    iconRef: 'catppuccin:less',
    fileExtensions: ['less'],
    languageIds: ['less'],
  },
  'lib': {
    iconRef: 'catppuccin:lib',
    fileExtensions: ['lib', 'bib'],
    languageIds: ['bibtex', 'bibtex-style'],
  },
  'license': {
    iconRef: 'catppuccin:license',
    fileNames: ['copying', 'copying.md', 'copying.rst', 'copying.txt', 'copyright', 'copyright.md', 'copyright.rst', 'copyright.txt', 'license', 'license-agpl', 'license-apache', 'license-bsd', 'license-mit', 'license-gpl', 'license-lgpl', 'unlicense', 'license.md', 'license.rst', 'license.txt', 'licence', 'licence-agpl', 'licence-apache', 'licence-bsd', 'licence-mit', 'licence-gpl', 'licence-lgpl', 'unlicence', 'licence.md', 'licence.rst', 'licence.txt'],
  },
  'lint-staged': {
    iconRef: 'catppuccin:lint-staged',
    fileNames: ['.lintstagedrc', '.lintstagedrc.json', '.lintstagedrc.yaml', '.lintstagedrc.yml', '.lintstagedrc.mjs', '.lintstagedrc.mts', '.lintstagedrc.cjs', '.lintstagedrc.cts', '.lintstagedrc.js', '.lintstagedrc.ts', 'lint-staged.config.js', 'lint-staged.config.ts', 'lint-staged.config.mjs', 'lint-staged.config.mts', 'lint-staged.config.cjs', 'lint-staged.config.cts'],
  },
  'liquid': {
    iconRef: 'catppuccin:liquid',
    fileExtensions: ['liquid'],
    fileNames: ['.liquidrc.json', '.liquidrc'],
    languageIds: ['liquid'],
  },
  'lisp': {
    iconRef: 'catppuccin:lisp',
    fileExtensions: ['lisp', 'lsp', 'cl', 'fast'],
  },
  'log': {
    iconRef: 'catppuccin:log',
    fileExtensions: ['log'],
    languageIds: ['log'],
  },
  'lua-check': {
    iconRef: 'catppuccin:lua-check',
    fileNames: ['.luacheckrc'],
  },
  'lua-client': {
    iconRef: 'catppuccin:lua-client',
    fileExtensions: ['client.lua'],
  },
  'lua-rocks': {
    iconRef: 'catppuccin:lua-rocks',
    fileNames: ['.rock', '.rockspec'],
  },
  'lua-server': {
    iconRef: 'catppuccin:lua-server',
    fileExtensions: ['server.lua'],
  },
  'lua-test': {
    iconRef: 'catppuccin:lua-test',
    fileExtensions: ['spec.lua', 'test.lua'],
  },
  'lua': {
    iconRef: 'catppuccin:lua',
    fileExtensions: ['lua'],
    fileNames: ['.luacheckrc'],
    languageIds: ['lua'],
  },
  'luau-check': {
    iconRef: 'catppuccin:luau-check',
    fileNames: ['selene.toml', 'selene.yml', 'selene.yaml'],
  },
  'luau-client': {
    iconRef: 'catppuccin:luau-client',
    fileExtensions: ['client.luau'],
  },
  'luau-config': {
    iconRef: 'catppuccin:luau-config',
    fileNames: ['.luaurc'],
  },
  'luau-server': {
    iconRef: 'catppuccin:luau-server',
    fileExtensions: ['server.luau'],
  },
  'luau-test': {
    iconRef: 'catppuccin:luau-test',
    fileExtensions: ['spec.luau', 'test.luau'],
  },
  'luau': {
    iconRef: 'catppuccin:luau',
    fileExtensions: ['luau'],
  },
  'macos': {
    iconRef: 'catppuccin:macos',
    fileNames: ['.ds_store'],
  },
  'makefile': {
    iconRef: 'catppuccin:makefile',
    fileExtensions: ['mk'],
    fileNames: ['makefile', 'gnumakefile', 'kbuild'],
    languageIds: ['makefile'],
  },
  'mantle': {
    iconRef: 'catppuccin:mantle',
    fileNames: ['mantle.yml', '.mantle-state.yml'],
  },
  'markdown-mdx': {
    iconRef: 'catppuccin:markdown-mdx',
    fileExtensions: ['mdx'],
  },
  'markdown': {
    iconRef: 'catppuccin:markdown',
    fileExtensions: ['md', 'markdown', 'rst'],
    languageIds: ['markdown'],
  },
  'marko': {
    iconRef: 'catppuccin:marko',
    fileExtensions: ['marko'],
  },
  'matlab': {
    iconRef: 'catppuccin:matlab',
    fileExtensions: ['m', 'mat'],
    languageIds: ['matlab'],
  },
  'mdbook': {
    iconRef: 'catppuccin:mdbook',
    fileNames: ['book.toml'],
  },
  'mermaid': {
    iconRef: 'catppuccin:mermaid',
    fileExtensions: ['mmd', 'mermaid'],
  },
  'meson': {
    iconRef: 'catppuccin:meson',
    fileExtensions: ['wrap'],
    fileNames: ['meson.build', 'meson_options.txt'],
  },
  'midi': {
    iconRef: 'catppuccin:midi',
    fileExtensions: ['mid', 'midi'],
  },
  'mjml': {
    iconRef: 'catppuccin:mjml',
    fileExtensions: ['mjml'],
    fileNames: ['.mjmlconfig'],
  },
  'modernizr': {
    iconRef: 'catppuccin:modernizr',
    fileNames: ['.modernizrrc', '.modernizrrc.js', '.modernizrrc.json'],
  },
  'moonrepo': {
    iconRef: 'catppuccin:moonrepo',
    fileNames: ['moon.yml', 'moon.yaml'],
  },
  'moonwave': {
    iconRef: 'catppuccin:moonwave',
    fileNames: ['moonwave.toml'],
  },
  'ms-excel': {
    iconRef: 'catppuccin:ms-excel',
    fileExtensions: ['xlsx', 'xlsm', 'xls', 'xlsb', 'xltx', 'xltm', 'xlt', 'ods'],
  },
  'ms-powerpoint': {
    iconRef: 'catppuccin:ms-powerpoint',
    fileExtensions: ['pptx', 'ppt', 'pptm', 'potx', 'potm', 'ppsx', 'ppsm', 'pps', 'ppam', 'ppa', 'odp'],
  },
  'ms-word': {
    iconRef: 'catppuccin:ms-word',
    fileExtensions: ['doc', 'docm', 'docx', 'dot', 'dotm', 'dotx', 'rtf', 'odt'],
  },
  'msbuild': {
    iconRef: 'catppuccin:msbuild',
    fileNames: ['directory.build.props', 'directory.build.rsp', 'directory.build.targets', 'directory.packages.props'],
  },
  'nativescript': {
    iconRef: 'catppuccin:nativescript',
    fileNames: ['nativescript.config.ts', 'nativescript.config.js'],
  },
  'nest': {
    iconRef: 'catppuccin:nest',
    fileNames: ['nest-cli.json', '.nest-cli.json', 'nestconfig.json', '.nestconfig.json'],
  },
  'netlify': {
    iconRef: 'catppuccin:netlify',
    fileNames: ['netlify.json', 'netlify.yml', 'netlify.yaml', 'netlify.toml'],
  },
  'next': {
    iconRef: 'catppuccin:next',
    fileNames: ['next.config.js', 'next.config.mjs', 'next.config.ts', 'next.config.mts'],
  },
  'nextflow': {
    iconRef: 'catppuccin:nextflow',
    fileExtensions: ['nf'],
  },
  'nginx': {
    iconRef: 'catppuccin:nginx',
    fileExtensions: ['nginx', 'nginxconf', 'nginxconfig'],
    fileNames: ['nginx.conf'],
  },
  'nim': {
    iconRef: 'catppuccin:nim',
    fileExtensions: ['nim', 'nimble'],
    languageIds: ['nim', 'nimble'],
  },
  'ninja': {
    iconRef: 'catppuccin:ninja',
    fileExtensions: ['ninja'],
  },
  'nix-lock': {
    iconRef: 'catppuccin:nix-lock',
    fileNames: ['flake.lock'],
  },
  'nix': {
    iconRef: 'catppuccin:nix',
    fileExtensions: ['nix'],
    languageIds: ['nix'],
  },
  'nodemon': {
    iconRef: 'catppuccin:nodemon',
    fileNames: ['nodemon.json', 'nodemon-debug.json'],
  },
  'npm-ignore': {
    iconRef: 'catppuccin:npm-ignore',
    fileNames: ['.npmignore'],
  },
  'npm-lock': {
    iconRef: 'catppuccin:npm-lock',
    fileNames: ['package-lock.json'],
  },
  'npm': {
    iconRef: 'catppuccin:npm',
    fileNames: ['.npmrc'],
  },
  'nuget': {
    iconRef: 'catppuccin:nuget',
    fileExtensions: ['nupkg'],
    fileNames: ['nuget.config', '.nuspec', 'nuget.exe'],
  },
  'nunjucks': {
    iconRef: 'catppuccin:nunjucks',
    fileExtensions: ['njk', 'nunjucks'],
    languageIds: ['nunjucks'],
  },
  'nuxt-ignore': {
    iconRef: 'catppuccin:nuxt-ignore',
    fileNames: ['.nuxtignore'],
  },
  'nuxt': {
    iconRef: 'catppuccin:nuxt',
    fileNames: ['.nuxtrc', 'nuxt.config.js', 'nuxt.config.ts'],
  },
  'nx-ignore': {
    iconRef: 'catppuccin:nx-ignore',
    fileNames: ['.nxignore'],
  },
  'nx': {
    iconRef: 'catppuccin:nx',
    fileNames: ['nx.json'],
  },
  'ocaml': {
    iconRef: 'catppuccin:ocaml',
    fileExtensions: ['ml', 'mli', 'cmx'],
  },
  'odin': {
    iconRef: 'catppuccin:odin',
    fileExtensions: ['odin'],
    languageIds: ['odin'],
  },
  'opentofu': {
    iconRef: 'catppuccin:opentofu',
    fileExtensions: ['tofu', 'tofu.json'],
    languageIds: ['opentofu'],
  },
  'org': {
    iconRef: 'catppuccin:org',
    fileExtensions: ['org'],
    languageIds: ['org'],
  },
  'package-json': {
    iconRef: 'catppuccin:package-json',
    fileNames: ['package.json', '.nvmrc', '.esmrc', '.node-version'],
  },
  'panda-css': {
    iconRef: 'catppuccin:panda-css',
    fileNames: ['panda.config.ts', 'panda.config.js', 'panda.config.mjs', 'panda.config.mts', 'panda.config.cjs'],
  },
  'pdf': {
    iconRef: 'catppuccin:pdf',
    fileExtensions: ['pdf'],
  },
  'perl': {
    iconRef: 'catppuccin:perl',
    fileExtensions: ['pl', 'pm', 'pod', 't', 'psgi', 'raku', 'rakumod', 'rakutest', 'rakudoc', 'nqp', 'p6', 'pl6', 'pm6'],
    languageIds: ['perl', 'perl6', 'raku'],
  },
  'pesde-lock': {
    iconRef: 'catppuccin:pesde-lock',
    fileNames: ['pesde.lock'],
  },
  'pesde': {
    iconRef: 'catppuccin:pesde',
    fileNames: ['pesde.toml'],
  },
  'php': {
    iconRef: 'catppuccin:php',
    fileExtensions: ['php'],
    languageIds: ['php'],
  },
  'phrase': {
    iconRef: 'catppuccin:phrase',
    fileNames: ['.phrase.yml', '.phraseapp.yml', '.phrase.yaml', '.phraseapp.yaml'],
  },
  'phtml': {
    iconRef: 'catppuccin:phtml',
    fileExtensions: ['phtml'],
  },
  'pixi-lock': {
    iconRef: 'catppuccin:pixi-lock',
    fileNames: ['pixi.lock'],
  },
  'pixi': {
    iconRef: 'catppuccin:pixi',
    fileNames: ['pixi.toml'],
  },
  'plantuml': {
    iconRef: 'catppuccin:plantuml',
    fileExtensions: ['pu', 'puml', 'plantuml'],
  },
  'playwright': {
    iconRef: 'catppuccin:playwright',
    fileNames: ['playwright.config.js', 'playwright.config.mjs', 'playwright.config.ts', 'playwright.config.base.js', 'playwright.config.base.mjs', 'playwright.config.base.ts', 'playwright-ct.config.js', 'playwright-ct.config.mjs', 'playwright-ct.config.ts'],
  },
  'plop': {
    iconRef: 'catppuccin:plop',
    fileNames: ['plopfile.js', 'plopfile.cjs', 'plopfile.mjs', 'plopfile.ts'],
  },
  'pnpm-lock': {
    iconRef: 'catppuccin:pnpm-lock',
    fileNames: ['pnpm-lock.yaml'],
  },
  'pnpm': {
    iconRef: 'catppuccin:pnpm',
    fileNames: ['pnpm-workspace.yaml', '.pnpmfile.cjs'],
  },
  'poetry-lock': {
    iconRef: 'catppuccin:poetry-lock',
    fileNames: ['poetry.lock'],
  },
  'postcss': {
    iconRef: 'catppuccin:postcss',
    fileExtensions: ['pcss', 'sss'],
    fileNames: ['postcss.config.js', 'postcss.config.cjs', 'postcss.config.mjs', 'postcss.config.ts', 'postcss.config.cts', 'postcss.config.mts', '.postcssrc.js', '.postcssrc.cjs', '.postcssrc.ts', '.postcssrc.cts', '.postcssrc', '.postcssrc.json', '.postcssrc.yaml', '.postcssrc.yml'],
    languageIds: ['postcss'],
  },
  'powershell': {
    iconRef: 'catppuccin:powershell',
    fileExtensions: ['ps1', 'psm1', 'psd1', 'ps1xml', 'psc1', 'pssc'],
    languageIds: ['powershell'],
  },
  'pre-commit': {
    iconRef: 'catppuccin:pre-commit',
    fileNames: ['.pre-commit-config.yaml', '.pre-commit-hooks.yaml'],
  },
  'premake': {
    iconRef: 'catppuccin:premake',
    fileNames: ['premake4.lua', 'premake5.lua', 'premake.lua'],
  },
  'prettier-ignore': {
    iconRef: 'catppuccin:prettier-ignore',
    fileNames: ['.prettierignore'],
  },
  'prettier': {
    iconRef: 'catppuccin:prettier',
    fileNames: ['.prettierrc', '.prettierrc.json', '.prettierrc.yml', '.prettierrc.yaml', '.prettierrc.json5', '.prettierrc.js', 'prettier.config.js', '.prettierrc.ts', 'prettier.config.ts', '.prettierrc.mjs', 'prettier.config.mjs', '.prettierrc.mts', 'prettier.config.mts', '.prettierrc.cjs', 'prettier.config.cjs', '.prettierrc.cts', 'prettier.config.cts', '.prettierrc.toml'],
  },
  'prisma': {
    iconRef: 'catppuccin:prisma',
    fileExtensions: ['prisma'],
    fileNames: ['prisma.config.ts', 'prisma.config.js', 'prisma.config.cts', 'prisma.config.cjs', 'prisma.config.mts', 'prisma.config.mjs', 'prisma.yml'],
  },
  'prolog': {
    iconRef: 'catppuccin:prolog',
    fileExtensions: ['p', 'pro'],
    languageIds: ['prolog'],
  },
  'properties': {
    iconRef: 'catppuccin:properties',
    fileExtensions: ['ini', 'dlc', 'config', 'conf', 'properties', 'prop', 'settings', 'option', 'props', 'prefs', 'sln.dotsettings', 'sln.dotsettings.user', 'cfg'],
    languageIds: ['ini', 'properties', 'spring-boot-properties'],
  },
  'proto': {
    iconRef: 'catppuccin:proto',
    fileExtensions: ['proto'],
    languageIds: ['proto'],
  },
  'prototools': {
    iconRef: 'catppuccin:prototools',
    fileNames: ['.prototools'],
  },
  'pug': {
    iconRef: 'catppuccin:pug',
    fileExtensions: ['jade', 'pug'],
    fileNames: ['.pug-lintrc', '.pug-lintrc.js', '.pug-lintrc.json'],
    languageIds: ['jade'],
  },
  'puppet': {
    iconRef: 'catppuccin:puppet',
    fileExtensions: ['pp', 'epp'],
    languageIds: ['puppet'],
  },
  'puppeteer': {
    iconRef: 'catppuccin:puppeteer',
    fileNames: ['.puppeteerrc.cjs,', '.puppeteerrc.js,', '.puppeteerrc', '.puppeteerrc.json,', '.puppeteerrc.yaml,', 'puppeteer.config.js', 'puppeteer.config.cjs'],
  },
  'python-compiled': {
    iconRef: 'catppuccin:python-compiled',
    fileExtensions: ['pyc', 'pyo', 'pyd'],
  },
  'python-config': {
    iconRef: 'catppuccin:python-config',
    fileNames: ['pyproject.toml', 'requirements.txt', 'requirements-dev.txt', 'requirements-test.txt', '.python-version'],
  },
  'python': {
    iconRef: 'catppuccin:python',
    fileExtensions: ['py'],
    languageIds: ['python'],
  },
  'r': {
    iconRef: 'catppuccin:r',
    fileExtensions: ['r'],
    fileNames: ['.rhistory'],
    languageIds: ['r', 'rsweave'],
  },
  'racket': {
    iconRef: 'catppuccin:racket',
    fileExtensions: ['rkt'],
  },
  'razor': {
    iconRef: 'catppuccin:razor',
    fileExtensions: ['cshtml', 'vbhtml'],
    languageIds: ['razor', 'aspnetcorerazor'],
  },
  'rdata': {
    iconRef: 'catppuccin:rdata',
    fileExtensions: ['rdata'],
  },
  'readme': {
    iconRef: 'catppuccin:readme',
    fileNames: ['readme.md', 'readme.rst', 'readme.txt', 'readme'],
  },
  'reason': {
    iconRef: 'catppuccin:reason',
    fileExtensions: ['re', 'rei'],
    languageIds: ['reason', 'reason_lisp'],
  },
  'redwood': {
    iconRef: 'catppuccin:redwood',
    fileNames: ['redwood.toml'],
  },
  'release': {
    iconRef: 'catppuccin:release',
    fileNames: ['.goreleaser.yaml'],
  },
  'remix': {
    iconRef: 'catppuccin:remix',
    fileNames: ['remix.config.js', 'remix.config.ts'],
  },
  'renovate': {
    iconRef: 'catppuccin:renovate',
    fileNames: ['.renovaterc', '.renovaterc.json', 'renovate-config.json', 'renovate.json', 'renovate.json5'],
  },
  'rescript': {
    iconRef: 'catppuccin:rescript',
    fileExtensions: ['res'],
    languageIds: ['rescript'],
  },
  'rmd': {
    iconRef: 'catppuccin:rmd',
    fileExtensions: ['rmd'],
  },
  'roblox': {
    iconRef: 'catppuccin:roblox',
    fileExtensions: ['rbxl', 'rbxlx', 'rbxm', 'rbxmx'],
  },
  'robots': {
    iconRef: 'catppuccin:robots',
    fileNames: ['robots.txt'],
  },
  'rocket': {
    iconRef: 'catppuccin:rocket',
    fileNames: ['rocket.toml'],
  },
  'rokit': {
    iconRef: 'catppuccin:rokit',
    fileNames: ['rokit.toml'],
  },
  'rollup': {
    iconRef: 'catppuccin:rollup',
    fileNames: ['rollup.config.js', 'rollup.config.mjs', 'rollup.config.ts', 'rollup-config.js', 'rollup-config.mjs', 'rollup-config.ts', 'rollup.config.common.js', 'rollup.config.common.mjs', 'rollup.config.common.ts', 'rollup.config.base.js', 'rollup.config.base.mjs', 'rollup.config.base.ts', 'rollup.config.prod.js', 'rollup.config.prod.mjs', 'rollup.config.prod.ts', 'rollup.config.dev.js', 'rollup.config.dev.mjs', 'rollup.config.dev.ts', 'rollup.config.prod.vendor.js', 'rollup.config.prod.vendor.mjs', 'rollup.config.prod.vendor.ts'],
  },
  'rproj': {
    iconRef: 'catppuccin:rproj',
    fileExtensions: ['rproj'],
  },
  'rsml': {
    iconRef: 'catppuccin:rsml',
    fileExtensions: ['rsml'],
  },
  'ruby-gem-lock': {
    iconRef: 'catppuccin:ruby-gem-lock',
    fileNames: ['gemfile.lock'],
  },
  'ruby-gem': {
    iconRef: 'catppuccin:ruby-gem',
    fileNames: ['gemfile'],
  },
  'ruby': {
    iconRef: 'catppuccin:ruby',
    fileExtensions: ['rb', 'erb', 'rbs'],
    fileNames: ['.ruby-version'],
    languageIds: ['ruby'],
  },
  'ruff': {
    iconRef: 'catppuccin:ruff',
    fileNames: ['ruff.toml', '.ruff.toml'],
  },
  'rust-config': {
    iconRef: 'catppuccin:rust-config',
    fileNames: ['rustfmt.toml', '.rustfmt.toml', 'rust-toolchain.toml', 'clippy.toml'],
  },
  'rust': {
    iconRef: 'catppuccin:rust',
    fileExtensions: ['rs', 'ron'],
    languageIds: ['rust'],
  },
  'salesforce': {
    iconRef: 'catppuccin:salesforce',
    fileExtensions: ['cls'],
  },
  'sass': {
    iconRef: 'catppuccin:sass',
    fileExtensions: ['scss', 'sass'],
    languageIds: ['sass', 'scss'],
  },
  'scala': {
    iconRef: 'catppuccin:scala',
    fileExtensions: ['scala', 'sc'],
    languageIds: ['scala'],
  },
  'scheme': {
    iconRef: 'catppuccin:scheme',
    fileExtensions: ['scm'],
  },
  'search': {
    iconRef: 'catppuccin:search',
    fileExtensions: ['code-search'],
    languageIds: ['search-result'],
  },
  'security': {
    iconRef: 'catppuccin:security',
    fileNames: ['security.md', 'security.txt', 'security'],
  },
  'semantic-release': {
    iconRef: 'catppuccin:semantic-release',
    fileNames: ['.releaserc', '.releaserc.yaml', '.releaserc.yml', '.releaserc.json', '.releaserc.js', '.releaserc.cjs', 'release.config.js', 'release.config.cjs'],
  },
  'semgrep-ignore': {
    iconRef: 'catppuccin:semgrep-ignore',
    fileNames: ['.semgrepignore'],
  },
  'semgrep': {
    iconRef: 'catppuccin:semgrep',
    fileNames: ['semgrep.yml'],
  },
  'sentry': {
    iconRef: 'catppuccin:sentry',
    fileNames: ['.sentryclirc'],
  },
  'serverless': {
    iconRef: 'catppuccin:serverless',
    fileNames: ['serverless.yml', 'serverless.yaml', 'serverless.json', 'serverless.js', 'serverless.ts'],
  },
  'shader': {
    iconRef: 'catppuccin:shader',
    fileExtensions: ['glsl', 'vert', 'tesc', 'tese', 'geom', 'frag', 'comp', 'vert.glsl', 'tesc.glsl', 'tese.glsl', 'geom.glsl', 'frag.glsl', 'comp.glsl', 'vertex.glsl', 'geometry.glsl', 'fragment.glsl', 'compute.glsl', 'ts.glsl', 'gs.glsl', 'vs.glsl', 'fs.glsl', 'shader', 'vertexshader', 'fragmentshader', 'geometryshader', 'computeshader', 'hlsl', 'pixel.hlsl', 'geometry.hlsl', 'compute.hlsl', 'tessellation.hlsl', 'px.hlsl', 'geom.hlsl', 'comp.hlsl', 'tess.hlsl', 'wgsl'],
    languageIds: ['hlsl', 'glsl', 'wgsl'],
  },
  'sketch': {
    iconRef: 'catppuccin:sketch',
    fileExtensions: ['sketch'],
  },
  'slidesk': {
    iconRef: 'catppuccin:slidesk',
    fileExtensions: ['sdf', 'sdt'],
    languageIds: ['sdf'],
  },
  'snowpack': {
    iconRef: 'catppuccin:snowpack',
    fileNames: ['snowpack.config.js', 'snowpack.config.cjs', 'snowpack.config.mjs', 'snowpack.config.ts', 'snowpack.config.cts', 'snowpack.config.mts', 'snowpack.deps.json', 'snowpack.config.json'],
  },
  'solidity': {
    iconRef: 'catppuccin:solidity',
    fileExtensions: ['sol'],
    languageIds: ['solidity'],
  },
  'sonar-cloud': {
    iconRef: 'catppuccin:sonar-cloud',
    fileNames: ['sonar-project.properties', '.sonarcloud.properties', 'sonarcloud.yaml'],
  },
  'spwn': {
    iconRef: 'catppuccin:spwn',
    fileExtensions: ['spwn'],
  },
  'squirrel': {
    iconRef: 'catppuccin:squirrel',
    fileExtensions: ['nut'],
    languageIds: ['squirrel'],
  },
  'stackblitz': {
    iconRef: 'catppuccin:stackblitz',
    fileNames: ['.stackblitzrc'],
  },
  'stata': {
    iconRef: 'catppuccin:stata',
    fileExtensions: ['ado', 'do', 'dta'],
  },
  'stencil': {
    iconRef: 'catppuccin:stencil',
    fileNames: ['stencil.config.js', 'stencil.config.ts'],
  },
  'stitches': {
    iconRef: 'catppuccin:stitches',
    fileNames: ['stitches.config.js', 'stitches.config.ts'],
  },
  'storybook-svelte': {
    iconRef: 'catppuccin:storybook-svelte',
    fileExtensions: ['story.svelte', 'stories.svelte'],
  },
  'storybook-vue': {
    iconRef: 'catppuccin:storybook-vue',
    fileExtensions: ['story.vue', 'stories.vue'],
  },
  'storybook': {
    iconRef: 'catppuccin:storybook',
    fileExtensions: ['stories.js', 'stories.jsx', 'stories.mdx', 'story.js', 'story.jsx', 'stories.ts', 'stories.tsx', 'story.ts', 'story.tsx', 'story.mdx'],
  },
  'stylelint-ignore': {
    iconRef: 'catppuccin:stylelint-ignore',
    fileNames: ['.stylelintignore', '.stylelintcache'],
  },
  'stylelint': {
    iconRef: 'catppuccin:stylelint',
    fileNames: ['.stylelintrc', 'stylelint.config.js', 'stylelint.config.ts', 'stylelint.config.cjs', 'stylelint.config.cts', 'stylelint.config.mjs', 'stylelint.config.mts', '.stylelintrc.json', '.stylelintrc.yaml', '.stylelintrc.yml', '.stylelintrc.js', '.stylelintrc.ts', '.stylelintrc.cjs', '.stylelintrc.cts', '.stylelintrc.mjs', '.stylelintrc.mts'],
  },
  'stylua-ignore': {
    iconRef: 'catppuccin:stylua-ignore',
    fileNames: ['.styluaignore'],
  },
  'stylua': {
    iconRef: 'catppuccin:stylua',
    fileNames: ['stylua.toml'],
  },
  'sublime': {
    iconRef: 'catppuccin:sublime',
    fileExtensions: ['sublime-project', 'sublime-workspace'],
  },
  'super-collider': {
    iconRef: 'catppuccin:super-collider',
    fileExtensions: ['sc', 'scd'],
  },
  'svelte-config': {
    iconRef: 'catppuccin:svelte-config',
    fileNames: ['svelte.config.js', 'svelte.config.ts', 'svelte.config.cjs', 'svelte.config.mjs'],
  },
  'svelte': {
    iconRef: 'catppuccin:svelte',
    fileExtensions: ['svelte'],
    languageIds: ['svelte'],
  },
  'svg': {
    iconRef: 'catppuccin:svg',
    fileExtensions: ['svg'],
    languageIds: ['svg'],
  },
  'swift': {
    iconRef: 'catppuccin:swift',
    fileExtensions: ['swift'],
    languageIds: ['swift'],
  },
  'swiftformat': {
    iconRef: 'catppuccin:swiftformat',
    fileNames: ['.swiftformat'],
  },
  'tailwind': {
    iconRef: 'catppuccin:tailwind',
    fileNames: ['tailwind.js', 'tailwind.ts', 'tailwind.config.js', 'tailwind.config.cjs', 'tailwind.config.mjs', 'tailwind.config.ts', 'tailwind.config.cts', 'tailwind.config.mts'],
  },
  'taskfile': {
    iconRef: 'catppuccin:taskfile',
    fileNames: ['taskfile.yml', 'taskfile.yaml', 'taskfile.dist.yml', 'taskfile.dist.yaml', '.taskrc.yml', '.taskrc.yaml'],
  },
  'tauri-ignore': {
    iconRef: 'catppuccin:tauri-ignore',
    fileNames: ['.taurignore'],
  },
  'tauri': {
    iconRef: 'catppuccin:tauri',
    fileExtensions: ['tauri'],
    fileNames: ['tauri.conf.json', 'tauri.conf.json5', 'tauri.config.json', 'tauri.linux.conf.json', 'tauri.windows.conf.json', 'tauri.macos.conf.json', 'Tauri.toml'],
  },
  'terraform': {
    iconRef: 'catppuccin:terraform',
    fileExtensions: ['tf', 'tf.json', 'tfvars', 'tfstate', 'tfbackend'],
    languageIds: ['terraform'],
  },
  'text': {
    iconRef: 'catppuccin:text',
    fileExtensions: ['txt'],
    languageIds: ['plaintext'],
  },
  'todo': {
    iconRef: 'catppuccin:todo',
    fileExtensions: ['todo'],
    fileNames: ['todo.md', 'todos.md'],
  },
  'toml': {
    iconRef: 'catppuccin:toml',
    fileExtensions: ['toml'],
    languageIds: ['toml'],
  },
  'turbo': {
    iconRef: 'catppuccin:turbo',
    fileNames: ['turbo.json'],
  },
  'twig': {
    iconRef: 'catppuccin:twig',
    fileExtensions: ['twig'],
    languageIds: ['twig'],
  },
  'twine': {
    iconRef: 'catppuccin:twine',
    fileExtensions: ['tw', 'twee'],
    languageIds: ['twee3', 'twee3-harlowe-3', 'twee3-chapbook-1', 'twee3-sugarcube-2'],
  },
  'typescript-config': {
    iconRef: 'catppuccin:typescript-config',
    fileExtensions: ['tsconfig.json'],
    fileNames: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.editor.json', 'tsconfig.spec.json', 'tsconfig.base.json', 'tsconfig.build.json', 'tsconfig.eslint.json', 'tsconfig.lib.json', 'tsconfig.lib.prod.json', 'tsconfig.node.json', 'tsconfig.test.json', 'tsconfig.e2e.json', 'tsconfig.web.json', 'tsconfig.webworker.json', 'tsconfig.worker.json', 'tsconfig.config.json', 'tsconfig.vitest.json', 'tsconfig.cjs.json', 'tsconfig.esm.json', 'tsconfig.mjs.json', 'tsconfig.doc.json', 'tsconfig.paths.json', 'tsconfig.main.json', 'tsconfig.cypress-ct.json', 'tsconfig.components.json'],
  },
  'typescript-def': {
    iconRef: 'catppuccin:typescript-def',
    fileExtensions: ['d.ts', 'd.cts', 'd.mts'],
  },
  'typescript-react': {
    iconRef: 'catppuccin:typescript-react',
    fileExtensions: ['tsx'],
    languageIds: ['typescriptreact'],
  },
  'typescript-test': {
    iconRef: 'catppuccin:typescript-test',
    fileExtensions: ['spec.ts', 'spec.cts', 'spec.mts', 'cy.ts', 'e2e-spec.ts', 'e2e-spec.cts', 'e2e-spec.mts', 'test.ts', 'test.cts', 'test.mts', 'ts.snap', 'spec-d.ts', 'test-d.ts', 'spec.tsx', 'test.tsx', 'tsx.snap', 'cy.tsx'],
  },
  'typescript': {
    iconRef: 'catppuccin:typescript',
    fileExtensions: ['ts', 'cts', 'mts'],
    languageIds: ['typescript'],
  },
  'typst': {
    iconRef: 'catppuccin:typst',
    fileExtensions: ['typ'],
    fileNames: ['typst.toml'],
    languageIds: ['typst'],
  },
  'unity': {
    iconRef: 'catppuccin:unity',
    fileExtensions: ['unity'],
    languageIds: ['shaderlab'],
  },
  'unocss': {
    iconRef: 'catppuccin:unocss',
    fileNames: ['uno.config.js', 'uno.config.mjs', 'uno.config.ts', 'uno.config.mts', 'unocss.config.js', 'unocss.config.mjs', 'unocss.config.ts', 'unocss.config.mts'],
  },
  'url': {
    iconRef: 'catppuccin:url',
    fileExtensions: ['url'],
  },
  'uv': {
    iconRef: 'catppuccin:uv',
    fileNames: ['uv.lock'],
  },
  'v': {
    iconRef: 'catppuccin:v',
    fileExtensions: ['v'],
    fileNames: ['vpkg.json', 'v.mod'],
    languageIds: ['v'],
  },
  'vala': {
    iconRef: 'catppuccin:vala',
    fileExtensions: ['vala'],
    languageIds: ['vala'],
  },
  'vanilla-extract': {
    iconRef: 'catppuccin:vanilla-extract',
    fileExtensions: ['css.ts'],
  },
  'vapi': {
    iconRef: 'catppuccin:vapi',
    fileExtensions: ['vapi'],
  },
  'vento': {
    iconRef: 'catppuccin:vento',
    fileExtensions: ['vto'],
  },
  'vercel-ignore': {
    iconRef: 'catppuccin:vercel-ignore',
    fileNames: ['.vercelignore', '.nowignore'],
  },
  'vercel': {
    iconRef: 'catppuccin:vercel',
    fileNames: ['vercel.json', 'now.json'],
  },
  'verilog': {
    iconRef: 'catppuccin:verilog',
    fileExtensions: ['vhd', 'sv', 'svh'],
  },
  'vhs': {
    iconRef: 'catppuccin:vhs',
    fileExtensions: ['tape'],
  },
  'video': {
    iconRef: 'catppuccin:video',
    fileExtensions: ['webm', 'mkv', 'flv', 'vob', 'ogv', 'ogg', 'gifv', 'avi', 'mov', 'qt', 'wmv', 'yuv', 'rm', 'rmvb', 'mp4', 'm4v', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'm2v'],
  },
  'vim': {
    iconRef: 'catppuccin:vim',
    fileExtensions: ['vimrc', 'gvimrc', 'exrc', 'vim', 'viminfo'],
    languageIds: ['viml'],
  },
  'visual-studio': {
    iconRef: 'catppuccin:visual-studio',
    fileExtensions: ['csproj', 'csproj.user', 'vbproj', 'vbproj.user', 'fsproj', 'fsproj.user', 'ruleset', 'sln', 'slnf', 'slnx', 'suo', 'vb', 'vbs', 'vcxitems', 'vcxitems.filters', 'vcxproj', 'vcxproj.filters'],
    languageIds: ['testOutput', 'vb'],
  },
  'vital': {
    iconRef: 'catppuccin:vital',
    fileExtensions: ['vital', 'vitalbank', 'vitallfo', 'vitalskin', 'vitaltable', 'vitaltheme'],
  },
  'vite': {
    iconRef: 'catppuccin:vite',
    fileNames: ['vite.config.js', 'vite.config.mjs', 'vite.config.cjs', 'vite.config.ts', 'vite.config.cts', 'vite.config.mts'],
  },
  'vitest': {
    iconRef: 'catppuccin:vitest',
    fileNames: ['vitest.config.ts', 'vitest.config.mts', 'vitest.config.cts', 'vitest.config.js', 'vitest.config.mjs', 'vitest.config.cjs', 'vitest.workspace.js', 'vitest.workspace.ts', 'vitest.workspace.json'],
  },
  'vs-codium': {
    iconRef: 'catppuccin:vs-codium',
  },
  'vscode-ignore': {
    iconRef: 'catppuccin:vscode-ignore',
    fileNames: ['.vscodeignore'],
  },
  'vscode': {
    iconRef: 'catppuccin:vscode',
    fileExtensions: ['vsixmanifest', 'vsix', 'code-workplace', 'code-workspace', 'code-profile', 'code-snippets'],
  },
  'vue-config': {
    iconRef: 'catppuccin:vue-config',
    fileNames: ['vue.config.js', 'vue.config.cjs', 'vue.config.mjs', 'vue.config.ts', 'vue.config.cts', 'vue.config.mts', '.vuerc'],
  },
  'vue': {
    iconRef: 'catppuccin:vue',
    fileExtensions: ['vue'],
    languageIds: ['vue'],
  },
  'wally': {
    iconRef: 'catppuccin:wally',
    fileNames: ['wally.toml', 'wally.lock'],
  },
  'web-assembly': {
    iconRef: 'catppuccin:web-assembly',
    fileExtensions: ['wat', 'wasm'],
  },
  'webpack': {
    iconRef: 'catppuccin:webpack',
    fileNames: ['webpack.js', 'webpack.cjs', 'webpack.mjs', 'webpack.ts', 'webpack.cts', 'webpack.mts', 'webpack.base.js', 'webpack.base.cjs', 'webpack.base.mjs', 'webpack.base.ts', 'webpack.base.cts', 'webpack.base.mts', 'webpack.config.js', 'webpack.config.cjs', 'webpack.config.mjs', 'webpack.config.ts', 'webpack.config.cts', 'webpack.config.mts', 'webpack.common.js', 'webpack.common.cjs', 'webpack.common.mjs', 'webpack.common.ts', 'webpack.common.cts', 'webpack.common.mts', 'webpack.config.common.js', 'webpack.config.common.cjs', 'webpack.config.common.mjs', 'webpack.config.common.ts', 'webpack.config.common.cts', 'webpack.config.common.mts', 'webpack.config.common.babel.js', 'webpack.config.common.babel.ts', 'webpack.dev.js', 'webpack.dev.cjs', 'webpack.dev.mjs', 'webpack.dev.ts', 'webpack.dev.cts', 'webpack.dev.mts', 'webpack.development.js', 'webpack.development.cjs', 'webpack.development.mjs', 'webpack.development.ts', 'webpack.development.cts', 'webpack.development.mts', 'webpack.config.dev.js', 'webpack.config.dev.cjs', 'webpack.config.dev.mjs', 'webpack.config.dev.ts', 'webpack.config.dev.cts', 'webpack.config.dev.mts', 'webpack.config.dev.babel.js', 'webpack.config.dev.babel.ts', 'webpack.config.main.js', 'webpack.config.renderer.ts', 'webpack.mix.js', 'webpack.mix.cjs', 'webpack.mix.mjs', 'webpack.mix.ts', 'webpack.mix.cts', 'webpack.mix.mts', 'webpack.prod.js', 'webpack.prod.cjs', 'webpack.prod.mjs', 'webpack.prod.ts', 'webpack.prod.cts', 'webpack.prod.mts', 'webpack.prod.config.js', 'webpack.prod.config.cjs', 'webpack.prod.config.mjs', 'webpack.prod.config.ts', 'webpack.prod.config.cts', 'webpack.prod.config.mts', 'webpack.production.js', 'webpack.production.cjs', 'webpack.production.mjs', 'webpack.production.ts', 'webpack.production.cts', 'webpack.production.mts', 'webpack.server.js', 'webpack.server.cjs', 'webpack.server.mjs', 'webpack.server.ts', 'webpack.server.cts', 'webpack.server.mts', 'webpack.client.js', 'webpack.client.cjs', 'webpack.client.mjs', 'webpack.client.ts', 'webpack.client.cts', 'webpack.client.mts', 'webpack.config.server.js', 'webpack.config.server.cjs', 'webpack.config.server.mjs', 'webpack.config.server.ts', 'webpack.config.server.cts', 'webpack.config.server.mts', 'webpack.config.client.js', 'webpack.config.client.cjs', 'webpack.config.client.mjs', 'webpack.config.client.ts', 'webpack.config.client.cts', 'webpack.config.client.mts', 'webpack.config.production.babel.js', 'webpack.config.production.babel.ts', 'webpack.config.prod.babel.js', 'webpack.config.prod.babel.cjs', 'webpack.config.prod.babel.mjs', 'webpack.config.prod.babel.ts', 'webpack.config.prod.babel.cts', 'webpack.config.prod.babel.mts', 'webpack.config.prod.js', 'webpack.config.prod.cjs', 'webpack.config.prod.mjs', 'webpack.config.prod.ts', 'webpack.config.prod.cts', 'webpack.config.prod.mts', 'webpack.config.production.js', 'webpack.config.production.cjs', 'webpack.config.production.mjs', 'webpack.config.production.ts', 'webpack.config.production.cts', 'webpack.config.production.mts', 'webpack.config.staging.js', 'webpack.config.staging.cjs', 'webpack.config.staging.mjs', 'webpack.config.staging.ts', 'webpack.config.staging.cts', 'webpack.config.staging.mts', 'webpack.config.babel.js', 'webpack.config.babel.ts', 'webpack.config.base.babel.js', 'webpack.config.base.babel.ts', 'webpack.config.base.js', 'webpack.config.base.cjs', 'webpack.config.base.mjs', 'webpack.config.base.ts', 'webpack.config.base.cts', 'webpack.config.base.mts', 'webpack.config.staging.babel.js', 'webpack.config.staging.babel.ts', 'webpack.config.coffee', 'webpack.config.test.js', 'webpack.config.test.cjs', 'webpack.config.test.mjs', 'webpack.config.test.ts', 'webpack.config.test.cts', 'webpack.config.test.mts', 'webpack.config.vendor.js', 'webpack.config.vendor.cjs', 'webpack.config.vendor.mjs', 'webpack.config.vendor.ts', 'webpack.config.vendor.cts', 'webpack.config.vendor.mts', 'webpack.config.vendor.production.js', 'webpack.config.vendor.production.cjs', 'webpack.config.vendor.production.mjs', 'webpack.config.vendor.production.ts', 'webpack.config.vendor.production.cts', 'webpack.config.vendor.production.mts', 'webpack.test.js', 'webpack.test.cjs', 'webpack.test.mjs', 'webpack.test.ts', 'webpack.test.cts', 'webpack.test.mts', 'webpack.dist.js', 'webpack.dist.cjs', 'webpack.dist.mjs', 'webpack.dist.ts', 'webpack.dist.cts', 'webpack.dist.mts', 'webpackfile.js', 'webpackfile.cjs', 'webpackfile.mjs', 'webpackfile.ts', 'webpackfile.cts', 'webpackfile.mts'],
  },
  'windi': {
    iconRef: 'catppuccin:windi',
    fileExtensions: ['windi'],
    fileNames: ['windi.config.js', 'windi.config.cjs', 'windi.config.ts', 'windi.config.cts', 'windi.config.json'],
  },
  'workflow': {
    iconRef: 'catppuccin:workflow',
    fileExtensions: ['workflows/yml', 'workflows/yaml'],
    languageIds: ['github-actions-workflow'],
  },
  'wrangler': {
    iconRef: 'catppuccin:wrangler',
    fileNames: ['wrangler.toml', 'wrangler.json', 'wrangler.jsonc'],
  },
  'wxt': {
    iconRef: 'catppuccin:wxt',
    fileNames: ['wxt.config.js', 'wxt.config.ts'],
  },
  'xaml': {
    iconRef: 'catppuccin:xaml',
    fileExtensions: ['xaml', 'axaml'],
  },
  'xcode': {
    iconRef: 'catppuccin:xcode',
    fileExtensions: ['xcsettings', 'xcworkspacedata'],
  },
  'xmake': {
    iconRef: 'catppuccin:xmake',
    fileNames: ['xmake.lua'],
  },
  'xml': {
    iconRef: 'catppuccin:xml',
    fileExtensions: ['xml', 'plist', 'xsd', 'dtd', 'xsl', 'xslt', 'resx', 'iml', 'xquery', 'tmLanguage', 'manifest', 'project', 'xml.dist', 'xml.dist.sample', 'dmn', 'jrxml'],
    fileNames: ['.htaccess'],
  },
  'yaml': {
    iconRef: 'catppuccin:yaml',
    fileExtensions: ['yml', 'yaml'],
    languageIds: ['yaml', 'spring-boot-properties-yaml'],
  },
  'yarn-lock': {
    iconRef: 'catppuccin:yarn-lock',
    fileNames: ['yarn.lock'],
  },
  'yarn': {
    iconRef: 'catppuccin:yarn',
    fileNames: ['.yarnrc', '.yarnclean', '.yarn-integrity', 'yarn-error.log', '.yarnrc.yml', '.yarnrc.yaml', 'yarn.config.cjs'],
  },
  'zap': {
    iconRef: 'catppuccin:zap',
    fileExtensions: ['zap'],
  },
  'zig': {
    iconRef: 'catppuccin:zig',
    fileExtensions: ['zig'],
  },
  'zip': {
    iconRef: 'catppuccin:zip',
    fileExtensions: ['7z', 'arj', 'aseprite-extension', 'bz', 'bz2', 'db', 'gz', 'paq8n', 'paq8o', 'pkg', 'rar', 'tar', 'tbz', 'tbz2', 'tgz', 'xz', 'z', 'zip', 'zpaq', 'zst'],
  },
};

export const folderIconMapping: Record<string, FolderIconEntry> = {
  'admin': {
    iconRef: 'catppuccin:folder-admin',
    iconRefOpen: 'catppuccin:folder-admin-open',
    folderNames: ['admin', 'admins', 'manager', 'managers', 'moderator', 'moderators'],
  },
  'android': {
    iconRef: 'catppuccin:folder-android',
    iconRefOpen: 'catppuccin:folder-android-open',
    folderNames: ['android'],
  },
  'animation': {
    iconRef: 'catppuccin:folder-animation',
    iconRefOpen: 'catppuccin:folder-animation-open',
    folderNames: ['anim', 'anims', 'animation', 'animations', 'animated'],
  },
  'api': {
    iconRef: 'catppuccin:folder-api',
    iconRefOpen: 'catppuccin:folder-api-open',
    folderNames: ['api', 'apis', 'restapi'],
  },
  'app': {
    iconRef: 'catppuccin:folder-app',
    iconRefOpen: 'catppuccin:folder-app-open',
    folderNames: ['app', 'apps'],
  },
  'assets': {
    iconRef: 'catppuccin:folder-assets',
    iconRefOpen: 'catppuccin:folder-assets-open',
    folderNames: ['asset', 'assets'],
  },
  'audio': {
    iconRef: 'catppuccin:folder-audio',
    iconRefOpen: 'catppuccin:folder-audio-open',
    folderNames: ['aud', 'auds', 'audio', 'audios', 'music', 'sound', 'sounds'],
  },
  'audit': {
    iconRef: 'catppuccin:folder-audit',
    iconRefOpen: 'catppuccin:folder-audit-open',
    folderNames: ['audit', 'audits'],
  },
  'aws': {
    iconRef: 'catppuccin:folder-aws',
    iconRefOpen: 'catppuccin:folder-aws-open',
    folderNames: ['aws', '.aws'],
  },
  'azure-devops': {
    iconRef: 'catppuccin:folder-azure-devops',
    iconRefOpen: 'catppuccin:folder-azure-devops-open',
    folderNames: ['.azure-devops', '.azuredevops'],
  },
  'azure-pipelines': {
    iconRef: 'catppuccin:folder-azure-pipelines',
    iconRefOpen: 'catppuccin:folder-azure-pipelines-open',
    folderNames: ['.azure-pipelines'],
  },
  'benchmark': {
    iconRef: 'catppuccin:folder-benchmark',
    iconRefOpen: 'catppuccin:folder-benchmark-open',
    folderNames: ['benchmark', 'benchmarks', 'bench', 'benches', 'performance', 'measure', 'measures', 'measurement'],
  },
  'caddy': {
    iconRef: 'catppuccin:folder-caddy',
    iconRefOpen: 'catppuccin:folder-caddy-open',
    folderNames: ['.caddy', '.caddyfiles', 'caddy', 'caddyfiles'],
  },
  'cargo': {
    iconRef: 'catppuccin:folder-cargo',
    iconRefOpen: 'catppuccin:folder-cargo-open',
    folderNames: ['.cargo'],
  },
  'circle-ci': {
    iconRef: 'catppuccin:folder-circle-ci',
    iconRefOpen: 'catppuccin:folder-circle-ci-open',
    folderNames: ['.circleci'],
  },
  'client': {
    iconRef: 'catppuccin:folder-client',
    iconRefOpen: 'catppuccin:folder-client-open',
    folderNames: ['client', 'clients', 'frontend', 'frontends', 'pwa'],
  },
  'cloud': {
    iconRef: 'catppuccin:folder-cloud',
    iconRefOpen: 'catppuccin:folder-cloud-open',
    folderNames: ['cloud'],
  },
  'command': {
    iconRef: 'catppuccin:folder-command',
    iconRefOpen: 'catppuccin:folder-command-open',
    folderNames: ['command', 'commands', 'cmd', 'cli', 'clis'],
  },
  'components': {
    iconRef: 'catppuccin:folder-components',
    iconRefOpen: 'catppuccin:folder-components-open',
    folderNames: ['components', 'widget', 'widgets', 'fragments'],
  },
  'composables': {
    iconRef: 'catppuccin:folder-composables',
    iconRefOpen: 'catppuccin:folder-composables-open',
    folderNames: ['composable', 'composables'],
  },
  'config': {
    iconRef: 'catppuccin:folder-config',
    iconRefOpen: 'catppuccin:folder-config-open',
    folderNames: ['cfg', 'cfgs', 'conf', 'confs', '.config', 'config', 'configs', 'configuration', 'configurations', 'setting', '.setting', 'settings', '.settings', 'META-INF', 'option', 'options'],
  },
  'connection': {
    iconRef: 'catppuccin:folder-connection',
    iconRefOpen: 'catppuccin:folder-connection-open',
    folderNames: ['connection', 'connections', 'integration', 'integrations'],
  },
  'constant': {
    iconRef: 'catppuccin:folder-constant',
    iconRefOpen: 'catppuccin:folder-constant-open',
    folderNames: ['constant', 'constants'],
  },
  'content': {
    iconRef: 'catppuccin:folder-content',
    iconRefOpen: 'catppuccin:folder-content-open',
    folderNames: ['content', 'contents'],
  },
  'controllers': {
    iconRef: 'catppuccin:folder-controllers',
    iconRefOpen: 'catppuccin:folder-controllers-open',
    folderNames: ['controller', 'controllers', 'service', 'services', 'provider', 'providers', 'handler', 'handlers'],
  },
  'core': {
    iconRef: 'catppuccin:folder-core',
    iconRefOpen: 'catppuccin:folder-core-open',
    folderNames: ['core'],
  },
  'coverage': {
    iconRef: 'catppuccin:folder-coverage',
    iconRefOpen: 'catppuccin:folder-coverage-open',
    folderNames: ['coverage', '.nyc-output', '.nyc_output', 'e2e', 'it', 'integration-test', 'integration-tests', '__integration-test__', '__integration-tests__'],
  },
  'cursor': {
    iconRef: 'catppuccin:folder-cursor',
    iconRefOpen: 'catppuccin:folder-cursor-open',
    folderNames: ['.cursor'],
  },
  'cypress': {
    iconRef: 'catppuccin:folder-cypress',
    iconRefOpen: 'catppuccin:folder-cypress-open',
    folderNames: ['cypress', '.cypress'],
  },
  'database': {
    iconRef: 'catppuccin:folder-database',
    iconRefOpen: 'catppuccin:folder-database-open',
    folderNames: ['db', 'database', 'databases', 'sql', 'data', '_data'],
  },
  'debug': {
    iconRef: 'catppuccin:folder-debug',
    iconRefOpen: 'catppuccin:folder-debug-open',
    folderNames: ['debug', 'debugging'],
  },
  'devcontainer': {
    iconRef: 'catppuccin:folder-devcontainer',
    iconRefOpen: 'catppuccin:folder-devcontainer-open',
    folderNames: ['.devcontainer'],
  },
  'direnv': {
    iconRef: 'catppuccin:folder-direnv',
    iconRefOpen: 'catppuccin:folder-direnv-open',
    folderNames: ['.direnv'],
  },
  'dist': {
    iconRef: 'catppuccin:folder-dist',
    iconRefOpen: 'catppuccin:folder-dist-open',
    folderNames: ['dist', 'dist-newstyle', 'out', 'build', 'release', 'bin', '.output'],
  },
  'docker': {
    iconRef: 'catppuccin:folder-docker',
    iconRefOpen: 'catppuccin:folder-docker-open',
    folderNames: ['docker', 'dockerfiles', '.docker'],
  },
  'docs': {
    iconRef: 'catppuccin:folder-docs',
    iconRefOpen: 'catppuccin:folder-docs-open',
    folderNames: ['_post', '_posts', 'doc', 'docs', 'document', 'documents', 'documentation', 'post', 'posts', 'article', 'articles'],
  },
  'download': {
    iconRef: 'catppuccin:folder-download',
    iconRefOpen: 'catppuccin:folder-download-open',
    folderNames: ['downloads', 'download'],
  },
  'drizzle-orm': {
    iconRef: 'catppuccin:folder-drizzle-orm',
    iconRefOpen: 'catppuccin:folder-drizzle-orm-open',
    folderNames: ['drizzle'],
  },
  'examples': {
    iconRef: 'catppuccin:folder-examples',
    iconRefOpen: 'catppuccin:folder-examples-open',
    folderNames: ['demo', 'demos', 'example', 'examples', 'sample', 'samples', 'sample-data'],
  },
  'fastlane': {
    iconRef: 'catppuccin:folder-fastlane',
    iconRefOpen: 'catppuccin:folder-fastlane-open',
    folderNames: ['fastlane', '.fastlane'],
  },
  'firebase': {
    iconRef: 'catppuccin:folder-firebase',
    iconRefOpen: 'catppuccin:folder-firebase-open',
    folderNames: ['firebase', '.firebase'],
  },
  'fonts': {
    iconRef: 'catppuccin:folder-fonts',
    iconRefOpen: 'catppuccin:folder-fonts-open',
    folderNames: ['font', 'fonts'],
  },
  'forgejo': {
    iconRef: 'catppuccin:folder-forgejo',
    iconRefOpen: 'catppuccin:folder-forgejo-open',
    folderNames: ['.forgejo'],
  },
  'functions': {
    iconRef: 'catppuccin:folder-functions',
    iconRefOpen: 'catppuccin:folder-functions-open',
    folderNames: ['func', 'funcs', 'function', 'functions', 'lambda', 'lambdas', 'logic', 'math', 'maths', 'calc', 'calcs', 'calculation', 'calculations'],
  },
  'fvm': {
    iconRef: 'catppuccin:folder-fvm',
    iconRefOpen: 'catppuccin:folder-fvm-open',
    folderNames: ['.fvm'],
  },
  'git': {
    iconRef: 'catppuccin:folder-git',
    iconRefOpen: 'catppuccin:folder-git-open',
    folderNames: ['.git', 'patches', 'githooks', '.githooks', 'submodules', '.submodules'],
  },
  'github': {
    iconRef: 'catppuccin:folder-github',
    iconRefOpen: 'catppuccin:folder-github-open',
    folderNames: ['.github', 'github'],
  },
  'gitlab': {
    iconRef: 'catppuccin:folder-gitlab',
    iconRefOpen: 'catppuccin:folder-gitlab-open',
    folderNames: ['.gitlab'],
  },
  'gradle': {
    iconRef: 'catppuccin:folder-gradle',
    iconRefOpen: 'catppuccin:folder-gradle-open',
    folderNames: ['gradle', '.gradle'],
  },
  'graphql': {
    iconRef: 'catppuccin:folder-graphql',
    iconRefOpen: 'catppuccin:folder-graphql-open',
    folderNames: ['graphql', 'gql'],
  },
  'hooks': {
    iconRef: 'catppuccin:folder-hooks',
    iconRefOpen: 'catppuccin:folder-hooks-open',
    folderNames: ['hook', 'hooks', 'trigger', 'triggers'],
  },
  'husky': {
    iconRef: 'catppuccin:folder-husky',
    iconRefOpen: 'catppuccin:folder-husky-open',
    folderNames: ['husky', '.husky'],
  },
  'images': {
    iconRef: 'catppuccin:folder-images',
    iconRefOpen: 'catppuccin:folder-images-open',
    folderNames: ['_images', '_image', '_imgs', '_img', 'images', 'image', 'imgs', 'img', 'icons', 'icon', 'icos', 'ico', 'figures', 'figure', 'figs', 'fig', 'screenshot', 'screenshots', 'screengrab', 'screengrabs', 'pic', 'pics', 'picture', 'pictures', 'photo', 'photos', 'photograph', 'photographs'],
  },
  'include': {
    iconRef: 'catppuccin:folder-include',
    iconRefOpen: 'catppuccin:folder-include-open',
    folderNames: ['include', 'includes'],
  },
  'intellij': {
    iconRef: 'catppuccin:folder-intellij',
    iconRefOpen: 'catppuccin:folder-intellij-open',
    folderNames: ['.idea'],
  },
  'javascript': {
    iconRef: 'catppuccin:folder-javascript',
    iconRefOpen: 'catppuccin:folder-javascript-open',
    folderNames: ['js', 'javascript'],
  },
  'kubernetes': {
    iconRef: 'catppuccin:folder-kubernetes',
    iconRefOpen: 'catppuccin:folder-kubernetes-open',
    folderNames: ['kubernetes', '.kubernetes', 'k8s', '.k8s'],
  },
  'layouts': {
    iconRef: 'catppuccin:folder-layouts',
    iconRefOpen: 'catppuccin:folder-layouts-open',
    folderNames: ['layout', 'layouts', '_layouts'],
  },
  'lib': {
    iconRef: 'catppuccin:folder-lib',
    iconRefOpen: 'catppuccin:folder-lib-open',
    folderNames: ['lib', 'libs', 'library', 'libraries', '.lib', '.libs', '.library', '.libraries'],
  },
  'linux': {
    iconRef: 'catppuccin:folder-linux',
    iconRefOpen: 'catppuccin:folder-linux-open',
    folderNames: ['linux'],
  },
  'locales': {
    iconRef: 'catppuccin:folder-locales',
    iconRefOpen: 'catppuccin:folder-locales-open',
    folderNames: ['i18n', 'internationalization', 'lang', 'langs', 'language', 'languages', 'locale', 'locales', 'l10n', 'localization', 'translation', 'translate', 'translations', '.tx'],
  },
  'luau': {
    iconRef: 'catppuccin:folder-luau',
    iconRefOpen: 'catppuccin:folder-luau-open',
    folderNames: ['luau_packages'],
  },
  'lune': {
    iconRef: 'catppuccin:folder-lune',
    iconRefOpen: 'catppuccin:folder-lune-open',
    folderNames: ['lune_packages'],
  },
  'macos': {
    iconRef: 'catppuccin:folder-macos',
    iconRefOpen: 'catppuccin:folder-macos-open',
    folderNames: ['mac', 'macos'],
  },
  'messages': {
    iconRef: 'catppuccin:folder-messages',
    iconRefOpen: 'catppuccin:folder-messages-open',
    folderNames: ['message', 'messages'],
  },
  'middleware': {
    iconRef: 'catppuccin:folder-middleware',
    iconRefOpen: 'catppuccin:folder-middleware-open',
    folderNames: ['middleware', 'middlewares'],
  },
  'mocks': {
    iconRef: 'catppuccin:folder-mocks',
    iconRefOpen: 'catppuccin:folder-mocks-open',
    folderNames: ['_draft', '_drafts', 'mock', 'mocks', 'fixture', 'fixtures', 'draft', 'drafts', 'concept', 'concepts', 'sketch', 'sketches'],
  },
  'moonrepo': {
    iconRef: 'catppuccin:folder-moonrepo',
    iconRefOpen: 'catppuccin:folder-moonrepo-open',
    folderNames: ['.moon'],
  },
  'next': {
    iconRef: 'catppuccin:folder-next',
    iconRefOpen: 'catppuccin:folder-next-open',
    folderNames: ['.next'],
  },
  'nix': {
    iconRef: 'catppuccin:folder-nix',
    iconRefOpen: 'catppuccin:folder-nix-open',
    folderNames: ['nix'],
  },
  'node': {
    iconRef: 'catppuccin:folder-node',
    iconRefOpen: 'catppuccin:folder-node-open',
    folderNames: ['node_modules'],
  },
  'nuxt': {
    iconRef: 'catppuccin:folder-nuxt',
    iconRefOpen: 'catppuccin:folder-nuxt-open',
    folderNames: ['nuxt', '.nuxt'],
  },
  'packages': {
    iconRef: 'catppuccin:folder-packages',
    iconRefOpen: 'catppuccin:folder-packages-open',
    folderNames: ['package', 'packages', 'pkg', 'pkgs', 'crate', 'crates'],
  },
  'pesde': {
    iconRef: 'catppuccin:folder-pesde',
    iconRefOpen: 'catppuccin:folder-pesde-open',
    folderNames: ['.pesde', 'pesde'],
  },
  'plugins': {
    iconRef: 'catppuccin:folder-plugins',
    iconRefOpen: 'catppuccin:folder-plugins-open',
    folderNames: ['plugin', 'plugins', '_plugins', 'mod', 'mods', 'modding', 'extension', 'extensions', 'addon', 'addons', 'module', 'modules'],
  },
  'pre-commit': {
    iconRef: 'catppuccin:folder-pre-commit',
    iconRefOpen: 'catppuccin:folder-pre-commit-open',
    folderNames: ['pre-commit-channel'],
  },
  'prisma': {
    iconRef: 'catppuccin:folder-prisma',
    iconRefOpen: 'catppuccin:folder-prisma-open',
    folderNames: ['prisma'],
  },
  'private': {
    iconRef: 'catppuccin:folder-private',
    iconRefOpen: 'catppuccin:folder-private-open',
    folderNames: ['private'],
  },
  'proto': {
    iconRef: 'catppuccin:folder-proto',
    iconRefOpen: 'catppuccin:folder-proto-open',
    folderNames: ['protobuf', 'protobufs', 'proto', 'protos'],
  },
  'public': {
    iconRef: 'catppuccin:folder-public',
    iconRefOpen: 'catppuccin:folder-public-open',
    folderNames: ['_site', 'public', 'www', 'wwwroot', 'web', 'website', 'site', 'browser', 'browsers'],
  },
  'queue': {
    iconRef: 'catppuccin:folder-queue',
    iconRefOpen: 'catppuccin:folder-queue-open',
    folderNames: ['queue', 'queues', 'bull', 'mq'],
  },
  'redux': {
    iconRef: 'catppuccin:folder-redux',
    iconRefOpen: 'catppuccin:folder-redux-open',
    folderNames: ['redux'],
  },
  'renovate': {
    iconRef: 'catppuccin:folder-renovate',
    iconRefOpen: 'catppuccin:folder-renovate-open',
    folderNames: ['.renovate', 'renovate'],
  },
  'roblox': {
    iconRef: 'catppuccin:folder-roblox',
    iconRefOpen: 'catppuccin:folder-roblox-open',
    folderNames: ['roblox_packages', 'roblox_server_packages'],
  },
  'routes': {
    iconRef: 'catppuccin:folder-routes',
    iconRefOpen: 'catppuccin:folder-routes-open',
    folderNames: ['routes', 'router', 'routers'],
  },
  'sass': {
    iconRef: 'catppuccin:folder-sass',
    iconRefOpen: 'catppuccin:folder-sass-open',
    folderNames: ['sass', '_sass', 'scss', '_scss'],
  },
  'scripts': {
    iconRef: 'catppuccin:folder-scripts',
    iconRefOpen: 'catppuccin:folder-scripts-open',
    folderNames: ['script', 'scripts', 'scripting'],
  },
  'security': {
    iconRef: 'catppuccin:folder-security',
    iconRefOpen: 'catppuccin:folder-security-open',
    folderNames: ['security'],
  },
  'server': {
    iconRef: 'catppuccin:folder-server',
    iconRefOpen: 'catppuccin:folder-server-open',
    folderNames: ['server', 'servers', 'backend'],
  },
  'shared': {
    iconRef: 'catppuccin:folder-shared',
    iconRefOpen: 'catppuccin:folder-shared-open',
    folderNames: ['share', 'shared'],
  },
  'src': {
    iconRef: 'catppuccin:folder-src',
    iconRefOpen: 'catppuccin:folder-src-open',
    folderNames: ['src', 'srcs', 'source', 'sources', 'code'],
  },
  'storybook': {
    iconRef: 'catppuccin:folder-storybook',
    iconRefOpen: 'catppuccin:folder-storybook-open',
    folderNames: ['.storybook', 'storybook', 'stories', '__stories__'],
  },
  'styles': {
    iconRef: 'catppuccin:folder-styles',
    iconRefOpen: 'catppuccin:folder-styles-open',
    folderNames: ['css', 'stylesheet', 'stylesheets', 'style', 'styles'],
  },
  'svg': {
    iconRef: 'catppuccin:folder-svg',
    iconRefOpen: 'catppuccin:folder-svg-open',
    folderNames: ['svg', 'svgs'],
  },
  'tauri': {
    iconRef: 'catppuccin:folder-tauri',
    iconRefOpen: 'catppuccin:folder-tauri-open',
    folderNames: ['src-tauri'],
  },
  'temp': {
    iconRef: 'catppuccin:folder-temp',
    iconRefOpen: 'catppuccin:folder-temp-open',
    folderNames: ['temp', '.temp', 'tmp', '.tmp', 'cached', 'cache', '.cache'],
  },
  'templates': {
    iconRef: 'catppuccin:folder-templates',
    iconRefOpen: 'catppuccin:folder-templates-open',
    folderNames: ['template', 'templates'],
  },
  'tests': {
    iconRef: 'catppuccin:folder-tests',
    iconRefOpen: 'catppuccin:folder-tests-open',
    folderNames: ['test', 'tests', 'testing', '__tests__', '__snapshots__', '__mocks__', '__fixtures__', '__test__', 'spec', 'specs'],
  },
  'themes': {
    iconRef: 'catppuccin:folder-themes',
    iconRefOpen: 'catppuccin:folder-themes-open',
    folderNames: ['theme', 'themes'],
  },
  'turbo': {
    iconRef: 'catppuccin:folder-turbo',
    iconRefOpen: 'catppuccin:folder-turbo-open',
    folderNames: ['.turbo'],
  },
  'types': {
    iconRef: 'catppuccin:folder-types',
    iconRefOpen: 'catppuccin:folder-types-open',
    folderNames: ['typings', '@types', 'types'],
  },
  'upload': {
    iconRef: 'catppuccin:folder-upload',
    iconRefOpen: 'catppuccin:folder-upload-open',
    folderNames: ['uploads', 'upload'],
  },
  'utils': {
    iconRef: 'catppuccin:folder-utils',
    iconRefOpen: 'catppuccin:folder-utils-open',
    folderNames: ['util', 'utils', 'utility', 'utilities'],
  },
  'vercel': {
    iconRef: 'catppuccin:folder-vercel',
    iconRefOpen: 'catppuccin:folder-vercel-open',
    folderNames: ['vercel', '.vercel', 'now', '.now'],
  },
  'video': {
    iconRef: 'catppuccin:folder-video',
    iconRefOpen: 'catppuccin:folder-video-open',
    folderNames: ['vid', 'vids', 'video', 'videos', 'movie', 'movies'],
  },
  'views': {
    iconRef: 'catppuccin:folder-views',
    iconRefOpen: 'catppuccin:folder-views-open',
    folderNames: ['view', 'views', 'screen', 'screens', 'page', 'pages', 'public_html', 'html'],
  },
  'vscode': {
    iconRef: 'catppuccin:folder-vscode',
    iconRefOpen: 'catppuccin:folder-vscode-open',
    folderNames: ['.vscode', '.vscode-test'],
  },
  'windows': {
    iconRef: 'catppuccin:folder-windows',
    iconRefOpen: 'catppuccin:folder-windows-open',
    folderNames: ['windows'],
  },
  'workflows': {
    iconRef: 'catppuccin:folder-workflows',
    iconRefOpen: 'catppuccin:folder-workflows-open',
    folderNames: ['workflow', 'workflows', 'ci', '.ci'],
  },
  'wxt': {
    iconRef: 'catppuccin:folder-wxt',
    iconRefOpen: 'catppuccin:folder-wxt-open',
    folderNames: ['.wxt'],
  },
  'xcode': {
    iconRef: 'catppuccin:folder-xcode',
    iconRefOpen: 'catppuccin:folder-xcode-open',
    folderNames: ['xcodeproj', 'xcworkspace', 'xcshareddata', 'xcschemes'],
  },
  'xmake': {
    iconRef: 'catppuccin:folder-xmake',
    iconRefOpen: 'catppuccin:folder-xmake-open',
    folderNames: ['xmake', '.xmake'],
  },
  'yarn': {
    iconRef: 'catppuccin:folder-yarn',
    iconRefOpen: 'catppuccin:folder-yarn-open',
    folderNames: ['.yarn'],
  },
};
