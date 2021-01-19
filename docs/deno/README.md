# Deno Test

## 安装

1. 从 github 下载压缩包（已经支持 mac 的 arm 芯片），目录地址记为 my-path
2. 复制官方的安装脚本到本地（https://deno.land/x/install/install.sh），创建为install_deno.sh
3. 将 36 行的 curl 脚本替换为本地复制 cp my-path "$exe.zip"

```shell
# curl --fail --location --progress-bar --output "$exe.zip" "$deno_uri"
cp /Users/shuxiaoman/Downloads/deno-aarch64-apple-darwin.zip "$exe.zip"
```

4. 执行脚本

```shell
sh install_deno.sh
```

- 执行完成后，会提示添加 path

5. 配置全局 path，以 zsh 为例：

   `export DENO_INSTALL="/Users/shuxiaoman/.deno"`

   `export PATH="$DENO_INSTALL/bin:$PATH"`

6. 重启终端
7. 检查版本

```shell
deno -V #当前版本
deno --version #版本详情
```
