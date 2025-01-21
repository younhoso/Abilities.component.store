import { NextRequest } from 'next/server';

import formidable from 'formidable';
import { IncomingMessage } from 'http';

export const parseForm = async (
  req: NextRequest,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  return new Promise(async (resolve, reject) => {
    const form = formidable({
      maxFileSize: 5 * 1024 * 1024, //최대 파일 크기(maxFileSize)를 5MB로 설정
      keepExtensions: true, //파일 확장자를 유지(keepExtensions)하도록 설정
    });

    // NextRequest를 IncomingMessage로 변환
    const incomingMessage = req as unknown as IncomingMessage;

    form.parse(incomingMessage, function (err, fields, files) {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};
