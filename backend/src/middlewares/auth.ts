export default async (ctx, next) => {
    if (!ctx.state.user) {
      return ctx.unauthorized("You must be logged in to access this resource.");
    }
    return next();
  };
  