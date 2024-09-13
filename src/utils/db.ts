export const isValidObjectId = (maybeId: unknown) => /^[0-9a-fA-F]{24}$/.test(maybeId as string);
