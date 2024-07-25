# finvero cookiecutter mfe template

Este template fue creado para ayudar en la generación de nuevos proyectos con la arquitectura de microfrontend.

## Iniciar un nuevo microfrontend

### Requisitos
- Python 3.8 +

```bash
pipx run cookiecutter https://github.com/maxir143/cookiecutter-mfe
```

## ¿Cómo Comenzar?
### Requisitos
- Yarn
- Node js

Si deseas probar el arquetipo en tu máquina local, sigue estos pasos:

1. Instalar dependencias desde el root del monorepo

```bash
yarn install
```

2. Iniciar el proyecto en modo desarrollo

```bash
yarn workspace <package-name> start
```

Esto correrá el proyecto y abrirá el navegador en localhost:port dónde ya podrás
visualizar el proyecto en ejecución.
