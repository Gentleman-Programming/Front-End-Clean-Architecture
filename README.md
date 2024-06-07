# Estructura de Proyecto de ReactJs con Clean Architecture - Documentación Detallada

**Autor**: Gentleman

**Fuente del Video**: [Cómo estructurar tu project de ReactJs? Aplicamos Clean Architecture en Front End - #part1](https://www.youtube.com/watch?v=5LqhlCd2_nE)

## Introducción

Este documento proporciona una guía detallada sobre la aplicación de la Clean Architecture en proyectos de ReactJs, orientándonos hacia una estructuración eficiente y una gestión eficaz del estado y de los componentes.

## Clean Architecture

### Conceptos Básicos

- **Dominio/Modelos/State**: Define las entidades y su estado durante el ciclo de vida de la aplicación.
- **Casos de Uso**: Operaciones que se pueden realizar sobre los modelos.
- **Adaptadores**: Facilitan la conversión de datos externos para que puedan ser manejados por la aplicación.

### Beneficios

- Organización clara del código.
- Facilidad de mantenimiento.
- Escalabilidad del proyecto.

## Estructura de Carpetas Sugerida

```
src/
├── adapters/
│   ├── index.js
│   └── userAdapter.js
├── components/
│   ├── UserComponent.jsx
│   └── AdminComponent.jsx
├── models/
│   └── userModel.js
├── hooks/
│   ├── useUser.js
│   └── useAdmin.js
├── services/
│   └── userService.js
├── utilities/
│   └── formatter.js
├── interceptors/
│   └── authInterceptor.js
├── contexts/
│   └── UserContext.js
└── pages/
    └── Home/
        ├── Home.jsx
        ├── components/
        │   └── HomeButton.jsx
        ├── models/
        │   └── homeModel.js
        ├── hooks/
        │   └── useHomeLogic.js
        ├── services/
        │   └── homeService.js
        └── utilities/
            └── homeFormatter.js
```

### Descripción Detallada de la Estructura

#### Pages/Home

La carpeta `Home` funciona como un contenedor (Container Pattern), encapsulando toda la lógica y los componentes específicos de la página de inicio. Esto permite una mejor organización y un enfoque modular:

- **Home.jsx**: El componente principal que actúa como el contenedor.
- **Components**: Componentes específicos de la página Home, como `HomeButton.jsx`.
- **Models**: Define modelos específicos utilizados en la página Home.
- **Hooks**: Hooks personalizados para la lógica de negocio de la página Home.
- **Services**: Servicios que interactúan con APIs o recursos externos específicos para Home.
- **Utilities**: Herramientas y funciones de ayuda específicas para la página Home.

### La Regla del Alcance

La regla del alcance es fundamental para entender y organizar la reutilización y la carga perezosa de componentes:

- **Components en Root**: Accesibles y reutilizables por toda la aplicación.
- **Components en Funcionalidades Específicas**: Utilizados solo dentro de su contexto específico, como en la carpeta `Home`.

### Beneficios de la Regla del Alcance

- **Claridad y Escalabilidad**: Facilita la comprensión del alcance y uso de los componentes, y mejora la escalabilidad del proyecto.
- **Optimización de la Carga**: Permite una carga más eficiente al cargar solo los componentes necesarios para la funcionalidad solicitada.

## Conclusión

Adoptar la Clean Architecture en ReactJs con un enfoque estructurado y modular facilita el desarrollo y mantenimiento de aplicaciones complejas y escalables. La inclusión del patrón de contenedor dentro de las páginas específicas, como se muestra en la carpeta `Home`, proporciona un marco claro para la organización y optimización de los componentes y la lógica de negocio.

### Patrón Contenedor en la Estructura de Carpetas de ReactJs

#### Uso del Patrón Contenedor

El patrón contenedor es una estrategia de diseño que encapsula los componentes y la lógica específicos de una funcionalidad dentro de su propia subcarpeta bajo `pages`. Esto facilita la organización modular del código y mejora la carga perezosa de los componentes. Aquí te muestro cómo se implementa típicamente dentro de la carpeta `Home`:

```
src/
└── pages/
    └── Home/
        ├── Home.jsx         # Contenedor principal
        ├── components/      # Componentes específicos de Home
        │   └── HomeButton.jsx
        ├── models/          # Modelos usados en Home
        │   └── homeModel.js
        ├── hooks/           # Hooks específicos de Home
        │   └── useHomeLogic.js
        ├── services/        # Servicios usados por Home
        │   └── homeService.js
        └── utilities/       # Funciones auxiliares para Home
            └── homeFormatter.js
```

#### Detalles del Patrón Contenedor

- **Home.jsx**: Actúa como el componente principal que coordina y gestiona los otros componentes específicos dentro de la carpeta `Home`. Este componente funciona como un "contenedor" que encapsula toda la lógica y estado específicos de la página de inicio.
- **Components**: Contiene todos los componentes visuales que solo son relevantes para la página `Home`. Por ejemplo, `HomeButton.jsx` podría ser un botón personalizado solo usado en esta página.
- **Models**: Define estructuras de datos que son únicas para la página `Home`, como `homeModel.js` que podría contener definiciones de estado y lógica de negocio específicas.
- **Hooks**: Agrupa todos los hooks que son utilizados únicamente dentro de la página `Home`, como `useHomeLogic.js`, que puede contener lógica de manejo de estado o efectos secundarios.
- **Services**: Los servicios que realiza llamadas a APIs o realiza operaciones de datos que solo conciernen a la página `Home`.
- **Utilities**: Funciones de ayuda o herramientas específicas que son utilizadas solamente dentro del contexto de `Home`, como formateadores, validadores, o calculadoras.

#### Beneficios del Patrón Contenedor

- **Encapsulación**: Aísla la lógica y componentes de una página específica, haciendo el código más fácil de entender y mantener.
- **Modularidad**: Facilita el manejo de cada funcionalidad como un módulo independiente, lo cual es ideal para el mantenimiento y la prueba de unidades.
- **Optimización de la Carga**: Mejora la carga perezosa al asegurar que solo se carguen los recursos necesarios cuando se accede a la página `Home`.

---

Este enfoque del patrón contenedor en la estructura del proyecto de ReactJs es crucial para mantener una arquitectura limpia y organizada, asegurando que cada componente y pieza de lógica tenga un lugar bien definido y un propósito claro.
