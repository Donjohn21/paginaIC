const { execSync } = require('child_process');

test('Hola Mundo se imprime en consola', () => {
  const output = execSync('node index.js').toString();
  expect(output).toBe('Hola Mundo\n');
});
