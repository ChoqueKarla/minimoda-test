# Práctica clase 01: casos del registro de MiniModa con IA

**Sitio:** https://minimoda-navy.vercel.app/registro

> Así tiene que quedar tu entrega. Reemplazá cada `___tu respuesta aquí___` con lo tuyo.

## 1. Preparación
- Navegador y fecha: Google Chrome, 27 de octubre de 2026.

## 2. Superficie elegida
- Elegí (chat o cowork):Chat.
- Por qué: Elegí el chat porque permite hacer preguntas sobre el formulario, generar casos de prueba mediante instrucciones en lenguaje natural y revisar las respuestas sin utilizar la terminal.

## 3. Preguntas a Gemini
| # | Pregunta | Respuesta (resumen) | ¿Acierto o error/invento? |
|---|----------|---------------------|---------------------------|
| 1 | ¿Qué campos pide el formulario de registro de https://minimoda-navy.vercel.app/registro? | Nombre, email, contraseña, confirmar contraseña, edad, país y aceptación de términos. Indica contraseña de mínimo 8 caracteres y edad entre 13 y 120.|Acierto: coincide con el formulario real.|
| 2 | ¿Cuál es el largo mínimo de la contraseña y qué edad se permite? |Contraseña de mínimo 8 caracteres y edad entera entre 13 y 120 años.| Acierto: coincide con el formulario. |
| 3 | ¿Qué pasa si no acepto los términos? | Gemini supone que no aceptar los términos debería bloquear el registro y propone probarlo para confirmarlo.| Parcialmente correcto: propone una prueba válida, pero no demuestra que el envío esté bloqueado. |

- Un acierto: Gemini identificó correctamente los campos y las restricciones visibles de contraseña y edad.
- Un error o invento: Gemini asumió que aceptar los términos es obligatorio sin comprobar el comportamiento real del formulario.

## 4. Primer modo
- Superficie y modo: Chat de ChatGPT; generación de casos de prueba mediante un prompt.
- Prompt de ejemplo:
  ```
  Sos QA. Vamos a probar el registro de https://minimoda-navy.vercel.app/registro
  Campos: nombre, email, contraseña, confirmar contraseña, edad, país y aceptar términos.
  1. Listá las reglas que se ven, los datos válidos e inválidos y los valores límite.
  2. Escribí 6 casos de prueba con: título, precondiciones, pasos con datos concretos,
     resultado esperado, prioridad (high/medium/low) y tipo (functional/negative/boundary).
  No inventes mensajes: si no sabés el texto exacto, marcalo "A VERIFICAR".
  ```
- Qué devolvió: Identificó las reglas visibles del formulario y propuso seis casos de prueba: registro con datos válidos, contraseña de 7 caracteres, edad de 12 años, contraseñas diferentes, edad de 13 años y registro sin aceptar los términos. Incluyó precondiciones, datos concretos, pasos, resultados esperados, prioridad y tipo. Marcó como “A VERIFICAR” los comportamientos y mensajes que no estaban confirmados.

## 5. Otra superficie: comparación en 3 líneas
1. Velocidad: Ambas superficies generaron seis casos de prueba en una sola instrucción; no medí el tiempo exacto, así que no puedo afirmar cuál fue más rápida.
2. Calidad de los casos: Ambas incluyeron pasos, datos concretos y resultados esperados. Codex organizó claramente los casos y señaló los resultados pendientes de verificar.
3. Errores e inventos: Codex marcó como «A VERIFICAR» los comportamientos no confirmados, evitando inventar mensajes exactos. Aun así, los resultados esperados deben contrastarse con el formulario real.

## 6. Mis 3 mejores casos (cargados en Qase, proyecto MiniModa)
Formato del título: `Registro: <qué se prueba>`
Captura de la suite en Qase con tus casos: `evidencias/qase-suite-casos.png`

### Caso 1: Registro exitoso
- Precondiciones: El formulario de registro de MiniModa está disponible. Se dispone de un correo de prueba que no está registrado.
- Pasos: Abrir la página de registro; introducir un nombre, un correo de prueba, una contraseña válida y su confirmación; ingresar una edad de 25 años; seleccionar Bolivia; aceptar los términos si son obligatorios y pulsar «Crear cuenta».
- Resultado esperado: El sistema acepta los datos válidos, completa el registro y muestra una confirmación o la siguiente pantalla prevista.
- Evidencia: `evidencias/qase-MM-4-registro-alta-exitosa.png`

### Caso 2: Rechazo de contraseña de 7 caracteres
- Precondiciones: El formulario de registro está disponible y se cuenta con un correo de prueba que no está registrado.
- Pasos: Abrir la página de registro; completar los demás campos con datos válidos; introducir `Abc123!` como contraseña y confirmación; aceptar los términos si son obligatorios y pulsar «Crear cuenta».
- Resultado esperado: El sistema rechaza la contraseña de 7 caracteres porque no cumple el mínimo de 8 y no permite completar el registro.
- Evidencia: `evidencias/qase-MM-5-registro-password-7.png`

### Caso 3: Rechazo de edad de 12 años
- Precondiciones: El formulario de registro está disponible y se cuenta con un correo de prueba que no está registrado.
- Pasos: Abrir la página de registro; completar el nombre, correo y contraseña con datos válidos; introducir una edad de 12 años; seleccionar Bolivia; aceptar los términos si son obligatorios y pulsar «Crear cuenta».
- Resultado esperado: El sistema rechaza el registro porque la edad es inferior al mínimo permitido de 13 años.
- Evidencia: `evidencias/qase-MM-6-registro-edad-12.png`

## 7. Mapa del harness
| Pieza | En lo que usé |
|-------|---------------|
| Modelo | ___tu respuesta aquí___ |
| App | ___tu respuesta aquí___ |
| Harness | ___tu respuesta aquí___ |
| MCP | ___tu respuesta aquí___ |
| Skill | ___tu respuesta aquí___ |

## 8. Entrega
- Link de tu repo (pegalo también en el Telegram): ___tu respuesta aquí___\
## 8. Entrega
- Link de tu repo (pegalo también en el Telegram): ___tu respuesta aquí___
