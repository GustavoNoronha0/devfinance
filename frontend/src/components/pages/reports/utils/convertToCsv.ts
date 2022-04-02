export const convertJsonToCsv = (json: Object, header: String[]): string => {
  const headerCsv = header.join(';')
  const jsonToString = JSON.stringify(json);
  const parsedJson = JSON.parse(jsonToString);
  const jsonValues = Object.values(parsedJson);
  const body = jsonValues.map((jsonMap: any) => jsonMap).join(';');
  return `${headerCsv}/n${body}`;
};