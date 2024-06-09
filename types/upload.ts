export type TUpload = {
  id: number;
  type: "png" | "jpg" | "mp4" | "jpeg" | "csv" | "txt" | "pdf";
  path: string;
  size: string;
};
