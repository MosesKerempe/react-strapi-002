export default async (ctx, next) => {
    if (!ctx.state.user) {
      return ctx.unauthorized("Access denied.");
    }
    return next();
  };
  