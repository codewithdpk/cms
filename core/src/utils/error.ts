import { HttpException } from '@nestjs/common';

export interface Errors {
  success: boolean;
  message: string;
}

export const HttpError = (statusCode: number, message: string) =>
  new HttpException(
    {
      status: statusCode,
      error: message,
    },
    statusCode,
  );

export const HttpErrorWithResponse = (
  statusCode: number,
  message: string,
  response: any,
) =>
  new HttpException(
    {
      status: statusCode,
      error: message,
      response,
    },
    statusCode,
  );
