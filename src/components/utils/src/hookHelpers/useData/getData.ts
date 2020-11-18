import { useState, useEffect } from 'react';
import req from '../../request';

const useData = (endPoint: string, query: object, deps: any[] = []) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await req(endPoint, query);

        setData(data);
      } catch (e) {
        setIsError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return { data, isLoading, isError };
};

export default useData;