import Url from 'url';
import getUrlWithParamsConfig from './tools/getUrlWithParamsConfig';

async function req<T>(endPoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endPoint, query));

  return await fetch(uri).then((res) => res.json())

}

export default req