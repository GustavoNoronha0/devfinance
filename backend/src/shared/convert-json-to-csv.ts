export const convertJsonToCsv = (json: Object): string => {
  const jsonToString = JSON.stringify(json);
  const parsedJson = JSON.parse(jsonToString);
  const jsonValues = Object.values(parsedJson);
  const body = jsonValues.map((jsonMap: any) => jsonMap).join(';');
  return body;
};