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
      // Redirecciones específicas para las URLs antiguas
      {
        source: "/noticias",
        destination: "/",
        permanent: true,
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
        destination: "/",
        permanent: true,
      },
      {
        source: "/2024/:path*",
        destination: "/",
        permanent: true,
      },
      // Eliminada la redirección genérica que podría estar causando problemas
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
