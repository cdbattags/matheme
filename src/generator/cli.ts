import {generateAll} from './index';

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const tierFlag = args.indexOf('--tier');
  const tier = tierFlag !== -1 ? (parseInt(args[tierFlag + 1], 10) as 1 | 2 | 3) : 1;

  const outFlag = args.indexOf('--out');
  const outDir = outFlag !== -1 ? args[outFlag + 1] : undefined;

  const variantFlag = args.indexOf('--variant');
  const variants = variantFlag !== -1 ? [args[variantFlag + 1]] : undefined;

  console.log(`Generating themes (tier ${tier})...`);
  try {
    await generateAll({outDir, tier, variants});
    console.log('Done.');
  } catch (error) {
    console.error('ERROR generating themes:', error);
    process.exit(1);
  }
}

void main();
