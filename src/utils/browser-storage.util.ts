/**
 * Create a local cache object
 */
const createStorage = ({ storage = localStorage } = {}) => {
  const Storage = class {
    private storage = storage;

    /**
     * @description set cache
     * @param { ECacheKey} key cache key
     * @param {*} value cache value
     * @param expire
     */
    set(key: ECacheKey, value: any, expire: number = 99999999999) {
      const stringData = JSON.stringify({
        value,
        expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
      });
      this.storage.setItem(key, stringData);
    }

    /**
     * read cache
     * @param { ECacheKey} key cache key
     * @param {*=} def default value
     */
    get<T = any>(key: ECacheKey, def: any = null): T {
      const item = this.storage.getItem(key);
      if (item) {
        try {
          const data = JSON.parse(item);
          const { value, expire } = data;
          // Return directly within the validity period
          if (expire === null || expire >= Date.now())
            return value;

          this.remove(key);
        } catch (e) {
          return def;
        }
      }

      return def;
    }

    /**
     * Remove an item from the cache
     * @param { string } key
     */
    remove(key: string) {
      this.storage.removeItem(key);
    }

    /**
     * Clear all caches
     * @memberOf Cache
     */
    clear(): void {
      this.storage.clear();
    }

    /**
     * set cookies
     * @param {ECacheKey} name cookie name
     * @param {*} value cookie value
     * @param {number=} expire expiration time
     * If the expiration time is set, the browser automatically deletes by default
     * @example
     */
    setCookie(name: ECacheKey, value: any, expire: number | null = DEFAULT_CACHE_TIME) {
      document.cookie = `${name}=${value}; Max-Age=${expire}`;
    }

    /**
     * Get cookie by key name
     * @param name
     */
    getCookie(name: ECacheKey): string {
      const cookieArr = document.cookie.split('; ');
      for (let i = 0, length = cookieArr.length; i < length; i++) {
        const kv = cookieArr[i].split('=');
        if (kv[0] === name)
          return kv[1];
      }

      return '';
    }

    /**
     * Delete the specified cookie by keyname
     * @param {string} key
     */
    removeCookie(key: ECacheKey) {
      document.cookie = `${key}=; Path=/; Expires=${new Date(0).toUTCString()};`;
    }

    /**
     * Empty cookies to invalidate all cookies
     */
    clearCookie(): void {
      const keys = document.cookie.split(';');
      if (keys) {
        for (let i = keys.length; i--;)
          document.cookie = `${keys[i]}=;expire=${new Date(0).toUTCString()}`;
      }
    }
  };

  return new Storage();
};

export const BrowserStorage = createStorage();
