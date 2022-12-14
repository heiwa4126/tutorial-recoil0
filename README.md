# tutorial-recoil0

- [Recoilのチュートリアル](https://recoiljs.org/docs/basic-tutorial/intro)
  - [Learn Recoil with Live Walkthrough](https://app.sideguide.dev/recoil/tutorial/)
- [React Recoil入門 Todoアプリを作成してRecoilの基本設定を理解 \| アールエフェクト](https://reffect.co.jp/react/react-recoil)

をTypeScriptでやってみたもの。

## 開発

Viteなので
```bash
npm i
npm run dev
```

## ビルド

Viteなので
```bash
npm i
npm run build
npm run preview
```

## 自分なりのまとめ

### atom

[atom(options) | Recoil](https://recoiljs.org/docs/api-reference/core/atom)

MVCのM的なもの。stateを定義するものであり、stateそのものでもある。

使用方法は
- stateの変更がある場合 - [useRecoilState(state)](https://recoiljs.org/docs/api-reference/core/useRecoilState)
- stateの参照だけの場合 - [useRecoilValue(state)](https://recoiljs.org/docs/api-reference/core/useRecoilValue)

### selector

[selector(options) | Recoil](https://recoiljs.org/docs/api-reference/core/selector)

SQLのview的なもの。しかしこれもstate。getterとsetter(こっちはオプション)を指定して作れる。
stateなので
[useRecoilState(state)](https://recoiljs.org/docs/api-reference/core/useRecoilState), [useRecoilValue(state)](https://recoiljs.org/docs/api-reference/core/useRecoilValue) で使える。

実装内部ではget(atom), set(atom)が使える。

### useSetRecoilState(state)

[useSetRecoilState(state) | Recoil](https://recoiljs.org/docs/api-reference/core/useSetRecoilState)

stateのsetterを返す関数。なんだけどそう単純ではない。
