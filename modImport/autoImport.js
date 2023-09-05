const { Project } = require('ts-morph');

const rootModulePath = './src/app.module.ts';

function addImportToRootModule(packageName) {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(rootModulePath);
  const importName = `${packageName.charAt(0).toUpperCase() + packageName.slice(1)}Module`;
  // Añadir import al inicio del archivo
  sourceFile.addImportDeclaration({
    defaultImport: importName,
    moduleSpecifier: packageName
  });
  // Añadir el módulo a los imports de @Module
  const ngModuleDecorator = sourceFile.getDecorators().find(d => d.getName() === 'Module');
  if (ngModuleDecorator) {
    console.log(`Encontrado @Module`);
    const moduleDecoratorArgument = ngModuleDecorator.getArguments()[0];
    const importsProperty = moduleDecoratorArgument.getProperty('imports');
    if (importsProperty) {
      const initializer = importsProperty.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
      initializer.addElement(importName);
      console.log(`Importado ${packageName}`);
    }
  }
  console.log('algo...');
  sourceFile.saveSync();
  console.log('archivo save...');
}
// Leer los paquetes instalados recientemente
const packages = process.argv.slice(2);
packages.forEach(pkg => addImportToRootModule(pkg));
