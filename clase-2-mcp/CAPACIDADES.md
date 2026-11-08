# Capacidades y limitaciones de los servidores MCP

## 1. Playwright MCP

Utilicé Playwright MCP desde Codex para interactuar con la tienda MiniModa.

Actividades realizadas:
- Navegar por la tienda.
- Explorar los productos disponibles.
- Seleccionar una remera de aventurero.
- Agregar el producto al carrito.
- Comprobar que el producto apareciera en el carrito.
- Capturar evidencias del proceso.

El agente pudo interactuar con la página y realizar acciones mediante las herramientas de Playwright, sin necesidad de ejecutar manualmente cada clic.

## 2. Servidor MCP personalizado

Desarrollé un servidor MCP llamado `casos-de-prueba` utilizando Node.js, el MCP SDK y Zod.

El servidor dispone de dos herramientas:

### crear_caso_prueba
Permite registrar un caso de prueba mediante tres parámetros:
- `titulo`
- `descripcion`
- `resultado_esperado`

### listar_casos
Permite consultar los casos de prueba registrados y mostrarlos en formato JSON.

Conecté el servidor a Codex y comprobé que el agente pudiera utilizar ambas herramientas.

Se creó el siguiente caso:

**Verificar agregado de producto al carrito.**

El caso también quedó documentado en la carpeta `casos/`.

## 3. Tiempo de trabajo

| Actividad | Tiempo estimado |
|---|---:|
| Trabajo manual | 1 hora |
| Trabajo con Codex y MCP | 1 hora |

En esta primera práctica no se observó un ahorro de tiempo. El principal beneficio fue aprender a configurar, conectar y utilizar herramientas MCP para automatizar tareas.

## 4. Limitaciones encontradas

- El servidor personalizado almacena los casos en memoria. Si se reinicia, los registros desaparecen.
- Fue necesario supervisar las acciones del agente y corregir su navegación cuando se dirigió hacia el proceso de compra.
- La conexión del servidor personalizado está configurada localmente en Codex y no se incluye como configuración compartida en el repositorio.
- La práctica se limitó a la exploración y comprobación del carrito; no se realizó ninguna compra.

## 5. Conclusión

La práctica permitió comprobar cómo Playwright MCP facilita la interacción automatizada con una tienda web y cómo un servidor MCP personalizado permite ampliar las capacidades de un agente mediante herramientas propias.

También aprendí que la automatización requiere supervisión, validación de resultados y mejoras para conservar la información de manera permanente.