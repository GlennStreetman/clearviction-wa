/** @type {import('next').NextConfig} */

let exportObj = {
  reactStrictMode: true,
}

// @ts-ignore
const isGithubActions = process.env.GITHUB_ACTIONS || false

if (isGithubActions) {
  // @ts-ignore
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  const ref = process.env.NEXT_PUBLIC_PREVIEW

  let assetPrefix = `/${repo}/`
  let basePath = `/${repo}/pr-preview/${ref}/`
  exportObj.assetPrefix = assetPrefix
  exportObj.basePath = basePath
  exportObj.images = {
    loader: 'akamai',
    path: '',
  }
}

module.exports = exportObj