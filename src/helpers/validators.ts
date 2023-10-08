type TValidateFiles = (
  allowedExtensions: RegExp,
  filePaths: string[],
  cb: (value: { error: boolean }) => void
) => void;

export const validateFiles: TValidateFiles = (
  allowedExtensions,
  filePaths,
  cb
) => {
  let hasErrors = false;
  filePaths.filter((path) => {
    if (!allowedExtensions.exec(path)) {
      hasErrors = true;
    }
  });

  cb({ error: hasErrors });
};
