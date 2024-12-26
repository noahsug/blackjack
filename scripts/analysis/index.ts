import isMain from 'es-main';

function run() {
  console.log('hi');
}

if (isMain(import.meta)) {
  run();
}
