import * as ts from "typescript";

export function compileTypeScript(code: string) {
  const jsCode = ts.transpile(code, {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.ESNext,
  });
  return jsCode;
}
