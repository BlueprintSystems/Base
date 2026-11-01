import { render } from 'preact';
import type { JSX } from 'preact/jsx-runtime';

// @ts-expect-error 2882 - Este import está acá a pedido de Preact
import './app.css';

const vnode: JSX.Element = (
  <div>
    <div class="card m-5 w-96 bg-base-100 shadow-sm">
      <div class="card-body">
        <div class="card-title">
          <h1 class="text-xl font-bold">Preact + DaisyUI + TailwindCSS</h1>
        </div>
        <p>Lorem ipsum dolor sit amet</p>
        <a class="link link-accent" href="https://daisyui.com/components">
          Ver esto antes de tocar la UI
        </a>
        <div class="card-actions justify-end">
          <button type="button" class="btn btn-outline">
            Ejemplo 2
          </button>
          <button type="button" class="btn btn-primary">
            Ejemplo
          </button>
        </div>
      </div>
    </div>
  </div>
);

render(vnode, document.querySelector('#app')!);
