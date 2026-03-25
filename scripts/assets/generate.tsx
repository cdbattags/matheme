import path from 'node:path';
import fs from 'fs-extra';
import satori from 'satori';
import {Resvg} from '@resvg/resvg-js';

const ROOT = path.resolve(__dirname, '../..');
const FONTS_DIR = path.join(__dirname, 'fonts');

const COLORS = {
  bg: '#11131C',
  blue: '#2979FF',
  teal: '#64FFDA',
  palenight: '#292D3E',
  cyan: '#89DDFF',
  white: '#EEFFFF',
  muted: '#676E95',
};

function loadFonts() {
  return [
    {
      name: 'Inter',
      data: fs.readFileSync(path.join(FONTS_DIR, 'Inter-Regular.ttf')),
      weight: 400 as const,
      style: 'normal' as const,
    },
    {
      name: 'Inter',
      data: fs.readFileSync(path.join(FONTS_DIR, 'Inter-Bold.ttf')),
      weight: 700 as const,
      style: 'normal' as const,
    },
  ];
}

function LogoTemplate() {
  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${COLORS.bg} 0%, ${COLORS.palenight} 100%)`,
        borderRadius: '96px',
      },
      children: {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                },
                children: [
                  // Left bar of M
                  {
                    type: 'div',
                    props: {
                      style: {
                        width: '44px',
                        height: '200px',
                        background: COLORS.blue,
                        borderRadius: '12px',
                      },
                    },
                  },
                  // Left diagonal
                  {
                    type: 'div',
                    props: {
                      style: {
                        width: '44px',
                        height: '150px',
                        background: COLORS.teal,
                        borderRadius: '12px',
                        transform: 'rotate(25deg)',
                        marginLeft: '-8px',
                        marginTop: '-30px',
                      },
                    },
                  },
                  // Right diagonal
                  {
                    type: 'div',
                    props: {
                      style: {
                        width: '44px',
                        height: '150px',
                        background: COLORS.teal,
                        borderRadius: '12px',
                        transform: 'rotate(-25deg)',
                        marginLeft: '-8px',
                        marginTop: '-30px',
                      },
                    },
                  },
                  // Right bar of M
                  {
                    type: 'div',
                    props: {
                      style: {
                        width: '44px',
                        height: '200px',
                        background: COLORS.blue,
                        borderRadius: '12px',
                        marginLeft: '-8px',
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  };
}

function HeaderTemplate() {
  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${COLORS.bg} 0%, ${COLORS.palenight} 50%, #1B1E2B 100%)`,
        fontFamily: 'Inter',
      },
      children: [
        // Decorative accent line
        {
          type: 'div',
          props: {
            style: {
              width: '120px',
              height: '4px',
              background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.teal})`,
              borderRadius: '2px',
              marginBottom: '40px',
            },
          },
        },
        // Title
        {
          type: 'div',
          props: {
            style: {
              fontSize: '96px',
              fontWeight: 700,
              color: COLORS.white,
              letterSpacing: '-2px',
              lineHeight: 1,
            },
            children: 'Matheme',
          },
        },
        // Subtitle
        {
          type: 'div',
          props: {
            style: {
              fontSize: '28px',
              fontWeight: 400,
              color: COLORS.muted,
              marginTop: '24px',
              letterSpacing: '0.5px',
            },
            children: 'Color themes, product icons, and editor experience for VS Code',
          },
        },
        // Accent line bottom
        {
          type: 'div',
          props: {
            style: {
              width: '120px',
              height: '4px',
              background: `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.blue})`,
              borderRadius: '2px',
              marginTop: '40px',
            },
          },
        },
      ],
    },
  };
}

async function renderToPng(
  element: ReturnType<typeof LogoTemplate>,
  width: number,
  height: number,
  fonts: ReturnType<typeof loadFonts>,
): Promise<Buffer> {
  const svg = await satori(element as unknown as React.ReactNode, {
    width,
    height,
    fonts,
  });
  const resvg = new Resvg(svg, {
    fitTo: {mode: 'width', value: width},
  });
  return Buffer.from(resvg.render().asPng());
}

async function main() {
  console.log('Generating marketplace assets...');
  const fonts = loadFonts();

  const logoPng = await renderToPng(LogoTemplate(), 512, 512, fonts);
  fs.writeFileSync(path.join(ROOT, 'logo.png'), logoPng);
  console.log(`  logo.png (${(logoPng.length / 1024).toFixed(1)}KB)`);

  const headerPng = await renderToPng(HeaderTemplate(), 1280, 640, fonts);
  fs.ensureDirSync(path.join(ROOT, 'assets'));
  fs.writeFileSync(path.join(ROOT, 'assets', 'header.png'), headerPng);
  console.log(`  assets/header.png (${(headerPng.length / 1024).toFixed(1)}KB)`);

  console.log('Done.');
}

main().catch((err) => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
