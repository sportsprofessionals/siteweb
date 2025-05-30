# Sección Aliados Deportivos - SPORTSPROFESSIONALS

## Descripción

Se ha creado una nueva sección "Aliados Deportivos" que reemplaza la anterior sección "Empresas que confían en nosotros". Esta sección destaca los centros deportivos y clubes especializados con los que SPORTSPROFESSIONALS colabora.

## Estructura de Archivos

### Páginas Creadas

1. **`/app/aliados-deportivos/page.tsx`** - Página principal de aliados deportivos

   - Muestra tarjetas con información básica de cada aliado
   - Botones "Ver más" que llevan a páginas detalladas

2. **`/app/aliados-deportivos/fenix/page.tsx`** - Página detallada de Centro FENIX

   - Información completa de contacto
   - Descripción de instalaciones y servicios
   - Teléfonos: 3132141903 y 3116486446

3. **`/app/aliados-deportivos/medusas/page.tsx`** - Página detallada de Club Medusas
   - Información sobre actividades subacuáticas
   - Enlace al sitio web oficial: http://www.medusas.com.co
   - Ubicación: Complejo Acuático Simón Bolívar

### Archivos de Logos

- **`/public/logos/fenix-logo.png`** - Logo del Centro FENIX (placeholder)
- **`/public/logos/medusas-logo.png`** - Logo del Club Medusas (placeholder)

> **Nota**: Los archivos de logos actuales son placeholders. Para obtener los logos reales:
>
> - **FENIX**: Contactar directamente al centro
> - **Medusas**: Visitar http://www.medusas.com.co donde está disponible el logo oficial

## Aliados Incluidos

### 1. Centro de Desarrollo Deportivo FENIX

**Información de Contacto:**

- Ubicación: Barrio Salazar Gómez, Carrera 60 #11-38
- Cerca de: Outlets de las Américas, Centro Comercial Plaza Central
- Entre Américas y Calle 13
- Teléfonos: 3132141903 / 3116486446

**Servicios:**

- 4 canchas de voleibol reglamentarias (disponibles)
- 2 canchas de baloncesto reglamentarias (próximamente)
- Alquiler de espacios deportivos
- Entrenamiento de equipos

### 2. Club Medusas

**Información de Contacto:**

- Sitio web: http://www.medusas.com.co
- Ubicación de actividades: Complejo Acuático Simón Bolívar

**Servicios:**

- Actividades subacuáticas especializadas
- Cursos de buceo y certificaciones
- Inmersiones recreativas
- Actividades grupales y familiares

## Cambios en la Navegación

Se agregó el enlace "Aliados Deportivos" en el navbar principal entre "Formación" y "Contacto".

## Cambios en la Página Principal

La sección anterior de "Empresas que confían en nosotros" fue actualizada para mostrar:

- Título: "Aliados Deportivos"
- Tarjetas individuales para cada aliado
- Botones "Ver más" que llevan a las páginas detalladas
- Enlace principal a la página completa de aliados

## Tecnologías Utilizadas

- **Next.js 14** con App Router
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** para iconos
- **Componentes UI personalizados**

## Instrucciones para Actualizar Logos

1. Obtener los logos oficiales de los aliados
2. Guardar en formato PNG, JPG o SVG
3. Dimensiones recomendadas: 120x120 píxeles o superior
4. Reemplazar los archivos en `/public/logos/`
   - `fenix-logo.png`
   - `medusas-logo.png`

## Características Implementadas

- ✅ Diseño responsive para mobile y desktop
- ✅ Animaciones suaves con delays escalonados
- ✅ Navegación breadcrumb en páginas detalladas
- ✅ Enlaces externos seguros con `target="_blank"`
- ✅ Manejo de errores para logos faltantes
- ✅ SEO optimizado con metadatos apropiados
- ✅ Accesibilidad con labels y alt text descriptivos

## Próximos Pasos Sugeridos

1. Obtener y reemplazar los logos placeholder
2. Agregar más aliados deportivos según sea necesario
3. Implementar formulario de contacto específico para aliados
4. Agregar testimonios de los aliados
5. Incluir galería de imágenes de las instalaciones
