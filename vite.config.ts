import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  root: './',
  publicDir: 'public',
  server: {
    host: true,
  },
  css: {
    devSourcemap: true,//ソースマップを付与
    postcss: {
        plugins: [autoprefixer],//オートプレフィックス付与
      },
  },
  build: {
    outDir: './dist',//吐き出す吐き出すフォルダ名と場所
    minify: false,//吐き出しcssをminifyにしない設定
    assetsInlineLimit:0,
    rollupOptions: {
      output: { // entry chunk assets それぞれの書き出し名の指定(ハッシュをつけない設定)
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: ( { name } ) => {
          if ( /\.( gif|jpeg|jpg|png|svg|webp| )$/.test( name ?? '' ) ) {
            return 'assets/img/[name].[ext]';
					}
            if ( /\.css$/.test( name ?? '' ) ) {
                return 'assets/css/[name].[ext]';
            }
            if ( /\.js$/.test( name ?? '' ) ) {
                return 'assets/js/[name].[ext]';
            }
                return 'assets/[name].[ext]';
        }
      },
    },
  },
})