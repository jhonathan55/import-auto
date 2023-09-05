import { Injectable } from '@nestjs/common';
import { Project, SyntaxKind } from 'ts-morph';

@Injectable()
export class ModifyModuleService {
//   private readonly filePath = './src/path/to/your/module.ts'; // Ajusta la ruta a tu módulo

//   modifyFileToAddProvider(providerName: string) {
//     const project = new Project();
//     const sourceFile = project.addSourceFileAtPath(this.filePath);
//     const ngModuleDecorator = sourceFile.getDecorators().find(d => d.getName() === 'Module');

//     if (ngModuleDecorator) {
//       const moduleDecoratorArgument = ngModuleDecorator.getArguments()[0];

//       if (moduleDecoratorArgument && SyntaxKind.ObjectLiteralExpression === moduleDecoratorArgument.getKind()) {
//         const providersProperty = moduleDecoratorArgument.getProperty('providers');

//         if (providersProperty && SyntaxKind.PropertyAssignment === providersProperty.getKind()) {
//           const initializer = providersProperty.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
//           initializer.addElement(providerName);
//         } else {
//           moduleDecoratorArgument.addPropertyAssignment({
//             name: 'providers',
//             initializer: `[${providerName}]`
//           });
//         }
//       }
//       sourceFile.saveSync();
//     }
//   }
}
