import { useEffect, useRef, useState } from 'react'
import PropTypes from "prop-types";
const apiUrl = process.env.REACT_APP_API_URL;
const user = process.env.REACT_APP_API_USER;
const pass = process.env.REACT_APP_API_PASS;

export const useFetch = (endpoint) => {
  const isMounted = useRef(true);
  const [jsonData, setJsonData] = useState({
    loading: true,
    error: false,
    data: [],
  })

  useEffect(() => {
    return (() => (isMounted.current = false));
  }, [])

  useEffect(() => {
    if (!!endpoint && isMounted.current) {
      const url = `${apiUrl}/${endpoint}`;
      const encodeAuth = Buffer.from(`${user}:${pass}`).toString('base64');
      const headers = new Headers();
      headers.set("Authorization", `Basic ${encodeAuth}`);

      fetch(url, { headers })
        .then((resp) => {
          if (resp.status !== 200) throw resp.json();
          return resp.json();
        })
        .then((data) => {
          setJsonData({
            loading: false,
            error: false,
            data,
          })
        })
        .catch(() => {
          setJsonData({
            loading: false,
            error: true,
            data: [],
          });
        });
    }
  }, [endpoint]);

  return jsonData;
}

useFetch.propTypes = {
  endpoint: PropTypes.string.isRequired,
}
