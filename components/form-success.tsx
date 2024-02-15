export const FormSuccess = ({ message }: { message: string | undefined }) => {
  if (!message) {
    return "";
  }

  return (
    <div className="bg-green-200 rounded-lg p-2 text-sm text-green-900">
      {message}
    </div>
  );
};
