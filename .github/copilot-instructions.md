
# Instrucciones para Copilot / agente AI en este repositorio

Propósito: ayudar a un agente AI a ser productivo de inmediato indicando dónde mirar, qué ejecutar y cómo actuar si el repositorio está incompleto.

Instantánea del repositorio (detección automática):
- No se detectaron README, archivos de compilación ni código fuente en el momento del escaneo.

Si ves este mensaje, el repositorio actualmente no contiene artefactos que el agente pueda ejecutar directamente. Sigue estos pasos.

1) Comprobaciones iniciales (hacer antes de editar)
- Busca puntos de entrada comunes en la raíz y en `src/`:
  - Node: `package.json`, `tsconfig.json`, `webpack.config.js`, `src/`
  - Python: `pyproject.toml`, `requirements.txt`, `setup.cfg`, `src/` o el paquete
  - .NET: `*.sln`, `*.csproj`
  - Java/Maven: `pom.xml`; Gradle: `build.gradle`
  - Docker: `Dockerfile`
- Si encuentras alguno, léelo por completo para identificar comandos de build/test y dependencias clave.

2) Si el repositorio está vacío o faltan archivos clave
- No implementes funcionalidades grandes sin confirmar con el propietario. Pregunta primero.
- Preguntas sugeridas para el propietario:
  - «¿Cuál es el lenguaje o framework principal del proyecto?»
  - «¿Dónde están las fuentes principales (root, `src/`, `app/`)?»
  - «¿Qué comandos usar para compilar/probar localmente (p. ej. `npm test`, `pytest`, `dotnet test`)?»

3) Cómo recopilar pistas de arquitectura y flujos de trabajo (cuando haya archivos)
- Lee en este orden: `README.md`, `package.json` / `pyproject.toml` / `pom.xml`, `Dockerfile`, y los flujos de CI (`.github/workflows/*`).
- Busca palabras clave que indiquen decisiones arquitectónicas: `microservice`, `express`, `flask`, `serverless`, `lambda`, `docker-compose`, `kubernetes`, `Azure`, `AWS`, `Firebase`.

4) Prioridad de acciones para el agente
- Bajo riesgo: añadir o corregir documentación (README, CONTRIBUTING) tras verificar hechos.
- Riesgo medio: añadir scaffolding mínimo (tests básicos, CI) solo tras confirmar el stack.
- Alto riesgo: modificar código de producción o refactorizaciones grandes — requiere aprobación explícita y pruebas.

5) Patrones accionables y ejemplos concretos
- Si `package.json` tiene `scripts.start` o `scripts.test`, úsalos en lugar de asumir comandos.
- Si hay `Dockerfile` pero no `docker-compose.yml`, asume un único contenedor y pregunta antes de añadir orquestación.

6) Comandos útiles (PowerShell, Windows)
- Listar archivos del repositorio:
  `Get-ChildItem -Recurse -Force -Name`
- Ver estado de git:
  `git status --porcelain=1`
- Node (si existe `package.json`):
  `npm install; npm run test`
- Python (si existe `requirements.txt`/`pytest`):
  `pip install -r requirements.txt; pytest -q`

7) Estilo y directrices de cambio
- Mantén los cambios pequeños y con un único objetivo por PR.
- Si añades archivos o scaffolding, incluye tests mínimos y un README corto que explique cómo ejecutarlos.

8) Cuando no estés seguro, pregunta al propietario
- Ejemplo: «No encontré archivos de build — ¿deseas que genere un scaffold mínimo (Node/React, Python package, .NET, otro) o prefieres subir primero el código fuente?»

Si quieres que el agente se comporte de otra forma, actualiza este fichero con el stack, comandos y directorios relevantes y vuelve a ejecutar el agente.

— Fin de las instrucciones —
