
// not in use yet, will be used once frontend integration commences.
export function successResponse<T>(data: T) {
  return {
    success: true,
    data,
  };
}

export function messageResponse(message: string) {
  return {
    success: true,
    message,
  };
}