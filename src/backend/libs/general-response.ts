import { Request, Response } from 'express';

type IRespuesta = {
  status: number;
  data?: any;
  error?: any;
  message?: string;
  token?: string;
  errors?: Array<any>;
};

export function generalResponse(
  req: Request,
  res: Response,
  respuesta: IRespuesta,
) {
  const { status, data } = respuesta;
  const ok = status >= 400 ? false : true;
  res.status(respuesta.status).json({
    ok: ok,
    url: req.originalUrl,
    data: data || null,
    error: respuesta.error,
    errors: respuesta.errors,
    token: respuesta.token,
    status: respuesta.status,
    message: respuesta.message,
  });
}
