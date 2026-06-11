export default {
  async fetch(request, env) {
    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    const url = new URL(request.url);
    const hasFileExtension = /\.[a-zA-Z0-9]+$/.test(url.pathname);

    if (hasFileExtension) {
      return assetResponse;
    }

    return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
  },
};
