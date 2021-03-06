import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endPoint: string, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endPoint, query));

  return await fetch(uri).then((res) => res.json())

}

export default req