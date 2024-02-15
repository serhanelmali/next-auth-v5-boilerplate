export const FormError = ({ message }: { message: string | undefined }) => {
  if (!message) {
    return "";
  }

  return (
    <div className="bg-red-200 rounded-lg p-2 text-sm text-red-900">
      {message}
    </div>
  );
};
