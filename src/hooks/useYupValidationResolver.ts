import { useCallback } from 'react';

export const useYupValidationResolver = (validationSchema: any) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        });

        return {
          values,
          errors: {}
        };
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (
              allErrors: any,
              currentError: { path: any; type: any; message: any }
            ) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    },
    [validationSchema]
  );
