export default {
    routes: [
      {
        method: "GET",
        path: "/categories",
        handler: "category.find",
        config: { auth: false },
      },
      {
        method: "GET",
        path: "/categories/:id",
        handler: "category.findOne",
        config: { auth: false },
      },
      {
        method: "POST",
        path: "/categories",
        handler: "category.create",
        config: { auth: false },
      },
      {
        method: "PUT",
        path: "/categories/:id",
        handler: "category.update",
        config: { auth: false },
      },
      {
        method: "DELETE",
        path: "/categories/:id",
        handler: "category.delete",
        config: { auth: false },
      }
    ],
  };
  