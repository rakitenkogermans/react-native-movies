module.exports = componentName => ({
  content: `import { ${componentName}Props } from './${componentName}.types';
import ${componentName}View from './${componentName}.view';

const ${componentName} = (props: ${componentName}Props) => (
    <${componentName}View />
);

export default ${componentName};
`,
  isIndex: true,
  extension: '.tsx',
});
