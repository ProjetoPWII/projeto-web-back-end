import crypto from "crypto";
import multer from "multer";

import { extname, resolve } from "path";

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
export async function handleUpload(file: any) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  //.then(resp=>console.log(resp)).catch(e=>console.log(e));
  return res;
}

// pasta das imagens

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename(req, file, cb) {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;
          cb(null, fileName);
          // handleUpload(`/home/matheusv/Área de Trabalho/projeto-web-back-end/images/${fileName}`)
          // req.session={path:`/home/matheusv/Área de Trabalho/projeto-web-back-end/images/${fileName}`}
          req.session = {
           // path: `/home/leandro/Área de Trabalho/Projeto PW2/projeto-web-back-end/images/${fileName}`,
              path: `/home/matheusv/Área de Trabalho/projeto-web-back-end/images/${fileName}`,
          };
        },
      }),
    };
  },
};
