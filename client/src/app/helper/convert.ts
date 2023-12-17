// Convert image onto base 64
export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise(
    (
      resolve: (result: string) => void,
      reject: (reason: DOMException) => void
    ) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.onerror = () => reject(fileReader.error as DOMException);
      fileReader.readAsDataURL(file);
    }
  );
};
