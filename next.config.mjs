let userConfig = undefined;
try {
  // try to import ESM first
  userConfig = await import("./v0-user-next.config.mjs");
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async redirects() {
    return [
      // Redirecciones a páginas similares
      {
        source: "/noticias",
        destination: "/", // No hay equivalente en el sitemap, redirige al home
        permanent: true, // Redirección 301
      },
      {
        source: "/servicios-deportivos",
        destination: "/servicios/servicios-deportivos",
        permanent: true,
      },
      {
        source: "/servicios-recreativos",
        destination: "/servicios/servicios-recreativos",
        permanent: true,
      },
      {
        source: "/administracion-deportiva",
        destination: "/servicios/administracion-deportiva",
        permanent: true,
      },
      {
        source: "/servicios-en-actividad-fisica",
        destination: "/servicios/actividad-fisica",
        permanent: true,
      },
      {
        source: "/home-new-3-4-3",
        destination: "/", // Redirige versiones de prueba al home
        permanent: true,
      },
      {
        source: "/2024/06/13/consejos-antes-de-hacer-actividad-fisica",
        destination: "/", // No hay sección de blog en el sitemap, redirige al home
        permanent: true,
      },
      // Redirección fallback para capturar URLs antiguas no mapeadas específicamente
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "referer",
            value:
              "(.*?sportsprofessionals\\.com\\.co/(?!servicios|quienes-somos|contacto|formacion|escenarios-deportivos|clientes|politica-de-cookies).*)",
          },
        ],
        destination: "/", // Redirige al home cualquier URL antigua que no exista en el nuevo sitio
        permanent: true,
      },
    ];
  },
};

if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig;

  for (const key in config) {
    if (
      typeof nextConfig[key] === "object" &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
