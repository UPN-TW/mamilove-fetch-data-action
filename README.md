# mamilove fetch data action

This action fetch mamilove api data.

## Inputs

## `type`

**Required** action type

## Outputs

## `result`

The result.

## Build

```
$ npm run build 
```

## Publish

更新 tag 版本號

## 上版流程

- 1. local run `npm run build`
- 2. 發 pr
- 3. release tag 打上 tag e.g. v1.2.3


## Example usage

```
uses: actions/mamilove-fetch-data-action@v1.0
with:
  type: 'latest-news'
```