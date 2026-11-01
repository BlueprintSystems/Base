import { exit, stdin, stdout } from 'node:process';
import * as readline from 'node:readline/promises';

import { database } from '../platforms/node.ts';
import { usersT } from './sqlite-schema.ts';

async function ask(question: string): Promise<boolean> {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  let answer;
  do {
    // oxlint-disable-next-line no-await-in-loop
    answer = await rl.question(question);
  } while (answer !== 's' && answer !== 'n');

  return answer === 's';
}

async function main(): Promise<void> {
  console.log('Conectando a la base de datos...');
  const db = database();

  // Antimacanas
  if (!(await ask('¿Borrar todo e insertar datos de ejemplo [s/n]? '))) {
    console.log('Cancelando operación...');
    return;
  }

  await db.delete(usersT);

  console.log('Insertando datos de ejemplo...');

  await db.insert(usersT).values([
    { name: 'Mateo', email: 'mateo@example.com' },
    { name: 'Marcos', email: 'marcos@example.com' },
    { name: 'Lucas', email: 'lucas@example.com' },
    { name: 'Juan', email: 'juan@example.com' },
  ]);

  console.log('Listo!');
}

if (import.meta.main) {
  await main();
  exit(0);
} else {
  throw new Error('El seeder se ejecuta desde la línea de comandos, no desde el servidor');
}
