# Casos de prueba - Checkout MiniModa

## PAGO-01 - Muestra los campos del checkout

**Objetivo:** Verificar que el checkout muestre su encabezado, los campos de pago y la acción para confirmar la compra.

**Entorno:** https://minimoda-navy.vercel.app/checkout

**Precondiciones:**
- Acceder a la página de checkout.

**Pasos:**
1. Abrir la página de checkout.
2. Comprobar que estén visibles el encabezado "Checkout", los campos "Número de tarjeta", "Vencimiento (MM/AA)" y "CVV", y el botón "Confirmar compra".

**Resultado esperado:** El encabezado y los cuatro controles indicados son visibles.

**Resultado de la inspección:** Se observaron el encabezado, los tres campos y el botón en la interfaz del checkout. No se ingresaron datos ni se confirmó una compra. En esta inspección no se reprodujo un requisito de iniciar sesión.

## Pendientes de verificación

- Validaciones de los campos: A VERIFICAR.
- Mensaje de compra confirmada: A VERIFICAR.
- Número de orden MM-...: A VERIFICAR.
