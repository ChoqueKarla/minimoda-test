# Evaluación de Playwright MCP — Práctica Clase 4

**Fecha de consulta:** 8 de noviembre de 2026
**Alcance:** revisión de la documentación y metadatos publicados en el repositorio oficial. No se instaló ni ejecutó el servidor.

## 1. Fuente, autor y versión consultada

- **Fuente oficial:** [microsoft/playwright-mcp en GitHub](https://github.com/microsoft/playwright-mcp), especialmente su README y [package.json](https://github.com/microsoft/playwright-mcp/blob/main/package.json).
- **Autor declarado en `package.json`:** Microsoft Corporation.
- **Paquete:** `@playwright/mcp`.
- **Versión consultada:** `0.0.84`, valor indicado por el `package.json` de la rama `main` al momento de la consulta.
- **Licencia declarada:** Apache-2.0.
- **Cómo interpretar la versión:** la rama `main` puede cambiar. Este número confirma el contenido consultado, pero **A VERIFICAR** si corresponde a la última versión publicada en npm o a una versión estable etiquetada. No se comprobó una instalación ni una publicación del paquete.

El proyecto de Clase 4 ya declara `@playwright/test` en `package.json` y usa `playwright.config.ts`. Playwright MCP es un servidor MCP para que un cliente compatible controle un navegador mediante Playwright; no es en sí mismo el ejecutor de las pruebas de Playwright Test.

## 2. Herramientas y capacidades principales

El README describe automatización mediante el árbol de accesibilidad y snapshots estructurados de la página, además de capacidades visuales opcionales. Entre las herramientas documentadas están:

- **Inspección:** snapshot de accesibilidad, captura de pantalla, búsqueda en el snapshot, mensajes de consola y solicitudes de red.
- **Interacción:** navegar, volver, hacer clic, pasar el puntero, arrastrar y soltar, pulsar teclas, completar formularios, seleccionar opciones y gestionar diálogos.
- **Archivos:** cargar archivos y guardar ciertos resultados de herramientas en archivos bajo el área de trabajo.
- **Capacidades opcionales:** `vision` para interacción por coordenadas, `pdf` y `devtools`; emulación de dispositivo y preferencias de medios; conexión a navegador existente mediante extensión o endpoint CDP.
- **Código:** permite evaluar JavaScript en la página. La herramienta `browser_run_code_unsafe` ejecuta código arbitrario en el proceso servidor y el propio README la califica como equivalente a ejecución remota de código (RCE).

La lista de herramientas y las capacidades disponibles pueden depender de la configuración seleccionada. La información completa se encuentra en las secciones [Tools](https://github.com/microsoft/playwright-mcp#tools) y [Configuration](https://github.com/microsoft/playwright-mcp#configuration) del README.

## 3. Permisos de archivos, red y sesión del navegador

### Archivos

- **Confirmado:** de forma predeterminada, el acceso a archivos se limita a las raíces de espacio de trabajo proporcionadas por el cliente o, si no se configuran, al directorio de trabajo actual. La navegación a direcciones `file://` está bloqueada por defecto.
- **Confirmado:** `--allow-unrestricted-file-access` amplía el acceso fuera de esas raíces y permite direcciones `file://` sin restricción del servidor.
- **Confirmado:** herramientas de carga, arrastre/soltado y resultados guardados pueden leer o escribir rutas; sus rutas pueden resolverse desde el espacio de trabajo. Este permiso debe evaluarse junto con el aislamiento y las políticas del cliente MCP.
- **Límite de seguridad confirmado:** el README avisa que Playwright MCP no es una frontera de seguridad y que la restricción de archivos del servidor no sustituye los permisos del cliente.

### Red

- **Confirmado:** el navegador automatizado navega por sitios y genera solicitudes de red. El servidor ofrece `--allowed-hosts`, `--allowed-origins` y `--blocked-origins` para limitar destinos.
- **Importante:** la documentación advierte que la lista de orígenes permitidos no es una frontera de seguridad y no afecta a redirecciones. No debe considerarse garantía contra acceso a destinos no deseados.
- **Confirmado:** la opción de host por defecto restringe los hosts que el servidor atiende; no debe confundirse con una lista segura de sitios a los que el navegador puede navegar.
- **A VERIFICAR:** la política efectiva de red para una instalación concreta depende de sus argumentos, cliente, proxy, red local y posibles redirecciones. No se ejecutó una instancia para comprobarla.

### Sesión del navegador

- **Confirmado:** el perfil persistente predeterminado almacena información de inicio de sesión entre sesiones; la ruta puede configurarse con `--user-data-dir`.
- **Confirmado:** `--isolated` mantiene el perfil en memoria y al cerrar el navegador pierde el estado almacenado de esa sesión. Puede cargarse un estado inicial mediante `--storage-state`.
- **Confirmado:** el modo de extensión puede conectarse a un navegador existente. Un contexto compartido puede reutilizarse entre clientes HTTP si se activa la opción correspondiente.
- **Consecuencia práctica:** una sesión persistente o conectada a un navegador existente podría exponer cookies, cuentas autenticadas y datos visibles al agente. **A VERIFICAR** si un cliente o una configuración concreta guardan otros artefactos de sesión, ya que esta revisión no los ejecutó.

## 4. Tres beneficios concretos

1. **Exploración de la interfaz con contexto estructurado:** los snapshots de accesibilidad permiten al agente identificar roles, nombres y estructura de páginas sin depender siempre de análisis visual de capturas.
2. **Diagnóstico más amplio de flujos web:** puede inspeccionar consola y solicitudes de red, además de interactuar con páginas; esto ayuda a investigar fallos de una demo o flujo de compra.
3. **Sesiones adaptables al ejercicio:** soporta perfiles aislados para sesiones efímeras y perfiles persistentes cuando se necesita conservar estado entre interacciones.

Estos beneficios describen capacidades documentadas; su utilidad y estabilidad en el entorno de la clase quedan **A VERIFICAR** mediante una prueba controlada si se evalúa en el futuro.

## 5. Tres riesgos y mitigaciones

| Riesgo | Mitigación propuesta |
|---|---|
| **Acceso o modificación de archivos:** cargar archivos, guardar resultados y la ejecución de código pueden leer o alterar contenido accesible al proceso. La opción de acceso irrestricto eleva el alcance. | No activar `--allow-unrestricted-file-access`; ejecutar con un espacio de trabajo de práctica que contenga solo datos sintéticos; limitar también los permisos del cliente y del sistema operativo; revisar el uso de herramientas que escriben archivos. |
| **Acceso a red y acciones en sitios:** navegación, formularios y clics pueden alcanzar sitios no previstos o enviar cambios. Las listas allow/block del servidor no constituyen una frontera de seguridad y no controlan redirecciones. | Usar sitios de prueba autorizados y datos sintéticos; limitar la red con controles externos al servidor cuando sea necesario; revisar URLs y acciones con efectos antes de ejecutarlas; no utilizar cuentas reales. |
| **Exposición de sesión o ejecución de código:** el perfil persistente conserva información de inicio de sesión; la conexión a un navegador existente comparte su contexto; `browser_run_code_unsafe` ejecuta código arbitrario en el proceso servidor. | Preferir `--isolated`, no conectar perfiles personales ni cuentas reales, no habilitar `browser_run_code_unsafe` para la práctica y evitar compartir el contexto entre clientes; cerrar la sesión y revisar artefactos al terminar. |

Las mitigaciones reducen exposición, pero no convierten al servidor en un límite de seguridad. Su README lo declara explícitamente.

## 6. Decisión final

**Decisión: no instalar Playwright MCP para la práctica de Clase 4 en este momento.**

El proyecto ya tiene Playwright Test configurado para Chromium, Firefox y WebKit. La práctica puede mantener pruebas reproducibles con TypeScript y assertions sin habilitar un servidor MCP con acciones de navegador, acceso de red, lectura/carga de archivos y posible persistencia de sesión. La documentación oficial también recomienda considerar Playwright CLI con skills para algunos flujos de agentes de programación y recuerda que MCP no es una frontera de seguridad.

Esta decisión es específica al alcance actual de la práctica, no una conclusión de que el proyecto sea inseguro o de que MCP carezca de utilidad. Si una actividad posterior necesita exploración asistida del navegador, conviene hacer una evaluación aislada con datos sintéticos, perfil efímero, permisos mínimos y versión fijada; esa evaluación queda **A VERIFICAR** y requeriría autorización antes de instalar dependencias o modificar configuración.

## Fuentes

- [Repositorio oficial y README de Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [Metadatos oficiales del paquete en `package.json`](https://github.com/microsoft/playwright-mcp/blob/main/package.json)
- [Sección de seguridad del README](https://github.com/microsoft/playwright-mcp#security)
- [Sección de configuración y permisos del README](https://github.com/microsoft/playwright-mcp#configuration)
- [Configuración del proyecto MiniModa Clase 4 (`package.json`)](../package.json)
