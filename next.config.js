/** @type {import('next').NextConfig} */

let exportObj = {
  reactStrictMode: true,
}

// @ts-ignore
const isGithubActions = process.env.GITHUB_ACTIONS || false

if (isGithubActions) {
  // @ts-ignore
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  let ref = process.env.NEXT_PUBLIC_PREVIEW
  if (ref !== undefined) ref = ref.replace('refs/pull/', '').replace('/merge', '')
  console.log('Repo: ', repo, " ref: ", ref)
  let assetPrefix = `/${repo}/`
  let basePath = `/${repo}/pr-preview/pr-${ref}`
  exportObj.assetPrefix = assetPrefix
  exportObj.basePath = basePath
  exportObj.images = {
    loader: 'akamai',
    path: '',
  }
}

module.exports = exportObj