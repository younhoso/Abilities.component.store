/**
 * Next JS기반의 APP ROUTE 서버와 통신을 할때 주로 많이 사용 하는 frame(구조)입니다.
 * 파일 업로드와 같이 특별한 처리
 */
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

import { isAxiosError } from 'axios';
import FormData from 'form-data';
import fs, { PathLike } from 'fs';

import { createHeaders, customAxios } from '@/libs/customAxios';
import { parseForm } from '@/libs/parseForm';

// data에 대한 타입 지정
type MyDataType = {
  key1: string;
  key2: number;
};

const path: string = '/movie/now_playing';
const data: MyDataType = {
  key1: 'value1',
  key2: 123,
};

export async function POST(req: NextRequest, res: NextResponse) {
  const token = await getToken({
    req,
    secret: process.env.JWT_SECRET,
  });

  try {
    const { fields, files } = await parseForm(req);
    const bannerInfo = JSON.parse(fields.bannerInfo ? fields.bannerInfo[0] : '{}');

    const formData = new FormData();
    formData.append('bannerInfo', JSON.stringify(bannerInfo), {
      contentType: 'application/json',
    });

    if (Object.keys(files).length !== 0)
      formData.append(
        'imageFileApp',
        fs.createReadStream(files.imageFileApp?.[0].filepath as PathLike),
      );

    formData.append(
      'imageFileWeb',
      fs.createReadStream(files.imageFileWeb?.[0].filepath as PathLike),
    );

    const headers = createHeaders({
      'Content-Type': 'multipart/form-data; boundary=' + formData.getBoundary(),
      Authorization: `Bearer ${token?.authenticationResponse}`,
    });

    const result = await customAxios().post<MyDataType>(
      `${process.env.NEXT_PUBLIC_DELIVERY_API_URL}/admin/content/banner`,
      formData,
      { headers },
    );

    if (result.status === 200) {
      return NextResponse.json(result.data);
    }
  } catch (error) {
    if (error) {
      if (isAxiosError(error) && error.response) {
        return error.response.data.message;
      } else {
        return error;
      }
    }
  }
}
