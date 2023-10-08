export const wrapFormData = (files: FileList): FormData => {
  const formData = new FormData();

  Array.from(files).forEach((file) => formData.set('images', file));

  return formData;
};
