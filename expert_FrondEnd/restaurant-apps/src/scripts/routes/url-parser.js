const Url = {
  parseActiveWithCombiner() {
    const getUrl = window.location.hash.slice(1).toLowerCase();
    const split = this._urlSplitter(getUrl);

    return this._urlCombiner(split);
  },

  parseActiveWithoutCombiner() {
    const getUrl = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(getUrl);
  },

  _urlSplitter(url) {
    const splitUrl = url.split('/');
    return {
      resource: splitUrl[1] || null,
      id: splitUrl[2] || null,
      verb: splitUrl[3] || null,
    };
  },

  _urlCombiner(splitUrl) {
    return (
      (splitUrl.resource ? `/${splitUrl.resource}` : '/')
      + (splitUrl.id ? '/:id' : '')
      + (splitUrl.verb ? `/${splitUrl.verb}` : '')
    );
  },
};

export default Url;
