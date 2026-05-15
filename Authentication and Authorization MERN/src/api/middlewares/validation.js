const { z } = require("zod");

const registerSchema = z.object({
  body: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z
      .string()
      .min(6)
      .regex(/[A-Z]/, "Password must contain upper letter")
      .regex(/[a-z]/, "Password must contain lower letter")
      .regex(/[0-9]/, "Password must contain number")
      .regex(/[^a-zA-Z0-9]/, "Password must contain special character"),
    contactInformation: z
      .string()
      .regex(/^\d{10,11}$/, "Invalid contact number"),
  }),
});

const validate = (schema) => (req, res, next) => {
  try {
    console.log(schema, req.body);
    schema.parse({ body: req.body, query: req.query, params: req.params });
    next();
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err.issues);
  }
};

module.exports = {
  registerSchema,
  validate,
};
