export interface CreateUriAndNameToFileProps {
  file: string;
  fileName: string;
  fileType: string;
}

export interface CreateUriAndNameToFileReturn {
  name: string;
  uri: string;
}

export const createUriAndNameToFile = ({
  file,
  fileName,
  fileType,
}: CreateUriAndNameToFileProps): CreateUriAndNameToFileReturn => {
  const name = fileName.replace(/ /g, '_');
  const uri = `data:text/${fileType};charset=utf-8,%EF%BB%BF,${escape(file)}`;
  return { uri, name };
};

export const downloadFile = (uri: string, fileName: string) => {
  const link = document.createElement('a');
  link.href = uri;
  link.download = `${fileName}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
};