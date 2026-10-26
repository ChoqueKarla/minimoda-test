# minimoda-test

Repo de práctica de testing para **MiniModa**, una tienda online ficticia de ropa para chicos.

Sitio a probar: https://minimoda-navy.vercel.app

Acá no está el código de la tienda. Este repo guarda solo los artefactos de testing: plan, casos, bugs y evidencias.

## Estructura

```
qa/
├── plan-de-pruebas.md   # alcance, riesgos y estrategia
├── casos-qase.csv       # casos listos para importar en Qase
├── plantilla-caso.md    # plantilla de caso de prueba
├── plantilla-bug.md     # plantilla de reporte de bug
├── bugs/                # un archivo .md por bug
└── evidencias/          # capturas (PNG) de los casos y bugs
```

## Cómo trabajar (sin terminal)

1. Hacé **Fork** de este repo a tu cuenta.
2. Bajá tu fork con **Code → Download ZIP** y descomprimilo.
3. Con **Codex en el chat**, analizá una funcionalidad del sitio (registro, carrito o checkout) y armá los casos.
4. Con **Codex en la app de escritorio de ChatGPT**, abrí la carpeta descomprimida y pedile que cree los archivos de `qa/` usando las plantillas.
5. Revisá lo que generó y probá cada caso en el sitio.
6. En tu fork, en GitHub web: **Add file → Upload files**, subí tus archivos de `qa/`, elegí **Create a new branch** y abrí el **Pull request** dentro de tu fork.
7. Revisá **Files changed** antes de mergear.

No pegues tokens, contraseñas ni datos personales reales en el chat ni en el repo. Usá datos inventados.
