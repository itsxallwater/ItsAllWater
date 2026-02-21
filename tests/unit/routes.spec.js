import { routes } from '@/routes.js';

describe('routes', () => {
  it('defines 6 routes', () => {
    expect(routes).toHaveLength(6);
  });

  it('defines the / route with title Home', () => {
    const route = routes.find((r) => r.path === '/');
    expect(route).toBeDefined();
    expect(route.meta.title).toBe('Home');
  });

  it('defines the /about route with title About', () => {
    const route = routes.find((r) => r.path === '/about');
    expect(route).toBeDefined();
    expect(route.meta.title).toBe('About');
  });

  it('defines the /contact route with title Contact', () => {
    const route = routes.find((r) => r.path === '/contact');
    expect(route).toBeDefined();
    expect(route.meta.title).toBe('Contact');
  });

  it('defines the /portfolio route with title Portfolio', () => {
    const route = routes.find((r) => r.path === '/portfolio');
    expect(route).toBeDefined();
    expect(route.meta.title).toBe('Portfolio');
  });

  it('defines the /privacy route with title Privacy', () => {
    const route = routes.find((r) => r.path === '/privacy');
    expect(route).toBeDefined();
    expect(route.meta.title).toBe('Privacy');
  });

  it('defines a catch-all route for unmatched paths', () => {
    const notFoundRoute = routes.find((r) => r.path === '/:path(.*)');
    expect(notFoundRoute).toBeDefined();
  });

  it('catch-all route has no meta title (renders a 404)', () => {
    const notFoundRoute = routes.find((r) => r.path === '/:path(.*)');
    expect(notFoundRoute.meta).toBeUndefined();
  });

  it('every named route has a component defined', () => {
    const namedRoutes = routes.filter((r) => r.meta?.title);
    namedRoutes.forEach((route) => {
      expect(route.component).toBeDefined();
    });
  });
});
