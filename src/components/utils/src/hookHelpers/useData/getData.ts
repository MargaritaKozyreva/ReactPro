import { useState, useEffect } from 'react';
import req from '../../request';

const useData = <T>(endPoint: string, query: object, deps: any[] = []) => {

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () : Promise<void> => {
      try {
        const data = await req<T>(endPoint, query);

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