import { chamarAppsScript } from './appsScript';

export async function enviarCurriculoParaDrive(
  buffer: Buffer,
  fileName: string,
  mimeType: string
): Promise<string> {
  const data = await chamarAppsScript<{ ok: true; fileId: string }>('uploadFile', {
    fileName,
    mimeType,
    base64: buffer.toString('base64')
  });
  return data.fileId;
}

export async function baixarCurriculoDoDrive(driveFileId: string): Promise<Buffer> {
  const data = await chamarAppsScript<{ ok: true; base64: string }>('downloadFile', {
    fileId: driveFileId
  });
  return Buffer.from(data.base64, 'base64');
}
