module.exports = componentName => ({
  content: `export type ${componentName}Props = {};
export type ${componentName}ViewProps = {};
`,
  extension: '.types.tsx',
});
